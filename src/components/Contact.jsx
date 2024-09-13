import React from "react";
import styled from "styled-components";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  const onSubmitHandler = (data) => {
    console.log(data);
    const JsonData = JSON.stringify(data);
    localStorage.setItem("FormData", JsonData);
    toast.success("Form submitted successfully");
    alert("Form data saved to local storage!");
  };
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
            <a
              href="https://www.google.com/maps/place/Ganesh+Glory+11/@23.114257,72.5377561,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8340ebe5d7cb:0x4b3ffb517276bef6!8m2!3d23.1142521!4d72.540331!16s%2Fg%2F11p76kt1wq?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              className="secondary_text"
            >
              D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota,
              Ahmedabad, Gujarat, 382470
            </a>
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
        <form
          onSubmit={handleSubmit(onSubmitHandler, onError)}
          className="main"
        >
          <div className="input-row1">
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "FirstName is required",
                })}
              />
              {errors.firstName && (
                <span className="secondary_text">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="secondary_text">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
          <div className="input-row2">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="secondary_text">{errors.email.message}</span>
              )}
            </div>
            <div className="input-group">
              <input
                type="number"
                className="no-spinner"
                placeholder="Phone Number"
                {...register("phonenumber", {
                  required: "Phone is required",
                  maxLength: {
                    value: 10,
                    message: "Phone number should be 10 digits",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number should be 10 digits",
                  },
                })}
              />
              {errors.phonenumber && (
                <span className="secondary_text">
                  {errors.phonenumber.message}
                </span>
              )}
            </div>
            <div className="input-group">
              <input
                className="message"
                type="text"
                placeholder="Message"
                {...register("message")}
              />
            </div>
            <button type="submit" className="submit">
              S U B M I T
            </button>
          </div>
        </form>
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
        text-decoration: none;
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
          .secondary_text {
            color: red;
            font-size: 0.8rem;
          }
          input {
            width: 90%;
            border: none;
            padding: 10px;
            border-bottom: 1px solid black;
            &::placeholder {
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
          .secondary_text {
            font-size: 0.8rem;
            color: red;
          }
          input {
            width: 95%;
            border: none;
            padding: 10px;
            border-bottom: 1px solid black;
            &::placeholder {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
        .submit {
          padding: 17px 30px;
          color: white;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 20px;
          background-color: var(--btnColor);
          cursor: pointer;
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
            .secondary_text {
              font-size: 24px;
              color: red;
            }
            input {
              width: 85%;
              padding: 30px 20px;
              font-size: 32px;
              &::placeholder {
                font-size: 32px;
                line-height: 38px;
              }
            }
          }
        }
        .input-row2 {
          .input-group {
            .secondary_text {
              font-size: 24px;
              color: red;
            }
            .message {
              padding: 10px 10px 130px 20px;
            }
            input {
              padding: 30px 20px;
              font-size: 32px;
              &::placeholder {
                font-size: 32px;
                line-height: 38px;
              }
            }
          }
          .submit {
            padding: 30px 10px;
            font-size: 30px;
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
            .secondary_text {
              font-size: 35px;
              color: red;
            }
            input {
              width: 85%;
              padding: 30px 20px;
              font-size: 40px;
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
            .secondary_text {
              font-size: 35px;
              color: red;
            }
            input {
              padding: 40px 20px;
              font-size: 40px;
              &::placeholder {
                font-size: 40px;
                line-height: 54px;
              }
            }
          }
          .submit {
            padding: 30px 10px;
            font-size: 32px;
          }
        }
      }
    }
  }
`;
