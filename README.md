# Favorites App

The Favorites App is a small project that combines a React JS frontend with a NodeJS backend to create a simple application for managing and displaying a list of favorite meetups. This improved readme will guide you through the installation and running of the application and provide an overview of its client-side features.

## Installation and Running the Application

To get the Favorites App up and running on your local machine, follow these steps:

### Client (Frontend)

1. Navigate to the client directory using your terminal:

   ```
   cd client
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the client-side application:

   ```
   npm run start
   ```

   The app will be served on `localhost:3000`.

### Server (Backend)

1. Navigate to the server directory in your terminal:

   ```
   cd server
   ```

2. To run the server, you can use [bun](https://www.npmjs.com/package/bun) or [nodemon](https://www.npmjs.com/package/nodemon). Here's how to run it with bun:

   ```
   bun --watch /src/app.js
   ```

   Alternatively, you can use nodemon:

   ```
   nodemon /src/app.js
   ```

   This will start the NodeJS server for the backend of the application.

## Client Side

The client-side of the Favorites App provides several features accessible through different routes:

- **Home/Meetups List**: You can view the list of meetups by visiting either `localhost:3000` or `localhost:3000/meetups`.

- **Get a Meetup**: To view details of a specific meetup, use the route `localhost:3000/meetups/1`, where "1" is the ID of the meetup you want to see. Replace "1" with the desired meetup ID.

- **Add a New Meetup**: You can add a new meetup to the list by navigating to `localhost:3000/new-meetup`. This route allows you to input the details of the new meetup and save it.

All data in the application is stored in a `data.json` file.

This readme should help you get started with the Favorites App.