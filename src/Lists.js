import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
  // Initialize an empty array for list rows
  let listrows = [];
  
  // Populate the list rows by iterating over alldata
  props.alldata.forEach((element) => {
    listrows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
      </tr>
    );
  });

  // Return the table structure
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
}

export default Lists;
