import express from 'express';
import { readAllAssignments, readAssignmentById } from '../models/assignments-database';

const routes = express.Router();

routes.get('/', (req, res) => {
  const assignments = readAllAssignments();
  res.json(assignments);
});

routes.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const assignment = readAssignmentById(id);
  if (assignment) {
    res.json(assignment);
  } else {
    res.status(404);
    res.json({error: `No assignment with ID ${id}.`});
  }
});

export default routes;