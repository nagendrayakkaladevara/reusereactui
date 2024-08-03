import React from "react";
import GistEmbed from "../customHooks/gistEmbed";

interface MenuItem {
    name: string;
    status: string;
}

const Components: React.FC = () => {
    const menuItems: MenuItem[] = [
        { "name": "Button", "status": "" },
        { "name": "Input", "status": "New" },
        { "name": "Loader", "status": "New" },
        { "name": "Box Shadow", "status": "New" },
        { "name": "Accordion", "status": "Soon!" },
        { "name": "Popup", "status": "Soon!" },
        { "name": "Card", "status": "Soon!" },
        { "name": "Carousel", "status": "Soon!" },
        { "name": "Toasts", "status": "Soon!" }
    ]

    return (
        <>

            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                                    {item.status && (
                                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                            {item.status}
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                        </p>
                        <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                    </div> */}
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div>
                    <p>Introduction</p>
                    <p>The Button component is a highly customizable and reusable button component built with React and TypeScript. It is designed to be flexible and adaptable, offering various customization options such as different styles (variants), sizes, states (loading, disabled), and the ability to include icons. This component can be easily integrated into any React project, providing a consistent and scalable solution for button elements.</p>
                </div>
                <br />
                <div>
                    <p>Features</p>
                    <ul>
                        <li>Variants: Supports multiple button styles such as primary, secondary, success, danger, warning, and info.</li>
                        <li>Sizes: Available in small, medium, and large sizes to fit different use cases.</li>
                        <li>States: Includes loading and disabled states to handle various UI scenarios.</li>
                        <li>Icons: Allows adding icons to buttons for better visual representation.</li>
                        <li>Accessibility: Properly handles disabled and loading states for better user experience.</li>
                    </ul>
                </div>
                <br />
                <div style={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", padding: "10px", borderRadius: "10px" }}>
                    {/* <GistEmbed gistId="8283461d6b9e608d892ca23a7479ff51" /> */}
                    <GistEmbed gistId="b999df9cd36b6cba9a0f440d4d9d79a9" />
                    
                </div>

            </div>


        </>
    )
}
export default Components;