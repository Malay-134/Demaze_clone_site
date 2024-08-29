import React from "react";
import styled from "styled-components";
import logo from "../assets/demazeLogo.png";
import Button from "./Button";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <Navbar>
      <div className="main">
        <div className="logo">
          <img src={logo} alt="Demaze"></img>
        </div>
        <ul className="navLists">
          <li className="navItem">
            <a href="" className="navLink">
              Services
            </a>
          </li>
          <li className="navItem">
            <a href="" className="navLink">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <div className="contact-btn">
          <Button name="Contact Us" />
        </div>
        <div className="menu-btn">
          <MdMenu className="menu" size={20} />
        </div>
      </div>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.div`
  width: auto;
  display: flex;
  margin: 120px;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 20;
  .main {
    display: flex;
    flex-direction: row;
    margin-left: 120px;
    .navLists {
      display: flex;
      align-items: center;
      margin-left: 75px;
      margin-top: -10px;
      gap: 40px;
      display: flex;
      flex-direction: row;
      list-style: none;
      .navItem {
        .navLink {
          display: inline-block;
          color: black;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #000;
            transition: width 0.3s;
          }
          &:hover::after {
            width: 100%;
            transition: width 0.3s;
          }
        }
      }
    }
    .logo {
      img {
        width: 150px;
        height: 50px;
      }
    }
  }
  .contact {
    margin-right: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    .menu-btn {
      display: none;
      .menu {
        height: 50px;
        width: 50px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: auto 0px;
  }
  @media screen and (max-width: 768px) {
    width: 120%;
    .main {
      margin-left: 76px;
      margin-right: 100px;
      .navLists {
        display: none;
      }
      .logo {
        img {
          width: 160px;
          height: 64px;
        }
      }
    }
    .contact {
      margin-right: 80px;
      .contact-btn {
        display: none;
      }
      .menu-btn {
        display: block;
        .menu {
          height: 50px;
          width: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 190%;
  }
  @media screen and (max-width: 375px) {
    width: 250%;
    padding-top: 3rem;
    .main {
      .logo {
        img {
          width: 240px;
          height: 86px;
        }
      }
    }
  }
`;
