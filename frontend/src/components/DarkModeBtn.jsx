import { DarkModeContext } from '../context/DarkModeContext.jsx';
import { useContext } from 'react';

const DarkModeBtn = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    
    return (
        <button
        className="relative md:left-3/4 left-2/4 top-10 w-max bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 py-2 px-10 rounded-lg border border-neutral-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        {`${darkMode ? 'LightMode' : 'DarkMode'}`}
      </button>
    )
}

export default DarkModeBtn