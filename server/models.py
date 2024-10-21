from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password= db.Column(db.String(128))
    email = db.Column(db.String(100))
    
    bookings = db.relationship('Booking', back_populates='user')
    
    @validates('email')
    def validate_email(self, key, value):
        if '@' not in value:
            raise ValueError('@ must be a valid email address')
        return value

    def set_password(self, password,username):
        self.username = username
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

  

class Destination (db.Model, SerializerMixin):
    __tablename__ = 'destinations'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(2000))
    name = db.Column(db.String(100), nullable=False)
    country =  db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000))
    
    bookings = db.relationship('Booking', back_populates='destination')
    
    serialize_rules = ('-bookings.user',)
  
    
    
    
class Booking(db.Model,SerializerMixin):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    destination_id = db.Column(db.Integer, db.ForeignKey('destinations.id'))
    booking_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    
    user = db.relationship('User', back_populates='bookings')
    destination = db.relationship('Destination', back_populates='bookings')
    serialize_rules = ('-user.bookings', '-destination.bookings')
    
    
    
class DestinationBooking(db.Model,SerializerMixin):
    __tablename__ = 'destination_bookings'
    id = db.Column(db.Integer, primary_key=True)
    destination_id = db.Column(db.Integer, db.ForeignKey('destinations.id'))
    booking_id = db.Column(db.Integer, db.ForeignKey('bookings.id'))
    destination = db.relationship('Destination', back_populates='destination_bookings')
    booking = db.relationship('Booking', back_populates='destination_bookings')
    serialize_rules = ('-destination.destination_bookings', '-booking.destination_bookings')