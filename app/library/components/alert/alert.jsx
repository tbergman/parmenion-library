import React from 'react';
import {styled} from 'styletron-react';
import tinycolor from 'tinycolor2';
import styles from '../../theme/index.js';


/* ==========================================================================
   Styles
========================================================================== */

/* Block styles
========================================================================== */

const Default = styled('div', () => ({
  margin: '5px 0 15px',
  padding: '8px 10px',
  border: `1px solid transparent`,
  background: styles.colors.gray_lightest,
  borderRadius: styles.components.border_radius_base,
  textAlign: 'left',
  color: styles.colors.text_color,
  ':hover': {
    color: styles.colors.bright_blue,
  },
  '@media (min-width: 1024px)': {
    padding: '8px 20px',
  }
}));


/* Element styles
========================================================================== */

const Header = styled('div', () => ({
  marginTop: '1px',
  marginBottom: '2px',
  fontSize: styles.type.font_size_h4,
  color: 'inherit'
}));

const Icon = styled('div', () => ({
  float: 'left',
  margin: '3px 10px 0 0',
  fontSize: '1em'
}));

const Description = styled('div', () => ({
  margin: 0
}));


/* Modifer styles
========================================================================== */

const Success = styled(Default, () => ({
  border: `1px solid ${tinycolor(styles.colors.brand.success).lighten(20).toString()}`,
  background: tinycolor(styles.colors.brand.success).lighten(30).toString(),
  color: tinycolor(styles.colors.brand.success).darken(30).toString(),
}));

const Danger = styled(Default, () => ({
  border: `1px solid ${tinycolor(styles.colors.brand.danger).lighten(20).toString()}`,
  background: tinycolor(styles.colors.brand.danger).lighten(30).toString(),
  color: tinycolor(styles.colors.brand.danger).darken(30).toString(),
}));

const Info = styled(Default, () => ({
  border: `1px solid ${tinycolor(styles.colors.brand.info).lighten(20).toString()}`,
  background: tinycolor(styles.colors.brand.info).lighten(30).toString(),
  color: tinycolor(styles.colors.brand.info).darken(30).toString(),
}));

const Warning = styled(Default, () => ({
  border: `1px solid ${tinycolor(styles.colors.brand.warning).lighten(20).toString()}`,
  background: tinycolor(styles.colors.brand.warning).lighten(30).toString(),
  color: tinycolor(styles.colors.brand.warning).darken(30).toString(),
}));

const ValidationError = styled(Danger, () => ({
  display: "inline-block",
  position: "relative",
  width: "100%",
  '::after': {
    content: "Hello",  // "\25B2", // "▲", // 'content' appears to not be supported
    position: "absolute",
    top: "-12px",
    left: "15px",
    fontSize: "50px",
    color: tinycolor(styles.colors.brand.danger).lighten(30).toString()
  }
}));



/* ==========================================================================
   React Component
========================================================================== */

class Label extends React.Component {
  render() {
    let {type, title, children} = this.props;
    
    const Alert = (() => {
      switch(type) {
        case 1:
          return Success;
        case 2:
          return Danger;
        case 3:
          return Info;
        case 4:
          return Warning;
        case 5:
          return ValidationError;
        default:
          return Default;
      }
    })();
    
    return <Alert>
      <Header>{ title }</Header>
      <Description>
        { children }
      </Description>
    </Alert>;
  }
}

Label.propTypes = {
  title: React.PropTypes.string,
  type: React.PropTypes.number
};

export default Label;