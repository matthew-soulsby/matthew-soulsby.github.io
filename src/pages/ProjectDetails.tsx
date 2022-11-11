import { Project } from "../classes/ProjectType";

const Projects: Array<Project> = []

const loop_agile_now: Project = {
    id: 0,
    title: 'Loop Agile Now',
    header_image: '/react-forum/Home-Page',
    description: 'A React-based forum web application, using an express + sequelize backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security. As RMIT does not permit the sharing of source code for university projects, below are some videos and images of interactions with the front-end creating change within the back-end.',
    content: [
        {
            type: 'video', media: '/react-forum/Overview', 
            section_header: 'Overview', 
            section_body: 'A video showcasing an overview of the Loop Agile Now forum, whereby post, profile and other such data is retrieved from the database through the back-end, to then populate the front-end.'
        },
        {
            type: 'video', media: '/react-forum/Sign-Up-and-Log-In', 
            section_header: 'Sign Up and Log In', 
            section_body: 'A video showcasing sign up and log in features, along with the associated changes within the database. Upon either action being successful, the backend returns a JWT token unique to that user. Any actions that the user takes which would access/manipulate sensitive information is first authenticated with this token, to determine that the user has a valid token and that the user attempting any given operation is the appropriate one.'
        },
        {
            type: 'image', media: '/react-forum/Post-Page', 
            section_header: 'Forum Page', 
            section_body: 'An image of the forum page when a user is not signed in, where one can view posts and replies, but cannot make or react to posts.'
        },
        {
            type: 'video', media: '/react-forum/Post-Functions', 
            section_header: 'Posting Functionality', 
            section_body: 'A video showcasing posting functionality, both with regards to creating a new post and creating a threaded reply to a post, along with the changes in the database.'
        },
        {
            type: 'video', media: '/react-forum/Edit-and-Delete-Post', 
            section_header: 'Editing and Deleting Posts', 
            section_body: 'A video showcasing how the owner of a post may edit and delete said post.'
        },
        {
            type: 'video', media: '/react-forum/Follow-User', 
            section_header: 'Following Users', 
            section_body: "A video showcasing how a user may follow and unfollow users. Following a user then grants the ability to view that user's posts."
        },
    ]
}

const scrabble: Project = {
    id: 1,
    title: 'C++ Scrabble',
    header_image: '/scrabble-c++/Scrabble-Board',
    description: "A multiplayer game of Scrabble developed in a group through GitHub, run in the terminal, written in C++, complete with dictionary checking and other forms of input validation, along with recursive word scoring. As RMIT does not permit the sharing of source code for university projects, below are some videos and images of the game's functionality.",
    content: []
}

const neighbourhood_doctors = {
    id: 2,
    title: 'Neighbourhood Doctors',
    header_image: '/flutter-doctor-aws/Homepage',
    description:'A Flutter mobile app developed in a group through GitHub, using a Springboot backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security. As RMIT does not permit the sharing of source code for university projects, below are some videos and images of interactions with the front-end creating change within the back-end.',
    content: []
}

Projects.push(
    loop_agile_now, 
    scrabble, 
    neighbourhood_doctors
);

export default Projects;