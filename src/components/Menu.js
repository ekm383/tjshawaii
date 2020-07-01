import React from "react"
import styled from "styled-components"

const Menu = ({ itemName, itemDescription, price }) => {
  return (
    <MenuWrapper>
      <h6>
        {itemName} <span> ${price}</span>
      </h6>
      <p>{itemDescription}</p>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  flex-basis: 30%;
  margin-bottom: 1rem;
  h6 {
    font-size: 0.9rem;
  }
  span {
    font-weight: 400;
    margin-left: 0.1rem;
  }
  p {
    line-height: 1.2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 45%;
  }
`

export default Menu
