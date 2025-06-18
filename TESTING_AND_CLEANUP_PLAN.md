# CharacterCraft Desktop Testing & Cleanup Plan

## 1. Testing the Desktop App

### Development Testing
```bash
cd charactercraft-desktop
npm run dev
```
- This starts both the Electron main process and Vite dev server
- The app will open in an Electron window
- Hot reload enabled for development

### Production Build Testing
```bash
cd charactercraft-desktop
npm run build     # Build all components
npm run start     # Run the built app
```

### AI Integration Testing
1. **Without AI**: Test template-based generation (works offline)
2. **With AI**: Configure an AI provider (OpenAI/Claude/Gemini/Ollama) and test AI generation
3. **Test both generation modes** and compare outputs

## 2. Project Cleanup Strategy

### Files to Delete
- `electron-template/` folder (no longer needed)
- Root-level SPA files that are now superseded:
  - `src/` (original SPA source)
  - `public/` (original SPA public files) 
  - `package.json` (root level - keep only desktop version)
  - `workbox-config.cjs`
  - `jsdoc.json`

### Files to Keep
- `README.md` (update to reflect desktop app)
- `LICENSE`
- `CONTRIBUTING.md`
- `docs/` folder (valuable documentation)
- `rag-example/` (useful reference)
- `charactercraft-desktop/` (our new main app)

### New Structure After Cleanup
```
character-craft-lite/
├── README.md                    # Updated for desktop app
├── LICENSE
├── CONTRIBUTING.md
├── docs/                        # Keep documentation
├── rag-example/                 # Keep as reference
└── charactercraft-desktop/      # Main desktop application
    ├── src/
    ├── ai-service/
    ├── package.json
    └── MIGRATION_SUMMARY.md
```

## 3. Git Commit Strategy

### Step 1: Clean Commit of Current State
```bash
git add charactercraft-desktop/
git commit -m "feat: Add CharacterCraft desktop application with AI integration

- Port SPA to Electron with React/TypeScript
- Add multi-provider AI service (OpenAI, Claude, Gemini, Ollama)
- Implement dual generation: template vs AI-powered
- Professional desktop UI with settings persistence
- Maintain all original personality generation features

🤖 Generated with Claude Code"
```

### Step 2: Cleanup Commit
```bash
git rm -r electron-template src public workbox-config.cjs jsdoc.json package.json
git add .
git commit -m "cleanup: Remove old SPA files and electron-template

- Remove original SPA source code (migrated to desktop app)
- Remove electron-template folder (no longer needed)
- Clean up root-level build configurations
- Keep documentation and examples for reference

🤖 Generated with Claude Code"
```

### Step 3: Update Documentation
```bash
# Update README.md to reflect desktop app
git add README.md
git commit -m "docs: Update README for desktop application

- Update installation and usage instructions
- Add desktop-specific features documentation
- Include AI integration setup guide
- Update tech stack to reflect Electron/React architecture

🤖 Generated with Claude Code"
```

## 4. Testing Checklist

### Core Functionality
- [ ] 5-step wizard navigation works
- [ ] All form fields save/load properly
- [ ] Template generation produces expected output
- [ ] Random generation populates form correctly
- [ ] Reset functionality clears all data

### AI Integration
- [ ] AI settings modal opens/closes properly
- [ ] Can configure different AI providers
- [ ] AI generation works with valid API keys
- [ ] Error handling for invalid API keys
- [ ] Fallback to template generation when AI fails
- [ ] Loading states display correctly

### Desktop Features
- [ ] Window resizing and persistence
- [ ] Sidebar navigation works
- [ ] Settings panel functionality
- [ ] Dark/light theme switching
- [ ] Notification system works
- [ ] App can be packaged for distribution

### Build System
- [ ] Development mode starts successfully
- [ ] Production build completes without errors
- [ ] TypeScript compilation passes
- [ ] All imports resolve correctly

## 5. How to Test

### Quick Start Test
1. Navigate to desktop app: `cd charactercraft-desktop`
2. Install dependencies: `npm install` (if not done)
3. Start development: `npm run dev`
4. Test basic form navigation and template generation
5. Configure AI provider and test AI generation

### Detailed Testing Steps

#### Template Generation Test
1. Fill out all 5 form sections with sample data
2. Choose "Template Generation" mode
3. Click "Generate Personality"
4. Verify summary and description are generated
5. Test "Back to Form" and "Start Over" buttons

#### AI Generation Test
1. Click "Setup AI" button
2. Choose a provider (e.g., OpenAI)
3. Enter API key
4. Configure settings
5. Fill out form sections
6. Choose "AI Generation" mode
7. Click "Generate with AI"
8. Verify AI-generated content
9. Compare with template output

#### Desktop Features Test
1. Test window resizing and position persistence
2. Navigate through sidebar menu items
3. Test settings modal functionality
4. Test notification system with various actions
5. Test theme switching (if implemented)

### Troubleshooting

#### Development Server Won't Start
- Check Node.js version (requires 18+)
- Ensure all dependencies installed: `npm install`
- Check for TypeScript errors: `npm run typecheck`

#### AI Integration Issues
- Verify API key is valid
- Check network connection
- Test with different providers
- Review error messages in browser console

#### Build Failures
- Clear node_modules and reinstall
- Check TypeScript configuration
- Verify all imports are correct
- Run linting: `npm run lint`

## 6. Post-Cleanup Recommendations

### Update README.md to include:
- Desktop installation instructions
- AI provider setup guides
- Development setup for contributors
- Build and packaging instructions
- Migration notes for users of the old SPA

### Future Enhancements
- Add export functionality (copy/download profiles)
- Implement file system integration for saving profiles
- Add batch generation capabilities
- Create distribution packages for Windows/Mac/Linux

## 7. Distribution Preparation

### Package for Distribution
```bash
cd charactercraft-desktop
npm run build
npm run dist
```

### Platform-Specific Builds
- Windows: `.exe` installer
- macOS: `.dmg` disk image
- Linux: `.AppImage` and `.deb` packages

### Release Checklist
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Version numbers updated
- [ ] Release notes prepared
- [ ] Build artifacts tested on target platforms