# Project 3 Backend - JobPug - JobPug is here to help you keep track of jobs you've applied and would like to apply to

![JobPug logo](jobpug_logo_white_background_.png "JobPug")


Heroku Deploy Link:



### Technologies used
1. React
2. Sass
3. Mongoose
4. MongoDB
5. express
6. Heroku
7. Netlify
8. EJS
9. Heroku
10. sass, react-router


### Features
1. User Authentication. Creating Accounts and Logging in and Logging out.
2. Full CRUD functionality. Create Jobs that have been applied to, Read Job details and information, Update and edit Jobs/Application Status, Delete Jobs.



## Dependencies
1. Cors, bcrypt, dotenv, express, mongoose, morgan

## Model
1. Job Schema 
{
    company: String,
    position: String,
    location: String,
    salary: Number,
    url: String
}

## Routes
1. GET "/" - Index route - Index of all Jobs
2. GET "/jobs/:id" - Show specific job
3. POST "/" - Add new jobs to the index - FUNCTION TO BE IMPLEMENTED IN REACT WITH REACT ROUTER
4. PUT "/jobs/:id" - Update details of a specific job - FUNCTION TO BE IMPLEMENTED IN REACT WITH REACT ROUTER
5. DELETE "/jobs/:id" - Delete one specific job - FUNCTION TO BE IMPLEMENTED IN REACT WITH REACT ROUTER



## Stretch Goals 
1. Would like to connect to an API to view live Job posts 
2. Implement a search bar somewhere in the app