import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/Pie'
import { Box } from '@mui/material' 

const Pie = () => {
  return (
    <Box m={'20px'} height={'85vh'}>
      <Header subtittle={'Круговая диаграмма'}/>
      <Box height={'85%'}>
        <PieChart/>
      </Box>
    </Box>
  )
}

export default Pie