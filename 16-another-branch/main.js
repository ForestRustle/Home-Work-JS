'use strict';

let countID = 0;
let countPriority = 0;
let numberOfTask = 0;
//Добавить диапазон приоритености от 1 до 10
const toDoList = {
  tasks: [],

  addTask(title, priority) {
    const id = ++countID;
    const numTask = ++numberOfTask;
    console.log(`Задача номер № ${numTask} добавлена в список`);
    return this.tasks.push({ title, priority, id });
  },
  //Сделать удаление по ID
  deleteTaskById(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return `Задача № ${numberOfTask} с id ${id} удалена`;
  },
  //МЕТОД БЕРЕТ ИНДЕКС ПОЭТОМУ НИЧЕГО НЕ РАБОТАЕТ
  updateTask(id, newTitleTask) {
    const updateTask = this.tasks.find(task => task.id === id);
    if (updateTask) {
      updateTask.title = newTitleTask;
      return (`Задача с id № ${id} обновлена на ${newTitleTask}`);
    } else {
      return (`Задача с id № ${id} в списке не найдена`);
    }
  },
  //Сделать сортировку по id
  sortedById() {
    return this.tasks.sort((task1, task2) => task1.id - task2.id);
  },
  //Сделать сортировку по приоритету
  sortedByPriority() {
    console.log('Список задач отсортирован по наибольшей приоритености');
    return this.tasks.sort((task1, task2) => task2.priority - task1.priority);
  },

};

const newTask = {
  tasks: [],
};

newTask.addTask = toDoList.addTask;
newTask.deleteTaskById = toDoList.deleteTaskById;
newTask.updateTask = toDoList.updateTask;
newTask.sortedById = toDoList.sortedById;
newTask.sortedByPriority = toDoList.sortedByPriority;

// для нового объекта
const newAddTask = toDoList.addTask.bind(newTask);
const newDeleteTaskById = toDoList.deleteTaskById.bind(newTask);
const newUpdateTask = toDoList.updateTask.bind(newTask);
const newSortedById = toDoList.sortedById.bind(newTask);
const newSortedByPriority = toDoList.sortedByPriority.bind(newTask);

let example = {
  name: 'тест',
  description: 'описание',
  order: 0,
};

console.log(newTask.addTask(example));
console.log(newTask.deleteTaskById(1));
console.log(newTask.addTask(example));
console.log(newUpdateTask(1, 'Новая задача'));
console.log(newTask.sortedById());
console.log(newTask.sortedByPriority());