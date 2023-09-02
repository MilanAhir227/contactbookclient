import React from 'react'

const TableData = (props) => {
    return (
      <>
        <tr>
          <td>{props.index}</td>
          <td>{props.fname}</td>
          <td>{props.lname}</td>
          <td>{props.username}</td>
          <td>{props.contect}</td>
          <td>{props.email}</td>
        </tr>
      </>
    )
  }

export default TableData
