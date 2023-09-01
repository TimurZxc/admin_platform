import React from 'react'
// import Header from '../../components/Header'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

const SourceInfo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', cellClassName: 'cell-font', flex: 0.3 },
    { field: 'webName', headerName: 'Веб-сайт', cellClassName: 'name-column--cell', flex: 0.6 },
    { field: 'title', headerName: 'Заголовок', flex: 1, cellClassName: 'cell-font' },
    { field: 'description', headerName: 'Описание', cellClassName: 'cell-font', flex: 1 },
    { field: 'country', headerName: 'Страна', flex: 0.7, cellClassName: 'cell-font' },
    { field: 'score', headerName: 'Оценка Модели', flex: 0.4, type: 'number', headerAlign: 'left', align: 'left', cellClassName: 'cell-font' },
    { field: 'cdate', headerName: 'Дата выгрузки', flex: 0.6, cellClassName: 'cell-font' },
    { field: 'udate', headerName: 'Дата обновления', flex: 0.6, cellClassName: 'cell-font' },
    // { field: '#', flex: 0.3,
    // renderCell: ({ row: { access } }) => {
    //   return (
    //     <Box width={'60%'} m={'0 auto'} p={'5px'} display={'flex'}
    //       justifyContent={'center'} bgcolor={access === "admin" ? colors.greenAccent[600] :
    //         access === "manager" ? colors.blueAccent[500] :
    //           colors.redAccent[600]}>
    //       {access === 'admin' && <AdminPanelSettingsOutlined />}
    //       {access === 'manager' && <SecurityOutlinedIcon />}
    //       {access === 'user' && <LockCloseOutlinedIcon />}
    //       <Typography color={colors.grey[100]} sx={{ ml: '5px', mt: '3px' }}>
    //         {access}
    //       </Typography>
    //     </Box>}
  ]

  return (
    <Box m={'20px'}>
      <Box m={'10px 0 0 0'} height={'85vh'} sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none !important",
        },
        // "& .MuiDataGrid-row": {
        //   maxHeight: "120px !important",
        //   minHeight: '100px !important'
        // },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
          fontSize: '15px'
        },
        "& .cell-font": {
          fontSize: '15px'
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.grey[800],
          borderBottom: "none",
          fontSize: '15px'
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.grey[800],
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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[400]} !important`,
        },
      }}>
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{Toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default SourceInfo