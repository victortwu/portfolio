import React, { useState, useRef } from 'react'
import '../projectCard.css'


const BaseballScoreProj =(props)=> {

const [flipCard, setFlipCard] = useState(false)

const cardRef = useRef()

const params ={
  title: 'Home Team Baseball App',
  image: `url(${require('../images/baseballapp.png').default})`,
  link: 'https://home-team-baseball-scores.herokuapp.com/'
}

const style = {
  backgroundImage: params.image,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

const flipOver =()=> {
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

export default BaseballScoreProj
