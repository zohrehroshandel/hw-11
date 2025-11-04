import { El } from "../../utils/el";
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
    El({element:'h2',innerText:'deatails task',className:'text-lg font-bold'},
    El({element:'P',innerText:`name:${todo.name}`}),
    El({element:'p',innerText:`priority:${todo.priority}`}),
   
    )
  ]
})
}
  
