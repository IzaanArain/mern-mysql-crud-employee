const express = require("express");
const {
  getAllEmployees,
  getEmployee,
} = require("../controllers/employee.controller");
const router = express.Router();

router.route("/").get(getAllEmployees);
router.route("/:id").get(getEmployee);

module.exports = router;
