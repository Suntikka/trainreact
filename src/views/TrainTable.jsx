import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

function renderRow(trains) {
  const tableRows = [];
  for (let i = 0; i < trains.length; i += 1) {
    tableRows.push(
      <tr key={i}>
        <td>{trains[i].trainNumber}</td>
        <td>{trains[i].departureDate}</td>
        <td>{trains[i].operatorShortCode}</td>
        <td>{trains[i].trainCategory}</td>
      </tr>,
    );
  }
  return tableRows;
}

function TrainTable({ trains }) {
  return (
    <Table
      dark
    >
      <thead>
        <tr>
          <th>trainNumber</th>
          <th>departureDate</th>
          <th>operatorShortCode</th>
          <th>trainCategory</th>
        </tr>
      </thead>
      <tbody>
        { renderRow(trains) }
      </tbody>
    </Table>
  );
}

TrainTable.defaultProps = {
  trains: [],
};

TrainTable.propTypes = {
  trains: PropTypes.arrayOf({}),
};

export default TrainTable;
