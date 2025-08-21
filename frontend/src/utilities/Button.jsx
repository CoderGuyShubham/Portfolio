import React from "react";
import styled from "styled-components";

const Button = ({ initialText = "Know me better", hoverText = "About me" }) => {
  return (
    <StyledWrapper>
      <div className="btn">
        <span data-text={hoverText}>{initialText}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  .btn {
    background: transparent;
    border: 1px solid var(--primary);
    outline: none;
    padding: 8px 30px; /* smaller padding */
    height: 45px; /* smaller height */
    border-radius: 100px;
    overflow: hidden;
    transform: scaleX(1);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }

  .btn:hover {
    animation: animate-scaleX 0.6s cubic-bezier(0.4, 0, 0, 1);
    background: transparent;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--button-bg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1),
      border-radius 0.5s cubic-bezier(0.4, 0, 0, 1);
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 0 0;
    transform: translateY(100%);
    z-index: 0;
  }

  .btn:hover::after {
    transform: translateY(0%);
    border-radius: 0;
  }

  .btn span {
    font-size: 14px; /* smaller text size */
    font-weight: 500;
    overflow: hidden;
    position: relative;
    color: var(--primary);
    z-index: 1;
    font-family: "Satoshi-Medium", sans-serif;
  }

  .btn span:after {
    width: 100%;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
    content: attr(data-text);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 1;
    transform: translate(-50%, 100%);
    color: var(--button-text);
    font-family: "Satoshi-Medium", sans-serif;
  }

  .btn:hover span:after {
    transform: translate(-50%, 0);
  }

  .btn:focus {
    outline: none;
  }

  @keyframes animate-scaleX {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1.05);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

export default Button;
