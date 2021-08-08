import React, { useState, useRef } from 'react'
import '../projectCard.css'


const TrexProject =(props)=> {

const [flipCard, setFlipCard] = useState(false)

const cardRef = useRef()

const params ={
  title: 'T-Rex Counting Game',
  image: `url(${require('../images/trexgame.png').default})`,
  link: 'https://victortwu.github.io/GAproject1/'
}

const style = {
  backgroundImage: params.image,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

const flipOver =(props)=> {
  cardRef.current.style.animation = 'flip 1.5s forwards'
  setFlipCard(true)
}

const flipBack =()=> {
  cardRef.current.style.animation = 'flipBack 1.5s forwards'
  setFlipCard(false)
}

  return(
    <div className='flipCardContainer'>

      <div ref={cardRef} className='wholeCard'>
        <div className='frontPanel' style={style}>
        <h2 id='projTitle'>{params.title}</h2>
        </div>
        <div className='backPanel'>
          {props.content}
        </div>
      </div>
      <ul id='cardButtonUl'>
        <a href={params.link} target='none'><li id='projectLink'>go to</li></a>

        <li id='flipButton' onClick={()=> flipCard ? flipBack() : flipOver()}>flip</li>

      </ul>

    </div>
  )
}

export default TrexProject
