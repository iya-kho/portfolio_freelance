import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { fonts, devices } from '../utils/style/variables';

import { Laptop } from './index';

const ProjectStyled = styled.article`
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${devices.tabletL} {
    padding-bottom: 100px;
  }
`;

const ProjectInner = styled.div`
  height: 650px;
  display: flex;

  @media ${devices.laptopS} {
    height: 600px;
  }

  @media ${devices.tabletL} {
    flex-direction: column;
    height: auto;
  }

  h3,
  h4,
  p,
  li {
    color: #fff;
    line-height: 1.5;
  }

  .laptopContainer {
    width: 60%;
    display: flex;
    align-items: center;

    @media ${devices.laptopS} {
      width: 50%;
    }

    @media ${devices.tabletL} {
      width: 100%;
    }
  }

  .descriptionContainer {
    width: 40%;

    @media ${devices.laptopS} {
      width: 50%;
    }

    @media ${devices.tabletL} {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  .laptop {
    width: 80%;
    margin: 0 auto;
  }

  .tools li {
    line-height: 2.5;
  }

  .checkIcon {
    margin-right: 7px;
  }

  .tag {
    border-color: #fff;
  } 
  
  .buttonTransp {
    margin-right: 40px;
  }

  .buttonTransp,
  .buttonFill {
    font-family: ${fonts.primary};

    @media ${devices.mobileL} {
      margin-bottom: 30px;
    }
  }

  .buttonTransp:hover {
    color: #fff !important;
    border-color: #fff !important;
  }

  .buttonFill:hover {
    border-color: #d9d9d9 !important;
    color: rgba(0, 0, 0, 0.88) !important;
  }

  .buttons {
    margin-top: 20px;
    display: flex;

    @media ${devices.mobileL} {
      flex-direction: column;
    }
  }

  .button {
    height: 60px;
    width: 190px;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function Project({ projectInfo, className }) {
  return (
    <ProjectStyled className={className}>
      <ProjectInner className="wrapLarge">
        <div className="descriptionContainer">
          <h3>{projectInfo.title}</h3>
          <p className="description">{projectInfo.description}</p>
          <h4>Development tools</h4>
          <ul className="tools">
            {projectInfo.tools.map((tool, index) => (
              <li key={tool + index}>
                <CheckOutlined className="checkIcon" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <Button
              ghost
              href={projectInfo.codeLink}
              target="_blank"
              className="button buttonTransp"
            >
              Check out the code
            </Button>
            {projectInfo.webLink.isActive ? (
              <Button
                type="default"
                href={projectInfo.webLink.link}
                target="_blank"
                className="button buttonFill"
              >
              See it online
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="laptopContainer">
          <Laptop
            imgPath={`${process.env.PUBLIC_URL}/images/projects/${projectInfo.picture}`}
            className="laptop"
          />
        </div>
      </ProjectInner>
    </ProjectStyled>
  );
}

Project.propTypes = {
  projectInfo: PropTypes.object,
  className: PropTypes.string,
  projectsLength: PropTypes.number,
  index: PropTypes.number,
};
