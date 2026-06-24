import React from 'react'
import { Header } from './Header'
import { NotificationCenter } from './NotificationCenter'
import { SettingsModal } from '../settings/SettingsModal'
import { AboutModal } from '../AboutModal'
import { useAppStore } from '../../stores/app'

interface AppShellProps {
  children: React.ReactNode
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { settingsOpen, aboutOpen, setAboutOpen } = useAppStore()

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header / top bar */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 overflow-auto">
        <div className="h-full">
          {children}
        </div>
      </main>

      {/* Notifications */}
      <NotificationCenter />

      {/* Overlays */}
      {settingsOpen && <SettingsModal />}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  )
}
