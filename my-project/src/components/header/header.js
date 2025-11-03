import { El } from "../../utils/el";
import { showModal } from "../../utils/modal";
export function Header() {
	return El({
		element: "div",
		className:
			"bg-purple-600 w-full h-auto flex p-4 justify-between items-center",
		children: [
			El({
				element: "div",
				className: "flex text-white gap-3 ",
				children: [
					El({
						element: "img",
						src: "../../../public/menu-svgrepo-com.png",
						className: "w-8 h-8",
					}),
					El({
						element: "div",
						innerText: "my to-do task",
						className: "text-xl",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex gap-4",
				children: [
					El({
						element: "div",
						className:
							"relative search-container flex gap-4 items-center justify-center ",
						children: [
							El({
								element: "img",
								src: "../../../public/search-svgrepo-com (1).png",
								className: "w-5 h-5  search-icon ",
							}),
							El({
								element: "input",
								className: "w-full search-container h-8",
								placeholder: "Search ",
							}),
							El({
								element: "img",
								className: "w-8 h-8",
								src: "../../../public/funnel-fill-svgrepo-com.png",
							}),
							El({
								element: "button",
								className:
									"bg-white flex justify-center items-center font-bold  rounded-sm text-xl w-7 h-7  text-purple-600",
								innerText: "+",
								eventListener: [
									{
										event: "click",
										callback: () => {
											showModal()
										},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
