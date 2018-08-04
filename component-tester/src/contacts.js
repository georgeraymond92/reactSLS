import React from'react';

const Contact =() => (
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
                    <div class="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <input class="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."> */}
                                    <p className="help-block text-danger"></p>
                  </div>
                                <div className="form-group">
                                    {/* <input class="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."> */} 
                                        <p className="help-block text-danger"></p>
                  </div>
                                    <div className="form-group">
                                        {/* <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."> */}
                                            <p className="help-block text-danger"></p>
                  </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea classname="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
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
)

export default Contact;