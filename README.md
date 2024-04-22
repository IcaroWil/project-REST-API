# REST API Project in TypeScript, MongoDB Atlas, Node.js, and Express with Authentication

This project is an example of a REST API built with TypeScript, Node.js, Express, and MongoDB Atlas, featuring authentication functionalities.

## Index

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Technologies Used](#technologies-used)
- [References](#references)
- [Contributions](#contributions)

## Installation

To install the project, follow the steps below:

1. Clone the repository to your local environment:
    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-project
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

## Configuration

Before starting the project, you need to configure some environment variables:

- `MONGO_URL`: The connection URL to MongoDB Atlas.
- Other configuration details such as ports and authentication keys may be added as needed.

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start on port 8080 by default. You can change the port in the `src/index.ts` file as needed.

## Project Structure

The project follows the following directory structure:

- `src/`: Contains all the project's source code.
    - `controllers/`: Controllers for the API routes.
    - `db/`: Interaction with the MongoDB Atlas database.
    - `helpers/`: Helper functions used in the project.
    - `middlewares/`: Middlewares for authentication and authorization.
    - `router/`: Configuration of the API routes.
    - `index.ts`: Server entry file.
- `package.json`: Project dependency management.
- `tsconfig.json`: TypeScript configurations.

## API

The available routes in the API include:

- `POST /auth/register`: Route for registering new users.
- `POST /auth/login`: Route for authenticating users.
- `GET /users`: Route to list all users (requires authentication).
- `DELETE /users/:id`: Route to delete a specific user (requires authentication and permission).
- `PATCH /users/:id`: Route to update information of a specific user (requires authentication and permission).

## Technologies Used

- **TypeScript**: Programming language to write more secure and organized code.
- **Node.js**: Platform for running JavaScript code on the server.
- **Express**: Framework for creating RESTful APIs in a simple and efficient manner.
- **MongoDB Atlas**: Cloud-based database service.
- **Mongoose**: Library for modeling data with MongoDB.
- **bcrypt**: Library for password hashing and security verification.

## References

- Author [Code With Antonio](https://www.codewithantonio.com/projects/rest-api).

## Contributions

Contributions are welcome! If you wish to contribute, please follow the instructions in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
