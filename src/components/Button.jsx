import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { isOutline, secondary_btn, primary_btn } = props;
  return (
    <Btn>
      <div className={isOutline ? "secondary_btn" : "primary_btn"}>
        {props.name}
      </div>
    </Btn>
  );
};

export default Button;

const Btn = styled.div`
  align-items: center;
  margin-top: -5px;
  border-radius: 25px;
  background-color: var(--btnColor);
  cursor: pointer;

  &:hover {
    background-color: var(--btnHoverColor);
  }
  .primary_btn {
    padding: 17px 30px;
    color: white;
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .secondary_btn {
    padding: 17px 30px;
    border: 1px solid black;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
    background-color: white;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: var(--primaryColor);
    }
  }
  @media screen and (max-width: 425px) {
    .primary_btn {
      padding: 30px 30px;
      font-size: 1.7rem;
      color: white;
    }
    .secondary_btn {
      padding: 30px 30px;
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 375px) {
    .primary_btn {
      padding: 30px 30px;
      color: white;
      font-size: 2.2rem;
    }
    .secondary_btn {
      padding: 30px 30px;
      font-size: 2.2rem;
    }
  }
`;
