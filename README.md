# CharacterCraft

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Desktop App](https://img.shields.io/badge/Platform-Desktop-blue?logo=electron)](https://www.electronjs.org/)
[![Cross Platform](https://img.shields.io/badge/Cross--Platform-Windows%20%7C%20macOS%20%7C%20Linux-green)](https://www.electronjs.org/)

**Design the soul behind the chatbot.**

![CharacterCraft Desktop](docs/images/charactercraft-lite.png)

CharacterCraft is a **desktop personality configuration tool** for creating structured chatbot personas for use in RAG pipelines, zero-shot prompt templates, and educational or enterprise-grade conversational agents.

## 🔧 Features

- 🎭 **Define chatbot personality traits** including tone, role, communication style, and values
- 📚 **Incorporate organizational behavior theory** (e.g., leadership styles, conflict resolution, emotional intelligence)
- ⚙️ **Export-ready for LLM prompts** (supports Claude, GPT, open-source models)
- 🧠 **Designed for RAG pipelines** with comprehensive document generation
- 📝 **Multiple export formats**: JSON, RAG profiles, LLM prompts, and structured documents
- 🎲 **"Surprise Me!" instant generation** with random realistic values
- 🖥️ **Native desktop experience** with cross-platform support
- 🔄 **Template-based generation** - fast, reliable, no API dependencies

## 📘 Use Cases

- **LLM role-play simulation** (e.g., educational scenarios, training interviews)
- **AI assistant configuration** for apps, bots, or support tools
- **Prompt engineering** for contextual personality grounding
- **Research applications** - generating character datasets for analysis

## 🛠 Tech Stack

- **Electron** - Cross-platform desktop framework
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Zustand** - Lightweight state management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/character-craft-lite.git
   cd character-craft-lite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run dist
   ```

### Available Scripts

- `npm run dev` - Start development environment
- `npm run build` - Build all components
- `npm run start` - Run built application
- `npm run dist` - Package for distribution
- `npm run lint` - Lint TypeScript code
- `npm run typecheck` - Type checking

## 📋 Components

The application includes:

- **5-step personality wizard** for comprehensive character configuration
- **Template-based personality generation** with organizational behavior theory integration  
- **RAG document system** - 7 specialized documents for knowledge base implementation
- **Multiple export formats**: JSON, markdown, LLM prompts
- **"Surprise Me!" feature** for instant random character generation
- **Cross-platform desktop interface** with dark/light themes

## 📚 Organizational Behavior Foundation

CharacterCraft is grounded in established organizational behavior theories:

- **Leadership Styles**: Democratic, Autocratic, Transformational, Servant Leadership
- **Personality Types**: Extrovert, Introvert, Analytical, Creative  
- **Decision Making**: Analytical, Intuitive, Collaborative, Directive
- **Conflict Resolution**: Collaborating, Compromising, Accommodating, Competing, Avoiding
- **Communication Styles**: Direct, Diplomatic, Supportive, Analytical
- **Emotional Intelligence**: Self-awareness, empathy, social skills assessment

## 📝 Export Options

### RAG Document System
Seven comprehensive documents designed for vector database implementation:
1. **Core Personality Profile** - Fundamental traits and characteristics
2. **Communication Guidelines** - Interaction patterns and style
3. **Conflict Resolution Approaches** - Problem-solving strategies  
4. **Decision Making Framework** - Process and criteria
5. **Theoretical Foundations** - Organizational behavior grounding
6. **Common Scenarios & Responses** - Situational behavior patterns
7. **Audience-Specific Interactions** - Tailored communication approaches

### Additional Exports
- **JSON Profile** - Complete data structure for integration
- **LLM Prompt** - Ready-to-use system prompt for role-playing
- **RAG Profile** - Structured markdown for knowledge graphs

## 🏗️ Architecture

CharacterCraft follows a modular desktop application architecture:

```
src/
├── main/           # Electron main process
├── preload/        # Preload scripts for security
├── renderer/       # React frontend application
│   ├── components/ # Reusable UI components
│   ├── pages/      # Application pages
│   ├── stores/     # State management
│   └── hooks/      # Custom React hooks
└── shared/         # Shared type definitions
```

## 🌟 Why Desktop?

CharacterCraft evolved from a web application to a native desktop experience to provide:

- **Offline capability** - No internet required for personality generation
- **File system access** - Direct document downloads and exports
- **Native performance** - Responsive UI without browser limitations  
- **Professional tool feel** - Dedicated application for serious use cases
- **Cross-platform consistency** - Identical experience on Windows, macOS, and Linux

## 🧠 About the "Lite" Version

CharacterCraft "Lite" refers to our **lightweight, streamlined approach**:

- **No AI dependencies** - Uses proven template-based generation instead of API calls
- **No complex setup** - Download and run, no API keys or configuration required
- **Fast and reliable** - Instant generation without network delays or rate limits
- **Essential features** - Focused on core personality generation without unnecessary complexity

The template system provides consistent, high-quality results based on organizational behavior research, making it ideal for professional and educational use.

## 📦 Building & Distribution

### Development Build
```bash
npm run dev
```

### Production Build  
```bash
npm run build
npm run dist
```

Distributable packages will be created in the `release/` directory for:
- Windows (`.exe` installer)
- macOS (`.dmg` disk image)  
- Linux (`.AppImage` and `.deb` packages)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Portions of this project were created with the assistance of AI tools, including natural language generation and code scaffolding. All final content, structure, and implementation decisions were reviewed and approved by the development team. Special thanks to the open source community for the amazing tools that make projects like this possible.

---

**Made with ❤️ for AI developers, educators, and conversation designers.**