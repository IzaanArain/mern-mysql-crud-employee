const express = require("express");
const {
  getAllEmployees,
  getEmployee,
  deleteEmployee,
  createOrUpdateEmployee,
} = require("../controllers/employee.controller");
const router = express.Router();

router.route("/").get(getAllEmployees).post(createOrUpdateEmployee);
router
  .route("/:id")
  .get(getEmployee)
  .delete(deleteEmployee)
  .put(createOrUpdateEmployee);

module.exports = router;
