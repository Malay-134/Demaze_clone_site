import React from "react";
import styled from "styled-components";
import logo from "../assets/demazeLogo.png";
import {
  FaTwitter,
  FaFacebook,
  FaSkype,
  FaLinkedin,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";

import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <Container>
      <div className="footer-content">
        <div className="footer-content-1">
          <img src={logo} alt="logo" />
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebook size={25} className="icon" />
            </a>
            <a href="https://x.com/">
              <FaTwitter size={25} className="icon" />
            </a>
            <a href="https://www.skype.com/en/">
              <FaSkype size={25} className="icon" />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin size={25} className="icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare size={25} className="icon" />
            </a>
            <a href="https://in.pinterest.com/">
              <FaPinterest size={25} className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-content-2">
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact Us </li>
          </ul>
        </div>
        <div className="footer-content-3">
          <h2>Services</h2>
          <ul>
            <li>Mobile App Development</li>
            <li>Website Development</li>
            <li>AI Development</li>
            <li>Game Development</li>
          </ul>
        </div>
        <div className="footer-content-4">
          <h2>Contact Us</h2>
          <div className="address">
            <div className="location">
              <MdLocationOn size={25} className="icon" />
            </div>
            <div className="title">
              <p className="secondary_text">
                D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota,
                Ahmedabad, Gujarat, 382470
              </p>
            </div>
          </div>

          <div className="phone">
            <div className="contact">
              <IoMdCall size={25} className="icon" />
            </div>
            <div className="title">
              <p className="secondary_text">(+91) 7016660537</p>
            </div>
          </div>
          <div className="mail">
            <div className="e-mail">
              <MdEmail size={25} className="icon" />
            </div>
            <div className="title">
              <p className="secondary_text">info@demaze.in</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        All Rights Reserved By © Demaze Technologies 2021-2022.
      </p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  color: black;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 90px;
  padding-top: 40px;
  margin-top: 100px;
  .footer-content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    gap: 80px;
    .footer-content-1,
    .footer-content-2,
    .footer-content-3,
    .footer-content-4 {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 20px;
      width: 25%;
      img {
        width: 160px;
        height: 64px;
      }
      .footer-social-icons {
        margin-top: 15px;
        display: flex;
        gap: 14px;
        a {
          .icon {
            color: #000;
          }
        }
      }
      li {
        list-style: none;
        margin-bottom: 10px;
        cursor: pointer;
        color: #333333;
      }
      h2 {
        font-size: 19px;
        font-weight: 600;
        color: #000;
      }
      .mail {
        display: flex;
        align-items: center;
        .title {
          .secondary_text {
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            margin-top: -10px;
          }
        }
      }
      .address {
        display: flex;
        .title {
          .secondary_text {
            font-size: 16px;
            font-weight: 400;
            color: #333333;
          }
        }
      }
      .phone {
        display: flex;
        align-items: center;
        .title {
          .secondary_text {
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            margin-top: -10px;
          }
        }
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
    opacity: 0.2;
    background-color: grey;
    border: none;
  }
  .footer-copyright {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    width: 105%;
  }
  @media screen and (max-width: 425px) {
    width: 170%;
    .footer-content {
      flex-direction: column;
      gap: 60px;
      .footer-content-1,
      .footer-content-2,
      .footer-content-3,
      .footer-content-4 {
        align-items: start;
        width: 100%;
        img {
          width: 340px;
          height: 140px;
        }
        .footer-social-icons {
          margin-top: 35px;
          gap: 25px;
          .icon {
            width: 50px;
            height: 50px;
          }
        }
        h2 {
          font-size: 36px;
          font-weight: 600;
        }
        li {
          margin-bottom: 30px;
          font-size: 32px;
        }
        .mail,
        .address,
        .phone {
          gap: 25px;
          .icon {
            width: 50px;
            height: 50px;
          }
          .title {
            .secondary_text {
              font-size: 32px;
            }
          }
        }
      }
    }
    .footer-copyright {
      text-align: center;
      font-size: 26px;
    }
  }
  @media screen and (max-width: 375px) {
    width: 215%;
    .footer-content {
      gap: 80px;
      .footer-content-1,
      .footer-content-2,
      .footer-content-3,
      .footer-content-4 {
        align-items: start;
        width: 100%;
        gap: 40px;
        img {
          width: 380px;
          height: 160px;
        }
        .footer-social-icons {
          margin-top: 60px;
          gap: 40px;
          .icon {
            width: 65px;
            height: 65px;
          }
        }
        h2 {
          font-size: 50px;
        }
        li {
          margin-bottom: 50px;
          font-size: 44px;
        }
        .mail,
        .address,
        .phone {
          gap: 25px;
          .icon {
            width: 65px;
            height: 65px;
          }
          .title {
            .secondary_text {
              font-size: 40px;
            }
          }
        }
      }
    }
    .footer-copyright {
      font-size: 36px;
    }
  }
`;
