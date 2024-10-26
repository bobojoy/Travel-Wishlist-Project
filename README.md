# Travel Wishlist Project

## Description
The Travel Wishlist Project is an application that allows users to create and manage their travel wishlists. Users can add destinations, track their travel experiences, and share their lists with friends. This project features a Flask API for the backend and a React frontend for testing the API.


You can check your API functionality through one of the following methods:

1. **Using Postman**
   - The file `Travel Wishlist Project.postman_collection.json` contains a collection of requests to test each route you will implement.
   - Import the Postman collection into Postman and run the requests to verify that your API behaves as expected.

2. **Running Tests with Pytest**
   - The project includes tests that can be run using pytest. To execute the tests, run the following command in your terminal:
     ```bash
     pytest -x


     ```
   - This will run all the tests and stop at the first failure, providing feedback on your API functionality.

3. **Using the React Frontend**
   - You can also run the React application and interact with the API through the frontend.
   - Start the React app as described in the **Usage** section. This allows you to test the API in a more user-friendly manner.
   - Navigate to `http://localhost:3000` in your browser to access the frontend and interact with the API.
## Setup

Before starting, ensure you are in the project directory. If you're using a code editor, navigate to the `Travel-Wishlist-Project` folder (or your specific project folder).

### Download Dependencies

To download the dependencies for both the frontend and backend, run the following commands in your terminal:

1. Install backend dependencies:
   ```bash
   pipenv install
   pipenv shell

Install Frontend Dependencies: Navigate to the client directory and run:
npm install
Running the Application
You can run your Flask API and React app using the following commands:

Run the Flask API on localhost:5555:

python server/app.py

Run the React App on localhost:4000: Navigate to the client directory and run:

npm start

 ## models
 ## Database Setup

### Step 1: Create Initial Database

First, set up the initial database by running the following commands in your terminal:

```bash
export FLASK_APP=server/app.py
flask db init
flask db upgrade head
Step 2: Define Model Relationships
In the file server/models.py, implement the relationships for the Travel Wishlist Project:

A Travel Wishlist can have many Destinations.
Each Destination can be associated with multiple Users.

Run the migrations and seed the database:
flask db migrate -m "Initial migration." 
flask db upgrade head
python server/seed.py

Validations
User Input Validations
Validations are crucial for ensuring data integrity and user experience. Implement the following validations for your models:

Title:
Required, non-empty string, maximum length of 100 characters.

Routes

Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

