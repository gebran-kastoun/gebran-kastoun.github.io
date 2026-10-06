export type Course = {
  code: string;
  title: string;
  term: string;
  summary: string;
  status?: 'In progress' | 'Transfer credit';
  project?: {title: string; url: string};
};

export type CourseGroup = {
  id: string;
  title: string;
  courses: Course[];
};

// Terms and transfer status come from the transcript; descriptions summarize course topics.
// Add courses here to update the Experience and Coursework page.
export const courseGroups: CourseGroup[] = [
  {
    id: 'embedded-systems', title: 'Embedded systems & software', courses: [
      {code: 'ECE 4760', title: 'Digital Systems Design Using Microcontrollers', term: 'Fall 2025', summary: 'Built and debugged real-time systems on microcontrollers. For the final project, my team made an autonomous drawing car that followed wireless waypoints using IMU feedback.', project: {title: 'See the autonomous drawing car', url: '/projects/autonomous-drawing-car/'}},
      {code: 'ECE 3140', title: 'Embedded Systems', term: 'Spring 2026', summary: 'Worked with sensing, interrupts, I/O, and concurrent embedded software. Our Floating Box project used a distance sensor, servo control, and feedback to hold a target height.', project: {title: 'See the Floating Box', url: '/projects/floating-box/'}},
      {code: 'CS 4414', title: 'Systems Programming', term: 'Fall 2026', status: 'In progress', summary: 'Studying C++ and Linux systems programming, including concurrency, operating-system abstractions, and performance.'},
      {code: 'CS 2110', title: 'Object-Oriented Programming and Data Structures', term: 'Fall 2025', summary: 'Studied object-oriented programming, algorithms, data structures, testing, and program correctness in Java.'},
    ],
  },
  {
    id: 'electronics-architecture', title: 'Electronics & computer architecture', courses: [
      {code: 'ECE 4560', title: 'Power Electronics', term: 'Fall 2026', status: 'In progress', summary: 'Studying power-converter design, switching devices, magnetics, and control of energy-conversion circuits.'},
      {code: 'ECE 4750', title: 'Computer Architecture', term: 'Fall 2026', status: 'In progress', summary: 'Studying processor and memory-system design, including pipelining, caches, and multicore organization.'},
      {code: 'ECE 3150', title: 'Introduction to Microelectronics', term: 'Spring 2026', summary: 'Studied semiconductor devices, MOSFETs, amplifiers, and the circuit foundations of microelectronics.'},
      {code: 'ECE 2300', title: 'Digital Logic and Computer Organization', term: 'Fall 2025', summary: 'Studied combinational and sequential logic, finite-state machines, and how processors and memory are organized.'},
      {code: 'ECE 2100', title: 'Introduction to Circuits for Electrical and Computer Engineers', term: 'Spring 2025', summary: 'Built a foundation in DC and AC circuit analysis, transient response, RLC networks, and laboratory measurement.'},
    ],
  },
  {
    id: 'data-probability', title: 'Data & probability', courses: [
      {code: 'ECE 3100', title: 'Introduction to Probability and Inference for Random Signals and Systems', term: 'Spring 2026', summary: 'Studied random variables and processes, estimation, and statistical inference for uncertain engineering systems.'},
      {code: 'ECE 2720', title: 'Data Science for Engineers', term: 'Fall 2025', summary: 'Worked through the engineering data workflow: cleaning, modeling, visualization, and prediction using Python.'},
    ],
  },
  {
    id: 'core', title: 'Math & physics core', courses: [
      {code: 'MATH 2940', title: 'Linear Algebra for Engineers', term: 'Recorded Fall 2025', status: 'Transfer credit', summary: 'Covered matrices, vector spaces, eigenvalues, and their use in engineering problems.'},
      {code: 'MATH 2930', title: 'Differential Equations for Engineers', term: 'Spring 2025', summary: 'Studied ordinary and partial differential equations for modeling dynamic systems, oscillations, and waves.'},
      {code: 'MATH 1920', title: 'Multivariable Calculus for Engineers', term: 'Fall 2024', summary: 'Studied partial derivatives, multiple integrals, vector fields, and line and surface integrals.'},
      {code: 'PHYS 2213', title: 'Physics II: Electromagnetism', term: 'Spring 2025', summary: 'Studied electric and magnetic fields, circuits, induction, and Maxwell’s equations.'},
      {code: 'PHYS 1112', title: 'Physics I: Mechanics and Heat', term: 'Fall 2024', summary: 'Studied motion, forces, energy, rotation, heat, and thermodynamics.'},
    ],
  },
];
