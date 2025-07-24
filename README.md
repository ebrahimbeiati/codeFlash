# CodeFlash 🚀

**🌐 Live Demo:** [https://codeflash1.netlify.app/](https://codeflash1.netlify.app/)

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

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker Desktop

### Development (Recommended)

1. **Clone and start**
   ```bash
   git clone https://github.com/ebrahimbeiati/codeFlash.git
   cd codeFlash
   make dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
make help          # Show all commands
make dev           # Start development (Docker Compose)
make build         # Build Docker image
make deploy        # Deploy to Kubernetes
make clean         # Clean up Docker resources
make logs          # Show application logs
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

## 🏗️ Infrastructure

For detailed information about Docker, Terraform, and Kubernetes setup, see [INFRASTRUCTURE.md](./INFRASTRUCTURE.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
