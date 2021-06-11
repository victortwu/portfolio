import './projectThree.css'

const ProjectThree = () => {
    return(
      <a href='https://custom-restaurant-dashboard.herokuapp.com/' target='none'><div className='projectCard3'>
      <div className="card__content3">

             <div className="card__front3">
               <h3 className="card__title3">DASHBOARD</h3>
               <p className="card__subtitle3">CUSTOM RESTAURANT</p>
             </div>

             <div className="card__back3">
               <p className="card__body3">Built with REACT.JS and FLASK.  Utilizing PEEWEE ORM and a PosgreSQL database.  CSS3 is from scratch, no styling libraries.  And of course JavaScript and Python. Deployed on Heroku.</p>
             </div>

        </div>
      </div></a>


    )
}

export default ProjectThree
