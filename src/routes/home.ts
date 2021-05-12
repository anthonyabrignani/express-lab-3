import express from 'express';
import Assignment from '../models/Assignment';
import { createAssignment, deleteAssignment, readAllAssignments, readAssignmentById, updateAssignment } from '../models/assignments-database';

const routes = express.Router();

routes.get('/', (req, res) => {
    const assignments = readAllAssignments();
    res.render('homepage', { 
      assignments
    });
  });

export default routes;