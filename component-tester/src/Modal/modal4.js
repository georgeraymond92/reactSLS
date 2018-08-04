import React from'react';

const Modal4 = () => (
<div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
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
                             {/* Project Details Go Here  */}
                  <h2 class="text-uppercase">Trusted Proffesionals</h2>
                            <p class="item-intro text-muted">Preferred Professionals</p>
                            <img class="img-fluid d-block mx-auto" src="assets/img/trust.jpg" alt=""> </img>
                                <p>We understand that our clients often need trusted resources that can assist in this phase of their lives. Senior Living Services works with many trusted professionals in order to support our clients. There is no financial incentives, we simply just want to refer you to professionals that hold the same high standards as we do. We follow the process to ensure that our clients are happy with the professional referrals that we provide. From estate planning to hospice, private-duty home care and medical equipment.
</p>
                                <ul class="list-inline">
                                    <li>Date: January 2017</li>
                                    <li>Senior Living Service</li>
                                    <li>Category: Trusted Proffesionals</li>
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
    );

    export default Modal4;