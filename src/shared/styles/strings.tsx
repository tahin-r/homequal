import styled                 from 'styled-components';
import { Button, Typography } from '@mui/material';
import React                  from 'react';

export const CenteredTypography = styled(({ ...props }) => <Typography { ...props } />)`
  text-align    : center;
  margin-bottom : 20px;
  padding       : 0 20px;
`
export const ItalicTypography = styled(({ ...props }) => <CenteredTypography { ...props }/>)`
  font-style : italic;
`
export const QualButton = styled(({ ...props }) => <Button { ...props } color="primary"
                                                           variant="contained"
/>)`
  display   : block;
  width     : 70%;
  min-width : 250px;
  max-width : 350px;
  padding   : 10px;

  p {
    font-size      : 20px;
    text-transform: none;
  }
`