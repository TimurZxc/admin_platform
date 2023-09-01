import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LineChart from '../../components/Line'

const Line = () => {
  return (
    <Box m={'20px'} height={'70vh'}>
      <Header subtittle={'Линейная диаграмма'}/>
      <Box height={'100%'}>
        <LineChart/>
      </Box>
    </Box>
  )
}

export default Line