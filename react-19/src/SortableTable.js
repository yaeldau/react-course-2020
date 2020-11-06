import React, {useState} from 'react';

export default function SortableTable(props) {

  const [data, setData] = useState(props.data.slice(1));
  const titles = props.data[0];
  const [ascendingOrder, setAscendingOrder] = useState(true);


  function sortByColumn(col_index) {
    const sortedData = data.sort(function (row1, row2) {
      if (row1[col_index] > row2[col_index]) {
        return 1;
      }
      if (row2[col_index] > row1[col_index]) {
        return -1;
      }
      return 0;
    });
    if (!ascendingOrder) {
      sortedData.reverse();
    }
    setAscendingOrder(ascendingOrder => !ascendingOrder);
    setData([...sortedData]);
  }

  return (

      <tbody>
      <tr>
        {titles.map((title, col_index) => {
          return <th key={title}>
            <p>{title}</p>
            <button onClick={() => sortByColumn(col_index)}>sort</button>
          </th>
        })}
      </tr>
      {data.map((row, row_index) =>
          <tr key={`row_${row_index}`}>
            {row.map((cell, col_index) => {
              return <td key={`${row_index}_${col_index}`}>{cell}</td>
            })}
          </tr>
      )}
      </tbody>

  )
}