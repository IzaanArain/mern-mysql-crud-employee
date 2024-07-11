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
    values = [id]
    const result = await db.execute(sql,values);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchAllEmployees,
  fetchEmployeesById,
};
