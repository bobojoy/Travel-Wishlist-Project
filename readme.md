# Travel Destinations API.


## Overview

This project provides a RESTful API to access a collection of travel destinations. The data is served from a local JSON file (db.json) and includes various destinations around the world with details such as name, country, notes, and image URLs.

## API Endpoints.

### **GET /destinations**
Fetches the list of all travel destinations.

### Response

[[
  {

    "id": 1,
    "name": "Maasai Mara National Reserve",
    "country": "Kenya",
    "notes": "Famous for the Great Migration and rich wildlife, including lions, elephants, and cheetahs.",
    "imageUrl": "https://images.unsplash.com/photo-1623951578056-5082d34a9859?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  ...
]]

### **POST /destinations**

Using fetch,it posts destinations to our db.json.

### Response
[[
  {

    "id": 1,
    "name": "Maasai Mara National Reserve",
    "country": "Kenya",
    "notes": "Famous for the Great Migration and rich wildlife, including lions, elephants, and cheetahs.",
    "imageUrl": "https://images.unsplash.com/photo-1623951578056-5082d34a9859?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  ...
]]


### **DELETE /destinations/ id**

Using fetch,it deletes destinations from our db.json.


### Response

[[
  {

    "id": 1,
    "name": "Maasai Mara National Reserve",
    "country": "Kenya",
    "notes": "Famous for the Great Migration and rich wildlife, including lions, elephants, and cheetahs.",
    "imageUrl": "https://images.unsplash.com/photo-1623951578056-5082d34a9859?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  ...
]]



## Data Model

- **id** : Unique identifier for the destination.
- **name** : Name of the destination.
- **country** : Country where the destination is located.
- **notes** : Additional information about the destination.
- **imageUrl** : URL of an image representing the destination.

## SetUp
### Prerequisites
1. A reliable laptop or computer with at least 8GB RAM , core i5, 500GB HDD and stable internet access.
2. A web browser capable of running JavaScript such as _Chrome_.
3. An Operating System preferably Linux or Windows 10+.
4. A text editor capable of running JavaScript such as Visual Studio Code or Sublime Text.

## Running
To run the json file,type the code below on the terminal

``` json server --watch db.json```



