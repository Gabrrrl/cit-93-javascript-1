'use strict'

const todos = getSavedTodos();

let filters = {
  searchText: "",
  hideCompleted: false,
};
renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-form").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.todo.value,
    completed: false,
  });
  saveTodos(todos)
  renderTodos(todos, filters);
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters);
  });
