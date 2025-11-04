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
        id:'edit-priority',
        className:'border p-2',
        

      })
    ]
  })
}