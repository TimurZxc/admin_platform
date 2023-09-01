import React from 'react'
import Header from '../../components/Header'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import { AdminPanelSettingsOutlined } from '@mui/icons-material'
import LockCloseOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"

const ManageSources = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', cellClassName: 'cell-font' },
    { field: 'name', headerName: 'Имя', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Возраст', type: 'number', headerAlign: 'left', align: 'left', cellClassName: 'cell-font' },
    { field: 'phone', headerName: 'Номер телефона', flex: 1, cellClassName: 'cell-font' },
    { field: 'email', headerName: 'Электронная почта', flex: 1, cellClassName: 'cell-font' },
    {
      field: 'access', headerName: 'Уровень доступа', flex: 1, cellClassName: 'cell-font',
      renderCell: ({ row: { access } }) => {
        return (
          <Box width={'60%'} m={'0 auto'} p={'5px'} display={'flex'}
            justifyContent={'center'} bgcolor={access === "admin" ? colors.greenAccent[600] :
              access === "manager" ? colors.blueAccent[500] :
                colors.redAccent[600]}>
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockCloseOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px', mt: '3px' }}>
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m={'20px'}>
      <Header tittle={'Управление ресурсами'} subtittle={'Отключайте ненужные сайты'} />
      <Box m={'40px 0 0 0'} height={'75%'} sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
          fontSize: '15px'
        },
        "& .cell-font": {
          fontSize: '15px'
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
          fontSize: '15px'
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-selectedRowCount": {
          fontSize: '15px'
        },
        "& .MuiTablePagination-selectLabel": {
          fontSize: '15px'
        },
        "& .MuiTablePagination-toolbar": {
          fontSize: '15px'
        },
        "& .MuiTablePagination-displayedRows": {
          fontSize: '15px'
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        }
      }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default ManageSources