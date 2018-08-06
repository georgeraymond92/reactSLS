import React from 'react';

const Form = () => (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
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
                            <input id="name" type="text" name="name"/>
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
                            <input id="email"  type="email" name="email"/>
                        </p>
                        <p>
                            <label>Phone Number</label>
                            <input id="phone" type="text" name="phone"/>
                        </p>
                        <p>
                            <label>Location:</label>
                            <input type="text" id="location" name="location"/>
                        </p>
                        <p className="full">
                            <button id="submitBtn" >Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <div className="absolute"></div>
    </div>

);

export default Form;