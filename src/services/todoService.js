import http from './httpService';
const apiEndPoint = '/todos';

const todoUrl = (todoID) => {
  return `${apiEndPoint}/${todoID}`;
};

export function getAllTodos() {
  return http.get(apiEndPoint);
}

export function getTodo(todoID) {
  return http.get(todoUrl(todoID));
}

export function getLimitedTodos(limit) {
  return http.get(`${apiEndPoint}?_limit=${limit}`);
}

export function createTodo(todo) {
  return http.post(apiEndPoint, todo);
}

export function editTodo(todo, todoID) {
  return http.put(todoUrl(todoID), todo);
}

export function destroyTodo(todoID) {
  return http.delete(todoUrl(todoID));
}
