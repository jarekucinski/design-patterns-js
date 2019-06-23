const Task = require('./task');
const Repo = require('./taskRepository');

const task1 = new Task(Repo.get(1));
const task2 = new Task({name: 'Implement Module pattern'});
const task3 = new Task({name: 'Implement Constructor pattern'});
const task4 = new Task({name: 'Implement Factory pattern'});
const task5 = new Task({name: 'Implement Singleton pattern'});

task1.complete();
task2.save();
task3.save();
task4.save();
task5.save();