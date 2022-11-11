import React from 'react';
import { Title, Divider, Text, Space, AspectRatio, Image, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Projects from './ProjectDetails';
import ProjectCard from '../components/ProjectCard';
import { useParams } from 'react-router-dom';
import { Project } from '../classes/ProjectType';
import ReactPlayer from 'react-player/lazy';

export default function ProjectPage() {
    let { id } = useParams();

    const [project, setProject] = React.useState<Project | undefined>(undefined);

    const updateProject = React.useCallback(() => {
        id ? setProject(Projects.at(~~id)) : setProject(undefined);
    }, [id]); 

    React.useEffect(() => {
        updateProject();
    }, [updateProject]);

    return(
        <>
        <Title my='md' order={1}>{project?.title}</Title>
        <Divider my="md"/>
        <Stack>
        {project?.content.map((section, index) => {
            return(
                    <React.Fragment key={index}>
                    <Title my='md' order={3} children={section.section_header}/>
                    {(section.type === 'video') ? 
                        <video
                            src={require('../resources' + section.media + '.mp4')}
                            controls={true}
                            height='auto'
                            width='100%'
                        />
                        : 
                        <></>
                    }
                    {(section.type === 'image') ? 
                        <Image
                            src={require('../resources'+ section.media + '.png')}
                            alt={section.media}
                        />
                        : 
                        <></>
                    }
                    <Text children={section.section_body}/>
                    </React.Fragment>
            );
        })}
        </Stack>
        </>
    );
}