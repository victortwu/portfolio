
const Card = (props) => {

  return (
    <div className='flipCardContainer'>

      <div className={props.toggleClass}>

        <div className='frontPanel' style={props.style}>
          <h3 id='projTitle'>{props.projectData.title}</h3>
        </div>

        <div className='backPanel'>
          <p>{props.projectData.description}</p>
          <div className='techListContainer'>
            <h4>Technologies Used:</h4>
            <div className='techList'>
            {
              props.projectData.tech.map((tech, i) => {
                return(
                  <div key={i + tech[i]}>{tech}</div>
                )
              })
            }
            </div>
          </div>
        </div>

      </div>

      <div className='cardButtonContainer'>
        <a href={props.projectData.link} target='none'><button id='projectLink'>View Project</button></a>
        {
          props.flipCard ? <button id='flipButton' onClick={()=> props.flipBack()}>Flip Back</button>
          : <button id='flipButton' onClick={()=> props.flipOver()}>Description</button>
        }
      </div>

    </div>
  )
}

export default Card
