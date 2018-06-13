import styled, { css } from 'styled-components';

const mb = css`
  margin-bottom: ${props => props.theme.margin};
`;

const page = css`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 0 ${props => props.theme.margin};
  }
`;

const inline = css`
  display: flex;
  align-items: center;
`;

const between = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default styled.div`
  ${props => (props.page ? page : null)};
  ${props => (props.inline ? inline : null)};
  ${props => (props.between ? between : null)};
  ${props => (props.mb ? mb : null)};
`;
