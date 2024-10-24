import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrdersTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Order ID</TableCell>
            <TableCell align="right">Order Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.length > 0 ? orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.client.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          )): ''}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
