import React from 'react';

const Portfolio = () => (
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
            <img className="img-fluid" src="assets/img/indep.jpg" alt=""/>
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
            <img className="img-fluid" src="assets/img/assist.jpg" alt=""/>
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
            <img className="img-fluid" src="assets/img/mem.jpg" alt=""/>
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
            <img className="img-fluid" src="assets/img/trust.jpg" alt=""/>
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
            <img className="img-fluid" src="assets/img/law.jpg" alt=""/>
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
            <img className="img-fluid" src="assets/img/corp6.jpg" alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Corporate</h4>
            <p className="text-muted">Partners</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;