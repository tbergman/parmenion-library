import React from 'react';
import styled, { css } from 'styled-components';

import {
  arrowDown,
  arrowLeft,
  arrowUp,
  arrowRight,
  balanceScale,
  ban,
  bank,
  bell,
  bolt,
  book,
  calendar,
  caretDown,
  caretUp,
  chain,
  check,
  checkCircle,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  clock,
  close,
  fork,
  cog,
  comment,
  commentCheck,
  commenting,
  compress,
  creditCard,
  download,
  envelope,
  exchange,
  exclamation,
  expand,
  externalLink,
  file,
  fileExcel,
  fileImage,
  filePdf,
  filePowerpoint,
  fileText,
  fileWord,
  group,
  home,
  cursor,
  infoCircle,
  key,
  lineChat,
  list,
  listNumber,
  lock,
  minus,
  minusCircle,
  pencil,
  pieChart,
  plus,
  plusCircle,
  print,
  questionCircle,
  search,
  shield,
  signIn,
  signOut,
  tag,
  tasks,
  timesCircle,
  tint,
  upload,
  user,
  userPlus,
  userSecret,
  userTimes,
} from './Collection';

const Container = styled.span`
  ${({ theme, size, isInverted }) => css`
    display: inline;
    svg {
      height: ${size || 1}em;
      width: ${size || 1}em;
      margin-top: -0.3rem;
      vertical-align: middle;
      path {
        fill: ${isInverted ? 'white' : theme.type.text_color};
      }
    }
    a:hover & svg path {
      fill: ${isInverted ? 'white' : theme.type.text_color};
    }
  `}
`;

const icons = {
  arrowDown,
  arrowLeft,
  arrowUp,
  arrowRight,
  balanceScale,
  ban,
  bank,
  bell,
  bolt,
  book,
  calendar,
  caretDown,
  caretUp,
  chain,
  check,
  checkCircle,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  clock,
  close,
  fork,
  cog,
  comment,
  commentCheck,
  commenting,
  compress,
  creditCard,
  download,
  envelope,
  exchange,
  exclamation,
  expand,
  externalLink,
  file,
  fileExcel,
  fileImage,
  filePdf,
  filePowerpoint,
  fileText,
  fileWord,
  group,
  home,
  cursor,
  infoCircle,
  key,
  lineChat,
  list,
  listNumber,
  lock,
  minus,
  minusCircle,
  pencil,
  pieChart,
  plus,
  plusCircle,
  print,
  questionCircle,
  search,
  shield,
  signIn,
  signOut,
  tag,
  tasks,
  timesCircle,
  tint,
  upload,
  user,
  userPlus,
  userSecret,
  userTimes,
};

const Icon = ({ icon, size, isInverted }) => (
  <Container size={size} isInverted={isInverted}>
    {icons[icon]}
  </Container>
);

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  size: React.PropTypes.number,
  isInverted: React.PropTypes.bool,
};

Icon.defaultProps = {
  size: 1,
  isInverted: false,
};

export default Icon;
