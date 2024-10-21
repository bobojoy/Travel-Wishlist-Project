from models import db, Destination, Attraction, DestinationAttraction
from flask_migrate import Migrate
from flask import Flask, request, jsonify 
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'travel.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def index():
    return '<h1>Travel App</h1>'

@app.route('/destinations', methods=['GET'])
def get_destinations():
    destinations = Destination.query.all()
    return jsonify([d.to_dict(only=("id", "name", "country", "image_url")) for d in destinations]), 200

@app.route('/destinations/<int:id>', methods=['GET'])
def get_destination(id):
    destination = Destination.query.get(id)
    if destination:
        return jsonify(destination.to_dict()), 200
    else:
        return jsonify({"error": "Destination not found"}), 404
    
@app.route('/destinations/<int:id>', methods=['DELETE'])
def delete_destination(id):
    destination = Destination.query.get(id)
    if destination:
        db.session.delete(destination)
        db.session.commit()
        return jsonify({"message": "Destination deleted successfully"}), 200
    else:
        return jsonify({"error": "Destination not found"}), 404
    
@app.route('/attractions', methods=['POST'])
def create_attraction():
    data = request.get_json()
    try:
        new_attraction = Attraction(description=data['description'])
        db.session.add(new_attraction)
        db.session.commit()
        return jsonify(new_attraction.to_dict()), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
@app.route('/destination_attractions', methods=['POST'])
def link_destination_attraction():
    data = request.get_json()
    try:
        new_link = DestinationAttraction(
            destination_id=data['destination_id'],
            attraction_id=data['attraction_id']
        )
        db.session.add(new_link)
        db.session.commit()
        return jsonify(new_link.to_dict()), 201
    except Exception as e:
        return jsonify({"error": "Validation error"}), 400
@app.route('/destinations/<int:destination_id>/attractions', methods=['GET'])
def get_attractions_for_destination(destination_id):
    destination = db.session.get(Destination, destination_id)
    if destination:
        attractions = [link.attraction.to_dict() for link in destination.destination_attractions]
        return jsonify(attractions), 200
    return jsonify({"error": "Destination not found"}), 404


if __name__ == '__main__':
    app.run(port=5555, debug=True)