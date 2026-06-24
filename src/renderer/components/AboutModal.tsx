import React, { useState } from 'react'
import { useAppStore } from '../stores/app'
import { LicensesModal } from './LicensesModal'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const { appInfo } = useAppStore()
  const [showLicenses, setShowLicenses] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-950/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">CharacterCraft</h2>
            <p className="text-sm text-primary-600 dark:text-primary-400">Design the soul behind the chatbot</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Version {appInfo?.version || '1.0.0'}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto p-6 space-y-6 text-left">
          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              CharacterCraft is a personality configuration tool for creating structured chatbot personas for use in
              RAG pipelines, zero-shot prompt templates, and educational or enterprise conversational agents. It runs
              fully offline and generates profiles with a deterministic, template-based engine — no API keys, no
              network calls. You design the persona; you feed the exported artifacts to the LLM of your choice.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span>🎭 Define personality traits and values</span>
              <span>🎲 Instant one-click random generation</span>
              <span>📚 Organizational behavior theory baked in</span>
              <span>📄 Comprehensive RAG knowledge documents</span>
              <span>⚙️ Export-ready LLM prompts</span>
              <span>📝 JSON, RAG profile, and prompt exports</span>
            </div>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Built With</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Electron · React 18 · TypeScript · Tailwind CSS · Vite · Zustand. Template-based generation —
              no AI SDKs or model dependencies.
            </p>
          </section>

          {appInfo && (
            <section>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">System</h3>
              <div className="bg-gray-50 dark:bg-gray-900/40 rounded-lg p-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div><strong className="font-medium text-gray-700 dark:text-gray-300">Platform:</strong> {appInfo.platform}</div>
                <div><strong className="font-medium text-gray-700 dark:text-gray-300">Version:</strong> {appInfo.version}</div>
              </div>
            </section>
          )}

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Legal & Licensing</h3>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                CharacterCraft is open source under the MIT License.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowLicenses(true)}
                  className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View Open Source Licenses
                </button>
                <a
                  href="https://github.com/michael-borck/character-craft-lite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <LicensesModal isOpen={showLicenses} onClose={() => setShowLicenses(false)} />
    </div>
  )
}
