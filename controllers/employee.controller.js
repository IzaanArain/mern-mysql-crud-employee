const asyncHandler = require("express-async-handler");
const {
  fetchAllEmployees,
  fetchEmployeesById,
} = require("../services/employee.services");

const getAllEmployees = asyncHandler(async (req, res) => {
  try {
    const [rows, fields] = await fetchAllEmployees();
    res.status(200).json({
      msg: "All employees",
      count: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

const getEmployee = asyncHandler(async (req, res) => {
  try {
    const {id} = req.params;
    const [rows, fields] = await fetchEmployeesById(id);
    res.status(200).json({
      msg: "Employee successfully fetched",
      data: rows[0],
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

module.exports = {
  getAllEmployees,
  getEmployee
};
