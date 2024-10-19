import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, TextField } from '@mui/material';

// Static JSON data for the datagrid
const rows = [
  { id: 1, customer: 'Brannon Weinmann', last_seen: '09/08/2020', orders: 2, total_spent: '263.51 SUS', latest_purchase: '27/11/2019 13:12:25', news: true, segments: 'Regular' },
  { id: 2, customer: 'Amra Bruen', last_seen: '09/08/2020', orders: 3, total_spent: '647.91 SUS', latest_purchase: '07/06/2020 07:48:18', news: true, segments: 'Regular' },
  { id: 3, customer: 'Gudrun Tromp', last_seen: '09/08/2020', orders: 0, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: false, segments: 'Regular' },
  { id: 4, customer: 'Florencio Roob', last_seen: '09/08/2020', orders: 3, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: true, segments: 'Regular' },
  { id: 5, customer: 'Madison Top', last_seen: '09/08/2020', orders: 0, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: true, segments: 'Regular' },
  { id: 6, customer: 'Raphaela Boer', last_seen: '09/08/2020', orders: 3, total_spent: '693.50 SUS', latest_purchase: '19/05/2020 10:03:18', news: true, segments: 'Regular' },
  { id: 7, customer: 'Beth Hill', last_seen: '09/08/2020', orders: 0, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: false, segments: 'Regular' },
  { id: 8, customer: 'Brandyn Hoeger', last_seen: '09/08/2020', orders: 0, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: true, segments: 'Regular' },
  { id: 9, customer: 'Rey Schaden', last_seen: '09/08/2020', orders: 1, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: false, segments: 'Regular' },
  { id: 10, customer: 'Dina Tilman', last_seen: '08/08/2020', orders: 0, total_spent: '0.00 SUS', latest_purchase: 'N/A', news: true, segments: 'Regular' }
];

// Define columns for the DataGrid
const columns = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'last_seen', headerName: 'Last Seen', width: 150 },
  { field: 'orders', headerName: 'Orders', width: 100 },
  { field: 'total_spent', headerName: 'Total Spent', width: 150 },
  { field: 'latest_purchase', headerName: 'Latest Purchase', width: 200 },
  {
    field: 'news', headerName: 'News', width: 100,
    renderCell: (params) => (params.value ? '✔️' : '❌')
  },
  { field: 'segments', headerName: 'Segments', width: 150 }
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter rows based on search term
  const filteredRows = rows.filter((row) => {
    return Object.values(row).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Container>
      <h2>Customer Data Grid</h2>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
}
