import React, { useState } from 'react'
import { useAppStore } from '../stores/app'
import { LicensesModal } from '../components/LicensesModal'

export const AboutPage: React.FC = () => {
  const { appInfo } = useAppStore()
  const [showLicenses, setShowLicenses] = useState(false)

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              CharacterCraft
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">
              Design the soul behind the chatbot
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Version {appInfo?.version || '1.0.0'}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-left space-y-6">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                About CharacterCraft
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                CharacterCraft is a personality configuration tool for creating structured chatbot personas for use in 
                RAG pipelines, zero-shot prompt templates, and educational or enterprise-grade conversational agents. 
                Design detailed personality profiles using organizational behavior principles and export them for use 
                with various AI systems.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>🎭 Define chatbot personality traits and values</li>
                  <li>📚 Incorporate organizational behavior theory</li>
                  <li>⚙️ Export-ready for LLM prompts</li>
                  <li>🧠 Designed for RAG pipelines</li>
                </ul>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>🎲 Random personality generation</li>
                  <li>🤖 AI-powered character creation</li>
                  <li>📄 Comprehensive RAG documents</li>
                  <li>📝 Multiple export formats</li>
                </ul>
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Technology Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• <strong>Electron</strong> - Cross-platform desktop framework</li>
                  <li>• <strong>React 18</strong> - Modern UI library with hooks</li>
                  <li>• <strong>TypeScript</strong> - Type-safe JavaScript</li>
                  <li>• <strong>Tailwind CSS</strong> - Utility-first styling</li>
                </ul>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• <strong>Vite</strong> - Fast build tool and dev server</li>
                  <li>• <strong>Zustand</strong> - Lightweight state management</li>
                  <li>• <strong>AI SDKs</strong> - OpenAI, Claude, Gemini, Ollama</li>
                  <li>• <strong>Node.js</strong> - Runtime environment</li>
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Use Cases
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>LLM Role-play Simulation:</strong> Educational scenarios and training interviews</li>
                <li>• <strong>AI Assistant Configuration:</strong> Apps, bots, and support tools</li>
                <li>• <strong>Prompt Engineering:</strong> Contextual personality grounding</li>
                <li>• <strong>Research Applications:</strong> Generating character datasets</li>
              </ul>
            </div>

            {appInfo && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  System Information
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• <strong>Platform:</strong> {appInfo.platform}</li>
                    <li>• <strong>Version:</strong> {appInfo.version}</li>
                    <li>• <strong>Architecture:</strong> Cross-platform desktop application</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Legal Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Legal & Licensing
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  CharacterCraft is open source software released under the MIT License. 
                  We respect and acknowledge all open source contributions.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowLicenses(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    📄 View Open Source Licenses
                  </button>
                  <a
                    href="https://github.com/your-org/charactercraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    📂 Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Acknowledgments */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Acknowledgments
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Portions of this project were created with the assistance of AI tools, including natural language 
                generation and code scaffolding. All final content, structure, and implementation decisions were 
                reviewed and approved by the development team. Special thanks to the open source community for 
                the amazing tools that make projects like this possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Licenses Modal */}
      <LicensesModal 
        isOpen={showLicenses} 
        onClose={() => setShowLicenses(false)} 
      />
    </div>
  )
}