import React from "react";
import styled from "styled-components";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Button from "./Button";

const Contact = () => {
  return (
    <Container>
      <div className="card">
        <div className="title">
          <h3>Get In Touch</h3>
          <p className="text secondary_text">
            Gurenteed response within one business day!
          </p>
        </div>
        <div className="address">
          <div className="location">
            <MdLocationOn size={60} />
          </div>
          <div className="title">
            <h3>visit us</h3>
            <p className="secondary_text">
              D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota,
              Ahmedabad, Gujarat, 382470
            </p>
          </div>
        </div>
        <div className="mail">
          <div className="e-mail">
            <MdEmail size={60} />
          </div>
          <div className="title">
            <h3>Mail us</h3>
            <p className="secondary_text">info@demaze.in</p>
          </div>
        </div>
        <div className="phone">
          <div className="contact">
            <IoMdCall size={60} />
          </div>
          <div className="title">
            <h3>Phone us</h3>
            <p className="secondary_text">(+91) 7016660537</p>
          </div>
        </div>
      </div>
      <div className="form">
        <h1>Let's discuss your project</h1>
        <div className="main">
          <div className="input-row1">
            <div className="input-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-row2">
            <div className="input-group">
              <input type="mail" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-group">
              <input className="message" type="mail" placeholder="Message" />
            </div>
            <div className="btn">
              <Button name="S U B M I T" className="submit" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  margin: 0 130px;
  margin-top: 260px;
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    color: white;
    padding: 3rem 2rem;
    width: 27%;
    border-radius: 20px;
    background: url(https://www.demaze.in/home/bg_contact.png);
    background-size: cover;
    background-repeat: no-repeat;
    .title {
      align-items: center;
      h3 {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 36px;
      }
      .secondary_text {
        font-size: 1rem;
        line-height: 24px;
        color: white;
        padding-top: 10px;
      }
    }
    .address {
      display: flex;
      gap: 30px;
      padding-top: 25px;
    }
    .mail {
      display: flex;
      gap: 30px;
      padding-top: 25px;
    }
    .phone {
      display: flex;
      gap: 30px;
      padding-top: 25px;
    }
  }
  .form {
    h1 {
      padding: 35px 60px;
      font-weight: 600;
      font-size: 40px;
      line-height: 60px;
    }
    .main {
      padding: 3px 60px;
      .input-row1 {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .input-group {
          width: 100%;
          input {
            width: 90%;
            border: none;
            padding: 10px;
            border-bottom: 1px solid black;
            &::placeholder {
              padding: 5px;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
      .input-row2 {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .input-group {
          width: 100%;
          .message {
            padding: 10px 10px 110px 10px;
          }
          input {
            width: 95%;
            border: none;
            padding: 10px;
            border-bottom: 1px solid black;
            &::placeholder {
              padding: 5px;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
        .btn {
          padding: 5px 400px 0px 5px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .card {
      width: 85%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    .card {
      margin-left: -50px;
      width: 110%;
    }
    .form {
      margin-left: -120px;
      width: 140%;
      h1 {
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 150%;
    .card {
      gap: 40px;
      .title {
        h3 {
          font-size: 40px;
        }
        .secondary_text {
          font-size: 31px;
          line-height: 50px;
        }
      }
    }
    .form {
      h1 {
        font-size: 60px;
      }
      .main {
        .input-row1 {
          padding: 40px 0;
          .input-group {
            input {
              width: 85%;
              padding: 30px 20px;
              &::placeholder {
                font-size: 32px;
                line-height: 38px;
              }
            }
          }
        }
        .input-row2 {
          .input-group {
            .message {
              padding: 10px 10px 130px 20px;
            }
            input {
              padding: 30px 20px;
              &::placeholder {
                font-size: 32px;
                line-height: 38px;
              }
            }
          }
          .btn {
            padding: 10px 30px 0px 10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    width: 165%;
    .card {
      padding: 5rem 4rem;
      gap: 40px;
      .title {
        h3 {
          font-size: 60px;
        }
        .secondary_text {
          padding-top: 35px;
          font-size: 43px;
          line-height: 70px;
        }
      }
    }
    .form {
      margin-left: -130px;
      width: 160%;
      h1 {
        font-size: 75px;
        line-height: 85px;
      }
      .main {
        .input-row1 {
          padding: 40px 0;
          .input-group {
            input {
              width: 85%;
              padding: 30px 20px;
              &::placeholder {
                font-size: 40px;
                line-height: 54px;
              }
            }
          }
        }
        .input-row2 {
          .input-group {
            .message {
              padding: 30px 0px 150px 25px;
            }
            input {
              padding: 40px 20px;
              &::placeholder {
                font-size: 40px;
                line-height: 54px;
              }
            }
          }
          .btn {
            padding: 10px 30px 0px 10px;
          }
        }
      }
    }
  }
`;
