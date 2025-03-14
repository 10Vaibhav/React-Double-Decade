import useLocalStorage from "./useLocalStorage"
import { useEffect } from "react"

export default function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    useEffect(() => {
        // Update the document class when theme changes
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [theme])

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="w-[1200px] h-[600px] flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <p className="text-gray-800 dark:text-gray-200 text-xl mb-4">
                    Hello World!
                </p>
                <button 
                    onClick={handleToggleTheme}
                    className="px-4 py-2 rounded-md bg-rose-400 hover:bg-rose-600 
                             text-white font-medium transition-colors duration-200
                             dark:bg-rose-600 dark:hover:bg-rose-700"
                >
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </div>
    )
}
