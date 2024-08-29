import React from "react";
import styled from "styled-components";
import logo1 from "../assets/ecommerce.png";
import logo2 from "../assets/finance.png";
import logo3 from "../assets/manufacture.png";
import logo4 from "../assets/health.png";
import logo5 from "../assets/entertainment.png";
import logo6 from "../assets/education.png";
import logo7 from "../assets/travel.png";
import logo8 from "../assets/social-media.png";
import logo9 from "../assets/real-estate.png";
import logo10 from "../assets/pizza.png";
import logo11 from "../assets/megaphone.png";
import logo12 from "../assets/sport-equipment.png";

const solutions = [
  {
    id: 1,
    logo: logo1,
    title: "eCommerce",
  },
  {
    id: 2,
    logo: logo2,
    title: "Finance, Banking and Insurance",
  },
  {
    id: 3,
    logo: logo3,
    title: "Manufacturing",
  },
  {
    id: 4,
    logo: logo4,
    title: "Wellness and Health",
  },
  {
    id: 5,
    logo: logo5,
    title: "Entertainment",
  },
  {
    id: 6,
    logo: logo6,
    title: "Education",
  },
  {
    id: 7,
    logo: logo7,
    title: "Travel & Hospitality",
  },
  {
    id: 8,
    logo: logo8,
    title: "Social media & Communication",
  },
  {
    id: 9,
    logo: logo9,
    title: "Real-estate",
  },
  {
    id: 10,
    logo: logo10,
    title: "Food & Beverages",
  },
  {
    id: 11,
    logo: logo11,
    title: "Marketing",
  },
  {
    id: 12,
    logo: logo12,
    title: "Sports",
  },
];

const Solution = () => {
  return (
    <Container>
      <h1>Solution</h1>
      <h2>We Provide To Transform Industries Digitally</h2>
      <div className="boxes">
        {solutions.map(({ id, title, logo }) => (
          <div className="box" key={id}>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h3 className="title">{title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Solution;

const Container = styled.div`
  margin: 0 130px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primaryColor);
  h2 {
    line-height: 72px;
    color: #000;
    font-size: 3rem;
    font-weight: 600;
  }
  .boxes {
    margin-top: 35px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 50px;
    .box {
      display: flex;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.1);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo {
        margin: 25px;
        height: 70px;
        width: 70px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .title {
        color: #000;
        margin-left: 25px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h2 {
      text-align: center;
    }
    .boxes {
      row-gap: 30px;
      column-gap: 30px;
      .box {
        padding: 5px;
        .title {
          margin-left: 0px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    .boxes {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      .box {
        padding: 5px 50px;
        .logo {
          height: 90px;
          width: 90px;
        }
        .title {
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 150%;
    h1 {
      font-size: 2.5rem;
    }
    .boxes {
      .box {
        padding: 60px 30px;
        padding-top: 10px;
        .logo {
          height: 140px;
          width: 140px;
        }
        .title {
          font-size: 31px;
          line-height: 45px;
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
      line-height: 5rem;
      font-size: 4rem;
    }
    .boxes {
      row-gap: 40px;
      column-gap: 40px;
      .box {
        padding: 50px 30px;
        padding-top: 10px;
        .logo {
          height: 180px;
          width: 180px;
        }
        .title {
          font-size: 40px;
          line-height: 55px;
        }
      }
    }
  }
`;
