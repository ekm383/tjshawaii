import React, { Component } from "react"
import styled from "styled-components"
import map from "../../../images/bg/tjs-bar-hawaii-map.jpg"
import { FaInstagram, FaFacebook } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/tjshawaii/",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path:
          "https://www.facebook.com/pages/category/Sports-Bar/TJs-Sports-Bar-Grill-104232437638114/",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <p>600 Kapiolani Blvd, Honolulu, HI 96813</p>
          <p className="phone">Phone: (808) 545-2424</p>
          <p>Temporary COVID Hours of Operation:</p>
          <p>Mon - Fri 10:00am - 10:00pm</p>
          <p>Sat & Sun 2:00pm - 10:00pm</p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="box map">
          <img src={map} alt="map" width="100%" height="100%" />
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  p,
  .phone {
    font-size: 0.8rem;
  }
  .box {
    flex-basis: 46%;
    padding: 2rem;
  }
  .map {
    background: lightgray;
    padding: 0;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
