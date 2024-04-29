# Airmoya Todo List App Documentation

Welcome to the documentation for Airmoya Todo List application built using Next.js! You can checkout the deployed app using [this link.](https://airmoya-todo-list.vercel.app/)

## Overview 
Airmoya Todo List app allows users to manage their tasks efficiently. It provides features to add, edit, delete, and mark tasks as completed. 

## Table of Contents  
- [Getting Started](#getting-started) 
- [Features](#features) 
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
