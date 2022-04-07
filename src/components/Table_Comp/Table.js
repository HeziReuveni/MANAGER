import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditTableRow from "./EditTableRow";
import { TiUserAdd } from "react-icons/ti";
import { BiSearchAlt2 } from "react-icons/bi";
import background from "./images/big_data.jpg";

const Table = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [openFormAdd, setOpenFormAdd] = useState(false);
  const [editContactId, setEditContactId] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [thisId, setThisId] = useState("");
  const [contacts, setContacts] = useState([{}]);
  const [searchValue, setSearchValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [idEmployee, setIdEmployee] = useState("");

  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    idEmployee: "",
    email: "",
    salary: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/contacts").then((res) => {
      setContacts(res.data);
    });
  }, []);

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const content = { firstName, lastName, idEmployee, email, salary };
    axios
      .post("http://localhost:5000/contacts", content)
      .then(window.location.reload(false));
  };

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    idEmployee: "",
    email: "",
    salary: "",
  });

  const handleEditForm = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newAddForm = { ...editFormData };
    newAddForm[fieldName] = fieldValue;
    setEditFormData(newAddForm);
  };

  const handleAddForm = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newAddForm = { ...addFormData };
    newAddForm[fieldName] = fieldValue;
    setAddFormData(newAddForm);
  };

  const handleDelete = (id) => {
    setIsDelete(!isDelete);
    setThisId(id);
  };

  const nextDelete = (event) => {
    event.preventDefault();
    setIsDelete(!isDelete);
  };

  const nextCancel = (event) => {
    event.preventDefault();
    setIsDelete(!isDelete);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      idEmployee: editFormData.idEmployee,
      email: editFormData.email,
      salary: editFormData.salary,
    };
    const newContact = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContact[index] = editContact;
    setContacts(newContact);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      idEmployee: contact.idEmployee,
      email: contact.email,
      salary: contact.salary,
    };
    setEditFormData(formValues);
  };

  const handleClickSearch = () => {
    const thisIdEmployee = contacts.filter(
      (item) => item.idEmployee === searchValue
    );
    setContacts(thisIdEmployee);
  };

  return (
    <div
      className="back-table"
      style={{
        backgroundImage: `url(${background})`,
        MinHeight: "100vh",
      }}
    >
      <div>
        <div className="back-up">
          <button
            id="right-button-search"
            onClick={() => setOpenSearchInput(!openSearchInput)}
          >
            Search Employee
          </button>
          <button
            id="left-button-add"
            onClick={() => setOpenFormAdd(!openFormAdd)}
          >
            Add Employee
          </button>
        </div>
        <div>
          {isDelete && (
            <div className="container-delete-form">
              <form className="delete-form">
                <div>
                  <h5>Are you sure you want to delete the user?</h5>
                  <button onClick={(event) => nextDelete(event)}>Delete</button>
                  <button onClick={(event) => nextCancel(event)}>Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="form-add">
          {openSearchInput && (
            <div>
              <button onClick={handleClickSearch}>
                <BiSearchAlt2 id="icon-id-input" />{" "}
              </button>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                id="input-search-form"
                placeholder="Enter ID Employee..."
              />{" "}
            </div>
          )}
          {openFormAdd && (
            <form id="table-form-margin" onSubmit={handleAddSubmit}>
              <button>
                <TiUserAdd />
              </button>
              <input
                name="firstName"
                type="text"
                placeholder="Enter First name..."
                required="required"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                name="lastName"
                type="text"
                placeholder="Enter Last name..."
                required="required"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <input
                name="idEmployee"
                type="text"
                placeholder="Enter ID Employee..."
                required="required"
                onChange={(e) => setIdEmployee(e.target.value)}
                value={idEmployee}
              />
              <input
                name="email"
                type="text"
                placeholder="Enter The Email..."
                required="required"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                name="salary"
                type="text"
                placeholder="Enter The Salary..."
                required="required"
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
              />
            </form>
          )}
        </div>
        <form onSubmit={handleEditFormSubmit}>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">ID Employee</th>
                <th scope="col">Email</th>
                <th scope="col">Salary</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {typeof contacts === "undefined" ? (
                <p>Loading...</p>
              ) : (
                contacts.map((item, i) => (
                  <Fragment key={i}>
                    {editContactId === item.id ? (
                      <EditTableRow
                        item={item}
                        handleEditForm={handleEditForm}
                        editFormData={editFormData}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        item={item}
                        handleEditClick={handleEditClick}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Fragment>
                ))
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Table;
