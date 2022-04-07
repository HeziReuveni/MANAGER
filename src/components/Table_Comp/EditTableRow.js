import axios from "axios";
import React from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import "./Table.css";

const EditTableRow = ({ editFormData, handleEditForm, item }) => {
  const handleEditAxios = (id) => {
    axios.put(`http://localhost:5000/contacts/${id}`, {
      firstName: `${editFormData.firstName}`,
      lastName: `${editFormData.lastName}`,
      idEmployee: `${editFormData.idEmployee}`,
      email: `${editFormData.email}`,
      salary: `${editFormData.salary}`,
    });
  };

  return (
    <tr className="row-input-edit">
      <td>
        <input
          name="firstName"
          type="text"
          placeholder="Enter First name..."
          required="required"
          value={editFormData.firstName}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          name="lastName"
          type="text"
          placeholder="Enter Last Neme..."
          required="required"
          value={editFormData.lastName}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          name="idEmployee"
          type="text"
          placeholder="Enter ID Employee..."
          required="required"
          value={editFormData.idEmployee}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          name="email"
          type="text"
          placeholder="Enter The Email..."
          required="required"
          value={editFormData.email}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <input
          name="salary"
          type="text"
          placeholder="Enter The Salary..."
          required="required"
          value={editFormData.salary}
          onChange={handleEditForm}
        />
      </td>
      <td>
        <div className="container-buttons-edit">
          <button className="button-save-table" type="submit">
            <FiSave onClick={handleEditAxios(item.id)} />
          </button>
          <button className="button-cancel-table" type="submit">
            <MdOutlineCancel />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditTableRow;
