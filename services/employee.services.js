const db = require("../config/db");

const fetchAllEmployees = async () => {
  try {
    let sql = `
    SELECT * FROM employee;
    `;
    const result = await db.execute(sql);
    return result;
  } catch (err) {
    throw err;
  }
};

const fetchEmployeesById = async (id) => {
  try {
    let sql = `
    SELECT * FROM employee
    WHERE id = ?;
    `;
    values = [id];
    const result = await db.execute(sql, values);
    return result;
  } catch (err) {
    throw err;
  }
};

const removeEmployee = async (id) => {
  try {
    let sql = `
    DELETE FROM employee
    WHERE id = ?;
    `;
    values = [id];
    const result = await db.execute(sql, values);
    return result;
  } catch (err) {
    throw err;
  }
};

const addOrEditEmployee = async (obj, id = 0) => {
  try {
    const { name, employee_code, salary } = obj;
    let sql = `
    CALL usp_employee_add_or_edit(?,?,?,?);
    `;
    let values = [id, name, employee_code, salary];
    const result = await db.execute(sql, values);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchAllEmployees,
  fetchEmployeesById,
  removeEmployee,
  addOrEditEmployee,
};
