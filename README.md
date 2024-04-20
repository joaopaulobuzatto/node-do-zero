# Node.js and PostgreSQL CRUD Example

This is a simple example project demonstrating how to create a RESTful API with CRUD operations using Node.js and PostgreSQL.

## Requirements

Before running this project, ensure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone this repository:

git clone https://github.com/joaopaulobuzatto/node-do-zero.git

2. Install dependencies:

npm install

3. Set up the PostgreSQL database:
- Create a new database.
- Update the database configuration in `db.js`.

## Usage

1. Start the server:

npm run dev


2. Access the API endpoints using tools like cURL, Postman, or your web browser.

## API Endpoints

### Get all records

GET /videos?search=filterDescription

### Create a new record

POST /videos

Request body:
```json
{
    "title": "CRUD NodeJS",
    "description": "CRUD NodeJS - Video 01",
    "duration": 180
}
```

### Update a record

PUT /videos/:id

Request body:
```json
{
    "title": "CRUD NodeJS",
    "description": "CRUD NodeJS - Video 01 Update",
    "duration": 180
}
```

### Delete a record

DELETE /videos/:id
