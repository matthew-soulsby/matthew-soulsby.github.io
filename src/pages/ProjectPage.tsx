import React from 'react';
import { Title, Divider, Text, Image, Stack, Group } from '@mantine/core';
import Projects from './ProjectDetails';
import { useParams } from 'react-router-dom';
import { Project } from '../classes/ProjectType';

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
        <Text c="dimmed" children={project?.description}/>
        <Stack spacing={75}>
        {project?.content.map((section, index) => {
            return(
                    <Group key={index}>
                        <Title my='md' order={3} children={section.section_header} sx={{width: '100%'}}/>
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
                    </Group>
            );
        })}
        </Stack>
        </>
    );
}