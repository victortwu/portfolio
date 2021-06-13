import '../App.css'

const ContactForm = (props) => {

  const toggleClass = props.showForm ? 'showForm' : 'hideForm'

  return(
    <div className={toggleClass}>
        <div className='modalBackground'>
          <div className='submitFormCnt'>
              <h1>FormSubmit Demo</h1>
              <form action="https://formsubmit.co/c325249c7dacaafba75628a0945cbc8c" method="POST" >
                  <div className="form-group">


                              <input type="text" id='name' name="name" className="form-control" placeholder="Full Name" required />


                              <input type="email" id='email' name="email" className="form-control" placeholder="Email Address" required />


                  </div>
                  <div className="form-group">
                      <textarea id='message' placeholder="Your Message" className="form-control" name="message" rows="10" required ></textarea>
                  </div>
                  <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
              </form>
              <button onClick={()=> props.hideContactForm()}>X</button>
            </div>
        </div>
    </div>
  )

}

export default ContactForm
