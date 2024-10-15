import React from 'react';
// import slack from '../../../images/logos/slack.png';
// import google from '../../../images/logos/google.png';
// import uber from '../../../images/logos/uber.png';
// import netflix from '../../../images/logos/netflix.png';
// import airhub from '../../../images/logos/airbnb.png';
import serviceNow from '../../../images/logos/servicenow_logo_icon_168837.png';
import aws from '../../../images/logos/aws_logo_icon_145507.png';
import salesforce from '../../../images/logos/salesforce_icon_196210.png';
import customDev from '../../../images/logos/customDev.png';
import azure from '../../../images/logos/azure_icon_213116.png';
import workday from '../../../images/logos/workday.png';


import './BrandLogo.css';

const BrandLogo = () => {
    return (
        <div className="brand-logos">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/*
                    <div className="offset-lg-1 col-lg-2 col-md-3 col-4 text-center">
                        <img src={slack} className="img-fluid" alt="" />
                    </div>
                     <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={google} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={uber} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-4 text-center">
                        <img src={netflix} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={airhub} className="img-fluid" alt="" />
                    </div> */}
                    
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={serviceNow} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={aws} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={salesforce} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={customDev} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={azure} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 text-center">
                        <img src={workday} className="img-fluid" alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;