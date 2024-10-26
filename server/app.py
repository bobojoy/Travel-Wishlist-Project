from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# from werkzeug.security import check_password_hash
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()


# App setup
app = Flask(__name__)  # Fixed typo: _name_ -> __name__
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

from models import User, Destination, Booking, bcrypt, db
db.init_app(app)
bcrypt.init_app(app)
# Database, Migrations, and API setup
# db = SQLAlchemy(app)
migrate = Migrate(app, db)
api = Api(app)
jwt = JWTManager(app)

# Import models


# User Registration Resource
class UserRegister(Resource):
    def post(self):
        data = request.get_json() if request.is_json else request.form
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return {"error": "Username, email, and password are required"}, 400

        if User.query.filter_by(email=email).first():
            return {"error": "User with this email already exists"}, 400

        new_user = User(username=username, email=email)
        new_user.set_password(password)  # Ensure User model has this method
        db.session.add(new_user)
        db.session.commit()

        return {"message": "User registered successfully"}, 201

# User Login Resource
class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):  # Ensure User model has this method
            access_token = create_access_token(identity=user.id)
            return {"access_token": access_token}, 200
        return {"error": "Invalid email or password"}, 401

# Destination CRUD Resource
class DestinationResource(Resource):
    @jwt_required()
    def get(self, destination_id=None):
        if destination_id:
            destination = Destination.query.get(destination_id)
            if not destination:
                return {"error": "Destination not found"}, 404
            return destination.to_dict(), 200
        destinations = Destination.query.all()
        return [d.to_dict() for d in destinations], 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        new_destination = Destination(
            name=data['name'],
            country=data['country'],
            description=data['description'],
            image_url=data['image_url']
        )
        db.session.add(new_destination)
        db.session.commit()
        return new_destination.to_dict(), 201

    @jwt_required()
    def put(self, destination_id):
        destination = Destination.query.get(destination_id)
        if not destination:
            return {"error": "Destination not found"}, 404

        data = request.get_json()
        destination.name = data.get('name', destination.name)
        destination.country = data.get('country', destination.country)
        destination.description = data.get('description', destination.description)
        destination.image_url = data.get('image_url', destination.image_url)

        db.session.commit()
        return destination.to_dict(), 200

    @jwt_required()
    def delete(self, destination_id):
        destination = Destination.query.get(destination_id)
        if not destination:
            return {"error": "Destination not found"}, 404

        db.session.delete(destination)
        db.session.commit()
        return {"message": "Destination deleted successfully"}, 200

# Booking CRUD Resource
class BookingResource(Resource):
    @jwt_required()
    def get(self, booking_id=None):
        if booking_id:
            booking = Booking.query.get(booking_id)
            if not booking:
                return {"error": "Booking not found"}, 404
            return booking.to_dict(), 200
        bookings = Booking.query.all()
        return [b.to_dict() for b in bookings], 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        new_booking = Booking(
            user_id=get_jwt_identity(),
            destination_id=data['destination_id']
        )
        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict(), 201

    @jwt_required()
    def delete(self, booking_id):
        booking = Booking.query.get(booking_id)
        if not booking:
            return {"error": "Booking not found"}, 404

        db.session.delete(booking)
        db.session.commit()
        return {"message": "Booking deleted"}, 200

# Register resources with the API
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(DestinationResource, '/destinations', '/destinations/<int:destination_id>')
api.add_resource(BookingResource, '/bookings', '/bookings/<int:booking_id>')

# Run the app
if __name__ == "__main__":  # Fixed typo: _name_ -> __name__
    app.run(debug=True)
