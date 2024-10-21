from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy


db = SQLAlchemy()

class Destination (db.Model, SerializerMixin):
    __tablename__ = 'destinations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    country =  db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(2000))
    
    destination_attractions = db.relationship('DestinationAttraction', back_populates='destination', cascade = "all,delete-orphan")
    attractions = association_proxy ('destination_attractions.destination', '-attraction.destinations')
    
    serialize_rules = ('-destination_attractions.destination','-attractions')

  
    

    def __repr__(self):
        return f'<Destination {self.name}>'
    
    
class Attraction(db.Model,SerializerMixin):
    __tablename__ = 'attractions'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(1000))
    # destination_id = db.Column(db.Integer, db.ForeignKey('destinations.id'), nullable=False)
    destination_attractions = db.relationship('DestinationAttraction', back_populates='attraction', cascade = "all, delete-orphan")
    
    destinations = association_proxy('destination_attractions', 'destination')
    
    serialize_rules = ('-destination_attractions.attraction','-destination.attractions')

    def __repr__(self):
        return f'<Attraction {self.name}>'
    
class DestinationAttraction(db.Model,SerializerMixin):
    __tablename__ = 'destination_attractions'

    id = db.Column(db.Integer, primary_key=True)
    destination_id = db.Column(db.Integer, db.ForeignKey('destinations.id'), nullable=False)
    attraction_id = db.Column(db.Integer, db.ForeignKey('attractions.id'), nullable=False)
    rating =  db.Column(db.Float, nullable=False)
    destination = db.relationship('Destination', back_populates='destination_attractions')
    attraction = db.relationship('Attraction', back_populates='destination_attractions')
    
    serialize_rules = ('-destination.destination_attractions',-attraction.destination_attractions)

    @validates('rating')
    def validate_rating(self, key, value):
        if value < 1 or value > 5:
            raise ValueError('Rating must be between 1 and 5')
        return value

    def __repr__(self):
        return f'<DestinationAttraction {self.id}>'    
   