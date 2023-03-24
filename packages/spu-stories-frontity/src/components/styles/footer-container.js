import { styled } from "frontity";

const FooterContainer = styled.footer`
  display: block;
  height: auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: absolute;
  object-position: center bottom;
  bottom: 0;
  padding-left: calc(50vw - 4rem);
  @media only screen and (max-width: 1024px) {
    padding-left: 1.25rem;
  }
  & .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    box-shadow: -4px -4px 25px rgba(0, 0, 0, 0.16);
    padding: 30px 40px;
    position: relative;
    float: right;
    width: 100%;
    right: 0;
    top: -4rem;
    gap: 18px;
    z-index: 2;
    box-sizing: border-box;
    & h3 {
      font-family: "Sang Bleu Empire Bold", serif;
      font-weight: 700;
      font-size: 54px;
      line-height: 88px;
      text-transform: capitalize;
      color: black;
      @media only screen and (max-width: 620px) {
        font-size: 40px;
        line-height: 48px;
      }
    }
    & .copyright {
      font-family: "Inter", sans-serif;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: black;
    }
    & .social-media-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      gap: 16px;
      width: 100%;
      & img {
        width: 32px;
        height: 32px;
      }
    }
    & .footer-items-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      width: 100%;
      gap: 15px;
      & .footer-items-wrapper {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 0;
        border-top: 1.5px solid black;
        width: 100%;
        &:hover:not(.active) {
          border-top: 1.5px solid #872937;
        }
        & a {
          font-family: "Inter SemiBold", sans-serif;
          font-weight: 700;
          font-size: 25px;
          line-height: 31px;
          display: flex;
          align-items: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          width: 100%;
          color: black;
          &:hover:not(.active) {
            color: #872937;
          }
          @media only screen and (max-width: 620px) {
            font-size: 16px;
            line-height: 12px;
          }
        }
      }
    }
  }
  .footer-image img {
    display: block;
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center top;
    position: absolute;
    right: 0;
    height: 670px;
    top: 17.79%;
    z-index: 1;
  }
  .footer-magazine {
    font-size: 30px;
    text-transform: capitalize;
    color: black;
    font-style: normal;
    font-weight: 400;
    @media only screen and (max-width: 620px) {
      font-size: 24px;
    }
  }
`
export default FooterContainer;
