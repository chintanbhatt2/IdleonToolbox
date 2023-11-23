import React from 'react';
import ForwardIcon from '@mui/icons-material/Forward';

import styled from '@emotion/styled';
import ConstructionMain from '../../../components/account/Worlds/World3/construction/ConstructionMain';
import Tabber from '../../../components/common/Tabber';
import { NextSeo } from 'next-seo';
import { Typography } from '@mui/material';
import CogStatCalculator from '../../../components/account/Worlds/World3/construction/CogStatCalculator';

const Construction = () => {

  return <>
    <NextSeo
      title="Idleon Toolbox | Construction"
      description="Keep track of your construction board, cogs information and more"
    />
    <Typography variant={'h2'} textAlign={'center'} mb={3}>
      Construction
    </Typography>
    <Tabber tabs={['Main', 'Cog stat calculator']}>
      <ConstructionMain/>
      <CogStatCalculator/>
    </Tabber>
  </>
}

const ReverseForwardIcon = styled(ForwardIcon)`
  transform: rotate(180deg);
`

export default Construction;
