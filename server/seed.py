from app import app, db
from models import User, Destination, Booking, DestinationBooking
from faker import Faker
from datetime import datetime

# Initialize Faker to generate fake data
fake = Faker()

def create_users():
    """Creates random users."""
    users = []
    for _ in range(10):  # Create 10 fake users
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password()
        )
        users.append(user)
    db.session.add_all(users)
    db.session.commit()

def create_destinations():
    """Creates random destinations."""
    destinations = []
    for _ in range(5):  # Create 5 fake destinations
        destination = Destination(
            name=fake.city(),
            country=fake.country(),
            description=fake.paragraph(),
            image_url=fake.image_url()
        )
        destinations.append(destination)
    db.session.add_all(destinations)
    db.session.commit()

def create_bookings():
    """Creates random bookings for users and destinations."""
    bookings = []
    users = User.query.all()
    destinations = Destination.query.all()

    for _ in range(15):  # Create 15 fake bookings
        booking = Booking(
            user_id=fake.random_element(users).id,
            destination_id=fake.random_element(destinations).id,
            booking_date=fake.date_this_year()
        )
        bookings.append(booking)
    db.session.add_all(bookings)
    db.session.commit()

def create_destination_bookings():
    """Creates many-to-many relationship entries in DestinationBooking."""
    destination_bookings = []
    bookings = Booking.query.all()
    destinations = Destination.query.all()

    for booking in bookings:
        destination = fake.random_element(destinations)
        destination_booking = DestinationBooking(
            booking_id=booking.id,
            destination_id=destination.id
        )
        destination_bookings.append(destination_booking)
    db.session.add_all(destination_bookings)
    db.session.commit()

def run_seed():
    """Run all seeding functions inside Flask app context."""
    with app.app_context():
        create_users()
        create_destinations()
        create_bookings()
        create_destination_bookings()

        print("Seeding completed.")

if __name__ == "__main__":
    run_seed()
