import styled         from 'styled-components';
import { Typography } from '@mui/material';
import React          from 'react';

export const CenteredTypography = styled(({ ...props }) => <Typography { ...props } />)`
  text-align    : center;
  margin-bottom : 20px;
  padding       : 0 20px;
`
export const ItalicTypography = styled(({ ...props }) => <CenteredTypography { ...props }/>)`
  font-style : italic;
`