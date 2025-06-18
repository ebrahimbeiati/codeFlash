# CodeFlash 🚀

A modern, interactive learning platform designed to help developers master programming concepts through flashcards, quizzes, and structured learning paths.

## ✨ Features

### 📚 Comprehensive Learning Paths
- **13+ Learning Paths** covering essential programming topics
- **Progressive Difficulty Levels** from beginner to advanced
- **Structured Content** with flashcards and quizzes for each topic

### 🎯 Interactive Learning Experience
- **Flashcard System** with spaced repetition learning
- **Progress Tracking** with XP points and learning streaks
- **Quiz Assessments** to test knowledge retention
- **Review States** (Known, Review Later, Don't Know) for personalized learning

### 🛠️ Technology Stack
- **Next.js 15** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive and beautiful UI design
- **shadcn/ui** components for consistent design system
- **Framer Motion** for smooth animations and interactions

### 📱 Responsive Design
- **Mobile-First** approach for learning on any device
- **Progressive Web App** capabilities
- **Cross-Platform** compatibility

## 🎓 Learning Paths Available

### Fundamentals
- **Introduction to Digital** - Computer basics and digital concepts
- **Introduction to Programming** - Core programming fundamentals
- **HTML & CSS Basics** - Web development foundations

### Programming Languages
- **JavaScript Fundamentals** - Modern JavaScript programming
- **TypeScript Essentials** - Type-safe JavaScript development
- **React Basics** - React.js framework fundamentals

### Backend & Databases
- **Node.js Basics** - Server-side JavaScript
- **Express.js Basics** - Web application framework
- **MongoDB Basics** - NoSQL database management
- **SQL Basics** - Relational database fundamentals

### Tools & DevOps
- **Git & GitHub Basics** - Version control and collaboration
- **Linux Commands** - Command-line proficiency

### Advanced Topics
- **Algorithms & Data Structures** - Computer science fundamentals

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ebrahimbeiati/codeFlash.git
   cd codeFlash
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start learning!

### Building for Production

```bash
npm run build
npm start
```

## 📖 How to Use

### Learning with Flashcards
1. **Choose a Learning Path** from the home page
2. **Select a Flashcard Set** within the learning path
3. **Review Cards** and mark your understanding:
   - ✅ **Known** - You understand this concept
   - ⏰ **Review Later** - Need to revisit this
   - ❌ **Don't Know** - Need to study this more
4. **Track Progress** with XP points and learning streaks

### Taking Quizzes
1. **Navigate to the Quiz Tab** in any learning path
2. **Answer Questions** to test your knowledge
3. **Earn XP** based on your performance
4. **Review Results** to identify areas for improvement

### Progress Tracking
- **XP System** - Earn points for completing flashcards and quizzes
- **Learning Streaks** - Maintain daily learning habits
- **Level Progression** - Advance through levels as you learn

## 🏗️ Project Structure

```
codeFlash/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── ui/             # shadcn/ui components
│   │   ├── flashcards/     # Flashcard components
│   │   └── quiz/           # Quiz components
│   ├── lib/
│   │   ├── data/           # Learning path data
│   │   └── utils/          # Utility functions
│   ├── store/              # State management
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── components.json         # shadcn/ui configuration
```

## 🛠️ Development

### Adding New Learning Paths
1. Create a new file in `src/lib/data/learning-paths/`
2. Define flashcards and quiz questions
3. Export the learning path object
4. Add to the index file

### Customizing Components
- UI components are in `src/components/ui/`
- Learning components are in `src/components/`
- Styling uses Tailwind CSS classes

### State Management
- Progress tracking uses localStorage
- Component state managed with React hooks
- No external state management library required

## 🤝 Contributing

I welcome contributions to make CodeFlash even better!
