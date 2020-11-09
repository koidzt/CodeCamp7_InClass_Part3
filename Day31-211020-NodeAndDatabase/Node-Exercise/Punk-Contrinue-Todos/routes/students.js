const express = require('express');
const router = express.Router();
const { uniqueId } = require('lodash');

let students = [];

//READ
const readAllStudents = (req, res) => {
  res.status(200).send(students);
};

//READ
const readStudent = (req, res) => {
  const id = req.params.id;
  const targetStudent = students.find(std => std.id === id);
  res.status(200).send(targetStudent);
};

//CREATE
const createStudent = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;

  const newStudent = { id: uniqueId(), name, age, gender };

  students.push(newStudent)

  res.status(201).send(newStudent);
};

//DELETE
const deleteStudent = (req, res) => {
  const targetId = req.params.id;

  students = students.filter(std => std.id !== targetId);

  res.status(204).send();
};

//UPDATE
const updateStudent = (req, res) => {
  const targetId = req.params.id;
  const { name, age, gender } = req.body;

  const targetStudentIdx = students.findIndex(std => std.id === targetId);
  students[targetStudentIdx] = { id: targetId, name, age, gender };

  res.status(200).send({ message: "Update" });
};

router.get('/', readAllStudents);
router.get('/:id', readStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);

module.exports = router;