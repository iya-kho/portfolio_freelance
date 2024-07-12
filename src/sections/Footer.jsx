import styled from 'styled-components';
import { contactInfo } from '../content/content';
import { devices } from '../utils/style/variables';

const FooterStyled = styled.footer`
  height: 170px;

  @media ${devices.tabletS} {
    height: auto;
  }

  .footerInner {
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;

    @media ${devices.tabletS} {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  .contactItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${devices.tabletS} {
      height: 80px;
    }
  }

  .upworkLogo {
    width: 60px;
    height: auto;
    margin-bottom: 15px;
  }

  span {
    color: #000;
  }
`;

export function Footer() {
  const upworkLogoPath = `${process.env.PUBLIC_URL}/images/landing/upwork.svg`;

  return (
    <FooterStyled id='contact'>
      <div className="footerInner wrapLarge">
        <a href={contactInfo.upworkUrl} target="_blank" rel="noreferrer">
          <div className="contactItem">
            <div>
              <img src={upworkLogoPath} alt="Upwork Logo" className="upworkLogo"/>
            </div>
            <span>Contact me on Upwork</span>
          </div>
        </a>
      </div>
    </FooterStyled>
  );
}
