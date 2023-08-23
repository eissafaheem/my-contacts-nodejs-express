# Node.js & Express Contact Manager Backend Learning Project
Welcome to my learning project focused on building a contact manager backend application using Node.js, Express, MongoDB, and JWT authentication. This repository showcases my journey of learning and implementing various concepts within the realm of backend development.

## Project Setup
Creating an Express server as the foundation of the application.
Configuring Thunder Client to test API endpoints efficiently.
Structuring the project for building a contact management app.
## Express Basics
Setting up Express routers to manage API routes effectively.
Implementing CRUD operations (Create, Read, Update, Delete) for contacts.
Handling diverse HTTP methods within a single route.
Utilizing built-in middleware to process data from POST requests.
Managing errors effectively using throwing errors and error-handling middleware.
Incorporating async handlers to manage asynchronous operations within route handlers.
## MongoDB Integration
Setting up and establishing a connection between the Express application and a MongoDB database.
Defining Mongoose schemas to model contacts and users.
Performing CRUD operations on contacts using Mongoose methods.
## User Authentication
Creating dedicated routes and controllers for user registration and login.
Applying password hashing techniques to enhance security.
Generating JSON Web Tokens (JWT) for managing user sessions.
## Protecting Routes
Implementing JWT token verification middleware to secure routes.
Ensuring access control and protecting routes specific to users.
## Handling Relationships
Establishing relationships between user and contact schemas.
Developing routes and controllers to support user-specific contact operations

# How to Use This Repository
1. Clone this repository to your local machine.
2. Install the dependencies using your preferred package manager (npm or yarn), perform npm install.
3. Set up a MongoDB instance to work alongside the application.
4. Configure the necessary environment variables. The required .env variables are:
   4.1 PORT (for listening to port)
   4.2 CONNECTION_STRING (for mongodb connection)
   4.3 ACCESS_TOKEN_SECRET (for jwt access token)
6. Start the Express server to interact with the APIs.
7. Utilize Thunder Client, Postman or similar tools to test the API endpoints and observe the outcomes of various operations.
