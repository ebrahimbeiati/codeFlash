# CodeFlash - Microlearning Flashcard App

## Overview
CodeFlash is a progressive web application designed to help software developer trainees master software engineering fundamentals through daily, bite-sized learning sessions. The app combines the effectiveness of spaced repetition with modern web technologies to create an engaging learning experience.

## 🎯 Target Audience
- Software development bootcamp participants
- Junior developers transitioning into the field
- Self-taught programmers seeking structured learning

## ✨ Core Features

### Learning Experience
- **Daily Flashcard Sets**: 5-minute focused learning sessions
- **Interactive Review System**: 
  - "Known" - Mark for spaced repetition
  - "Review Later" - Schedule for future review
  - "Don't Know" - Flag for immediate focus
- **Quiz Mode**: Test knowledge with immediate feedback
- **Progress Tracking**: Visualize learning journey with streaks and XP

### Technical Features
- **Offline-First**: Works without internet connection
- **Progressive Web App**: Installable on any device
- **Responsive Design**: Optimized for all screen sizes
- **Data Persistence**: Local storage with encryption
- **Accessibility**: WCAG 2.1 compliant

## 📚 Learning Topics

### Core Curriculum
1. **Software Engineering Basics**
   - Programming paradigms
   - Data structures
   - Algorithms
   - Design patterns

2. **Git & Version Control**
   - Basic commands
   - Branching strategies
   - Collaboration workflows
   - Best practices

3. **Web Fundamentals**
   - HTML5 semantics
   - CSS3 features
   - JavaScript ES6+
   - Browser APIs

4. **Clean Code & Best Practices**
   - Code organization
   - Documentation
   - Testing
   - Performance optimization

5. **Security Fundamentals**
   - Authentication
   - Authorization
   - Data protection
   - Common vulnerabilities

## 🛠 Technical Architecture

### Frontend
- **Framework**: React 18+
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Build Tool**: Vite

### Backend (Future)
- **Platform**: Supabase
- **Features**:
  - Authentication
  - Real-time sync
  - File storage
  - Database

### Development Tools
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint + Prettier
- **Type Safety**: TypeScript

## 🔄 Development Phases

### Phase 1: MVP (Current)
- [ ] Set up project structure
- [ ] Create sample JSON data structure
- [ ] Implement basic flashcard components
- [ ] Add localStorage persistence
- [ ] Implement basic routing
- [ ] Add offline support

### Phase 2: Enhanced Features
- [ ] Implement spaced repetition algorithm
- [ ] Add quiz mode
- [ ] Implement progress tracking
- [ ] Add user authentication
- [ ] Implement useful links feature

### Phase 3: Advanced Features
- [ ] AI-powered flashcard generation
- [ ] Social features
- [ ] Analytics dashboard
- [ ] Custom flashcard creation
- [ ] Export/Import functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
bash
# Clone the repository
git clone https://github.com/yourusername/codeflash.git

# Navigate to project directory
cd codeflash

# Install dependencies
npm install

# Start development server
npm run dev


### Development
bash
# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview


## 🤝 Contributing
We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Inspired by spaced repetition learning techniques
- Built with modern web technologies
- Community-driven development

---