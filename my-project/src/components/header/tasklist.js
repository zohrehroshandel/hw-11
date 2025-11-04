import { El } from "../../utils/el";
import { deleteTodo, getTodos } from "../../utils/state";
import { showViewModal } from "./viewModal";
export function renderTodoLList(container) {
	container.innnerHTML = "";
	const todos = getTodos();
	console.log("task mojood", todos);
	for (const todo of todos) {
		const row = El({
			element: "tr",
			children: [
				El({ element: "td", innerText: todo.name, className: "p-2 border border-gray-300" }),
				El({
					element: "td",
					innerText: todo.priority,
					className: "p-2 border border-gray-300 text-center",
				}),
				El({ element: "td", innerText: todo.status, className: "p-2 border border-gray-300 text-center" }),
				El({
					element: "td",
					innerText: todo.deadline,
					className: "p-2 border border-gray-300 text-center",
				}),
				El({
					element:'td',
					className:'border border-gray-300 p-2 gap-2 flex justify-center items-center',
					children:[
						El({
							element:'button',
							className:'w-6 h-6 bg-red-500 rounded flex justify-center items-center',
							eventListener:[
								{
									event:'click',
									callback:()=>{
										console.log('delete task');
										deleteTodo(todo.id);
										renderTodoLList(container);
										
									},
								},
							],
							children:[
								El({
									element:'img',
									src:'../../../public/trash-can-svgrepo-com.png',
									alt:'delete',
									className:'w-4 h-4 object-contain',
								}),
							],
						}),
						//edit
						El({
							element:'button',
							className:'w-6 h-6 bg-blue-500 rounded flex justify-center items-center',
							eventListener:[
								{
									event:'click',
									callback:()=>{
										console.log('editt todo');
										// showEditModal(todo),
									},
								},
							],
							children:[
								El({
									element:'img',
									src:'../../../public/pencil-svgrepo-com (1).png',
									alt:'edit',
									className:'w-4 h-4 object-contain',
								}),
							],
						}),
						El({
							element:'button',
							className:'w-6 h-6 bg-gray-500 rounded flex justify-center items-center',
							eventListener:[
								{
									event:'click',
									callback:()=>{
										console.log('see');
										showViewModal(todo);
										
									},
								},
							],
							children:[
								El(
									{
										element:'img',
										src:'../../../public/eye-svgrepo-com.png',
										alt:'see',
										className:'w-fit h-fit object-contain',
									}
								)
							]
						})
					]
				})
			],
		});
		container.append(row);
	}
	console.log("جدول رندر ", todos.length);
}
