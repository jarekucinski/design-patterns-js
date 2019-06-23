const Task = require('./task');

const task1 = new Task('Implement Prototype pattern');
const task2 = new Task('Implement Module pattern');
const task3 = new Task('Implement Constructor pattern');
const task4 = new Task('Implement Factory pattern');
const task5 = new Task('Implement Singleton pattern');

task1.complete();
task2.save();
task3.save();
task4.save();
task5.save();