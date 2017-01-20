import React from 'react';
import styled, { css } from 'styled-components';
import { Grid, Row, Column, Align, Visible } from '../../Layout';
import withTheme from '../../../../hoc/withTheme';

const InnerGroup = styled.div`
  ${({ theme }) => css`
    display: block;
  `}
`;

const Group = ({ theme, children, label, isHorizontal }) => {
  if (isHorizontal) {
    return (
      <InnerGroup>
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
      </InnerGroup>
    );
  }

  return (
    <InnerGroup>
      <Align left>
        { label }
      </Align>
      { children }
    </InnerGroup>
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
