import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import { CancelOutlined } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import axios from "axios";

const SourceInfo = () => {
  const [deleteCount, setDeleteCount] = useState(0);

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleDelete(id) {
    axios
      .delete(`/delete/article/${id}`)
      .then(() => {
        setDeleteCount((prevCount) => prevCount + 1);
        console.log('status',  'Статья была успешно удалена!')
        window.location.reload(true);
      })
      .catch((error) => {
        console.log('error', error.message)
      });
  }  


  const columns = [
    { field: 'id', headerName: 'ID', cellClassName: 'cell-font', flex: 0.3 },
    { field: 'webName', headerName: 'Веб-сайт', cellClassName: 'name-column--cell', flex: 0.6 },
    { field: 'title', headerName: 'Заголовок', flex: 1, cellClassName: 'cell-font' },
    { field: 'description', headerName: 'Описание', cellClassName: 'cell-font', flex: 1 },
    { field: 'country', headerName: 'Страна', flex: 0.7, cellClassName: 'cell-font' },
    { field: 'score', headerName: 'Оценка Модели', flex: 0.4, type: 'number', headerAlign: 'left', align: 'left', cellClassName: 'cell-font' },
    { field: 'cdate', headerName: 'Дата выгрузки', flex: 0.6, cellClassName: 'cell-font' },
    { field: 'udate', headerName: 'Дата обновления', flex: 0.6, cellClassName: 'cell-font' },
    { field: 'cancel',headerName: '', flex: 0.2,
    renderCell: ({ row: { id }}) => {
      return (
        <Button
          onClick={()=> {handleDelete(id)}}
          sx={{ maxWidth: '32px', minWidth: '32px', backgroundColor: `${colors.redAccent[500]}`, padding: '3px', color: '#fff' }} >
          <CancelOutlined />
        </Button>
        )
      }
    }
  ]

  useEffect(() => {
  }, [deleteCount])

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
          // checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{Toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default SourceInfo