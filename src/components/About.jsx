import React from "react";
import styled from "styled-components";
import img1 from "../assets/aboutus.png";
import img2 from "../assets/digitrans.png";
import { BsArrowRightSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <Container>
      <h1>A Little</h1>
      <h2>About Us</h2>
      <div className="info">
        <div className="image">
          <div className="image1">
            <img src={img1} alt="img1" />
            <div className="text">
              <h3>Your Product Partner</h3>
              <p className="secondary_text ">
                Let's build strategy and your product together
              </p>
            </div>
          </div>
        </div>
        <div className="text_div">
          <h1>Who Are We?</h1>
          <p className="secondary_text">
            We are a group of brilliant & helpful minds and exceptional talents
            who promote the value of effective communication and process
            transparency.
          </p>
          <div className="learn">
            <h1>Learn More</h1>
            <div className="arrow">
              <BsArrowRightSquareFill size={19} className="icon" />
            </div>
          </div>
          <p className="about secondary_text">
            We are believers in change! A change is driven by technology and
            innovation. We help individuals, start-ups, businesses, and
            enterprises adapt and adopt digital transformation. We aim to change
            people's lives and improve businesses with our progressive,
            value-adding, innovative technology solutions.
          </p>
        </div>
      </div>
      <div className="info1">
        <div className="image">
          <div className="image1">
            <img src={img2} alt="img2" />
            <div className="text">
              <h3>Value Addition</h3>
              <p className="secondary_text ">
                Reduction in your cost and efforts by addition of value
              </p>
            </div>
          </div>
        </div>
        <div className="text_div">
          <h1>What We Do Best</h1>
          <p className="secondary_text">
            We add the value to your idea's execution
          </p>
          <div className="learn">
            <h1>Learn More</h1>
            <div className="arrow">
              <BsArrowRightSquareFill size={19} className="icon" />
            </div>
          </div>
          <p className="about secondary_text">
            We start by listening to the ideas, issues, requirements, challenges
            and objectives. The process continues with an effort to understand
            the business, market sector and competitors to develop information
            which is combined with our technical knowledge, expertise and
            research in order to provide the best solution at the lowest cost.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin: 0 140px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
  h2 {
    color: #000;
    font-size: 3rem;
    font-weight: 600;
  }
  .info {
    margin-top: 70px;
    display: flex;
    .image {
      margin-top: 30px;
      width: 50%;
      .image1 {
        height: 270px;
        width: 270px;
        border-radius: 50%;
        overflow: hidden;
        img {
          overflow: hidden;
          height: 270px;
          width: 270px;
          object-fit: cover;
        }
        .text {
          padding: 15px 5px;
          padding-right: 20px;
          border-radius: 10px;
          box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          position: absolute;
          margin-top: -115px;
          margin-left: 80px;
          z-index: 11;
          h3 {
            position: relative;
            margin-left: 10px;
            font-size: 20px;
            font-weight: 700;
          }
          .secondary_text {
            margin-left: 10px;
            font-size: 1rem;
            font-weight: 400;
            width: 80%;
          }
        }
      }
    }
    .text_div {
      width: 50%;
      margin-top: -25px;
      h1 {
        color: #000;
        font-size: 36px;
        font-weight: 500;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      .learn {
        display: flex;
        gap: 5px;
        h1 {
          padding: 15px 0;
          font-size: 18px;
          font-weight: 600;
        }
        .arrow {
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          .icon {
            color: #000;
          }
        }
      }
      .about {
        padding-left: 32px;
        padding-top: 8px;
        width: 90%;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 4px;
          height: 162px;
          margin-left: -15px;
          margin-top: -10px;
          background: var(--primaryColor);
        }
      }
    }
  }
  .info1 {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 120px;
    .image {
      margin-top: 30px;
      width: 50%;
      .image1 {
        height: 270px;
        width: 270px;
        border-radius: 50%;
        overflow: hidden;
        img {
          overflow: hidden;
          height: 270px;
          width: 270px;
          object-fit: cover;
        }
        .text {
          padding: 15px 5px;
          padding-right: 20px;
          border-radius: 10px;
          box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          position: absolute;
          margin-top: -115px;
          margin-left: 80px;
          z-index: 11;
          width: 21%;
          height: 12%;
          h3 {
            margin-left: 10px;
            font-size: 20px;
            font-weight: 700;
          }
          .secondary_text {
            margin-left: 10px;
            font-size: 1rem;
            font-weight: 400;
          }
        }
      }
    }
    .text_div {
      width: 50%;
      margin-top: -25px;
      h1 {
        color: #000;
        font-size: 36px;
        font-weight: 500;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      .learn {
        display: flex;
        gap: 5px;
        h1 {
          padding: 15px 0;
          font-size: 18px;
          font-weight: 600;
        }
        .arrow {
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          .icon {
            color: #000;
          }
        }
      }
      .about {
        padding-left: 32px;
        padding-top: 8px;
        width: 90%;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 4px;
          height: 162px;
          margin-left: -15px;
          margin-top: -10px;
          background: var(--primaryColor);
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .info {
      gap: 15px;
      .image {
        .image1 {
          .text {
            width: 24%;
            height: 15%;
          }
        }
      }
      .text_div {
        .about {
          &::before {
            width: 4px;
            height: 192px;
            margin-left: -20px;
            margin-top: 0px;
          }
        }
      }
    }
    .info1 {
      gap: 15px;
      .image {
        .image1 {
          .text {
            width: 24%;
            height: 15%;
          }
        }
      }
      .text_div {
        .about {
          &::before {
            width: 4px;
            height: 222px;
            margin-left: -20px;
            margin-top: 0px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    .info {
      flex-direction: column;
      gap: 50px;
      .image {
        .image1 {
          .text {
            width: 31%;
            height: 15%;
          }
        }
      }
      .text_div {
        width: 100%;
        .about {
          &::before {
            width: 4px;
            height: 122px;
            margin-left: -20px;
            margin-top: 0px;
          }
        }
      }
    }
    .info1 {
      flex-direction: column;
      gap: 50px;
      .image {
        .image1 {
          .text {
            width: 31%;
            height: 15%;
          }
        }
      }
      .text_div {
        width: 100%;
        .about {
          &::before {
            width: 4px;
            height: 122px;
            margin-left: -20px;
            margin-top: 0px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 150%;
    h1 {
      font-size: 2.5rem;
    }
    .info,
    .info1 {
      flex-direction: column;
      gap: 120px;
      .image {
        .image1 {
          margin-top: -50px;
          margin-left: 60px;
          height: 500px;
          width: 500px;
          img {
            width: 100%;
            height: 100%;
          }
          .text {
            margin-left: 20px;
            width: 110%;
            height: 30%;
            h3 {
              font-size: 40px;
            }
            .secondary_text {
              font-size: 31px;
            }
          }
        }
      }
      .text_div {
        width: 100%;
        h1 {
          font-size: 60px;
        }
        p {
          line-height: 38px;
          font-size: 32px;
        }
        .learn {
          h1 {
            font-size: 36px;
          }
          .arrow {
            margin-top: 25px;
            .icon {
              width: 35px;
              height: 35px;
            }
          }
        }
        .about {
          &::before {
            width: 7px;
            height: 390px;
            margin-left: -30px;
            margin-top: 0px;
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
      font-size: 4rem;
    }
    .info,
    .info1 {
      flex-direction: column;
      gap: 180px;
      .image {
        .image1 {
          margin-top: -50px;
          margin-left: 20px;
          height: 700px;
          width: 700px;
          img {
            width: 100%;
            height: 100%;
          }
          .text {
            margin-left: 40px;
            width: 175%;
            height: 43%;
            h3 {
              font-size: 50px;
            }
            .secondary_text {
              font-size: 43px;
            }
          }
        }
      }
      .text_div {
        width: 100%;
        h1 {
          font-size: 75px;
        }
        p {
          line-height: 54px;
          font-size: 40px;
        }
        .learn {
          h1 {
            font-size: 46px;
          }
          .arrow {
            margin-top: 30px;
            .icon {
              width: 40px;
              height: 40px;
            }
          }
        }
        .about {
          &::before {
            width: 8px;
            height: 595px;
            margin-left: -30px;
            margin-top: 0px;
          }
        }
      }
    }
  }
`;
