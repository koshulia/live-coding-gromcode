const tasks = [
  { text: 'Buy milk', id: '1', done: false },
  { text: 'Pick up Tom from airport', id: '2', done: false },
  { text: 'Visit party', id: '3', done: false },
  { text: 'Visit doctor', id: '4', done: true },
  { text: 'Buy meat', id: '5', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const inputButtonElem = document.querySelector('.create-task-btn');

const renderTasks = () => {
  console.log('render', tasks);
  listElem.innerHTML = '';
  const tasksElems = [];
  tasks.forEach(task => {
    tasksElems.push(task);
  });
  const sortedTasks = tasksElems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...sortedTasks);
};

//code quality
//validation first
//choose correct tool
//single function responsibility

function onCreateTask() {
  const taskInputEl = document.querySelector('.task-input');

  if (!taskInputEl.value) return;

  tasks.push({ text: taskInputEl.value, done: false });

  taskInputEl.value = '';

  renderTasks(tasks);
}

const createBtnEl = document.querySelector('.create-task-btn');
createBtnEl.addEventListener('click', onCreateTask);

//change task - algo
//if not checkbox - end status
//find by id
//update task

const onUpdateTaskStatus = event => {
  if (!event.target.classlist.contains('list__item-checkbox')) {
    return;
  }

  const checkbox = event.target;

  const foundedTask = tasks.find(task => task.id === checkbox.dataset.id);
  foundedTask.done = checkbox.checked;
  renderTasks(tasks);
};

listElem.addEventListener('click', onUpdateTaskStatus);

renderTasks(tasks);
