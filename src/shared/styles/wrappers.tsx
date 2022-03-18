import styled   from 'styled-components';
import { Grid } from '@mui/material';
import React    from 'react';

export const ContentWrapper = styled(({ ...props }) => <Grid { ...props }/>)`
  padding: 20px;
  background-color: #f3ece7;
`