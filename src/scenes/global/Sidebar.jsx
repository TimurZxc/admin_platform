import React from 'react'
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css"
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ManageAccountsOutlined } from '@mui/icons-material';
// import { ArticleOutlined } from '@mui/icons-material';
import { InfoOutlined } from '@mui/icons-material';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
      height={'100vh'}
    >
       <ProSidebar collapsed={isCollapsed} style={{height: "110%"}}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Панель
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="140px"
                  height="120px"
                  src={`../../assets/car.png`}
                  style={{ cursor: "pointer", borderRadius: "50%", objectFit: 'cover' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0"}}
                >
                  ТРАСЕКА
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Управление новостями
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Главная"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 16px" }}
            >
              Ресурсы
            </Typography>
            {/* <Item
              title="Управление ресурсами"
              to="/manage"
              icon={<InfoOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Данные по ресурсам"
              to="/info"
              icon={<ManageAccountsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Просмотр контента"
              to="/full"
              icon={<InfoOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 16px" }}
            >
              Статьи
            </Typography>
            <Item
              title="Добавить статью"
              to="/form"
              icon={<ArticleOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 16px" }}
            >
              Графики
            </Typography>
            <Item
              title="Столбчатая диаграмма"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Круговая диаграмма"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Линейная диаграмма"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar