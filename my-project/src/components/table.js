import { El } from "../utils/el";
export function createTodoTable() {
	return El({
		element: "table",
		className: "w-full border border-gray-300 ",
		children: [
			El({
				element: "thead",
				children: [
					El({
						element: "tr",
						children: [
							El({ element: "th", innerText: "task name", className: "p-2" }),
							El({ element: "th", innerText: "priorty", className: "p-2" }),
							El({ element: "th", innerText: "status", className: "p-2" }),
							El({ element: "th", innerText: "deadline", className: "p-2" }),
							El({ element: "th", innerText: "actions", className: "p-2" }),
						],
					}),
				],
			}),
      El({
        element:'tbody',
        id:'todo-table-body',
      }),
		],
	});
}
