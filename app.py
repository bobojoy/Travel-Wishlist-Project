from models import db, Destination, Attraction, DestinationAttraction
from flask_migrate import Migrate
from flask import Flask, request, jsonify, make_response
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
    return jsonify([d.to_dict(only=("id", "name", "country")) for d in destinations]), 200

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
   
