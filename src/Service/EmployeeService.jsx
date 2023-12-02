import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

export const getEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export const createEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export function getEmployeeById(employeeId){
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
}

export function updateEmployee(employee, employeeId){
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
}

export function deleteEmployeeById(employeeId){
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
}

