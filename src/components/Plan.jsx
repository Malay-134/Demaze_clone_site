import React from "react";
import styled from "styled-components";
import logo1 from "../assets/conversation.png";
import logo2 from "../assets/computer.png";
import logo3 from "../assets/web-programming.png";
import logo4 from "../assets/test.png";
import logo5 from "../assets/web-browser.png";
import logo6 from "../assets/maintain.png";

const plans = [
  {
    id: 1,
    number: "01",
    logo: logo1,
    title: "Discuss",
  },
  {
    id: 2,
    number: "02",
    logo: logo2,
    title: "Design",
  },
  {
    id: 3,
    number: "03",
    logo: logo3,
    title: "Develop",
  },
  {
    id: 4,
    color: "black",
    number: "04",
    logo: logo4,
    title: "Test",
  },
  {
    id: 5,
    number: "05",
    logo: logo5,
    title: "Deploy",
  },
  {
    id: 6,
    number: "06",
    logo: logo6,
    title: "Maintain",
  },
];

const Plan = () => {
  return (
    <Container>
      <p>Know</p>
      <p className="text">Our Process</p>
      <div className="boxes">
        {plans.map(({ id, title, logo, number, color }) => (
          <div className="box" key={id}>
            <div className="number">
              <p>{number}</p>
            </div>
            <div className={`${color} logo`}>
              <img src={logo} className="icon" alt="logo" />
            </div>
            <h3 className="title">{title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Plan;

const Container = styled.div`
  margin: 0 130px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 36px;
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }
  .text {
    line-height: 48px;
    font-size: 32px;
    font-weight: 400;
  }
  .boxes {
    margin-top: 35px;
    display: flex;
    gap: 25px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 900px;
      height: 2px;
      margin-left: 45px;
      margin-top: 110px;
      background: #000;
      z-index: -1;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .number {
        line-height: 36px;
        font-size: 24px;
        font-weight: 400;
      }
      .black {
        .icon {
          filter: invert(0%);
        }
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #e7e7e7;
        margin: 25px;
        height: 100px;
        width: 100px;
        img {
          filter: invert(100%);
          height: 50%;
          width: 40%;
        }
      }
      .title {
        margin: auto 20px;
        color: #000;
        margin-left: 25px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .boxes {
      &::before {
        width: 800px;
        height: 2px;
        margin-left: 20px;
        margin-top: 100px;
      }
      .box {
        .logo {
          margin: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    .boxes {
      flex-direction: column;
      gap: 35px;
      &::before {
        display: none;
      }
      .box {
        .logo {
          height: 140px;
          width: 140px;
          margin: 10px;
        }
        .number {
          p {
            font-size: 24px;
          }
        }
        .title {
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 475px) {
    width: 150%;
    p {
      font-size: 2.8rem;
    }
    .text {
      font-size: 4rem;
      line-height: 4rem;
    }
    .boxes {
      gap: 70px;
      .box {
        gap: 20px;
        .logo {
          height: 220px;
          width: 220px;
        }
        .number {
          p {
            font-size: 32px;
          }
        }
        .title {
          font-size: 33px;
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    width: 190%;
    p {
      font-size: 3.5rem;
    }
    .text {
      margin-top: 20px;
      font-size: 4.5rem;
    }
    .boxes {
      gap: 70px;
      .box {
        gap: 20px;
        .logo {
          height: 290px;
          width: 290px;
        }
        .number {
          p {
            font-size: 50px;
          }
        }
        .title {
          font-size: 40px;
        }
      }
    }
  }
`;
