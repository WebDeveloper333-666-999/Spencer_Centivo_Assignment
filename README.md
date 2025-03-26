# Spencer Balog's Centivo_Assignment
This Express.js API connects to a MongoDB database and exposes a `/users/:id` GET endpoint. It returns a user if their ID is valid and their age is greater than 21. Invalid ObjectId formats and missing users are handled gracefully.

Tech Stack: Node.js, Express.js, MongoDB, Mongoose  
Bonus: Invalid ObjectId handling, clean architecture, modular structure

# Node.js + MongoDB User API

## Overview
This simple API allows you to retrieve user data from a MongoDB database. It includes:
- A single GET endpoint: `/users/:id`
- Only returns users with `age > 21`
- Handles invalid ObjectIds and user-not-found cases gracefully

## Setup
1. Install dependencies:
```bash
npm install
```
2. Set up your environment variables in `.env` (see `.env.example`).
3. Seed the database with sample users using the seed script.
4. Run the server:
```bash
node server.js
```

## Author
### Spencer Balog – Built with ❤️ for Centivo