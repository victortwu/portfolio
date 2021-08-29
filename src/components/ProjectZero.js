import React, { useState } from 'react'
import Card from './Card'
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

export default ProjectZero
// <div className='flipCardContainer'>
//
//   <div className={toggleClass}>
//
//     <div className='frontPanel' style={style}>
//       <h3 id='projTitle'>{projectData.title}</h3>
//     </div>
//
//     <div className='backPanel'>
//       <p>{projectData.description}</p>
//       <div className='techListContainer'>
//         <h4>Technologies Used:</h4>
//         <div className='techList'>
//         {
//           projectData.tech.map((tech, i) => {
//             return(
//               <div key={i + tech[i]}>{tech}</div>
//             )
//           })
//         }
//         </div>
//       </div>
//     </div>
//
//   </div>
//
//   <div className='cardButtonContainer'>
//     <a href={projectData.link} target='none'><li id='projectLink'>View Project</li></a>
//     {
//       flipCard ? <li id='flipButton' onClick={()=> flipBack()}>Flip Back</li>
//       : <li id='flipButton' onClick={()=> flipOver()}>Description</li>
//     }
//   </div>
//
// </div>
