import React from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import WebAppDev from '../../../images/logos/webappdev.png';
import MobAppDev from '../../../images/logos/mobileappdev.png';
import CusAPIDev from '../../../images/logos/customapidev.png';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ServiceID = () => {
  const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
  const serviceData = [
    {
      _id: "1",
      name: "Custom Software Development",
      body: "At Dev2Code IT Solutions, we specialize in crafting custom software that drives business innovation and growth. From concept to deployment, our expert team ensures that your software is designed with scalability, security, and user experience in mind. Whether you need a responsive web application or a feature-rich mobile app, we turn your ideas into reality, aligning with your business goals and industry standards.",
      image: "https://example.com/image1.jpg",
      price: 500,
      services: [
        {
          id: "1",
          name: "Web Application Development",
          body: "Leveraging modern technologies like React, Angular, .NET, Python, we build secure, robust, and scalable web applications tailored to your business needs.",
          image:WebAppDev
        },
        {
          id: "2",
          name: "Mobile App Development",
          body: "We offer full-cycle mobile app development for both iOS and Android, providing seamless, intuitive user experiences on any device.",
          image: MobAppDev
        },
        {
          id: "3",
          name: "Custom Api Development",
          body: "Connect and integrate your systems with bespoke APIs designed for performance and security, enabling seamless communication between platforms.",
          image:CusAPIDev
        },
      ],
    },
    {
      _id: "2",
      name: "ERP Solutions (ServiceNow, Salesforce, SAP, Oracle)",
      body: "At Dev2Code IT, we deliver world-class ERP solutions tailored to the unique demands of your business. With certified experts in ServiceNow, Salesforce, SAP, and Oracle, we provide comprehensive ERP consulting, implementation, and support services. Our focus is on optimizing your workflows, enhancing productivity, and delivering the insights you need to make informed business decisions.",
      image: "https://example.com/image2.jpg",
      price: 300,
      services: [
        {
          id: "1",
          name: "ServiceNow Enterprise Solutions",
          body: "We specialize in implementing and customizing ServiceNow across ITSM, CSM, and HRSD modules, automating workflows and improving service delivery across your enterprise.",
        },
        {
          id: "2",
          name: "Salesforce CRM",
          body: "Implement and customize Salesforce to streamline your customer relationship management and drive business success.",
        },
        {
          id: "3",
          name: "SAP Integration",
          body: "End-to-end SAP solutions to improve operational efficiency, integrate business processes, and boost your bottom line.",
        },
        {
          id: "4",
          name: "Oracle ERP",
          body: "We provide tailored Oracle ERP implementations that automate core business functions like finance, supply chain, and human resources.",
        },
      ],
    },
    {
      _id: "3",
      name: "Cloud and Infrastructure Services",
      body: "Cloud technology is reshaping business operations across industries, and Dev2Code IT Solutions is at the forefront of this transformation. We offer comprehensive cloud migration, management, and IT infrastructure services, ensuring your organization runs efficiently and securely in the cloud. From AWS and Azure to ServiceNow cloud solutions, we help you scale and secure your infrastructure while reducing operational costs.",
      image: "https://example.com/image3.jpg",
      price: 400,
      services: [
        {
          id: "1",
          name: "Cloud Migration",
          body: "Seamless transitions to the cloud, with expertise in AWS, Microsoft Azure, Google Cloud, and ServiceNow. We ensure minimal downtime and a secure environment.",
        },
        {
          id: "2",
          name: "Cloud Infrastructure Management",
          body: "End-to-end management of your cloud infrastructure, optimizing performance, security, and cost-efficiency.",
        },
        {
          id: "3",
          name: "Infrastructure as a Service (IaaS)",
          body: "Flexible infrastructure solutions tailored to your business needs, allowing you to scale operations without the limitations of on-premises hardware.",
        },
      ],
    },
    {
      _id: "4",
      name: "UI/UX Design",
      body: "A great user experience is essential for customer satisfaction and business success. At Dev2Code IT Solutions, we craft visually compelling and user-friendly designs that offer seamless navigation and an enjoyable user journey. Our UI/UX team combines creativity and data-driven insights to deliver designs that not only look stunning but also perform efficiently.",
      services: [
        {
          id: "1",
          name: "User Interface Design (UI)",
          body: "Beautifully designed interfaces that reflect your brand identity while ensuring ease of use and functionality.",
        },
        {
          id: "2",
          name: "User Experience Design (UX)",
          body: "We prioritize intuitive design, creating user experiences that keep your customers engaged and coming back for more.",
        },
        {
          id: "3",
          name: "Prototyping & Wireframing",
          body: "Detailed prototypes and wireframes that give you a clear visual of the final product before development begins.",
        },
      ],
    },
    {
      _id: "5",
      name: "Business Process Automation",
      body: "At Dev2Code IT Solutions, we specialize in optimizing your operations through cutting-edge business process automation. Whether you are looking to automate routine tasks or streamline complex workflows, we provide tailored solutions that enhance efficiency and reduce manual effort. Our automation services ensure your business is equipped to thrive in a competitive environment.",
      services: [
        {
          id: "1",
          name: "Workflow Automation ",
          body: "Deploy bots to handle high-volume, rule-based tasks, allowing your team to focus on more strategic initiatives. RPA increases speed and accuracy in handling data, transactions, and communications.",
        },
        {
          id: "2",
          name: "Robotic Process Automation (RPA)",
          body: "Need temporary or long-term IT professionals? We offer resource outsourcing solutions, providing you with skilled professionals to meet project demands.",
        },
        {
          id: "3",
          name: "Process Optimization",
          body: "We analyze and optimize your current workflows to eliminate inefficiencies, ensuring faster completion of tasks and improved resource management.",
        },
        {
          id: "3",
          name: "Custom Automation Solutions",
          body: "Whether it's automating your sales processes, customer service, or supply chain management, we create custom automation tools that meet your business needs.",
        },
      ],
    },
    {
      _id: "6",
      name: "Training and Resource Outsourcing",
      body: "At Dev2Code IT Solutions, we believe in empowering businesses through knowledge and talent. Whether you are looking to upskill your in-house team or outsource IT professionals for a project, we offer solutions that enhance your capabilities. Our training programs and outsourcing services ensure you have access to the best talent and expertise in the industry.",
      services: [
        {
          id: "1",
          name: "IT Training Programs",
          body: "Comprehensive training programs in ServiceNow, ERP systems, web development, and more. Our training is hands-on and designed to equip your teams with the skills they need.",
        },
        {
          id: "2",
          name: "Outsourcing IT Talent",
          body: "Need temporary or long-term IT professionals? We offer resource outsourcing solutions, providing you with skilled professionals to meet project demands.",
        },
        {
          id: "3",
          name: "Corporate IT Training",
          body: "Tailored training solutions for businesses looking to stay ahead of technological advancements. From cloud technologies to automation, we prepare your teams for future challenges.",
        },
      ],
    },
  ];
  const { id } = useParams();
  
  const serviceObj = serviceData.find((service) => service._id === id);
  if (!serviceObj) {
    // If the _id is not found, render the 404 card
    return (
      <div className="not-found-card">
        <h2>404</h2>
        <p>Service Not Found</p>
      </div>
    );
  }
  return (
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
        {serviceObj.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceID;
