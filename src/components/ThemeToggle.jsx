import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-surface-secondary hover:bg-surface-tertiary transition-colors duration-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-normal ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, #0a0e1a 0%, #1e2230 100%)',
          }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-normal ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(90deg, #e0f2fe 0%, #bae6fd 100%)',
          }}
        />
      </div>

      {/* Toggle Knob */}
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-lg transition-all duration-normal ease-out-expo transform ${
          isDark ? 'translate-x-0 bg-gradient-to-br from-indigo-500 to-purple-600' : 'translate-x-7 bg-gradient-to-br from-amber-400 to-orange-500'
        }`}
      >
        {/* Icon */}
        <div className="w-full h-full flex items-center justify-center text-white">
          {isDark ? (
            <FiMoon className="w-3.5 h-3.5 animate-scale-in" />
          ) : (
            <FiSun className="w-3.5 h-3.5 animate-scale-in" />
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-normal pointer-events-none ${
          isDark ? 'opacity-0' : 'opacity-30'
        }`}
        style={{
          boxShadow: '0 0 15px rgba(251, 191, 36, 0.6)',
        }}
      />
    </button>
  );
};

export default ThemeToggle;
