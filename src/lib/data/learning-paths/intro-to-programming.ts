export const introToProgramming = {
    id: 'intro-to-programming',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming and computational thinking',
    level: 'beginner',
    sets: [
      {
        id: 'programming-basics',
        title: 'Programming Fundamentals',
        description: 'Core concepts of programming and problem-solving',
        cards: [
          {
            id: 'pb-1',
            front: 'What is a variable?',
            back: 'A variable is a named container that stores data in a program. It can hold different types of values (numbers, text, etc.) and its value can change during program execution.'
          },
          {
            id: 'pb-2',
            front: 'What is a function?',
            back: 'A function is a reusable block of code that performs a specific task. It can take inputs (parameters) and return outputs.'
          },
          {
            id: 'pb-3',
            front: 'What is a loop?',
            back: 'A loop is a programming structure that repeats a block of code multiple times. Common types include for loops and while loops.'
          },
          {
            id: 'pb-4',
            front: 'What is an algorithm?',
            back: 'An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. It\'s like a recipe for a computer to follow.'
          },
          {
            id: 'pb-5',
            front: 'What is debugging?',
            back: 'Debugging is the process of finding and fixing errors (bugs) in a program. It involves identifying the cause of the error and making the necessary corrections.'
          },
          {
            id: 'pb-6',
            front: 'What is a conditional statement?',
            back: 'A conditional statement is a programming structure that executes different code blocks based on whether a condition is true or false. Examples include if-else statements.'
          },
          {
            id: 'pb-7',
            front: 'What is a comment?',
            back: 'A comment is text in the code that is not executed. It\'s used to explain what the code does and make it more readable for other programmers.'
          },
          {
            id: 'pb-8',
            front: 'What is a data type?',
            back: 'A data type defines the kind of data a variable can hold and the operations that can be performed on it. Common types include integers, strings, and booleans.'
          },
          {
            id: 'pb-9',
            front: 'What is an operator?',
            back: 'An operator is a symbol that performs operations on values. Examples include arithmetic operators (+, -, *, /) and comparison operators (==, !=, >, <).'
          },
          {
            id: 'pb-10',
            front: 'What is a constant?',
            back: 'A constant is a variable whose value cannot be changed after it\'s assigned. It\'s used for values that should remain the same throughout the program.'
          },
          {
            id: 'pb-11',
            front: 'What is scope?',
            back: 'Scope defines where a variable can be accessed in a program. Variables can have global scope (accessible everywhere) or local scope (accessible only within a function).'
          },
          {
            id: 'pb-12',
            front: 'What is a parameter?',
            back: 'A parameter is a variable that is passed to a function when it\'s called. It allows the function to work with different values each time it\'s used.'
          },
          {
            id: 'pb-13',
            front: 'What is a return value?',
            back: 'A return value is the output of a function. It\'s the result that the function sends back to the code that called it.'
          },
          {
            id: 'pb-14',
            front: 'What is an array?',
            back: 'An array is a data structure that stores a collection of elements, each identified by an index. Elements can be accessed directly using their index.'
          },
          {
            id: 'pb-15',
            front: 'What is a string?',
            back: 'A string is a sequence of characters. In programming, strings are typically used to represent text.'
          },
          {
            id: 'pb-16',
            front: 'What is a boolean?',
            back: 'A boolean is a data type that can have only two values: true or false. It\'s used for logical operations and conditions.'
          },
          {
            id: 'pb-17',
            front: 'What is a list?',
            back: 'A list is a data structure that can store multiple items in a single variable. Unlike arrays, lists can store items of different types.'
          },
          {
            id: 'pb-18',
            front: 'What is a dictionary/map?',
            back: 'A dictionary (or map) is a data structure that stores key-value pairs. Each value is associated with a unique key that can be used to access it.'
          },
          {
            id: 'pb-19',
            front: 'What is a class?',
            back: 'A class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have.'
          },
          {
            id: 'pb-20',
            front: 'What is an object?',
            back: 'An object is an instance of a class. It contains data (properties) and code (methods) that operate on that data.'
          }
        ]
      },
      {
        id: 'programming-concepts',
        title: 'Advanced Programming Concepts',
        description: 'Understanding complex programming concepts and patterns',
        cards: [
          {
            id: 'pc-1',
            front: 'What is object-oriented programming (OOP)?',
            back: 'OOP is a programming paradigm that organizes code into objects that contain data and code. It emphasizes reusability and maintainability.'
          },
          {
            id: 'pc-2',
            front: 'What is inheritance?',
            back: 'Inheritance is a mechanism that allows a class to inherit properties and methods from another class. It promotes code reuse and establishes relationships between classes.'
          },
          {
            id: 'pc-3',
            front: 'What is polymorphism?',
            back: 'Polymorphism is the ability of different objects to respond to the same method call in different ways. It allows for flexible and extensible code.'
          },
          {
            id: 'pc-4',
            front: 'What is encapsulation?',
            back: 'Encapsulation is the bundling of data and methods that operate on that data within a single unit (class). It helps protect data from unauthorized access.'
          },
          {
            id: 'pc-5',
            front: 'What is abstraction?',
            back: 'Abstraction is the process of hiding complex implementation details and showing only the necessary features of an object. It helps manage complexity.'
          },
          {
            id: 'pc-6',
            front: 'What is a design pattern?',
            back: 'A design pattern is a reusable solution to common problems in software design. It provides a template for solving similar problems in different contexts.'
          },
          {
            id: 'pc-7',
            front: 'What is recursion?',
            back: 'Recursion is a programming technique where a function calls itself to solve a problem. It\'s useful for problems that can be broken down into smaller, similar subproblems.'
          },
          {
            id: 'pc-8',
            front: 'What is a stack?',
            back: 'A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. Elements can only be added or removed from the top of the stack.'
          },
          {
            id: 'pc-9',
            front: 'What is a queue?',
            back: 'A queue is a data structure that follows the First-In-First-Out (FIFO) principle. Elements are added to the end and removed from the front.'
          },
          {
            id: 'pc-10',
            front: 'What is a tree?',
            back: 'A tree is a hierarchical data structure with nodes connected by edges. Each node can have multiple children but only one parent (except the root).'
          },
          {
            id: 'pc-11',
            front: 'What is a graph?',
            back: 'A graph is a data structure consisting of nodes (vertices) connected by edges. It can represent complex relationships between objects.'
          },
          {
            id: 'pc-12',
            front: 'What is a hash table?',
            back: 'A hash table is a data structure that maps keys to values using a hash function. It provides fast access to data based on keys.'
          },
          {
            id: 'pc-13',
            front: 'What is a binary search?',
            back: 'Binary search is an efficient algorithm for finding an element in a sorted array. It repeatedly divides the search interval in half.'
          },
          {
            id: 'pc-14',
            front: 'What is a sorting algorithm?',
            back: 'A sorting algorithm is a method for arranging elements in a specific order. Common algorithms include bubble sort, quick sort, and merge sort.'
          },
          {
            id: 'pc-15',
            front: 'What is a linked list?',
            back: 'A linked list is a data structure where elements are stored in nodes, and each node points to the next node. It allows for efficient insertion and deletion.'
          },
          {
            id: 'pc-16',
            front: 'What is a binary tree?',
            back: 'A binary tree is a tree data structure where each node has at most two children, referred to as the left child and right child.'
          },
          {
            id: 'pc-17',
            front: 'What is a heap?',
            back: 'A heap is a specialized tree-based data structure that satisfies the heap property. It\'s commonly used to implement priority queues.'
          },
          {
            id: 'pc-18',
            front: 'What is a set?',
            back: 'A set is a data structure that stores unique elements. It doesn\'t allow duplicates and provides efficient operations for adding, removing, and checking membership.'
          },
          {
            id: 'pc-19',
            front: 'What is a map?',
            back: 'A map is a data structure that stores key-value pairs. It provides efficient lookup, insertion, and deletion operations based on keys.'
          },
          {
            id: 'pc-20',
            front: 'What is a stack overflow?',
            back: 'A stack overflow occurs when a program tries to use more stack space than is available, typically due to infinite recursion or very deep recursion.'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'What is the purpose of a variable in programming?',
          options: [
            'To make the code look pretty',
            'To store and manipulate data',
            'To connect to the internet',
            'To display text on screen'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'Which of the following is NOT a common loop type?',
          options: ['for loop', 'while loop', 'if loop', 'do-while loop'],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'What is the main difference between an array and a list?',
          options: [
            'Arrays are faster than lists',
            'Lists can store different types of data, arrays cannot',
            'Arrays are newer than lists',
            'Lists are always larger than arrays'
          ],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'What is the purpose of a function?',
          options: [
            'To make the code longer',
            'To store data permanently',
            'To perform a specific task',
            'To display graphics'
          ],
          correctAnswer: 2
        },
        {
          id: 'q5',
          question: 'What is the main purpose of debugging?',
          options: [
            'To make the code run faster',
            'To find and fix errors',
            'To add new features',
            'To improve graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q6',
          question: 'What is the purpose of a conditional statement?',
          options: [
            'To store data',
            'To repeat code',
            'To make decisions in code',
            'To display text'
          ],
          correctAnswer: 2
        },
        {
          id: 'q7',
          question: 'What is the main purpose of comments in code?',
          options: [
            'To make the code run faster',
            'To explain what the code does',
            'To store data',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q8',
          question: 'What is the purpose of a data type?',
          options: [
            'To make the code look pretty',
            'To define what kind of data can be stored',
            'To connect to the internet',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q9',
          question: 'What is the main purpose of a constant?',
          options: [
            'To store changing data',
            'To store data that cannot be changed',
            'To make the code run faster',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q10',
          question: 'What is the purpose of scope in programming?',
          options: [
            'To make the code look pretty',
            'To define where variables can be accessed',
            'To connect to the internet',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q11',
          question: 'What is the main purpose of parameters in a function?',
          options: [
            'To make the function longer',
            'To allow the function to work with different values',
            'To store data permanently',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q12',
          question: 'What is the purpose of a return value?',
          options: [
            'To make the function longer',
            'To send data back from a function',
            'To store data permanently',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q13',
          question: 'What is the main purpose of a class?',
          options: [
            'To store data',
            'To create objects with properties and methods',
            'To connect to the internet',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q14',
          question: 'What is the purpose of inheritance?',
          options: [
            'To make the code longer',
            'To reuse code from another class',
            'To store data',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q15',
          question: 'What is the main purpose of polymorphism?',
          options: [
            'To make the code longer',
            'To allow different objects to respond to the same method',
            'To store data',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q16',
          question: 'What is the purpose of encapsulation?',
          options: [
            'To make the code longer',
            'To protect data from unauthorized access',
            'To connect to the internet',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q17',
          question: 'What is the main purpose of abstraction?',
          options: [
            'To make the code longer',
            'To hide complex implementation details',
            'To store data',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q18',
          question: 'What is the purpose of a design pattern?',
          options: [
            'To make the code longer',
            'To provide reusable solutions to common problems',
            'To store data',
            'To display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q19',
          question: 'What is the main purpose of recursion?',
          options: [
            'To make the code longer',
            'To solve problems by breaking them into smaller subproblems',
            'To store data',
            'To display text'
          ],
          correctAnswer: 1
        },
        {
          id: 'q20',
          question: 'What is the purpose of a stack overflow?',
          options: [
            'To make the code longer',
            'To indicate that the program has used too much stack space',
            'To store data',
            'To display graphics'
          ],
          correctAnswer: 1
        }
      ]
    }
  }