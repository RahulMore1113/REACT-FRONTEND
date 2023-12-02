import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../Service/EmployeeService";

function UpdateEmployeeComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        //Calling the Backend api to load the data to the page based on id value
        const response = await getEmployeeById(id);
        const employeeData = response.data;
        setEmployee({
          id: id,
          firstName: employeeData.firstName,
          lastName: employeeData.lastName,
          emailId: employeeData.emailId,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
  }, [id]);

  const updateEmployeeData = async (e) => {
    e.preventDefault();
    console.log(employee);

    //Calling API to send the data to BackEnd to perform update operation
    await updateEmployee(employee, id);
    navigate("/employees");
  };

  const changeFirstNameHandler = (event) => {
    setEmployee({ ...employee, firstName: event.target.value });
  };

  const changeLastNameHandler = (event) => {
    setEmployee({ ...employee, lastName: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setEmployee({ ...employee, emailId: event.target.value });
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={changeEmailHandler}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={updateEmployeeData}
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateEmployeeComponent;
