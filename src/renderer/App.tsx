import React from 'react'
import { AppShell } from './components/layout/AppShell'
import { CharacterCraftPage } from './pages/CharacterCraftPage'
import { useTheme } from './hooks/useTheme'
import { useElectron } from './hooks/useElectron'

const App: React.FC = () => {
  useTheme() // Initialize theme system
  useElectron() // Initialize Electron integration

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AppShell>
        <CharacterCraftPage />
      </AppShell>
    </div>
  )
}

export default App
