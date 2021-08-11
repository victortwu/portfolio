import React, { useState } from 'react'
import projects from '../data/projects'
import '../projectCard.css'



const Projects =(props)=> {

const [flipCard0, setFlipCard0] = useState(false)
const [flipCard1, setFlipCard1] = useState(false)
const [flipCard2, setFlipCard2] = useState(false)
const [flipCard3, setFlipCard3] = useState(false)



const flipOver =(index)=> {
  if(index === 0){setFlipCard0(true)}
  if(index === 1){setFlipCard1(true)}
  if(index === 2){setFlipCard2(true)}
  if(index === 3){setFlipCard3(true)}

}

const flipBack =(index)=> {
  if(index === 0){setFlipCard0(false)}
  if(index === 1){setFlipCard1(false)}
  if(index === 2){setFlipCard2(false)}
  if(index === 3){setFlipCard3(false)}
}


const toggleClass0 = flipCard0 ? 'wholeCard0 wholeCardFlip0' : 'wholeCard0 wholeCardFlipBack0'
const toggleClass1 = flipCard1 ? 'wholeCard1 wholeCardFlip1' : 'wholeCard1 wholeCardFlipBack1'
const toggleClass2 = flipCard2 ? 'wholeCard2 wholeCardFlip2' : 'wholeCard2 wholeCardFlipBack2'
const toggleClass3 = flipCard3 ? 'wholeCard3 wholeCardFlip3' : 'wholeCard3 wholeCardFlipBack3'


  return(

    projects.map((project, i) => {
      const style = {
        backgroundImage: project.image,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }
      let uniqueClass
      if ( i === 0 ) {uniqueClass = toggleClass0}
      if ( i === 1 ) {uniqueClass = toggleClass1}
      if ( i === 2 ) {uniqueClass = toggleClass2}
      if ( i === 3 ) {uniqueClass = toggleClass3}

      return(
        <div key={i} className='flipCardContainer'>
          <h3 id='projTitle'>{project.title}</h3>
          <div className={uniqueClass}>
            <div className='frontPanel' style={style}>

            </div>
            <div className='backPanel'>
              {project.content}
            </div>
          </div>
          <ul id='cardButtonUl'>
            <a href={project.link} target='none'><li id='projectLink'>LINK</li></a>

            <li id='flipButton' onClick={()=> (flipCard0 || flipCard1 || flipCard2 || flipCard3) ? flipBack(i) : flipOver(i)}>FLIP</li>

          </ul>

        </div>

      )
    })
  )
}

export default Projects
