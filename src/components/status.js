const todo = 'todo';
const working = 'working';
const completed = 'completed';

const nextStatusList = { todo: working, working: completed, completed: todo };

const getDefaultStatus = () => todo;

const getNextStatus = (currentStatus) => nextStatusList[currentStatus];

export { getDefaultStatus, getNextStatus };
