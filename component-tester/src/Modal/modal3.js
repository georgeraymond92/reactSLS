import React from 'react';


const Modal3 = () => (

<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
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
                            {/* Project Details Go Here */} 
                            <h2 class="text-uppercase">Memory Care</h2>

                            <p class="item-intro text-muted">caters to patients with Alzheimer's disease, dementia and other types of memory problems.</p>

                            {/* <img class="img-fluid d-block mx-auto" src="assets/img/mem.jpg" alt=""> */}
                            <p>Memory care communities are ideal for seniors suffering from memory loss due to dementia, Alzheimer’s Disease, or some neurodegenerative disorder. Although most memory-related illnesses are incurable, many facilities work to with specialized methods and treatment plans to slow the condition’s progression.

                            All memory care communities are secured in order to create additional safety measures.

                                These communities offer:

                            •Meal preparation

                            •Medication managements

                                *Activities geared towards memory impairment

                            •Laundry

                            •Housekeeping

                            •ADLs

                            •Showering

                            •Grooming

                            •Dressing

                            *Incontinence Care</p>

                            <ul class="list-inline">
                                <li>Date: June 2018</li>
                                <li>Senior Living Services</li>
                                <li>Category: Memory care</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                    Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>
    );

    export default Modal3;