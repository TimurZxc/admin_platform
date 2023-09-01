import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
// import InputBase from '@mui/material/InputBase'
import { useContext } from 'react'
import { ColorModeContext } from '../../theme'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Header from '../../components/Header';
// import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

  const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display='flex' justifyContent={'space-between'} p={1.5}>
      {/* SearchBar */}
      {/* <Box display='flex' bgcolor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Поиск' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

      <Header tittle={'Администрация'}/>

      {/* Icons */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode} sx={{padding: '0 17px'}}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (<LightModeOutlinedIcon />)}
        </IconButton>
        <IconButton sx={{padding: '0 17px'}}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{padding: '0 17px'}}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{padding: '0 17px'}}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar