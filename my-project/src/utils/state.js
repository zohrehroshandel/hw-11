const STORAGE_KEY="todos";
export function getTodos() {
  const data=localStorage.getItem(STORAGE_KEY);
  return data? JSON.parse(data) :[];
}
export function saveTodos(todos) {
  
  localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
  console.log("save shod");
  
}
export function addTodo(todo) {
  const todos=getTodos();
  todos.push(todo);
  saveTodos(todos);
  console.log('task save',todo);
  
}
export function deleteTodo(id) {
  console.log(getTodos())
  const todos=getTodos().filter((t)=>t.id !==id);
  saveTodos(todos);
  console.log('delete shod');
    console.log(getTodos())
  
}
export function updateTodo(updatedTodo) {
  const todos=getTodos().map((t)=> t.id===updatedTodo.id ? updatedTodo : t
  );
  saveTodos(todos);
  console.log('update shod task');
  
}
