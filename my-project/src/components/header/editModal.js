import { El } from "../../utils/el";
import { updateTodo } from "../../utils/state";
import { renderTodoLList } from "./tasklist";
export function showEditModal(todo) {
  const overlay=El({
    element:'div',
    className:`
    fixed top-0 left-0 w-full h-full bg-white/10 backrop-blur-md flex justify-center items-center z-50
    `
  });
  const form=El({
    element:'form',
    className:'bg-white p-6 rounded-md flex flex-col gap-4 w-96',
    children:[
      El({
        element:'input',
        id:'edit-name',
        className:'border p-2',
        value:todo.name,

      }),
      El({
        element:'select',
        id:'edit-priority',
        className:'border p-2',
        children:['hight','medium','low'].map((text)=>El({
          element:'option',
          innerText:text,
          value:text,
          selected:text===todo.priority,
        })
      ),
      }),
      El({
        element:'select',
        id:'edit-status',
        className:'border p-2',
        children:['todo','doing','done'].map((text)=>El({
element:'option',
innerText:text,
value:text,
selected:text===todo.status,
        })
      ),
      }),
      El({element:'input',type:'date' ,id:'edit-deadline',value:todo.deadline ,className:'p-2 border'}),
      El({
        element:'button',
        innerText:'save change',
        type:'submit',
        className:'bg-green-600 text-white p-2 rounded',
        eventListener:[
          {
            event:'click',
            callback:(e)=>{
              e.preventDefault();
              const updated={
                ...todo,
                name:document.getElementById('edit-name').value,
                priortiy:document.getElementById('edit-priority').value,
                status:document.getElementById('edit-status').value,
                deadline:document.getElementById('edit-deadline').value,
              };
              updateTodo(updated);
              const container=document.getElementById('todo-table-body');
              renderTodoLList(container);
              overlay.remove();
              console.log('update edit task');
              
                
              
            },
          },
        ],
      }),
    ],
  });
  overlay.append(form);
  document.body.append(overlay);
}