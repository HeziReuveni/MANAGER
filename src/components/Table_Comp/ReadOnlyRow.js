import axios from "axios";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import "./Table.css";

const ReadOnlyRow = ({ item, handleEditClick }) => {
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/contacts/" + id)
      .then(window.location.reload(false));
  };
  return (
    <tr>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.idEmployee}</td>
      <td>{item.email}</td>
      <td>{item.salary}</td>
      <td>
        <div className="buttons-table">
          <button
            className="button-edit-table"
            type="button"
            onClick={(event) => handleEditClick(event, item)}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="button-delete-table"
            onClick={() => handleDelete(item.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
