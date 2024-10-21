#!/usr/bin/env python3

from app import app
from models import db, Destination, Attraction,DestinationAtraction  

if __name__ == '__main__':
    with app.app_context():
        
        db.create_all()
        import ipdb; ipdb.set_trace()
