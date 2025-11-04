import { El } from "../../utils/el";
import { getStatusColor,getPriorityColor } from "../../utils/style";
export function showViewModal( todo){
const overlay=El({
  element:'div',
  className:`
  fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-md flex justify-center items-center z-50

  `,
});
const box=El({
  element:'div',
  className:'bg-white p-6 rounded-md w-96 flex flex-col gap-2',
  children:[
    El({element:'h2',innerText:'deatails task',className:'text-lg font-bold'}),
    El({element:'p',innerText:`name:${todo.name}`}),
    El({element:'p',innerText:`priority:${todo.priority}` ,className:getPriorityColor(todo.priority)}),
    El({element:'p',innerText:`status:${todo.status}`, className:getStatusColor(todo.status) }),
    El({element:'p',innerText:`deadline:${todo.deadline}`}),
    El({
      element:'button',
      innerText:'close',
      className:'bg-purple-600 text-white p-2 rounded mt-4',
      eventListener:[
        {
          event:'click',
          callback:()=>{
            console.log('close modal');
            overlay.remove();
            
          },
        },
      ],
    }),
  ],
});
overlay.append(box);
document.body.append(overlay)
}
  
