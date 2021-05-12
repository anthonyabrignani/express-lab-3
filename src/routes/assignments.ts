import express from "express";
import Assignment from "../models/Assignment";
import {
  createAssignment,
  deleteAssignment,
  readAllAssignments,
  readAssignmentById,
  updateAssignment,
} from "../models/assignments-database";

const routes = express.Router();

routes.get("/", (req, res) => {
  const assignments = readAllAssignments();
  res.render("homepage", {
    assignments,
  });
});

routes.get("/add", (req, res) => {
  res.render("add-assignment-form");
});

routes.post("/add-submit", (req, res) => {
  const assignments: Assignment = {
    assignments: req.body.assignments,
    score: parseInt(req.body.score),
    total: parseInt(req.body.total),
    completed: req.body.completed,
  };
  createAssignment(assignments);
  res.render("add-assignment-confirmation", { assignments });
});

routes.get("/:id/delete", (req, res) => {
  const id = parseInt(req.params.id);
  const task = readAssignmentById(id);
  if (task) {
    deleteAssignment(id);
    res.render("delete-assignment-confirmation", {
      assignments: task.assignments,
    });
  } else {
    res.status(404).render("error/not-found");
  }
});

routes.get("/:id/edit", (req, res) => {
  const id: number = parseInt(req.params.id);
  const assignment = readAssignmentById(id);
  if (assignment) {
    res.render("edit-assignment-form", { assignment });
  } else {
    res.status(404).render("error/not-found");
  }
});

routes.post('/:id/edit-submit', (req, res) => {
  const id: number = parseInt(req.params.id);
  const assignments: Assignment = {
    id: id,
    assignments: req.body.assignments,
    score: parseInt(req.body.score),
    total: parseInt(req.body.total),
    completed: req.body.completed
  };
  if (updateAssignment(assignments)) {
    res.render("edit-assignment-confirmation", { assignments });
  } else {
    res.status(404).render("error/not-found");
  }
});

export default routes;
