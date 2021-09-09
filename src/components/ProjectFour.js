import React, { useState } from 'react'
import Card from './Card'
import '../projectCard.css'
import createProjectData from '../data/dataObject'
import createInlineStyle from '../data/styleObject'

const ProjectFour =()=> {

  const [flipCard, setFlipCard] = useState(false)

  const projectData = createProjectData(4)

  const style = createInlineStyle(projectData.image)

    const flipOver =()=> {
      setFlipCard(true)
    }

    const flipBack =()=> {
      setFlipCard(false)
    }

    const toggleClass = flipCard ? 'wholeCard wholeCardFlip' : 'wholeCard wholeCardFlipBack'

  return(

    <Card
        flipCard={flipCard}
        projectData={projectData}
        style={style}
        flipOver={flipOver}
        flipBack={flipBack}
        toggleClass={toggleClass}
        />
      )

}

export default ProjectFour
