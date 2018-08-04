import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Footer, Nav } from './components'


class App extends Component {
    render(){
        return (


            <div>

<Nav />


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
            <button id="submitBtn" >Submit</button>
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











<Footer />















    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">




                  <h2 className="text-uppercase">Independent Living</h2>
                  <p className="item-intro text-muted">For an older adult, the choice between assisted living and independent living usually depends on how well an individual can manage daily activities without extra assistance.</p>
                  <img className="img-fluid d-block mx-auto" src="/img/indep.jpg" alt="" />
                  <p>Independent Living Communities vary in size, capacity, and general look-and-feel. They can be quaint, cozy communities or palatial estates. This type of community provides the least amount of care. However, you can hire in-home care within a retirement community.

Independent living is for elders who may not be safe living at home, may not be safe driving, may be living in an unsafe neighborhood, or may need minor assistance daily.<br />

Independent Living offers:<br />

•Meal plans<br />

•Transportation<br />

•Laundry<br />

•Housekeeping<br />

•Home and yard maintenance<br />

•Safe community<br />
</p>
                  <ul className="list-inline">
                    <li>Date: June 2018</li>
                    <li>Senior Living Service</li>
                    <li>Category: Indpenedent Living</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">





                  <h2 className="text-uppercase">Assisted Living</h2>
                  <p className="item-intro text-muted">Housing for the elderly or disabled that provides nursing care including medication, housekeeping, and prepared meals as needed.</p>
                  <img className="img-fluid d-block mx-auto" src="/img/assist.jpg" alt="" />
                  <p>What is Assisted Living?

Assisted living facilities come in all shapes, sizes and neighborhoods. Based on the varied preferences and needs of the elderly there are a variety of settings from which to choose. These choices range from high-rise buildings to one-story Victorian mansions to large multi-acre campuses. Assisted living facilities are also located in single-family homes and duplexes referred to as residential care facilities.

The philosophy of assisted living is to provide personalized, resident centered care in order to meet individual preferences and needs. Assisted living is designed for individuals who require assistance with everyday activities such as meals, medication management or assistance, bathing, dressing and transportation. Some residents may have memory disorders including Alzheimer’s, or they may need help with mobility, incontinence or other challenges. Assisted living treats all residents with dignity, provides privacy and encourages independence and freedom of choice. Resident family members and friends are encouraged to get involved in the assisted living community.

Typical Services Offered in Assisted Living Communities/

Amenities in assisted living typically include:<br />

•Three meals a day served in a common dining area<br />

•Housekeeping services<br />

•Transportation<br />

•24-hour security<br />

•Exercise and wellness programs<br />

•Personal laundry services<br />

•Social and recreational activities<br />

Personal care in assisted living typically includes:<br />

•Staff available to respond to both scheduled and unscheduled needs<br />

•Assistance with eating, bathing, dressing, toileting, and walking<br />

•Access to health and medical services, such as physical therapy and hospice<br />

•Emergency call systems for each resident’s apartment<br />

•Medication management<br />

•Care for residents with cognitive impairments<br />

Independence is always encouraged through an individualized plan of personal care and wellness. As well, some communities are pet-friendly and on approval may move in with their dog or cat.<br />

What is the Cost of Assisted Living?<br />

Assisted living costs vary with the residence, apartment size, and types of services needed. The basic rate may cover all services or there may be additional charges for special services. Most assisted living residences charge on a month-to-month lease arrangement, but a few require long-term arrangements. Assisted living is often less expensive than home health or nursing home care in the same geographical area. The average monthly cost to live in an assisted living facility is $3300.00 per month.<br />

While 86.2% of assisted living residents today pay for long-term care from their personal financial resources, 41 states offer “home and community-based waivers” that allow low-income residents to live in assisted living facilities. More seniors are purchasing long-term care insurance to help plan for and finance their long-term care needs.<br />
</p>
                  <ul className="list-inline">
                    <li>Date: June 2018</li>
                    <li>Senior Living Service</li>
                    <li>Category: Assisted Living</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">



                  <h2 className="text-uppercase">Memory Care</h2>
                  <p className="item-intro text-muted">caters to patients with Alzheimer's disease, dementia and other types of memory problems.</p>
                  <img className="img-fluid d-block mx-auto" src="/img/mem.jpg" alt="" />
                  <p>Memory care communities are ideal for seniors suffering from memory loss due to dementia, Alzheimer’s Disease, or some neurodegenerative disorder. Although most memory-related illnesses are incurable, many facilities work to with specialized methods and treatment plans to slow the condition’s progression.<br />

All memory care communities are secured in order to create additional safety measures.<br />

These communities offer:<br />

•Meal preparation<br />

•Medication managements<br />

*Activities geared towards memory impairment<br />

•Laundry<br />

•Housekeeping<br />

•ADLs<br />

•Showering<br />

•Grooming<br />

•Dressing<br />

*Incontinence Care<br /></p>

                  <ul className="list-inline">
                    <li>Date: June 2018</li>
                    <li>Senior Living Services</li>
                    <li>Category: Memory care</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







    <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">



                  <h2 className="text-uppercase">Trusted Proffesionals</h2>
                  <p className="item-intro text-muted">Preferred Professionals</p>
                  <img className="img-fluid d-block mx-auto" src="/img/trust.jpg" alt="" />
                  <p>We understand that our clients often need trusted resources that can assist in this phase of their lives. Senior Living Services works with many trusted professionals in order to support our clients. There is no financial incentives, we simply just want to refer you to professionals that hold the same high standards as we do. We follow the process to ensure that our clients are happy with the professional referrals that we provide. From estate planning to hospice, private-duty home care and medical equipment.
</p>
                  <ul className="list-inline">
                    <li>Date: January 2017</li>
                    <li>Senior Living Service</li>
                    <li>Category: Trusted Proffesionals</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">



                  <h2 className="text-uppercase">Trust Attorneys</h2>
                  <p className="item-intro text-muted">Elder Law</p>
                  <img className="img-fluid d-block mx-auto" src="/img/law.jpg" alt="" />
                  <p>Los Angeles Area

Woodland Hills Elder Law And Estate Planning Attorney
At our Woodland Hills, California, location, the Law Offices of Alice A. Salvo has a first-class team of attorneys with more than 20 years of dedication to elder law and estate planning. We understand what legal strategies to pursue and try to establish options that can protect you and your family’s future. With our extensive knowledge, resources and recognition throughout the legal and local community, you can trust us to help you every step of the way.

To learn more about the legal qualifications and background of our lawyers, please follow the links below.<br />

Principal
Location:<br />
Woodland Hills, California<br />
Phone:<br />
866-791-5383 (Toll Free)<br />
818-676-9572<br />
818-878-8301<br />
Fax:
818-716-9275<br />

ALICE A. SALVO has over 20 years of experience in Probate, Estate Planning and Elder Law. She attended Southwestern University School of Law earning a law degree (J.D.) and furthered her education by receiving a graduate law degree (L.L.M. in Estate Planning) from University of Miami School of Law.

Alice A. Salvo is qualified by the California State Bar as a “Certified Specialist” in Estate Planning, Trust and Probate Law. Only a select few of all California attorneys have been awarded this prestigious designation.

She has earned many distinctions for her work including these accomplishments: President of Southern California Council of Elder Law Attorneys, President of San Fernando Valley Estate Planning Council, President of San Fernando Valley Bar Association, Chairperson of the Probate Section of the San Fernando Bar Association, served on the Gray Squad Advisory Board to the Los Angeles Police Department Van Nuys Division.

Attorney Salvo has been appointed by the California State Bar to the prestigious position of serving on the Judicial Nominees Evaluation Commission (JNE) where she became the top individual – Chair (President) of the JNE Commission. This commission evaluates all candidates under consideration for a judicial appointment by the Governor. The attorneys that apply to be a judge in the state of California are thoroughly reviewed by the JNE Commission and a select few of the most highly qualified candidates are recommended for the judiciary.

Estate Planning attorney Alice A. Salvo was voted “Super Lawyer” in Super Lawyers magazine, a publication who names attorneys in each state who received the highest point totals, as chosen by their peers and through independent research. The selection procedures employed are very sophisticated and comprehensive. In addition she is rated superior – a perfect “10” by AVVO, and achieved the best rating “AV” by Martindale Hubbell.

Los Angeles Magazine published Alice A. Salvo as a Top Attorney in Southern California for 2011.

Alice A. Salvo<br /></p>
                  <ul className="list-inline">
                    <li>Date: June 2018</li>
                    <li>Senior Living Service</li>
                    <li>Category: Trusted Proffesionals</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">



                  <h2 className="text-uppercase">Corporate Partners</h2>
                  <p className="item-intro text-muted">Employee Assistance Programs / Educational Series</p>
                  <img className="img-fluid d-block mx-auto" src="/img/corp6.jpg" alt="" />
                  <p>Senior Living Services offers a series of educational sessions at no cost to our partners and their employees. We customize our classes from 20 minutes to 2 hours, depending on your needs and your program objectives. All session are unbiased from any organizations, but rather educational in allowing our audience to have an overview understanding of topics. Sessions can be done in a power point presentation, or informal gatherings. We provide hand-outs for all sessions, which can be previewed and approved by your benefits or Human Resource Department.</p>

<b>1. Family Planning for Aging Parents – An Overview</b><br />
<br />
-Understanding timelines<br />
-Current health condition<br />
-Exploring parent’s wishes<br />
-Evaluating finances<br />
-Understanding family roles<br />
-Organizing pertinent information and paperwork<br />
<br />
<b>2. The important conversation to have with aging parents</b><br />
-How to begin<br />
-Recognizing the top 10 signs that parents need help<br />
-The context and tools for the conversation<br />
-Organizing and preparing for acuity changes<br />
-Legal consideration<br />
-Financial consideration<br />
<br />
<b>3. Care options for seniors overview</b><br />
-Home Care<br />
-Independent Living<br />
-Assisted Living<br />
-Memory Care<br />
-Skilled Nursing<br />
-Home Health<br />
-Hospice<br />
<br />
<b>4. Aging at home – The right way</b><br />
-Comprehensive Assessment<br />
-Geriatric Care Manager<br />
-Home Alteration<br />
-Technology<br />
-Durable Medical Equipment<br />
-Clinical Aspects<br />
-Choosing the right Home Care company<br />
-Monitoring progress<br />
-Pros and Cons to Home Care versus Assisted Living<br />
-Community Resources<br />
<br />
<b>5. Reverse Mortgage – Paying for care</b><br />
-What is reverse mortgage?<br />
-Pros and Cons of reverse mortgage<br />
-When is it a good option?<br />
-Financial alternatives to pay for care<br />


                  <ul className="list-inline">
                    <li>Date: June 2018</li>
                    <li>Senior Living Service</li>
                    <li>Category: Corporate Partners</li>
                  </ul>
                  <button className="btn btn-primary" data-dismiss="modal" type="button">
                    <i className="fa fa-times"></i>
                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</div>



)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))