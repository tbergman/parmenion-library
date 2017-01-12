import { css } from 'styled-components';

const sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

export default Object.keys(sizes).reduce((acc, label) => {
  const accumulator = acc;
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
