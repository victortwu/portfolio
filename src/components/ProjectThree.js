import React, { useState } from 'react'
import '../projectCard.css'
import projects from '../data/projects'

const ProjectThree =()=> {

  const [flipCard, setFlipCard] = useState(false)

    const projectIndex = 3

    const projectData = {
      title: projects[projectIndex].title,
      image: projects[projectIndex].image,
      link: projects[projectIndex].link,
      content: projects[projectIndex].content,
    }

    const style = {
      backgroundImage: projectData.image,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }

    const flipOver =()=> {
      setFlipCard(true)
    }

    const flipBack =()=> {
      setFlipCard(false)
    }

    const toggleClass = flipCard ? 'wholeCard wholeCardFlip' : 'wholeCard wholeCardFlipBack'

  return(

    <div className='flipCardContainer'>

      <div className={toggleClass}>

        <div className='frontPanel' style={style}>
          <h3 id='projTitle'>{projectData.title}</h3>
        </div>

        <div className='backPanel'>
          {projectData.content}
        </div>

      </div>

      <ul id='cardButtonUl'>
        <a href={projectData.link} target='none'><li id='projectLink'>View Project</li></a>
        {
          flipCard ? <li id='flipButton' onClick={()=> flipBack()}>Flip Back</li>
          : <li id='flipButton' onClick={()=> flipOver()}>Description</li>
        }
      </ul>

    </div>
  )

}

export default ProjectThree
