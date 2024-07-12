const asyncHandler = require("express-async-handler");
const {
  fetchAllEmployees,
  fetchEmployeesById,
  removeEmployee,
  addOrEditEmployee,
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
    const { id } = req.params;
    const [rows, fields] = await fetchEmployeesById(id);
    if (rows.length <= 0) {
      // return res.status(404).json({msg:`No record found with the give id: ${id}`});
      res.status(404);
      throw new Error(`No record found with the give id: ${id}`);
    }
    res.status(200).json({
      msg: "Employee successfully fetched",
      data: rows[0],
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

const deleteEmployee = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const [rows, fields] = await fetchEmployeesById(id);
    if (rows.length <= 0) {
      // return res.status(404).json({msg:`No record found with the give id: ${id}`});
      res.status(404);
      throw new Error(`No record found with the give id: ${id}`);
    }
    const [result, _] = await removeEmployee(id);
    console.log(result);
    if (result.affectedRows == 0) {
      return res.status(404).json({
        msg: `No record found with the give id: ${id}`,
      });
    } else {
      res.status(200).json({
        msg: "Employee successfully deleted",
        data: result,
      });
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

const createOrUpdateEmployee = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, employee_code, salary } = req.body;
    const [rows, fields] = await addOrEditEmployee(
      { name, employee_code, salary },
      id
    );
    const [[data]] = rows;
    return res.status(201).json({
      msg: "Employee successfully created or edited",
      data: data,
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
});

module.exports = {
  getAllEmployees,
  getEmployee,
  deleteEmployee,
  createOrUpdateEmployee,
};
