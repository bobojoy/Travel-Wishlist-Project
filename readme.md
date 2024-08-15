
# Travel Destinations API

## Overview

This project provides a RESTful API to access a collection of travel destinations. The data is served from a local JSON file (db.json) and includes various destinations around the world with details such as name, country, notes, and image URLs.

## API Endpoints

### *GET /destinations*
Fetches the list of all travel destinations.

### *POST /destinations*
Adds a new destination to the database.

### *DELETE /destinations/:id*
Deletes a destination from the database by ID.

### *Data Model*

- *id*: Unique identifier for the destination.
- *name*: Name of the destination.
- *country*: Country where the destination is located.
- *notes*: Additional information about the destination.
- *imageUrl*: URL of an image representing the destination.

## Setup

### Prerequisites

1. A reliable laptop or computer with at least 8GB RAM, core i5, 500GB HDD, and stable internet access.
2. A web browser capable of running JavaScript, such as Chrome.
3. An Operating System, preferably Linux or Windows 10+.
4. A text editor capable of running JavaScript, such as Visual Studio Code or Sublime Text.

### Running

To run the json server, type the following command in the terminal:

```bash
json-server --watch db.json

