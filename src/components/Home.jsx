import React from "react";
import Button from "./Button";
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Home = () => {
  return (
    <Container>
      <div className="text_div">
        <h1>
          Where idea turns into Reality<span className="blue">.</span>{" "}
        </h1>
        <p>
          Deliver superior customer experince by upgrading your business
          processes through Website & Mobile Application.
        </p>
        <div className="btns">
          <Button name="Contact Us" />
          <Button name="About US" isOutline={true} />
        </div>
      </div>
      <div className="img_div">
        <div className="image1">
          <img src={img1} alt="img1" />
          <div className="text1">
            <h3>Highly skilled team</h3>
          </div>
        </div>
        <div className="image2">
          <img src={img2} alt="img2" />
          <div className="text2">
            <h3>End-to-End support</h3>
          </div>
        </div>
        <div className="image3">
          <img src={img3} alt="img3" />
          <div className="text3">
            <h3>Cost effective</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 140px;
  margin-top: -80px;
  display: flex;
  flex-direction: row;
  .text_div {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-size: 72px;
      font-weight: 700;
      line-height: 72px;
      .blue {
        color: var(--primaryColor);
      }
    }
    p {
      color: var(--secondaryColor);
      width: 100%;
    }
    .btns {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }
  }
  .img_div {
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: -20px;
    .image1,
    .image2,
    .image3 {
      height: 250px;
      width: 250px;
      border-radius: 50%;
      overflow: hidden;
      img {
        overflow: hidden;
        height: 250px;
        width: 250px;
        object-fit: cover;
      }
      .text1,
      .text2,
      .text3 {
        padding: 25px 10px;
        padding-top: 10px;
        padding-right: 20px;
        border-radius: 20px;
        box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
        background-color: #f9fafb;
        position: absolute;
        margin-top: -205px;
        margin-left: 130px;
        z-index: 11;
        h3 {
          margin-left: 40px;
          font-size: 1rem;
          font-weight: 700;
          &::before {
            content: "";
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            margin-left: -40px;
            border-radius: 60%;
            background: var(--primaryColor);
          }
        }
      }
      .text2 {
        margin-top: -160px;
      }
      .text3 {
        margin-top: -90px;
      }
    }
    .image2 {
      margin-top: -100px;
      margin-left: 230px;
    }
    .image3 {
      margin-left: 20px;
      margin-top: -70px;
    }
  }
  @media screen and (min-width: 1024px) {
    .img_div {
      .image2 {
        display: block;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    margin: auto;
    margin-left: 130px;
    margin-top: -100px;
    .text_div {
      width: 85%;
      .btns {
        flex-direction: column;
      }
    }
    .img_div {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 110%;
    .text_div {
      p {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    margin-left: 140px;
    margin-top: -50px;
    width: 170%;
    .text_div {
      gap: 30px;
      h1 {
        font-size: 110px;
        line-height: 100px;
      }
      p{
        font-size: 29px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    width: 195%;
    .text_div {
      gap: 40px;
      h1 {
        font-size: 120px;
        line-height: 120px;
      }
      p{
        font-size: 38px;
      }
    }
  }
`;
