
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
        <a href={props.projectData.link} target='none'><li id='projectLink'>View Project</li></a>
        {
          props.flipCard ? <li id='flipButton' onClick={()=> props.flipBack()}>Flip Back</li>
          : <li id='flipButton' onClick={()=> props.flipOver()}>Description</li>
        }
      </div>

    </div>
  )
}

export default Card
