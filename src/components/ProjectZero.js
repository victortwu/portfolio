import React, { useState } from 'react'
import Card from './Card'
import '../projectCard.css'
import createProjectData from '../data/dataObject'
import createInlineStyle from '../data/styleObject'

const ProjectZero =(props)=> {

  const [flipCard, setFlipCard] = useState(false)
  const [viewDescription, setViewDescription] = useState(false)

  const projectData = createProjectData(0)

  const style = createInlineStyle(projectData.image)


    const flipOver =()=> {
      setFlipCard(true)
    }

    const flipBack =()=> {
      setFlipCard(false)
    }

    const toggleClass = flipCard ? 'wholeCard wholeCardFlip' : 'wholeCard wholeCardFlipBack'

    const toggleViewDes =()=> {
      setViewDescription(!viewDescription)
    }

    const descriptionViewClass = viewDescription ? 'backPanel showDes' : 'backPanel hideDes'

  return(
  <Card
      flipCard={flipCard}
      viewDescription={viewDescription}
      projectData={projectData}
      style={style}
      flipOver={flipOver}
      flipBack={flipBack}
      toggleClass={toggleClass}
      toggleViewDes={toggleViewDes}
      descriptionViewClass={descriptionViewClass}
      />
  )

}

export default ProjectZero
