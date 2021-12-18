const express = require("express");
const router = express.Router();

const Student = require("../models/students.model");

router.get("/students", async (req, res) => {
  try {
    const allStudents = await Student.find()
    res.status(201).send(allStudents);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.post("/", async (req, res) => {  
  try {
    const student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;