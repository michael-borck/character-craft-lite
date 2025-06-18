import React, { useState } from 'react'
import { RAGDocsModal } from '../components/RAGDocsModal'

interface CharacterData {
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

interface GeneratedPersonality {
  description: string
  traits: string[]
  communicationStyle: string
  motivations: string[]
  workStyle: string
  decisionMaking: string
  values: string[]
  challenges: string[]
}

export const CharacterCraftPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPersonality, setGeneratedPersonality] = useState<GeneratedPersonality | null>(null)
  const [showRAGModal, setShowRAGModal] = useState(false)
  const [characterData, setCharacterData] = useState<CharacterData>({
    organizationName: '',
    organizationType: '',
    organizationSize: '',
    industry: '',
    characterName: '',
    age: '',
    role: '',
    tenure: '',
    personalityType: '',
    leadershipStyle: '',
    decisionMaking: '',
    conflictResolution: '',
    communicationStyle: '',
    preferredChannels: '',
    feedbackApproach: '',
    teamInteraction: '',
    emotionalIntelligence: '',
    empathy: '',
    stressManagement: '',
    adaptability: ''
  })


  const handleInputChange = (field: keyof CharacterData, value: string) => {
    setCharacterData(prev => ({ ...prev, [field]: value }))
  }

  const getRandomOption = (options: string[]): string => {
    return options[Math.floor(Math.random() * options.length)]
  }

  const fillRandomFields = (): CharacterData => {
    const organizationTypes = ['corporation', 'startup', 'nonprofit', 'government', 'educational']
    const organizationSizes = ['1-10', '11-50', '51-200', '201-1000', '1000+']
    const industries = ['technology', 'healthcare', 'finance', 'education', 'retail', 'manufacturing', 'consulting']
    const ageRanges = ['22-30', '31-40', '41-50', '51-60', '60+']
    const tenures = ['less-than-1-year', '1-3-years', '3-5-years', '5-10-years', '10+-years']
    const personalityTypes = ['extrovert', 'introvert', 'analytical', 'creative']
    const leadershipStyles = ['democratic', 'autocratic', 'transformational', 'servant']
    const decisionMakingStyles = ['analytical', 'intuitive', 'collaborative', 'directive']
    const conflictStyles = ['collaborating', 'compromising', 'accommodating', 'competing', 'avoiding']
    const communicationStyles = ['direct', 'diplomatic', 'supportive', 'analytical']
    const channels = ['face-to-face', 'email', 'video-calls', 'instant-messaging', 'mixed']
    const feedbackApproaches = ['frequent-informal', 'scheduled-formal', 'real-time', 'written']
    const teamInteractions = ['highly-collaborative', 'moderately-collaborative', 'independent-with-updates', 'mostly-independent']
    const eiLevels = ['high', 'moderate', 'developing']
    const stressLevels = ['excellent', 'good', 'needs-improvement']
    const adaptabilityLevels = ['highly-adaptable', 'moderately-adaptable', 'prefers-stability']

    const organizationNames = ['TechCorp', 'InnovateCo', 'Global Solutions', 'Future Systems', 'NextGen Industries']
    const characterNames = ['Alex Johnson', 'Morgan Smith', 'Casey Brown', 'Taylor Davis', 'Jordan Wilson']
    const roles = ['Senior Manager', 'Team Lead', 'Director', 'VP Operations', 'Department Head', 'Project Manager']

    return {
      organizationName: characterData.organizationName || getRandomOption(organizationNames),
      organizationType: characterData.organizationType || getRandomOption(organizationTypes),
      organizationSize: characterData.organizationSize || getRandomOption(organizationSizes),
      industry: characterData.industry || getRandomOption(industries),
      characterName: characterData.characterName || getRandomOption(characterNames),
      age: characterData.age || getRandomOption(ageRanges),
      role: characterData.role || getRandomOption(roles),
      tenure: characterData.tenure || getRandomOption(tenures),
      personalityType: characterData.personalityType || getRandomOption(personalityTypes),
      leadershipStyle: characterData.leadershipStyle || getRandomOption(leadershipStyles),
      decisionMaking: characterData.decisionMaking || getRandomOption(decisionMakingStyles),
      conflictResolution: characterData.conflictResolution || getRandomOption(conflictStyles),
      communicationStyle: characterData.communicationStyle || getRandomOption(communicationStyles),
      preferredChannels: characterData.preferredChannels || getRandomOption(channels),
      feedbackApproach: characterData.feedbackApproach || getRandomOption(feedbackApproaches),
      teamInteraction: characterData.teamInteraction || getRandomOption(teamInteractions),
      emotionalIntelligence: characterData.emotionalIntelligence || getRandomOption(eiLevels),
      empathy: characterData.empathy || getRandomOption(eiLevels),
      stressManagement: characterData.stressManagement || getRandomOption(stressLevels),
      adaptability: characterData.adaptability || getRandomOption(adaptabilityLevels)
    }
  }

  const generateTemplatePersonality = (data: CharacterData): GeneratedPersonality => {
    const personalityTraits: Record<string, string[]> = {
      'extrovert': ['Outgoing', 'Energetic', 'Sociable', 'Assertive', 'Expressive'],
      'introvert': ['Reflective', 'Thoughtful', 'Independent', 'Focused', 'Reserved'],
      'analytical': ['Logical', 'Detail-oriented', 'Systematic', 'Objective', 'Methodical'],
      'creative': ['Innovative', 'Imaginative', 'Flexible', 'Intuitive', 'Original']
    }

    const leadershipTraits: Record<string, string[]> = {
      'democratic': ['Collaborative', 'Inclusive', 'Consultative', 'Participative'],
      'autocratic': ['Decisive', 'Direct', 'Results-focused', 'Authoritative'],
      'transformational': ['Inspirational', 'Visionary', 'Motivating', 'Change-oriented'],
      'servant': ['Supportive', 'Empowering', 'Service-oriented', 'Humble']
    }

    const valuesByPersonality: Record<string, string[]> = {
      'extrovert': ['Collaboration', 'Communication', 'Teamwork', 'Recognition'],
      'introvert': ['Autonomy', 'Deep thinking', 'Quality', 'Precision'],
      'analytical': ['Accuracy', 'Logic', 'Evidence-based decisions', 'Efficiency'],
      'creative': ['Innovation', 'Freedom', 'Originality', 'Flexibility']
    }

    const motivationsByRole: Record<string, string[]> = {
      'senior manager': ['Strategic impact', 'Team development', 'Organizational growth'],
      'team lead': ['Team success', 'Mentoring', 'Process improvement'],
      'director': ['Vision execution', 'Cross-functional collaboration', 'Results delivery'],
      'vp operations': ['Operational excellence', 'Scalability', 'Innovation'],
      'default': ['Achievement', 'Recognition', 'Growth', 'Excellence']
    }

    const traits = [
      ...(personalityTraits[data.personalityType] || []),
      ...(leadershipTraits[data.leadershipStyle] || [])
    ]

    const values = valuesByPersonality[data.personalityType] || ['Integrity', 'Excellence', 'Teamwork']
    const motivations = motivationsByRole[data.role?.toLowerCase()] || motivationsByRole['default']

    // Generate more contextual description
    const industryContext = data.industry === 'technology' ? 'tech-savvy' : 
                           data.industry === 'healthcare' ? 'patient-focused' : 
                           data.industry === 'finance' ? 'results-driven' : 'professional'

    const experienceLevel = data.tenure?.includes('10+') ? 'highly experienced' :
                           data.tenure?.includes('5-10') ? 'experienced' :
                           data.tenure?.includes('3-5') ? 'seasoned' : 'developing'

    return {
      description: `${data.characterName} is a ${experienceLevel} ${data.personalityType} ${data.leadershipStyle} leader working as a ${data.role} in the ${data.industry} industry. Known for their ${data.communicationStyle} communication style and ${data.emotionalIntelligence} emotional intelligence, they bring a ${industryContext} approach to their work at ${data.organizationName}.`,
      traits,
      communicationStyle: `${data.communicationStyle} communicator who prefers ${data.preferredChannels} interactions and uses a ${data.feedbackApproach} feedback approach`,
      motivations,
      workStyle: `${data.teamInteraction} work style with ${data.decisionMaking} decision-making approach, excelling in ${data.organizationSize} employee organizations`,
      decisionMaking: `Uses ${data.decisionMaking} decision-making style, handles conflict through ${data.conflictResolution} approaches, and demonstrates ${data.adaptability} when facing change`,
      values,
      challenges: data.stressManagement === 'needs-improvement' ? 
        ['Managing stress effectively', 'Balancing priorities', 'Adapting to rapid change'] :
        ['Scaling operations', 'Innovation adoption', 'Team development']
    }
  }


  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      // Fill any missing fields with random values
      const completedData = fillRandomFields()
      setCharacterData(completedData)
      
      // Generate personality using template system
      const personality = generateTemplatePersonality(completedData)
      
      if (personality) {
        setGeneratedPersonality(personality)
        setCurrentStep(6)
      }
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRandomFill = () => {
    const randomData = fillRandomFields()
    setCharacterData(randomData)
  }

  const handleSurpriseMe = async () => {
    setIsGenerating(true)
    try {
      // Fill all fields with random values
      const randomData = fillRandomFields()
      setCharacterData(randomData)
      
      // Generate personality immediately (always use template mode for "Surprise Me!")
      const personality = generateTemplatePersonality(randomData)
      
      if (personality) {
        setGeneratedPersonality(personality)
        setCurrentStep(6) // Jump directly to results
      }
    } catch (error) {
      console.error('Surprise Me generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleExportJSON = () => {
    if (!generatedPersonality) return
    
    const exportData = {
      character: characterData,
      personality: generatedPersonality,
      generatedAt: new Date().toISOString(),
      version: "1.0.0"
    }
    
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2))
      .then(() => alert('Copied to clipboard!'))
      .catch(() => {
        // Fallback: create download
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `character-${characterData.characterName?.replace(/\s+/g, '-').toLowerCase() || 'profile'}.json`
        a.click()
        URL.revokeObjectURL(url)
      })
  }

  const handleExportRAG = () => {
    if (!generatedPersonality) return
    
    const ragDocument = `# Character Profile: ${characterData.characterName}

## Basic Information
- **Name**: ${characterData.characterName}
- **Role**: ${characterData.role}
- **Organization**: ${characterData.organizationName} (${characterData.organizationType})
- **Industry**: ${characterData.industry}
- **Experience**: ${characterData.tenure}

## Personality Summary
${generatedPersonality.description}

## Communication Style
${generatedPersonality.communicationStyle}

## Work Style
${generatedPersonality.workStyle}

## Decision Making
${generatedPersonality.decisionMaking}

## Key Traits
${generatedPersonality.traits.map(trait => `- ${trait}`).join('\n')}

## Core Values
${generatedPersonality.values.map(value => `- ${value}`).join('\n')}

## Motivations
${generatedPersonality.motivations.map(motivation => `- ${motivation}`).join('\n')}

## Potential Challenges
${generatedPersonality.challenges.map(challenge => `- ${challenge}`).join('\n')}

## LLM Integration Instructions
This character profile can be used in RAG pipelines by:
1. **System Prompt**: Use the personality summary as a system prompt for role-playing scenarios
2. **Context Window**: Include relevant sections based on conversation context
3. **Voice Interface**: Adapt communication style for voice interactions
4. **Training Data**: Use as training examples for character consistency

## Prompt Template
\`\`\`
You are ${characterData.characterName}, a ${characterData.role} at ${characterData.organizationName}.

Background: ${generatedPersonality.description}

Communication Style: ${generatedPersonality.communicationStyle}

When responding:
- Embody these traits: ${generatedPersonality.traits.slice(0, 3).join(', ')}
- Stay true to these values: ${generatedPersonality.values.slice(0, 2).join(', ')}
- Use your ${characterData.decisionMaking} decision-making approach
\`\`\`
`

    const blob = new Blob([ragDocument], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${characterData.characterName?.replace(/\s+/g, '-').toLowerCase() || 'character'}-rag-profile.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(1)
    setGeneratedPersonality(null)
    setCharacterData({
      organizationName: '',
      organizationType: '',
      organizationSize: '',
      industry: '',
      characterName: '',
      age: '',
      role: '',
      tenure: '',
      personalityType: '',
      leadershipStyle: '',
      decisionMaking: '',
      conflictResolution: '',
      communicationStyle: '',
      preferredChannels: '',
      feedbackApproach: '',
      teamInteraction: '',
      emotionalIntelligence: '',
      empathy: '',
      stressManagement: '',
      adaptability: ''
    })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 1: Organizational Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  value={characterData.organizationName}
                  onChange={(e) => handleInputChange('organizationName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization Type
                </label>
                <select
                  value={characterData.organizationType}
                  onChange={(e) => handleInputChange('organizationType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="corporation">Corporation</option>
                  <option value="startup">Startup</option>
                  <option value="nonprofit">Non-profit</option>
                  <option value="government">Government</option>
                  <option value="educational">Educational Institution</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization Size
                </label>
                <select
                  value={characterData.organizationSize}
                  onChange={(e) => handleInputChange('organizationSize', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </label>
                <select
                  value={characterData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 2: Character Demographics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Character Name
                </label>
                <input
                  type="text"
                  value={characterData.characterName}
                  onChange={(e) => handleInputChange('characterName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter character name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <select
                  value={characterData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select age range</option>
                  <option value="22-30">22-30</option>
                  <option value="31-40">31-40</option>
                  <option value="41-50">41-50</option>
                  <option value="51-60">51-60</option>
                  <option value="60+">60+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role in Organization
                </label>
                <input
                  type="text"
                  value={characterData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Senior Manager, Team Lead, Director"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tenure with Organization
                </label>
                <select
                  value={characterData.tenure}
                  onChange={(e) => handleInputChange('tenure', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select tenure</option>
                  <option value="less-than-1-year">Less than 1 year</option>
                  <option value="1-3-years">1-3 years</option>
                  <option value="3-5-years">3-5 years</option>
                  <option value="5-10-years">5-10 years</option>
                  <option value="10+-years">10+ years</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 3: Organizational Behavior Theories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Personality Type
                </label>
                <select
                  value={characterData.personalityType}
                  onChange={(e) => handleInputChange('personalityType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select personality type</option>
                  <option value="extrovert">Extrovert</option>
                  <option value="introvert">Introvert</option>
                  <option value="analytical">Analytical</option>
                  <option value="creative">Creative</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Leadership Style
                </label>
                <select
                  value={characterData.leadershipStyle}
                  onChange={(e) => handleInputChange('leadershipStyle', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select leadership style</option>
                  <option value="democratic">Democratic</option>
                  <option value="autocratic">Autocratic</option>
                  <option value="transformational">Transformational</option>
                  <option value="servant">Servant Leadership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Decision Making Style
                </label>
                <select
                  value={characterData.decisionMaking}
                  onChange={(e) => handleInputChange('decisionMaking', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select decision making style</option>
                  <option value="analytical">Analytical</option>
                  <option value="intuitive">Intuitive</option>
                  <option value="collaborative">Collaborative</option>
                  <option value="directive">Directive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Conflict Resolution Style
                </label>
                <select
                  value={characterData.conflictResolution}
                  onChange={(e) => handleInputChange('conflictResolution', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select conflict resolution style</option>
                  <option value="collaborating">Collaborating</option>
                  <option value="compromising">Compromising</option>
                  <option value="accommodating">Accommodating</option>
                  <option value="competing">Competing</option>
                  <option value="avoiding">Avoiding</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 4: Interaction Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Communication Style
                </label>
                <select
                  value={characterData.communicationStyle}
                  onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select communication style</option>
                  <option value="direct">Direct</option>
                  <option value="diplomatic">Diplomatic</option>
                  <option value="supportive">Supportive</option>
                  <option value="analytical">Analytical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Communication Channels
                </label>
                <select
                  value={characterData.preferredChannels}
                  onChange={(e) => handleInputChange('preferredChannels', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select preferred channels</option>
                  <option value="face-to-face">Face-to-face</option>
                  <option value="email">Email</option>
                  <option value="video-calls">Video calls</option>
                  <option value="instant-messaging">Instant messaging</option>
                  <option value="mixed">Mixed approach</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Feedback Approach
                </label>
                <select
                  value={characterData.feedbackApproach}
                  onChange={(e) => handleInputChange('feedbackApproach', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select feedback approach</option>
                  <option value="frequent-informal">Frequent informal</option>
                  <option value="scheduled-formal">Scheduled formal</option>
                  <option value="real-time">Real-time</option>
                  <option value="written">Written</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Team Interaction Preference
                </label>
                <select
                  value={characterData.teamInteraction}
                  onChange={(e) => handleInputChange('teamInteraction', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select team interaction preference</option>
                  <option value="highly-collaborative">Highly collaborative</option>
                  <option value="moderately-collaborative">Moderately collaborative</option>
                  <option value="independent-with-updates">Independent with updates</option>
                  <option value="mostly-independent">Mostly independent</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 5: Emotional Intelligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Emotional Intelligence Level
                </label>
                <select
                  value={characterData.emotionalIntelligence}
                  onChange={(e) => handleInputChange('emotionalIntelligence', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select EI level</option>
                  <option value="high">High</option>
                  <option value="moderate">Moderate</option>
                  <option value="developing">Developing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Empathy Level
                </label>
                <select
                  value={characterData.empathy}
                  onChange={(e) => handleInputChange('empathy', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select empathy level</option>
                  <option value="high">High</option>
                  <option value="moderate">Moderate</option>
                  <option value="developing">Developing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Stress Management
                </label>
                <select
                  value={characterData.stressManagement}
                  onChange={(e) => handleInputChange('stressManagement', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select stress management approach</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="needs-improvement">Needs improvement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adaptability
                </label>
                <select
                  value={characterData.adaptability}
                  onChange={(e) => handleInputChange('adaptability', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select adaptability level</option>
                  <option value="highly-adaptable">Highly adaptable</option>
                  <option value="moderately-adaptable">Moderately adaptable</option>
                  <option value="prefers-stability">Prefers stability</option>
                </select>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Generation Options</h3>
              
              <div className="mb-6">
                <button
                  onClick={handleRandomFill}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mb-2"
                >
                  🎲 Fill Missing Fields Randomly
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Automatically populate any empty fields with random realistic values
                </p>
              </div>

              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium mb-1">
                  🚀 Ready to Generate
                </p>
                <p className="text-green-700 dark:text-green-300 text-xs">
                  Generate personality profile based on organizational behavior theories. Missing fields will be filled automatically.
                </p>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Generated Personality Profile</h2>
            {generatedPersonality && (
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300">{generatedPersonality.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Traits</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {generatedPersonality.traits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Motivations</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {generatedPersonality.motivations.map((motivation, index) => (
                        <li key={index}>{motivation}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Communication Style</h3>
                    <p className="text-gray-700 dark:text-gray-300">{generatedPersonality.communicationStyle}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Work Style</h3>
                    <p className="text-gray-700 dark:text-gray-300">{generatedPersonality.workStyle}</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Values</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {generatedPersonality.values.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Potential Challenges</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {generatedPersonality.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Export Options</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleExportJSON}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      📋 Copy/Download JSON
                    </button>
                    <button
                      onClick={handleExportRAG}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      📄 Download RAG Profile
                    </button>
                    <button
                      onClick={() => setShowRAGModal(true)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      📚 RAG Documents
                    </button>
                    <button
                      onClick={() => {
                        const promptText = `You are ${characterData.characterName}, a ${characterData.role} at ${characterData.organizationName}.\n\nBackground: ${generatedPersonality.description}\n\nCommunication Style: ${generatedPersonality.communicationStyle}\n\nWhen responding:\n- Embody these traits: ${generatedPersonality.traits.slice(0, 3).join(', ')}\n- Stay true to these values: ${generatedPersonality.values.slice(0, 2).join(', ')}\n- Use your ${characterData.decisionMaking} decision-making approach`
                        navigator.clipboard.writeText(promptText)
                          .then(() => alert('LLM prompt copied to clipboard!'))
                          .catch(() => alert('Failed to copy prompt'))
                      }}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      🤖 Copy LLM Prompt
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      🔄 Start Over
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    💡 <strong>RAG Profile:</strong> Structured markdown for vector databases and knowledge graphs<br/>
                    💡 <strong>RAG Documents:</strong> Comprehensive knowledge base with individual documents for each personality aspect<br/>
                    💡 <strong>LLM Prompt:</strong> Ready-to-use system prompt for role-playing scenarios<br/>
                    💡 <strong>JSON Export:</strong> Complete data structure for integration and analysis
                  </p>
                </div>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  CharacterCraft - Design the soul behind the chatbot
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Create detailed personality profiles for your chatbot characters using organizational behavior principles.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSurpriseMe}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                >
                  {isGenerating ? '🎲 Generating...' : '🎲 Surprise Me!'}
                </button>
                <button
                  onClick={handleReset}
                  disabled={isGenerating}
                  className="px-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  🔄 Start Over
                </button>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          {currentStep <= 5 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      step <= currentStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Step content */}
          {renderStep()}

          {/* Navigation buttons */}
          {currentStep <= 5 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              {currentStep === 5 ? (
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isGenerating ? 'Generating...' : 'Generate Personality'}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          )}

        </div>
      </div>

      {/* RAG Documents Modal */}
      <RAGDocsModal
        isOpen={showRAGModal}
        onClose={() => setShowRAGModal(false)}
        characterData={characterData}
        personality={generatedPersonality || {
          description: '',
          traits: [],
          communicationStyle: '',
          motivations: [],
          workStyle: '',
          decisionMaking: '',
          values: [],
          challenges: []
        }}
      />
    </div>
  )
}