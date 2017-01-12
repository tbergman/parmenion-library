import React from 'react';
import styled, { css } from 'styled-components';
import { Grid, Row, Column } from '../../Layout/Grid';
import Align from '../../Layout/Align';
import Visible from '../../Layout/Visible';
import withTheme from '../../../../hoc/withTheme';

const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.components.spacing_vertical}
  `}
`;

const Group = ({ theme, children, label, isHorizontal }) => {
  if (isHorizontal) {
    return (
      <Container>
        <Grid>
          <Row>
            <Column sm={3} xs={12}>
              <Visible upper={theme.breakpoints.xs_max}>
                <Align type={1}>
                  { label }
                </Align>
              </Visible>
              <Visible lower={theme.breakpoints.sm_min}>
                <Align type={2}>
                  { label }
                </Align>
              </Visible>
            </Column>
            <Column sm={9} xs={12}>
              { children }
            </Column>
          </Row>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Align left>
        { label }
      </Align>
      { children }
    </Container>
  );
};

Group.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
  isHorizontal: React.PropTypes.bool,
};

Group.defaultProps = {
  isHorizontal: false,
};

export default withTheme(Group);
