import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  /* width: 10rem; */
  display: block;
  margin: 2rem auto 0rem auto;
  color: var(--white);
  background: var(--mainColor);
  border: 1px solid var(--mainColor);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: 400;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
  }
  &:focus {
    outline: none;
  }
`

export default Button
