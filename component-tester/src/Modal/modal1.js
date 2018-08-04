import React from 'react';

const Modal1= () => (

<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            {/*  Project Details Go Here  */}
                  <h2 class="text-uppercase">Independent Living</h2>
                            <p class="item-intro text-muted">For an older adult, the choice between assisted living and independent living usually depends on how well an individual can manage daily activities without extra assistance.</p>
                            {/* <img class="img-fluid d-block mx-auto" src="assets/img/indep.jpg" alt=""> */}
                                <p>Independent Living Communities vary in size, capacity, and general look-and-feel. They can be quaint, cozy communities or palatial estates. This type of community provides the least amount of care. However, you can hire in-home care within a retirement community.
              
                                Independent living is for elders who may not be safe living at home, may not be safe driving, may be living in an unsafe                                neighborhood, or may need minor assistance daily.

                                        Independent Living offers:

                                            •Meal plans

                                                •Transportation

                                                    •Laundry

                                                        •Housekeeping

                                                            •Home and yard maintenance

                                                                •Safe community
</p>
                                                                <ul class="list-inline">
                                                                    <li>Date: June 2018</li>
                                                                    <li>Senior Living Service</li>
                                                                    <li>Category: Indpenedent Living</li>
                                                                </ul>
                                                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                                                    <i class="fa fa-times"></i>
                                                                    Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Modal1;