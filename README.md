# Magic Task App

Magic Task is a task management web application built using Next.js. Below you will find instructions on how to set up and run the app locally.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js (version 14 or later)
- npm or yarn

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/magic-task.git
   ```

# Task List Component

This component is designed to display a list of tasks. Each task is represented with its priority level, title, description, due date, creation date, and status. The component also provides functionality for deleting tasks.

## Components Used

- **StatusDisplay**: Component to display the status of a task.
- **PriorityDisplay**: Component to display the priority level of a task.
- **DeleteBlock**: Component for deleting a task.
- **Link**: Component from Next.js for routing.

## TaskList Component

The `TaskList` component is responsible for rendering the list of tasks. It takes a `task` object as a prop, which contains details of the task to be displayed. It formats the creation date of the task and renders each task in a table format with checkboxes for selection, priority level, title, description, due date, creation date, status, and a delete button.

## StatusDisplay Component

The `StatusDisplay` component is used to display the status of a task. It receives the status of the task as a prop and dynamically sets the background color based on the status. The status can be one of "Done", "Started", or "Not Started".

## PriorityDisplay Component

The `PriorityDisplay` component is used to display the priority level of a task. It receives the priority level of the task as a prop and displays circles representing the priority level. The color of the circles changes based on the priority level.

## API Routes

The code includes API routes for performing CRUD operations on tasks:

- **GET /api/task/:id**: Retrieves a specific task by its ID.
- **PUT /api/task/:id**: Updates an existing task with new data.
- **DELETE /api/task/:id**: Deletes a task.
- **GET /api/tasks**: Retrieves all tasks.
- **POST /api/tasks**: Creates a new task.

## MongoDB Task Model

The `Task` model is defined using Mongoose for MongoDB. It defines the schema for tasks, including fields like title, description, category, priority, status, active, and dueDate. It also includes timestamps for creation and updating.

## Task Page

The `TaskPage` component is responsible for displaying the form to edit or create a task. It fetches task data based on the provided ID and passes it to the `EditTaskForm` component.
