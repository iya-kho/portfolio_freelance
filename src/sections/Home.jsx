import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

import { colors, devices, otherVariables } from '../utils/style/variables';

const HomeWrap = styled.section`
  height: 100vh;

  @media ${devices.tabletL} {
    height: auto;
  }
`;

const HomeInner = styled.div`
  height: 100%;
  position: relative;
  &.wrapLarge {
    padding-top: ${otherVariables.headerHeight};
  }
  @media ${devices.tabletL} {
    display: flex;
    flex-direction: column;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  & h1 {
    margin: 10px 0;
    @media ${devices.laptopS} {
      font-size: 35px;
    }
    @media ${devices.tabletL} {
      font-size: 40px;
    }
    @media ${devices.tabletS} {
      font-size: 35px;
    }
    @media ${devices.mobileL} {
      font-size: 27px;
    }
    @media ${devices.mobileS} {
      font-size: 22px;
    }
  }
  & p {
    font-size: 18px;
  }

  @media ${devices.tabletL} {
    position: static;
    transform: none;
    margin: 50px 40px;
    height: 100px;
  }

  @media ${devices.mobileL} {
    margin: 30px 0;
  }
`;

const PicWrap = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  height: 100%;
  overflow: hidden;

  @media ${devices.tabletL} {
    justify-content: center;
  }

  img {
    height: 100%;
    width: auto;

    @media ${devices.tabletL} {
      height: 650px;
    }

    @media ${devices.tabletS} {
      width: 100%;
      height: auto;
    }
  }

  &:after {
    content: '';
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.45;
  }
`;

export function Home() {
  const [linesTyped, setLinesTyped] = useState(0);
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  return (
    <HomeWrap id="home">
      <HomeInner className="wrapLarge">
        <TextWrap className="indexTop">
          <TypeAnimation
            wrapper="p"
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[
              // eslint-disable-next-line
              `Hi! I'm Iya Khorova,`,
              200,
              el => {
                setLinesTyped(1);
                el.classList.remove(CURSOR_CLASS_NAME);
              },
            ]}
          />
          {linesTyped >= 1 && (
            <TypeAnimation
              wrapper="h1"
              cursor={false}
              className={CURSOR_CLASS_NAME}
              sequence={[
                'a web developer / tech writer',
                100,
                el => {
                  setLinesTyped(2);
                  el.classList.remove(CURSOR_CLASS_NAME);
                },
              ]}
            />
          )}
          {linesTyped >= 2 && (
            <TypeAnimation
              wrapper="p"
              className={CURSOR_CLASS_NAME}
              cursor={false}
              sequence={['based in Ukraine 🩵💛', 100, el => el.classList.remove(CURSOR_CLASS_NAME)]}
            />
          )}
        </TextWrap>
        <PicWrap>
          <img
            alt="My picture"
            src={`${process.env.PUBLIC_URL}/images/landing/my-pic-900.webp`}
            srcSet={`
              ${process.env.PUBLIC_URL}/images/landing/my-pic-900.webp 900w,
              ${process.env.PUBLIC_URL}/images/landing/my-pic-650.webp 650w,
              ${process.env.PUBLIC_URL}/images/landing/my-pic-450.webp 450w
            `}
            sizes="(max-width: 450px) 450px, (max-width: 850px) 650px, 900px"
          />
        </PicWrap>
      </HomeInner>
    </HomeWrap>
  );
}
