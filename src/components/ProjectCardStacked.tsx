import React from 'react';
import { Paper, Image, Text, Space, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
import Project from '../classes/ProjectClass';

export default function ProjectCardStacked(project: Project) {
  return (
    <Paper shadow="xs" p="md" withBorder
    component={Link}
    to='/projects'
    >
      <Grid align='center'>
        <Grid.Col span={6}>
          <Image
            fit='contain'
            height={300}
            src={require('../resources'+ project.header_image + '.png')}
            alt={project.title}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text weight={500} children={project.title}/>
          <Space h='md'/>
          <Text size="sm" color="dimmed" children={project.description} lineClamp={3}/>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}