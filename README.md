# Authentication Application

## Project Description

In my journey to become a Fullstack Web Developer. I've developed this simple user authentication application. This project leverages the MERN stack (see full list of technologies used below). It also incorporates Material UI components library for its user interface design, and PassportJS as a comprehensive authentication middleware. This application is a demonstration of implementing essential web application features such as : user authentication, session management and secure access controls.

## Learning Outcome

Building this project enhanced my understanding and skills in several key areas :

- **HTTP Headers and Cookies :** Learned to debug HTTP headers using the network tab, familiarized with HTTP status codes, and understood the use of cookies for session storage.
- **Cookies vs. Sessions :** Differentiate between cookies (stored in the browser) and sessions (stored server-side)
- **Middleware in Express :** Acquired good grasp on the exection flow, and the distinction between route-specific and global middleware, including error handling in Express applications.
- **User Authentication Strategies :**
  - Learned local strategy authentication using cookies and sessions
  - Explored JWT Strategy for stateless authentication and its benfits in scalable applications.
  - Implemented password storage and verification using hashing and salting
  - Understood the sructure of JWTs and the application of asymmetric cryptography in JWT issuance and verification
  - Integrated frontend and backend via RESTful API for JWT authentication and authorization.

## Built with

This project was built using the MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) and uses the following technologies :

- **Material UI :** For aesthetic user interface design
- **PassportJS :** For implementing Local and JWT authentication strategies
- **bcrypt:** For generating a salt and hash for passwords
- **jsonwebtoken :** For issuance and verification of JWTs
- **cors :** For enabling CORS (Cross Origin Ressource Sharing)
-

## Installation

To get this project up and running on your local machine, follow these steps. You'll need to have Node.js installed and set up a MongoDB database before you can start the server and client.

### Prerequisites

#### <u>_Install Node.js_</u>

Ensure Node.js is installed on your system. You can downlaod it from [the official Node.js website](https://nodejs.org/en/download/package-manager). To check if Node.js is installed, run the following command in tour terminal :

```bash
node -v
```

This should display the version of Node.js if installed

#### <u>_MongoDB Setup_</u>

1. Visit [MongoDB](https://www.mongodb.com/) an sign up or log in.
2. Create a new project, and then create a new cluster within that project
3. Create a database user and make sure to save the username and password (you will need them for configurating .env file later on) also don't forget to include your IP address to the IP access list.
4. Create a databse for development purposes called 'test', and a second one for production.

### Clone the Repository

Clone the project repository using the following command :

```bash
git clone <github-repository-url>
```

### Server-Side Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies :

```bash
npm install
```

Create a <kbd>.env</kbd> file in the root of the <kbd>backend</kbd> directory and configure it as follows :

```plaintext
NODE_ENV = <"prod" : for production environment or "dev": for development environment>
SECRET = <your secret key to secure the express js session>
DB_USERNAME = <MongoDB username>
DB_PASSWORD = <MongoDB password>
PRODUCTION_DB_NAME = <production database name you created earlier>
CLIENT = <client side url>
PORT= <express app running port>
```

Generate a Private/Public key pairs for JWT issuance and verification via the following command :

```bash
cd utils && node keysGenerator.js
```

Make sure that two <kbd>.pem</kbd> files named <kbd>rsa_key_prv.pem</kbd> and <kbd>rsa_key_pub.pem</kbd> were created in the root folder.

Start the server :

```bash
npm run serverstart
```

### Client-Side Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install necessary dependencies:

```bash
npm install
```

Create a <kbd>.env</kbd> file in the root of the <kbd>frontend</kbd> directory and configure it as follows :

```plaintext
VITE_SERVER= <express server url>
```

Start the development server:

```bash
npm run dev
```

Your application should now be running with the backend on **`http://localhost:<PORT>`** and the frontend accessible through your web browser on **`http://localhost:5173`** (Vite default port)
