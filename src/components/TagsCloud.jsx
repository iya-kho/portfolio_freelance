import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

import { fonts } from '../utils/style/variables';

const CloudStyled = styled.div`
  .tag {
    margin: 10px;
    padding: 5px 7px;
    font-size: 16px;
    font-family: ${fonts.primary};
  }
`;

export function TagsCloud({ contentList, color }) {
  return (
    <CloudStyled>
      {contentList.map((item, index) => (
        <Tag key={index + item} color={color} className="tag">
          {item}
        </Tag>
      ))}
    </CloudStyled>
  );
}

TagsCloud.propTypes = {
  contentList: PropTypes.array,
  color: PropTypes.string,
};
