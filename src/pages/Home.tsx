import React from 'react';
import { Title, Divider, Text, Space } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Projects from './ProjectDetails';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    return(
        <>
        <Title my='md' order={1}>Home</Title>
        <Divider my="md"/>
        <Text>
            Welcome! My name's Matt, and I'm in my final year of Computer Science at RMIT. 
            So far, I've had the opportunity to work with a variety of languages and tech stacks, including:
            <ul>
                <li>C++, Java, Python</li>
                <li>React, Flutter, Typescript, Javascript</li>
                <li>Springboot, Sequelize</li>
                <li>SQL Databases</li>
                <li>AWS</li>
            </ul>
        </Text>
        <Text>
            This website is a place where I'll be going into detail about some noteworthy projects and, 
            where possible, providing the source code so that you can have a look at your leisure. 
            Feel free to explore some of them below, or through the projects tab at the top.
        </Text>
        <Space h='md'/>
        <Title my='md' align='center' order={3}>Latest Projects</Title>
        <Carousel my='md' slideSize="70%" height={600} slideGap="md">
            {Projects.map((project) => {
                return <Carousel.Slide key={project.title}>
                    <ProjectCard {...project} />
                </Carousel.Slide>
            })}
        </Carousel>
        </>
    );
}