import Project from "../classes/ProjectClass";

const Projects: Array<Project> = []

Projects.push(new Project(
    1,
    'Loop Agile Now',
    '/react-forum/Home-Page',
    'A React-based forum web application, using an express + sequelize backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security',
    [])
);

Projects.push(new Project(
    2,
    'C++ Scrabble',
    '/scrabble-c++/Scrabble-Board',
    'A multiplayer game of Scrabble developed in a group through GitHub, run in the terminal, written in C++, complete with dictionary checking and other forms of input validation, along with recursive word scoring',
    [])
);

Projects.push(new Project(
    3,
    'Neighbourhood Doctors',
    '/flutter-doctor-aws/Homepage',
    'A Flutter mobile app developed in a group through GitHub, using a Springboot backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security',
    [])
);

export default Projects;