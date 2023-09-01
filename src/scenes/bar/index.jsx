import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/Bar'

const Bar = () => {
  return (
    <Box m={'20px'} height={'98vh'} width={'75vw'}>
        <Header subtittle={'Столбчатая диаграмма'}/>
        <Box height={'75%'} width={'100%'}>
            <BarChart/>
        </Box>
    </Box>
  )
}

export default Bar