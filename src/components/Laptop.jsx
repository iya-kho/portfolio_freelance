import styled from 'styled-components';
import PropTypes from 'prop-types';

const LaptopStyled = styled.div`
  position: relative;

  .screen {
    background-image: linear-gradient(
      to right,
      #d2dde9 0%,
      #f9fcff 15%,
      #e5ebf2 40%,
      #e5ebf2 60%,
      #f9fcff 85%,
      #d2dde9 100%
    );
    padding: 4%;
    border-radius: 20px;

    .imgWrap {
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      aspect-ratio: 16/10;

      @supports not (aspect-ratio) {
        height: auto;
      }
    }
  }

  .bottom {
    position: relative;
    margin-right: -7%;
    margin-left: -7%;
    height: 12px;
    background-image: linear-gradient(
      to right,
      #d2dde9 0%,
      #f9fcff 15%,
      #e5ebf2 40%,
      #e5ebf2 60%,
      #f9fcff 85%,
      #d2dde9 100%
    );

    &::before {
      display: block;
      margin: 0 auto;
      width: 20%;
      height: 12px;
      border-radius: 0 0 3px 3px;
      background-image: linear-gradient(
        to right,
        #c3cfdb 0%,
        #f6f9fc 10%,
        #f6f9fc 90%,
        #c3cfdb 100%
      );
      content: ' ';
    }
  }

  .under {
    position: absolute;
    top: 100%;
    left: 25%;
    display: block;
    width: 50%;
    height: 20px;
    background-image: linear-gradient(to bottom, #e2e8f0, #bec7d1);

    &::after,
    &::before {
      position: absolute;
      top: 0%;
      right: 100%;
      bottom: 0;
      display: block;
      width: 50%;
      border-bottom-left-radius: 100%;
      background: inherit;
      content: ' ';
    }

    &::after {
      right: auto;
      left: 100%;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 0;
    }
  }

  .shadow {
    position: absolute;
    right: -10%;
    bottom: -40px;
    left: -10%;
    z-index: 0;
    height: 32px;
    background: radial-gradient(ellipse closest-side, #000, transparent);
    opacity: 0.5;
  }
`;

export function Laptop({imgPath, className}) {
  return (
    <LaptopStyled className={className}>
      <div className="screen">
        <div className="imgWrap">
          <img src={imgPath} alt="Website screenshot" />
        </div>
      </div>
      <div className='bottom'>
        <div className='under'></div>
      </div>
      <div className='shadow'></div>
    </LaptopStyled>
  );
}

Laptop.propTypes = {
  imgPath: PropTypes.string,
  className: PropTypes.string,
};
