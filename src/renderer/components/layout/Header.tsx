import React from 'react'
import { useAppStore } from '../../stores/app'
import { useTheme } from '../../hooks/useTheme'
import { Icon } from '../ui/Icon'

export const Header: React.FC = () => {
  const { setSettingsOpen, setAboutOpen } = useAppStore()
  const { currentTheme, toggleTheme } = useTheme()

  const themeIcon = currentTheme === 'dark' ? 'Moon' : currentTheme === 'light' ? 'Sun' : 'Monitor'

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">CharacterCraft</h1>
          <span className="hidden sm:inline text-sm text-gray-400 dark:text-gray-500">
            Design the soul behind the chatbot
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={`Theme: ${currentTheme}`}
          >
            <Icon name={themeIcon as 'Sun' | 'Moon' | 'Monitor'} size={18} />
          </button>

          <button
            onClick={() => setAboutOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="About CharacterCraft"
          >
            <Icon name="Info" size={16} />
            <span className="hidden sm:inline">About</span>
          </button>

          <button
            onClick={() => setSettingsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Settings"
          >
            <Icon name="Settings" size={16} />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </header>
  )
}
