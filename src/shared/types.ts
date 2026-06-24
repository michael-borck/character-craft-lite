// Core application types that are shared between main and renderer processes

export interface CoreSettings {
  appearance: {
    theme: 'light' | 'dark' | 'system'
    fontFamily: 'system' | 'serif' | 'sans-serif'
    fontSize: 'small' | 'medium' | 'large' | 'xl'
    accentColor: string
    compactMode: boolean
  }
  window: {
    persistState: boolean
    sidebarExpanded: boolean
    zoomLevel: number
    alwaysOnTop: boolean
  }
  behavior: {
    autoSave: boolean
    autoSaveInterval: number
    startupLaunch: boolean
    notifications: boolean
    checkUpdates: boolean
  }
  accessibility: {
    highContrast: boolean
    reduceMotion: boolean
    keyboardShortcuts: boolean
  }
  data: {
    dataLocation: string
    autoBackup: boolean
    exportFormat: 'json' | 'pdf' | 'html' | 'docx'
  }
}

export interface AppInfo {
  name: string
  version: string
  platform: string
}

export interface NavigationItem {
  id: string
  label: string
  icon: string
  path: string
  badge?: number
}

export interface AppState {
  isLoading: boolean
  currentRoute: string
  sidebarCollapsed: boolean
  settingsOpen: boolean
  notifications: Notification[]
}

export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  timestamp: number
  persistent?: boolean
}

export interface MenuItem {
  action: string
  label: string
  accelerator?: string
}

// Bridge exposed by the preload script via contextBridge
export interface ElectronAPI {
  getAppVersion: () => Promise<string>
  getPlatform: () => Promise<string>
  onMenuAction: (callback: (action: string) => void) => void
  removeAllListeners: (channel: string) => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}

// Character builder types shared between the wizard and the RAG documents modal
export interface CharacterData {
  organizationName: string
  organizationType: string
  organizationSize: string
  industry: string
  characterName: string
  age: string
  role: string
  tenure: string
  personalityType: string
  leadershipStyle: string
  decisionMaking: string
  conflictResolution: string
  communicationStyle: string
  preferredChannels: string
  feedbackApproach: string
  teamInteraction: string
  emotionalIntelligence: string
  empathy: string
  stressManagement: string
  adaptability: string
}

export interface GeneratedPersonality {
  description: string
  traits: string[]
  communicationStyle: string
  motivations: string[]
  workStyle: string
  decisionMaking: string
  values: string[]
  challenges: string[]
}