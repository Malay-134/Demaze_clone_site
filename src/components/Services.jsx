import React from "react";
import styled from "styled-components";
import logo1 from "../assets/website-coding.png";
import logo2 from "../assets/application.png";
import logo3 from "../assets/game.png";
import logo4 from "../assets/artificial-intelligence.png";
import logo5 from "../assets/social-media-marketing.png";
import logo6 from "../assets/graphic-design.png";

const services = [
  {
    id: 1,
    logo: logo1,
    title: "Web Development",
    description:
      "We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development.",
  },
  {
    id: 2,
    logo: logo2,
    title: "App Development",
    description:
      "We deliver next-generation iOS, Android and Flutter applications to meet the most demanding customer requirements. Our skilled team design and develop custom feature-packed apps across various business segments.",
  },
  {
    id: 3,
    logo: logo3,
    title: "Game Development",
    description:
      "We focus on expanding your imagination. Our mobile game team offers art and design, user experience design, and cross-platform mobile game development services using Unity and Unreal engines.",
  },
  {
    id: 4,
    logo: logo4,
    title: "Artificial Intelligence",
    description:
      "Demaze Technologies offers the best AI development services per the client's requirements. We are experienced in AI development, Natural language processing, computer vision and deep learning to create accurate apps.",
  },
  {
    id: 5,
    logo: logo5,
    title: "Social Media Marketing",
    description:
      "A successful digital marketing campaign attracts more customers and generates conversions. We have a complete digital marketing service package that promises augmented website traffic and a fruitful customer base.",
  },
  {
    id: 6,
    logo: logo6,
    title: "Graphic Designing",
    description:
      "At Demaze, We offer graphic design solutions to businesses of all types like brochures, branding banners, social media posts, creative portfolios, logos and brand identity designs.",
  },
];

const Services = () => {
  return (
    <Container>
      <h1>Services</h1>
      <h2>We Provide For Your Brand</h2>
      <div className="boxes">
        {services.map(({ id, title, logo, description }) => (
          <div className="box" key={id}>
            <div className="service-logo">
              <img src={logo} alt="service-logo" />
            </div>
            <h3 className="title">{title}</h3>
            <div className="text">
              <p className="secondary_text">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: auto;
  margin: 0 140px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
  h2 {
    text-align: center;
    color: #000;
    font-size: 3rem;
    font-weight: 600;
  }
  .boxes {
    margin-top: 35px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    .box {
      display: flex;
      border-radius: 10px;
      border: 1px solid #f3f4f6;
      flex-direction: column;
      justify-content: start;
      .service-logo {
        margin: 25px;
        height: 90px;
        width: 90px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .title {
        color: black;
        margin-left: 25px;
        font-size: 20px;
        font-weight: 600;
      }
      .text {
        margin-top: 10px;
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 50px;
      }
      &:hover {
        box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .boxes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    margin-left: 100px;
    margin-top: 50px;
    width: 150%;
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      margin-left: 80px;
      width: 118%;
    }
    .boxes {
      margin-left: 20px;
      grid-template-columns: repeat(1, 1fr);
      .box {
        width: 110%;
        .service-logo {
          margin: 40px;
          height: 170px;
          width: 170px;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .title {
          margin-right: 40px;
          font-size: 40px;
        }
        .text {
          margin-top: 40px;
          margin-right: 40px;
          p {
            font-size: 32px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    width: 190%;
    h1 {
      font-size: 3rem;
    }
    h2 {
      margin-left: 20px;
      font-size: 4rem;
    }
    .boxes {
      margin-left: -30px;
      .box {
        width: 115%;
        .service-logo {
          margin: 60px;
          height: 200px;
          width: 200px;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .title {
          margin-left: 60px;
          font-size: 50px;
        }
        .text {
          margin-top: 60px;
          margin-left: 60px;
          p {
            font-size: 43px;
          }
        }
      }
    }
  }
`;
