import React, { useState } from 'react'
import '../projectCard.css'
import createProjectData from '../data/dataObject'
import createInlineStyle from '../data/styleObject'

const ProjectZero =()=> {

  const [flipCard, setFlipCard] = useState(false)

  const projectData = createProjectData(0)

  const style = createInlineStyle(projectData.image)


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
          {projectData.description}
        </div>

      </div>

      <div className='cardButtonContainer'>
        <a href={projectData.link} target='none'><li id='projectLink'>View Project</li></a>
        {
          flipCard ? <li id='flipButton' onClick={()=> flipBack()}>Flip Back</li>
          : <li id='flipButton' onClick={()=> flipOver()}>Description</li>
        }
      </div>

    </div>
  )

}

export default ProjectZero
