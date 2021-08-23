import Carousel from 'react-bootstrap/Carousel';
function Topbar(){
    return(
    <div>
        <div className="wrapper top-wrapper">
            <img src="./images/top-bnr.png" />
                <div className="wrapper-container">
                    <div className="col-md-6">
                        <div className="leftSec">
                            <span>ABOUT JUSFLY</span>
                            <h1>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="booking-wrapper">
                <div className="col-md-5 float-end">
                    <div className="card">
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h3>
                        <div className="tab">
                            <button className="tablinks active" id="defaultOpen"
                                onclick="openCity(event, 'return')">Return</button>
                            <button className="tablinks" onclick="openCity(event, 'oneway')">One Way</button>
                            <button className="tablinks" onclick="openCity(event, 'multiway')">Multiple
                                Destinations</button>
                        </div>

                        <div id="return" className="tabcontent">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label for="From" required>From*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="From" required>To*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-lg-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Return Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-lg-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="From" required>No of Passangers*</label>
                                        <div className="custom-select">
                                            <select>
                                                <option value="0">Select 1</option>
                                                <option value="1">Select 2</option>
                                                <option value="2">Select 3</option>
                                                <option value="3">Select 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix mb-0"></div>
                                    <div className="col-12 mb-0">
                                        <button className="Btn-secondary">Get Quotes</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div id="oneway" className="tabcontent">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label for="From" required>From*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="From" required>To*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-0 mb-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Return Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-0 mb-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-0 mt-2">
                                        <button className="Btn-secondary">Get Quotes</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div id="multiway" className="tabcontent">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label for="From" required>From*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="From" required>To*</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-0 mb-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-spliter col-lg-6">
                                        <label for="From" required>Return Date & Time*</label>
                                        <div className="row mb-0">
                                            <div className="col-md-6 pe-0 mb-0">
                                                <input type="date" id="start" name="trip-start" min="2018-01-01"
                                                    max="2018-12-31" />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <input type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-0 mt-2">
                                        <button className="Btn-borderonly">add another leg</button>
                                        <button className="Btn-secondary">Get Quotes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </div>

{/* city wrapper */}
<div className="wrapper city-wrapper">
        <div className="wrapper-container">
            <div className="title-card">
                <span>POPULAR CITY</span>
                <h1>Popular cities to fly from</h1>
            </div>
            <div className="city-sec">
                <div className="cities">
                    <div className="card">
                        <img src="./images/city/city-1.png" alt="" />
                        <h5>CHENNAI</h5>
                    </div>
                </div>
                <div className="cities">
                    <div className="card">
                    <img src="./images/city/city-2.png" alt="" />
                        <h5>BANGALORE</h5>
                    </div>
                </div>
                <div className="cities">
                    <div className="card">
                    <img src="./images/city/city-3.png" alt="" />
                        <h5>KOLKATA</h5>
                    </div>
                </div>
                <div className="cities">
                    <div className="card">
                    <img src="./images/city/city-4.png" alt="" />
                        <h5>DELHI</h5>
                    </div>
                </div>
                <div className="cities">
                    <div className="card">
                    <img src="./images/city/city-5.png" alt="" />
                        <h5>COIMBATORE</h5>
                    </div>
                </div>
            </div>
            <button className="Btn-dark">VIEW OUR PACKAGES</button>
        </div>
    </div>

{/* key wrapper */}
<div className="wrapper key-wrapper">
        <div className="wrapper-container">
            <div className="title-card">
                <span>LOREM IPSUM</span>
                <h1>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h1>
            </div>
            <div className="row mb-3">
                <div className="col-md-6 ps-md-0">
                    <img src="./images/key-banner.png" alt="" />
                </div>
                <div className="col-md-6 pe-md-0">
                    <div className="key-notes">
                        <div className="">
                            <img src="./images/icons/key-icon-1.svg" alt="" />
                            <h5>LUXURY AND COMFORT</h5>
                        </div>
                        <div className="">
                        <img src="./images/icons/key-icon-2.svg" alt="" />
                            <h5>SAFETY & CONFIDENTIALITY</h5>
                        </div>
                        <div className="">
                        <img src="./images/icons/key-icon-3.svg" alt="" />
                            <h5>PERSONAL SCHEDULE</h5>
                        </div>
                        <div className="">
                        <img src="./images/icons/key-icon-4.svg" alt="" />
                            <h5>MANY AIRPORTS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* private charter */}
    <div className="private-charter">
    <div className="wrapper">
        <div className="charter-wrapper">
            <div className="charter-bg "></div>
            <div className="wrapper-container pb-0">
                <h1>Private Charter</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
        </div>
    </div>

    <div className="wrapper">
        <div className="charter-wrapper-new">
            <div className="wrapper-container">
                <div className="charter-img-sec">
                    <img src="./images/charter/charter-1.png" alt="" />
                    <div>
                        <h4>Helicopter</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-2.png" alt="" />
                    <div>
                        <h4>Executive Jet</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-3.png" alt="" />
                    <div>
                        <h4>Light Jet</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-4.png" alt="" />
                    <div>
                        <h4>Turbo Prop</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-5.png" alt="" />
                    <div>
                        <h4>Super Light Jet</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-6.png" alt="" />
                    <div>
                        <h4>Piston Engine</h4>
                    </div>
                </div>
                <div className="charter-img-sec">
                <img src="./images/charter/charter-7.png" alt="" />
                    <div>
                        <h4>Long Range Jet</h4>
                    </div>
                </div>
                <div className="charter-img-sec seeMore">
                    <h4>See more Our flights</h4>
                    <img src="./images/icons/arrow.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>

{/* quote wrapper */}
<div className="wrapper quote-wrapper">
    <div className="wrapper-container">
        <div className="title-card">
            <span>GET QUOTE</span>
            <h1>We Fly You To Over 20.000 World Wide Locations</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <button className="Btn-dark">REQUEST QUOTE</button>
    </div>
</div>

{/* testimonial wrapper */}
<div className="wrapper testimonial-wrapper">
    <div className="wrapper-container">
        <div className="title-card">
            <span>TESTIMONIALS</span>
            <h1>Customer Review</h1>
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption d-flex">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption d-flex">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption d-flex">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-md-6 col-lg-8">
                <img src="./images/testimonial-bnr.png" alt="" />
            </div>
        </div>
    </div>
</div>

{/* Subscribe wrapper */}
<div className="wrapper subscribe-wrapper">
    <div className="wrapper-container">
        <div className="row">
            <div className="col-md-6">
                <img src="./images/subscribe-bnr.png" alt="" />
            </div>
            <div className="col-md-6">
                <div className="leftSec">
                    <span>UPCOMING JOY RIDE</span>
                    <h1>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h1>
                </div>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6">
                            <label for="From">Name*</label>
                            <input type="text" placeholder="Enter your name" required />
                        </div>
                        <div className="col-lg-6">
                            <label for="From" required>Email*</label>
                            <input type="mail" placeholder="Enter your mail address" />
                        </div>
                        <div className="col-lg-6">
                            <label for="From" required>Mobile*</label>
                            <input type="text" placeholder="Enter your Phone Number" />
                        </div>
                        <div className="col-lg-6">
                            <label for="From" required>No of Passangers*</label>
                            <div className="custom-select mb-0">
                                <select>
                                    <option value="0">Select 1</option>
                                    <option value="1">Select 2</option>
                                    <option value="2">Select 3</option>
                                    <option value="3">Select 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label for="From" required>Location*</label>
                            <div className="custom-select mb-0" placeholder="Set your location">
                                <select>
                                    <option value="0">Chennai</option>
                                    <option value="1">Banglore</option>
                                    <option value="2">Kolkata</option>
                                    <option value="3">Delhi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mb-0 mt-2">
                        <button className="Btn-dark float-start">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{/* insight wrapper */}
<div className="wrapper insight-wrapper">
    <div className="wrapper-container">
        <div className="title-card">
            <span>BLOGS, NEWS, EVENTS</span>
            <h1>Insight</h1>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="insight-section">
                    <div className="card">
                    <img src="./images/blog/blog-1.png" alt="" />
                        <p className="date">April 9, 2021 By admin</p>
                        <h3>Everything You Need to Know and More About Private Jets and Flying On One</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="insight-section">
                    <div className="card blog-xl">
                        <div className="row">
                            <div className="col-md-6">
                                <span>April 6, 2021 By admin</span>
                                <h3>Rent A Private Jet-Everything You Need To Know About Cost, Features, and Figures
                                </h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim.</p>
                            </div>
                            <div className="col-md-6">
                            <img src="./images/blog/blog-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="insight-section">
                    <div className="card">
                    <img src="./images/blog/blog-3.png" alt="" />
                        <p className="date">September 2, 2020 By admin</p>
                        <h3>10 Ways Private Charters Differ from Commercial Flights</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="insight-section">
                    <div className="card">
                    <img src="./images/blog/blog-4.png" alt="" />
                        <p className="date">August 26, 2020 By admin</p>
                        <h3>Bahamas Will Accept Private Jet Charters – But Not Commercial Flights</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="insight-section">
                    <div className="card">
                        <img src="./images/blog/blog-5.png" alt="" />
                        <p className="date">August 19, 2020 By admin</p>
                        <h3>How to Protect Yourself from Fraud and Illegal Private Charters</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12">
            <button className="Btn-borderonly">VIEW ALL</button>
        </div>
    </div>
</div>
</div>
    );
}
export default Topbar;