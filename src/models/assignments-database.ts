import Assignment from "./Assignment";

let nextId: number = 1;
let data: Assignment[] = [];

createAssignment({
  assignments: "Assesment 1",
  score: 10,
  total: 10,
  completed: true,
});
createAssignment({
  assignments: "Assesment 2",
  score: 8,
  total: 10,
  completed: true,
});
createAssignment({
  assignments: "Assesment 3",
  score: 8,
  total: 10,
  completed: true,
});
createAssignment({
  assignments: "Assesment 4",
  score: 5,
  total: 10,
  completed: true,
});
createAssignment({
  assignments: "Assesment 5",
  score: 9,
  total: 10,
  completed: true,
});
createAssignment({
  assignments: "Assesment 6",
  score: 7,
  total: 10,
  completed: false,
});

export function createAssignment(assignments: Assignment): void {
  assignments.id = nextId++;
  data.push(assignments);
}

export function readAllAssignments(): Assignment[] {
  return data;
}

export function readAssignmentById(id: number): Assignment | undefined {
  return data.find((assignment) => assignment.id === id);
}

export function updateAssignment(assignments: Assignment): boolean {
  const index = data.findIndex((a) => a.id === assignments.id);
  if (index == -1) {
    return false;
  } else {
    data[index] = assignments;
    return true;
  }
}

export function deleteAssignment(id: number): boolean {
  const index = data.findIndex((assignment) => assignment.id === id);
  if (index == -1) {
    return false;
  } else {
    data.splice(index, 1);
    return true;
  }
}
