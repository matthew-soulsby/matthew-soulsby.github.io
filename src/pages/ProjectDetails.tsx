import { Project } from "../classes/ProjectType";

const Projects: Array<Project> = []

const loop_agile_now: Project = {
    id: 0,
    title: 'Loop Agile Now',
    header_image: '/react-forum/Home-Page',
    description: 'A React-based forum web application, using an express + sequelize backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security',
    content: [
        {
            type: 'video', media: '/react-forum/Overview', 
            section_header: 'Overview', 
            section_body: 'A video showcasing an overview of the Loop Agile Now forum.'
        }
    ]
}

const scrabble: Project = {
    id: 1,
    title: 'C++ Scrabble',
    header_image: '/scrabble-c++/Scrabble-Board',
    description: 'A multiplayer game of Scrabble developed in a group through GitHub, run in the terminal, written in C++, complete with dictionary checking and other forms of input validation, along with recursive word scoring',
    content: []
}

const neighbourhood_doctors = {
    id: 2,
    title: 'Neighbourhood Doctors',
    header_image: '/flutter-doctor-aws/Homepage',
    description:'A Flutter mobile app developed in a group through GitHub, using a Springboot backend to communicate with an SQL database, using token-based authentication and hashed passwords to ensure security',
    content: []
}

Projects.push(
    loop_agile_now, 
    scrabble, 
    neighbourhood_doctors
);

export default Projects;