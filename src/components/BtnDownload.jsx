import styled from 'styled-components';
import { DownloadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const BtnStyled = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  cursor: pointer;

  .downLoadText {
    font-size: 18px;
    font-weight: 700;
  }

  .iconDownload {
    font-size: 25px;
  }
`;

export function BtnDownload({btnText, filePath}) {
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BtnStyled className="btnDownload" onClick={onButtonClick}>
      <span className="downLoadText">{btnText}</span>
      <DownloadOutlined className="iconDownload" />
    </BtnStyled>
  );
}

BtnDownload.propTypes = {
  btnText: PropTypes.string,
  filePath: PropTypes.string
};
