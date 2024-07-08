Setup

1. Clone the repository: `git clone ([link unavailable](https://github.com/Safi198/1st-Assignment-Social-Swirl-Backend.git))
2. Install dependencies: npm install express, nodemon
3. Start the server: npm start, nodemon

Testing

1. Use Thunder client tool to test the API endpoints
2. Send requests to http://localhost:3000

Available Endpoints

- GET /users: Retrieves a list of all users
- POST /users: Creates a new user
- GET /users/:id: Retrieves a single user by ID
- PUT /users/:id: Updates a single user by ID
- DELETE /users/:id: Deletes a single user by ID

Request Body

- POST /users:
    - name (required)
    - email (required)
    - password (required)
- PUT /users/:id:
    - name (required)
    - email (required)
    - password (required)
Response

- 200: Success
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error
