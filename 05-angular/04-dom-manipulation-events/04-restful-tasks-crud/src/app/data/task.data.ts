import { Task } from '../models';

export const TASKS: Task[] = [
  {
    id: randomId(),
    title: 'Design the solution',
    description: 'Define the relationship between resources and business systems.',
  },
  {
    id: randomId(),
    title: 'Prepare the test/QA environment',
    description: 'nstall test and QA servers and prerequisite software.',
  },
  {
    id: randomId(),
    title: 'Schedule jobs',
    description: 'Tivoli Business Systems Manager SQL server jobs',
  },
  {
    id: randomId(),
    title: 'Install the history server.',
    description: 'Create databases on the history server.',
  },
  {
    id: randomId(),
    title: 'Create a solution maintenance plan',
    description: 'Evaluate the addition and deletion of user IDs.',
  },
  {
    id: randomId(),
    title: 'Install the Health Monitor.',
    description: 'Install the Tivoli Business Systems Manager health monitor software.',
  },
];
function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
