import { El } from "../utils/el";
export function createTodoTable() {
  return El({
    element:'table',
    className:'w-full border mt-6',
    children:[
      El({
        element:'thead',
        children:[
          El({
            element:'tr',
            
          })
        ]
      })
    ]
  })
  
}