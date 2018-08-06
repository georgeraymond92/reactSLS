import React, { Component } from 'react'

class Body1 extends Component {
  constructor(props) {
    super(props);
  }
        handleFormSubmit =(e) =>{
          e.preventDefault();
          console.log ('handling submit')
        }
        render(){
            return (

<div>


    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To Our Website, yo!</div>
          <div className="intro-heading text-uppercase">Senior Living Service</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#nownow">Find a Place Now!</a>
        </div>
      </div>
    </header>




    <div className="container" id="nownow">

    <div className="wrapper animated bounceInLeft">
        <div className="company-info" >
        <h3 >Senior Living Service</h3>
        <ul>
            <li><i className="fa fa-road"></i> Contact Now!</li>
        <li><i className="fa fa-phone"></i> (858) 633-3590</li>
            <li><i className="fa fa-envelope"></i> seniorlivingervices@gmail.com</li>
        </ul>
        </div>
        <div id="results" className="contact">
        <h3>Find a Place, Services, & Location</h3>
        <form>
            <p>
            <label>Name</label>
            <input id="name" type="text" name="name" />
            </p>
            <p>
            <label>Service</label>

            <select id="services" list="services5">
            <option value="Independant Living">Independant Living</option>
                <option value="Assisted Living">Assisted Living</option>
              <option value="Memory Care">Memory Care</option>
            </select>

          </p>
          <p>
            <label>Email Address</label>
            <input id="email"  type="email" name="email" />
          </p>
          <p>
            <label>Phone Number</label>
            <input id="phone" type="text" name="phone" />
          </p>

          <p>
            <label>Location:</label>
            <input type="text" id="location" name="location" />

          </p>
          <p className="full">
            <button id="submitBtn" onClick={this.handleFormSubmit}>Submit</button>
          </p>
        </form>
      </div>
    </div>
</div>


<div className="absolute">
</div>


    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Call us today

A 100% Free service to families to assist with your Senior Living search.
From Consultation to showing you properties. We are here for you every step of the way. FIND THE RIGHT SENIOR LIVING OPTION
Call us today ...WE ARE YOUR ADVOCATE</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Consultation and Assessment</h4>
            <p className="text-muted">Once we speak with you to determine your current situation, preferences, timeline, and budget, we begin to research senior living options that fit your needs. We first begin by checking the States records on how well a particular community is doing and what the past track records look like. From there, we preview the community and learn more about the details that matter the most.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Property Showings</h4>
            <p className="text-muted">Based on what we learned about your needs and preferences, we narrow down to showing you the best three communities that fit you well. We accompany you to showings to advocate and support you during this process. We intervene at the most appropriate time and guide you to the most informative tours on your behalf.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Negotiation and Contract</h4>
            <p className="text-muted">Once we complete your showings with you, we discuss with you whether you would like to see more properties or make a decision based on what you have seen. If you are satisfied with narrow down your options, we begin our negotiation process with the communities to fine tune the agreements and continue to advocate for you.</p>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">A Portfolio of Care</h2>
            <h3 className="section-subheading text-muted">We consider everything when finding the right place for a loved one...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/indep.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Idependent</h4>
              <p className="text-muted">Living</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/assist.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Assisted</h4>
              <p className="text-muted">Living</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/mem.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Memory</h4>
              <p className="text-muted">Care</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/trust.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Trusted</h4>
              <p className="text-muted">Proffesionals</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/law.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Trust Attorneys</h4>
              <p className="text-muted">Elder Law</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/img/corp6.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Corporate</h4>
              <p className="text-muted">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section id="about">
        <div className="container">
        <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Simplify your search
                Get it right the first time. We help you from the initial consultation, to showings, to negotiating and signing your contract.
            </h3>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-12">
            <ul className="timeline">
            <li>
        <div className="timeline-image">
        <img className="rounded-circle img-fluid" src="/img/777.jpg" alt="" />
        </div>
        <div className="timeline-panel">
        <div className="timeline-heading">
                    <h4>How we work:</h4>
                    <h4 className="subheading">Placement Procedure</h4>
        </div>
        <div className="timeline-body">
                    <p className="text-muted">Finding the right Home Care, Assisted Living or Memory Care for your loved on is not an easy process.  We want to make sure that you know exactly what to expect.  At Senior Living Service, we collaborate and advocate with you each step of the way.  The following are steps in which you can expect.</p>
        </div>
        </div>
        </li>
        <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="/img/about/22.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4> The First meeting </h4>
                    <h4 className="subheading">(by phone or in person) </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">This is where we establish the current situation, preference, timeline & budget. We collect all pertinent information about your loved one’s medical and social history to help us find the best Assisted Living/ care options.
We begin our research phase and evaluate the State’s records, community reputation and industry knowledge in order to narrow down to the 3 best communities to show you.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="/img/about/3.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>We preview communities</h4>
                    <h4 className="subheading">To meet our high standards and yours...</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">We set up a time to accompany you to all showings and move into an Advocate role in representing you.
We discuss with you the best options and present to you the pros and cons of each community.
We help you gather all clinical, State, and Community paperwork required for a move-in.
</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="/img/about/44.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>Moving in...</h4>
                    <h4 className="subheading">(Contracts & Agreements)</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">We obtain a copy of the contract/ agreement to pre-review before you sign, to make sure there are no surprises.
                        We negotiate with the community on the best rooms, rates, and terms on your behalf. We accompany you to the signing and move-in agreement.We bring any additional resources to you such as Elder Law/ Trust Attorney, Financial Planner, Real Estate Agent/Broker, and Moving companies that specialize in senior moves.</p>
                </div>
                </div>
                </li>
                <li className="timeline-inverted">
                <div className="timeline-image">
                    <h4>Be Part
                    <br />Of Our
                    <br />Story!</h4>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </section>





    <section className="bg-light" id="team">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">We are here for you every step of the way.</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src="/img/team/11.jpg" alt="" />











            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="/img/team/222.jpg" alt="" />
              <h4>Natalie Barrantes</h4>
              <p className="text-muted">Director</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="/img/team/33.jpg" alt="" />







            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted"><b>Quotes from our previous clients:</b><br />
"Natalie and Panida could not have made the stressful experience more smooth for our family. We were faced with having to place our mom in 3 days and these ladies made it happen. We couldn't be happier with the service received."<br />

<b>Nancy L. Poway, CA</b><br />
"I just wanted to send you our sincere thanks for all that you did in the last 2 weeks for my Mom and for her appropriate placement in Poway. We are hoping that things settle down soon and that she adjusts to her lovely new home. We know that there were lots of choices in San Diego, and we greatly appreciate your work in narrowing it down for us. We are happy to give you a referral for your excellent service !"<br />

<b>Terri T. Redding, CA</b><br /></p>
          </div>
        </div>
      </div>
    </section>






    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">








          </div>
          </div>
        </div>
        </section>


    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" method="POST" action="https://formspree.io/bytemediateam@gmail.com" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email"  name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
               </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>




</div>

            )
        }
}
export default Body1;