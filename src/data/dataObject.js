import projects from '../data/projects'


const createProjectData = (projectIndex) => {
  return {
    title: projects[projectIndex].title,
    image: projects[projectIndex].image,
    link: projects[projectIndex].link,
    description: projects[projectIndex].description,
    tech: projects[projectIndex].tech,
  }
}

export default createProjectData
