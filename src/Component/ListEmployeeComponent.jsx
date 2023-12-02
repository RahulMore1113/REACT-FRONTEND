import React, { useEffect, useState } from "react";
import { deleteEmployeeById, getEmployees } from "../Service/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployeeComponent() {
  //employees <----setEmployees()
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Calling API From BackEnd to get the data of Employees
    getEmployees().then((emp) => {
      //Inject data to employees varaible
      setEmployees(emp.data);
    });
  }, []);

  const addEmployee = () => {
    navigate("/add-employee");
  };

  const editEmployee = (id) => {
    console.log("id:: " + id);
    navigate(`/update-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    console.log("id:: " + id);

    //Make a call to backend to delete the record
    deleteEmployeeById(id).then((res) => {
      //display the same page with the record not matching with the supplied id value
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  return (
    <div className="m-4">
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>
          ADD EMPLOYEE
        </button>
      </div>
      <br />

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.firstName}</td>
                <td> {employee.lastName}</td>
                <td> {employee.emailId}</td>

                <button
                  onClick={() => editEmployee(employee.id)}
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListEmployeeComponent;
