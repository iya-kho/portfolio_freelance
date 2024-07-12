import styled from 'styled-components';

import { Project } from '../components';
import { projectsData } from '../content/projects';

import { colors } from '../utils/style/variables';

const paletteKeys = Object.keys(colors.palette);

const bgColorsClassNames = [];

for (let i = 0; i < projectsData.length; i++) {
  const colorInd = i % paletteKeys.length;
  bgColorsClassNames.push(paletteKeys[colorInd]);
}

const ProjectsStyled = styled.section``;

export function Projects() {
  return (
    <ProjectsStyled id="projects" className="sectionVertPadding">
      <h2 className="wrapLarge">projects</h2>
      {projectsData.map((project, index) => (
        <Project
          key={project.title}
          projectInfo={project}
          className={bgColorsClassNames[index]}
          projectsLength={projectsData.length}
          index={index}
        />
      ))}
    </ProjectsStyled>
  );
}
