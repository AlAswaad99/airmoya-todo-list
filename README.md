# Airmoya Todo List App Documentation

Welcome to the documentation for Airmoya Todo List application built using Next.js! You can checkout the deployed app using [this link.](https://airmoya-todo-list.vercel.app/)

## Overview 
Airmoya Todo List app allows users to manage their tasks efficiently. It provides features to add, edit, delete, and mark tasks as completed. 
![Screenshot 1](https://raw.githubusercontent.com/AlAswaad99/airmoya-todo-list/main/screenshots/Screenshot%202024-04-29%20114830.png)
![Screenshot 2](https://raw.githubusercontent.com/AlAswaad99/airmoya-todo-list/main/screenshots/Screenshot%202024-04-29%20114851.png)
![Screenshot 3](https://raw.githubusercontent.com/AlAswaad99/airmoya-todo-list/main/screenshots/Screenshot%202024-04-29%20114919.png)


## Table of Contents  
- [Getting Started](#getting-started) 
- [Features](#features)
- [Architectural Overview](#architectural-overview) 
- [Folder Structure](#folder-structure) 
- [Dependencies](#dependencies) 
- [Deployment](#deployment) 
- [Usage Guide](#usage-guide) 
- [Additional Notes](#additional-notes) 
- [Future Features](#future-features)

## Getting Started 
To get started with the Todo List app, follow these steps:

1. Clone the repository from GitHub:
   `https://github.com/AlAswaad99/airmoya-todo-list.git `
   
2.  Navigate to the project directory:
       `cd airmoya-todo-list` 
    
3.  Install dependencies:
     `npm install`  or `yarn install` 
    
4.  Start the development server:
    `npm run dev` or `yarn run dev`

5. Open your browser and visit `http://localhost:3000` to view the app.



## Architectural Overview

Airmoya Todo List application, built using Next.js and MongoDB, follows a clear path for handling requests and responses. Below is an architectural overview outlining the flow of data through the application:

### Frontend to Backend Communication

1. **User Interaction:** 
   - Users interact with the frontend interface, where they can view, add, edit, delete, and mark todos as completed/in-progress.
   - These interactions trigger HTTP requests to the backend API endpoints.

2. **API Requests:** 
   - When a user performs an action (e.g., adding a todo), the frontend sends an HTTP request to the appropriate API endpoint.
   - The request contains relevant data, such as the todo title, description, and action type.

3. **Backend Routing:**
   - Next.js API routes handle incoming requests based on their endpoints.
   - Each API route corresponds to a specific CRUD operation (e.g., GET /api/todos, POST /api/todos).

4. **Request Processing:**
   - Upon receiving a request, the backend processes the data and performs the necessary operations (e.g., database CRUD operations for todos).

### Backend to Database Interaction

1. **Data Manipulation:**
   - Backend API routes interact with the MongoDB database to perform CRUD operations on todos.
   - For example, when adding a new todo, the backend inserts the todo data into the MongoDB collection.

2. **Database Queries:**
   - MongoDB queries are executed to retrieve, update, delete, or insert todo data based on the request received from the frontend.

3. **Data Validation and Error Handling:**
   - Before executing database operations, the backend validates the request data to ensure it meets the required criteria.
   - Error handling mechanisms are implemented to handle exceptions and provide appropriate responses in case of errors.

### Response Flow

1. **Database Response:**
   - After performing CRUD operations, the backend receives responses from the database indicating the success or failure of the operation.

2. **Response Formatting:**
   - The backend formats the database responses into structured JSON objects to send back to the frontend.
   - Responses include data payloads containing todos, success messages, error messages, or status codes.

3. **Frontend Handling:**
   - The frontend receives the HTTP response from the backend and processes the data accordingly.
   - Depending on the response, the frontend updates the user interface to reflect the changes or displays error messages to the user.

The following diagram illustrates the flow of data from the frontend -> backend -> DB and then back.

![Screenshot 4](https://raw.githubusercontent.com/AlAswaad99/airmoya-todo-list/main/screenshots/Screenshot%202024-04-29%20163038.png)

## Features
Airmoya Todo List app comes with the following features:

- **Adding Tasks:** Users can add new tasks with a title and description.
- **Editing Tasks:** Users can edit existing tasks to update the title or description.
- **Deleting Tasks:** Users can delete tasks they no longer need.
- **Marking Tasks as In-Progress/Completed:** Users can mark tasks as in-progress/completed, which visually distinguishes them from other tasks.
- **Filtering by Task Status:** Users can filter tasks based on their status (e.g., All, Todo, Completed, In-Progress).
- **Searching Tasks:** Users can search for tasks by title or description.
- **View Dashboard:** Users can view the built-in dashboard to get general information of theri tasks


## Folder Structure

Our project follows a structured folder organization for better maintainability:
```
airmoya-todo-list/
	├── app/          # Next.js pages and layouts
		├── api/      		# Next.js api folder (for communicating with backend)
	├── components/   # Generated components
		├── dashbaord/      # Dashboard components
		├── todos/     		# Todo-List components
		├── ui/     		# Block UI components
	├── hooks/          # Zustand store and hooks
	├── lib/          	# Utility functions (for managing tailwind classes)
	├── models/         # Mongoose model schemas
	├── types/      	# interface types
	├── utils/      	# configuration function (for DB connection)
	├── public/         # Static assets
	└── README.md       # Project documentation
...
```

## Dependencies

Airmoya Todo List app relies on different dependencies (refer to `package.json` file for full list) and the following main dependencies:

-   **Next.js:** A React framework for building server-rendered applications.
-   **Zustand:** A lightweight state management library for React.
-   **Axios:** A promise-based HTTP client for making requests to the server.
-   **Mongoose:** An Object Data Modeling (ODM) library for MongoDB.
-   **Tailwind CSS:** A utility-first CSS framework for styling the user interface.
-  **TypeScript:** A statically typed superset of JavaScript that enhances code maintainability and scalability.

## Deployment

To create a production-ready build for the Todo List app, follow these steps:

1.  Build the project:
    `npm run build` 
    
2.  Start the production server:
    `npm start` 
    
3.  Your app will be running on the specified port (default is 3000).

Note: For detailed instructions on deploying Next.js apps to Vercel, refer to [Vercel's deployment documentation.](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app)

## Usage Guide

Here's how users can interact with the Todo List app:

1.  **Adding a Task:**
    -   Click on the "Add Todo" button.
    -   Enter the title and description of the task.
    -   Click on the "Create" button.

2.  **Editing a Task:**
    -   Click on the "Pencil icon" of the task you want to edit.
    -   Update the title or description.
    -   Click on the "Update" button.

3.  **Deleting a Task:**
    -   Click on the "Trash Icon" of the task you want to delete.
    -   An Alert Dialog will pop-up. Click on the "Delete" button to delete the task.

4.  **Marking a Task as Completed/In-Progress:**
    -   Click on the "Timer Icon" next to the task to mark a task as `In-Progress`.
    -   Click on the "Check Icon" next to the task to mark a task as `Completed`.
    -   Clicking second-time on a toggled icon will revert the task to `Todo` status.

5.  **Filtering Tasks:**
    -   Use the filter dropdown to select the desired status (All, Todo, Completed, In Progress).

6.  **Searching Tasks:**
    -   Use the search bar to enter keywords related to the task title or description.

## Additional Notes

-   Airmoya Todo List app is responsive and optimized for various screen sizes.
-   Error handling is implemented to provide a smooth user experience.
-   Feel free to explore and customize the app according to your requirements!

## Future Features

Here are some features considered to be added to Airmoya Todo List in future updates:
- **User Authentication:** Implement user authentication to allow users to sign up, log in, and manage their tasks securely.
- **Multiple Lists:** Enable users to create and manage multiple todo lists for different projects or categories.
- **Priority Levels:** Introduce priority levels for tasks to help users prioritize their work effectively.
- **Due Dates:** Allow users to set due dates for tasks and receive reminders to complete them on time.
- **Collaboration:** Add collaboration features to enable users to share and collaborate on tasks with team members or collaborators.
- **Integration with External Services:** Integrate with external services such as Google Calendar or Slack to enhance productivity and communication.
- **Customizable Themes:** Provide users with options to customize the app's theme and appearance according to their preferences.
- **Mobile App:** Develop a mobile app version of the Todo List app for on-the-go task management.

Thank you for choosing Airmoya Todo List app. Happy task managing!
