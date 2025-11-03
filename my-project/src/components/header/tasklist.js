import { getTodos } from "../../utils/state";
import { El } from "../../utils/el";
export function renderTodoLList(container) {
  container.innnerHTML="";
  const todos=getTodos();
  console.log('task mojood',todos)
  for (const todo of todos) {
    const row=El({
      element:'tr',
      children:[
        El({element:'td',innerText:todo.name,className:"p-2 border"}),
        El({element:'td',innerText:todo.priority,className:"p-2 border"}),
        El({element:'td',innerText:todo.deadline,className:"p-2 border"}),
      ],
    });
    container.append(row);
    
  }
  console.log('جدول رندر ',todos.length)
}
