import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import cusAppLogo from '../../../images/ServicesLogos/custom_app_dev.png';
import ERPLogo from '../../../images/ServicesLogos/ErP.png';
import CIS from '../../../images/ServicesLogos/CloudInfra.png';
import UIUX from '../../../images/ServicesLogos/ui_ux.png';
import BPA from '../../../images/ServicesLogos/BPA.png';
import TrainingSourcing from '../../../images/ServicesLogos/training_outsourcing.png';
import "./Service.css";

const Service = () => {
  // const [serviceData, setServiceData] = useState([]);
  const serviceData = [
    {
      _id: '1',
      name: 'Custom Software Development',
      body: 'At Dev2Code IT Solutions, we specialize in crafting custom software that drives business innovation and growth. From concept to deployment, our expert team ensures that your software is designed with scalability, security, and user experience in mind. Whether you need a responsive web application or a feature-rich mobile app, we turn your ideas into reality, aligning with your business goals and industry standards.',
      image: cusAppLogo,
      price: 500,
    },
    {
      _id: '2',
      name: 'ERP Solutions (ServiceNow, Salesforce, SAP, Oracle)',
      body: 'At Dev2Code IT, we deliver world-class ERP solutions tailored to the unique demands of your business. With certified experts in ServiceNow, Salesforce, SAP, and Oracle, we provide comprehensive ERP consulting, implementation, and support services. Our focus is on optimizing your workflows, enhancing productivity, and delivering the insights you need to make informed business decisions.',
      image: ERPLogo,
      price: 300,
    },
    {
      _id: '3',
      name: 'Cloud and Infrastructure Services',
      body: 'Cloud technology is reshaping business operations across industries, and Dev2Code IT Solutions is at the forefront of this transformation. We offer comprehensive cloud migration, management, and IT infrastructure services, ensuring your organization runs efficiently and securely in the cloud. From AWS and Azure to ServiceNow cloud solutions, we help you scale and secure your infrastructure while reducing operational costs.',
      image: CIS,
      price: 400,
    },
    {
      _id: '4',
      name: 'UI/UX Design',
      body: 'A great user experience is essential for customer satisfaction and business success. At Dev2Code IT Solutions, we craft visually compelling and user-friendly designs that offer seamless navigation and an enjoyable user journey. Our UI/UX team combines creativity and data-driven insights to deliver designs that not only look stunning but also perform efficiently.',
      image: UIUX
    },
    {
      _id: '5',
      name: 'Business Process Automation',
      body: 'At Dev2Code IT Solutions, we specialize in optimizing your operations through cutting-edge business process automation. Whether you are looking to automate routine tasks or streamline complex workflows, we provide tailored solutions that enhance efficiency and reduce manual effort. Our automation services ensure your business is equipped to thrive in a competitive environment.',
      image: BPA
    },
    {
      _id: '6',
      name: 'Training and Resource Outsourcing',
      body: 'At Dev2Code IT Solutions, we believe in empowering businesses through knowledge and talent. Whether you are looking to upskill your in-house team or outsource IT professionals for a project, we offer solutions that enhance your capabilities. Our training programs and outsourcing services ensure you have access to the best talent and expertise in the industry.',
      image: TrainingSourcing
    }
  ];
  
  // useEffect(() => {
  //     fetch('https://cryptic-tor-66942.herokuapp.com/serviceList')
  //         .then(response => response.json())
  //         .then(data => {
  //             setServiceData(data);
  //         })
  // }, [])
  return (
    <section id="service">
      <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="common-heading">
                <h3>
                  Provide awesome <span>services</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-3">
            {serviceData.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
