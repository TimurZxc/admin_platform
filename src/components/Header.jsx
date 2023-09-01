import React from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({tittle, subtittle}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box p={1}>
        <Typography
            variant='h2'
            color={colors.grey[100]}
            fontWeight={'bold'}
            sx={{mb: '5px'}}
        >
            {tittle}
        </Typography>
        <Typography
            variant='h5'
            color={colors.greenAccent[400]}
        >{subtittle}</Typography>
    </Box>
  )
}

export default Header