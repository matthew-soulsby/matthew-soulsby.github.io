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
    content: [
        {
            type: 'image', media: '/scrabble-c++/Main-Menu', 
            section_header: 'Main Menu', 
            section_body: 'An image of the main menu, which primarily allows the user to create a new game, load a game, and configure certain extra features.'
        },
        {
            type: 'image', media: '/scrabble-c++/Scrabble-Board', 
            section_header: 'Scrabble Board', 
            section_body: "An image of the board after each player has played some moves, which displays the current turn player, their hand, each player's scores and the board state."
        },
        {
            type: 'video', media: '/scrabble-c++/Make-and-Run', 
            section_header: 'Making and Running From Scratch', 
            section_body: "A video showcasing the build process through the use of a makefile, along with starting up the program after the build is complete."
        },
        {
            type: 'video', media: '/scrabble-c++/Create-and-Start-Game', 
            section_header: 'Create and Start Game', 
            section_body: "A video showcasing the creation of a new game, involving contextual input handling (depending on the menu the user is currently in), the validation of player names and input commands, and configuring extra settings (such as coloured tiles)."
        },
        {
            type: 'video', media: '/scrabble-c++/Save-and-Load', 
            section_header: 'Saving and Loading a Game', 
            section_body: "A video showcasing the ability to save a game (storing all values necessary for game state resumption) in a text file format, along with loading a game from the provided text file."
        },
        {
            type: 'video', media: '/scrabble-c++/Word-Validation', 
            section_header: 'Word Validation', 
            section_body: "A video showcasing the validation of placed words, whereby the game performs recursive word construction (vertically and horizontally) over the placed tiles and those connected, before checking them against a provided dictonary to determine validity."
        },
    ]
}

const neighbourhood_doctors = {
    id: 2,
    title: 'Neighbourhood Doctors',
    header_image: '/flutter-doctor-aws/Homepage',
    description:'A Flutter mobile app developed in a group through GitHub, which allows for patients to book and manage appointments with doctors, manage their prescriptions, along with chatting to their doctors. It uses a Springboot backend to communicate with an SQL database, with token-based authentication and hashed passwords to ensure security. As RMIT does not permit the sharing of source code for university projects, below are some videos and images of interactions with the front-end creating change within the back-end.',
    content: [
        {
            type: 'image', media: '/flutter-doctor-aws/Homepage', 
            section_header: 'Homepage', 
            section_body: 'An image of the main menu, which allows users (whether they be patients, doctors or admins) to log in. Prospective patients may also sign up here.'
        },
        {
            type: 'video', media: '/flutter-doctor-aws/Log-In', 
            section_header: 'Running the App and Logging In', 
            section_body: "A video showcasing running the app in developer mode, with the log in process autofilling patient details as a dummy patient. The log in validates the provided password against the hashed one in the database, and if successful the patient is allowed to log in."
        },
        {
            type: 'image', media: '/flutter-doctor-aws/Logged-In', 
            section_header: 'Patient Dashboard', 
            section_body: "An image of the patient dashboard, which contains the ability for a patient to log out, manage their health status and view current and past prescriptions."
        },
        {
            type: 'video', media: '/flutter-doctor-aws/Health-Status-and-Prescriptions', 
            section_header: 'Patient Dashboard Interactions', 
            section_body: "A video showcasing the ability to interact with the patient dashboard, including editing the user's current health status, and viewing current and past prescriptions."
        },
        {
            type: 'video', media: '/flutter-doctor-aws/Appointment-Booking', 
            section_header: 'Appointment Booking', 
            section_body: "A video showcasing the ability to book appointments through the calendar interface, which retrieves availabilities on the selected day for the selected doctor from the database, before validating that the chosen appointment would not conflict with any of either the patient's or the doctor's."
        },
        {
            type: 'video', media: '/flutter-doctor-aws/Text-Chat', 
            section_header: 'Text Chat', 
            section_body: "A video showcasing the text chat functionality, whereby patients can send messages to their doctors, and doctors can send to their patients. The patient is logged out and the relevant doctor is logged in to demonstrate that the message was indeed sent and received correctly through the backend."
        },
        {
            type: 'video', media: '/flutter-doctor-aws/Doctor-View', 
            section_header: 'Doctor View', 
            section_body: "A video showcasing the doctor's dashboard, their upcoming appointments view, their patients' information view, and the text chat tab."
        },
    ]
}

Projects.push(
    loop_agile_now, 
    scrabble, 
    neighbourhood_doctors
);

export default Projects;