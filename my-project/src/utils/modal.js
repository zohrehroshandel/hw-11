import { El } from "./el";
import { addTodo } from "./state";
import { renderTodoLList } from "../components/header/tasklist";

export function showModal() {
	const overlay = El({
		element: "div",
		className: `modalBox fixed top-o left-0 w-full h-full  bg-black/10 bg-opacity-20 backdrop-blur-sm flex justify-center items-center Z-50`,
	});
	const form = El({
		element: "form",
		className: "bg-white p-6 rounded-md flex flex-col gap-4 w-96",
		children: [
			El({
				element: "input",
				placeholder: "Task Name",
				id: "task-name",
				className: "border p-2",
			}),
			El({
				element: "select",
				id: "task-priority",
				className: "border p-2",
				children: [
					El({ element: "option", innerText: "Hight" }),
					El({ element: "option", innerText: "Medium" }),
					El({ element: "option", innerText: "Low" }),
				],
			}),
			El({
				element: "input",
				type: "date",
				id: "task-deadline",
				className: "border p-2",
			}),
			El({
				element: "button",
				innerText: "submit",
				type: "submit",
				className: "bg-purple-600 text-white p-2 rounded",
				eventListener: [
					{
						event: "click",
						callback: (e) => {
							e.preventDefault();
							const newTodo = {
								id: Date.now(),
								name: document.getElementById("task-name").value,
								priority: document.getElementById("task-priority").value,
								deadline: document.getElementById("task-deadline").value,
							};
							console.log("data:", newTodo);
							addTodo(newTodo);
							console.log("save task in localstroge");
							const container=document.getElementById('todo-table-body');
							renderTodoLList(container);
							console.log('tabele update')
							overlay.remove();
							console.log('close modal');
							
						},
					},
				],
			}),
		],
	});
	overlay.append(form);
	document.body.append(overlay);
}
