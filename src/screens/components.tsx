import React, { useState } from "react";
import GistEmbed from "../customHooks/gistEmbed";
import { ButtonsDemo } from "../components/featureCode";
import Input from "../reactreusablecomponents/inputfield";
import TailwindInput from "../reactreusablecomponents/TailwindInput";

interface MenuItem {
    name: string;
    status: string;
    description: string;
    gist: string,
    tailwindcss: boolean;
    tailwindGist: string
}

const Components: React.FC = () => {
    const menuItems: MenuItem[] = [
        {
            "name": "Button",
            "status": "",
            "description": "The Button component is a highly customizable and reusable button component built with React and TypeScript. It is designed to be flexible and adaptable, offering various customization options such as different styles (variants), sizes, states (loading, disabled), and the ability to include icons. This component can be easily integrated into any React project, providing a consistent and scalable solution for button elements.",
            "gist": "b999df9cd36b6cba9a0f440d4d9d79a9",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Input",
            "status": "New",
            "description": "The Input Component is a versatile and customizable form element designed for use in React applications with TypeScript. This component aims to enhance user experience by providing a clean and intuitive interface for data entry. It supports various input types, including text, password, and number, making it suitable for a wide range of applications.",
            "gist": "48e1e25d54f394fdd37c21874d9f7c7d",
            "tailwindcss": true,
            "tailwindGist": "c12acc18a02e4ed52fabacd5c0faa002"
        },
        {
            "name": "Loader",
            "status": "New",
            "description": "A visual indicator for loading processes and actions.",
            "gist": "d5f5ef3a7239d287a878b4998b5d4f1d",
            "tailwindcss": true,
            "tailwindGist": "73046a2277c70288419531682abeca3b"

        },
        {
            "name": "Box Shadow",
            "status": "New",
            "description": "CSS utility for adding depth to elements with box shadows.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Accordion",
            "status": "Soon!",
            "description": "An expandable and collapsible section to display content.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Popup",
            "status": "Soon!",
            "description": "A dialog or overlay that displays additional information.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Card",
            "status": "Soon!",
            "description": "A flexible container for displaying related content.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Carousel",
            "status": "Soon!",
            "description": "A rotating set of images or content for showcasing items.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        },
        {
            "name": "Toasts",
            "status": "Soon!",
            "description": "Brief notifications that provide feedback about an action.",
            "gist": "",
            "tailwindcss": false,
            "tailwindGist": ""
        }
    ];

    const [currentContent, setCurrentContent] = useState('Button');
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleMenuItemClick = (content: string) => {
        setLoading(true);
        setTimeout(() => {
            setCurrentContent(content);
            setLoading(false);
        }, 1000);
    };

    const currentMenuItem = menuItems.find(item => item.name === currentContent);   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        // Example validation
        if (e.target.value.length < 3) {
            setError('Username must be at least 3 characters long.');
        } else {
            setError('');
        }
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <button
                data-drawer-target="cta-button-sidebar"
                data-drawer-toggle="cta-button-sidebar"
                aria-controls="cta-button-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => handleMenuItemClick(item.name)}
                                    className={`flex items-center p-2 rounded-lg dark:text-white group ${currentContent === item.name ? 'bg-gray-100 dark:bg-gray-700 text-gray-900' : 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
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
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {loading ? (
                    <div className="flex justify-center" style={{ height: "50px" }}>
                        <span className="loader"></span>
                    </div>
                ) : (
                    <>
                        {currentMenuItem && (
                            <div>
                                <div>
                                    <p>Introduction</p>
                                    <p>{currentMenuItem.description}</p>
                                </div>
                                <br />
                                <div className="flex justify-center">

                                    {currentContent === 'Button' && (<>
                                        <ButtonsDemo />
                                    </>)}

                                    {currentContent === 'Input' && (<>
                                        {isChecked ? <TailwindInput
                                            type="text"
                                            label="Username"
                                            value={username}
                                            onChange={handleChange}
                                            error={error}
                                            placeholder="Enter your username"
                                        /> : <Input
                                            type="text"
                                            label="Username"
                                            value={username}
                                            onChange={handleChange}
                                            error={error}
                                            placeholder="Enter your username"
                                        />}
                                    </>)}

                                </div>
                                {currentMenuItem.tailwindcss && (<>
                                    <br />
                                    <div className="flex justify-end">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleToggle}
                                                value=""
                                                className="sr-only peer"
                                            />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Tailwind CSS</span>
                                        </label>
                                    </div>
                                </>)}

                                <br />
                                <div style={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", padding: "10px", borderRadius: "10px" }}>
                                    <GistEmbed gistId={(isChecked ? currentMenuItem.tailwindGist :currentMenuItem.gist)} />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
export default Components;