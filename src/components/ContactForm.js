import '../App.css'

const ContactForm = (props) => {

  const toggleClass = props.showForm ? 'showForm' : 'hideForm'

  return(
    <div className={toggleClass}>
        <div className='modalBackground'>
          <div className='submitFormCnt'>
              <h2>Contact Me</h2>
              <form action="https://formsubmit.co/c325249c7dacaafba75628a0945cbc8c" method="POST" >



                              <input type="text" id='name' name="name" className="form-control" placeholder="Full Name" required />


                              <input type="email" id='email' name="email" className="form-control" placeholder="Email Address" required />




                      <textarea id='message' placeholder="Your Message" className="form-control" name="message" rows="10" required ></textarea>

                  <table>
                    <tbody>
                      <tr>
                        <td><button type="submit" className="formBtn">Submit Form</button></td>
                        <td><button className='formBtn' onClick={()=> props.hideContactForm()}>X</button></td>
                      </tr>
                    </tbody>
                  </table>

              </form>

            </div>
        </div>
    </div>
  )

}

export default ContactForm
