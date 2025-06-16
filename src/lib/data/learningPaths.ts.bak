export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface FlashcardSet {
  id: string;
  title: string;
  description: string;
  cards: Flashcard[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  sets: Array<{
    id: string;
    title: string;
    description: string;
    cards: Array<{
      id: string;
      front: string;
      back: string;
    }>;
  }>;
  quiz: {
    questions: Array<{
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
}

export const learningPaths: LearningPath[] = [
  {
    id: 'intro-to-digital',
    title: 'Introduction to Digital',
    description: 'Master the fundamentals of digital technology and computer basics',
    level: 'beginner',
    sets: [
      {
        id: 'computer-basics',
        title: 'Computer Basics',
        description: 'Essential knowledge about computers and digital systems',
        cards: [
          {
            id: 'cb-1',
            front: 'What is a CPU?',
            back: 'CPU (Central Processing Unit) is the primary component of a computer that processes instructions and performs calculations. It\'s often called the "brain" of the computer.'
          },
          {
            id: 'cb-2',
            front: 'What is RAM?',
            back: 'RAM (Random Access Memory) is temporary storage that holds data and instructions for the CPU to process. It\'s volatile memory, meaning it loses its contents when power is turned off.'
          },
          {
            id: 'cb-3',
            front: 'What is the difference between hardware and software?',
            back: 'Hardware refers to physical components of a computer (CPU, RAM, hard drive), while software refers to programs and applications that run on the hardware.'
          },
          {
            id: 'cb-4',
            front: 'What is an operating system?',
            back: 'An operating system (OS) is software that manages computer hardware and software resources, providing common services for computer programs.'
          },
          {
            id: 'cb-5',
            front: 'What is a motherboard?',
            back: 'The motherboard is the main circuit board of a computer that connects all components together, including CPU, RAM, storage, and other peripherals.'
          },
          {
            id: 'cb-6',
            front: 'What is a GPU?',
            back: 'GPU (Graphics Processing Unit) is a specialized processor designed to handle graphics and image processing tasks. It\'s essential for gaming and visual applications.'
          },
          {
            id: 'cb-7',
            front: 'What is a hard drive?',
            back: 'A hard drive is a non-volatile storage device that permanently stores and retrieves data. It can be mechanical (HDD) or solid-state (SSD).'
          },
          {
            id: 'cb-8',
            front: 'What is a network interface card (NIC)?',
            back: 'A NIC is a hardware component that allows computers to connect to a network. It can be wired (Ethernet) or wireless (Wi-Fi).'
          },
          {
            id: 'cb-9',
            front: 'What is a power supply unit (PSU)?',
            back: 'A PSU converts electrical power from an outlet into usable power for the computer\'s components. It provides different voltage levels for various parts.'
          },
          {
            id: 'cb-10',
            front: 'What is a BIOS?',
            back: 'BIOS (Basic Input/Output System) is firmware that initializes hardware during the boot process and provides runtime services for operating systems.'
          },
          {
            id: 'cb-11',
            front: 'What is a port?',
            back: 'A port is a physical or virtual connection point that allows data to be transferred between devices. Examples include USB, HDMI, and network ports.'
          },
          {
            id: 'cb-12',
            front: 'What is a peripheral device?',
            back: 'A peripheral is an external device that connects to a computer to provide input or output functionality, such as keyboards, mice, and printers.'
          },
          {
            id: 'cb-13',
            front: 'What is a driver?',
            back: 'A driver is software that allows the operating system to communicate with hardware devices. It translates OS commands into device-specific instructions.'
          },
          {
            id: 'cb-14',
            front: 'What is a cache?',
            back: 'Cache is a small, fast memory that stores frequently accessed data to improve performance. It exists at multiple levels in a computer system.'
          },
          {
            id: 'cb-15',
            front: 'What is a bus?',
            back: 'A bus is a communication system that transfers data between components inside a computer or between computers. It can be parallel or serial.'
          },
          {
            id: 'cb-16',
            front: 'What is a chipset?',
            back: 'A chipset is a set of electronic components that manages data flow between the processor, memory, and peripherals. It\'s part of the motherboard.'
          },
          {
            id: 'cb-17',
            front: 'What is a heat sink?',
            back: 'A heat sink is a passive cooling device that absorbs and dissipates heat from electronic components, typically the CPU or GPU.'
          },
          {
            id: 'cb-18',
            front: 'What is a fan?',
            back: 'A fan is an active cooling device that moves air to cool computer components. It helps prevent overheating and maintains optimal performance.'
          },
          {
            id: 'cb-19',
            front: 'What is a battery?',
            back: 'A battery provides power to portable devices when not connected to an electrical outlet. It stores electrical energy chemically and converts it to electrical power.'
          },
          {
            id: 'cb-20',
            front: 'What is a display?',
            back: 'A display is an output device that shows visual information. Common types include LCD, LED, and OLED screens, measured in pixels and refresh rates.'
          }
        ]
      },
      {
        id: 'digital-concepts',
        title: 'Digital Concepts',
        description: 'Understanding digital data and binary systems',
        cards: [
          {
            id: 'dc-1',
            front: 'What is binary?',
            back: 'Binary is a number system that uses only two digits: 0 and 1. It\'s the fundamental language of computers, where each digit is called a bit.'
          },
          {
            id: 'dc-2',
            front: 'What is a byte?',
            back: 'A byte is a unit of digital information that consists of 8 bits. It\'s the basic unit of storage in computer systems.'
          },
          {
            id: 'dc-3',
            front: 'What is ASCII?',
            back: 'ASCII (American Standard Code for Information Interchange) is a character encoding standard that represents text in computers. It uses 7 bits to represent 128 characters.'
          },
          {
            id: 'dc-4',
            front: 'What is Unicode?',
            back: 'Unicode is a character encoding standard that can represent almost all characters from all writing systems in the world. It\'s an extension of ASCII.'
          },
          {
            id: 'dc-5',
            front: 'What is the difference between analog and digital?',
            back: 'Analog signals are continuous and can have any value, while digital signals are discrete and can only have specific values (usually 0 and 1).'
          },
          {
            id: 'dc-6',
            front: 'What is a bit?',
            back: 'A bit (binary digit) is the smallest unit of data in computing, representing either 0 or 1. It\'s the fundamental building block of digital information.'
          },
          {
            id: 'dc-7',
            front: 'What is a kilobyte (KB)?',
            back: 'A kilobyte is 1024 bytes (2^10 bytes). It\'s commonly used to measure small amounts of data storage.'
          },
          {
            id: 'dc-8',
            front: 'What is a megabyte (MB)?',
            back: 'A megabyte is 1024 kilobytes (2^20 bytes). It\'s used to measure medium-sized files and storage capacity.'
          },
          {
            id: 'dc-9',
            front: 'What is a gigabyte (GB)?',
            back: 'A gigabyte is 1024 megabytes (2^30 bytes). It\'s used to measure large files and storage devices.'
          },
          {
            id: 'dc-10',
            front: 'What is a terabyte (TB)?',
            back: 'A terabyte is 1024 gigabytes (2^40 bytes). It\'s used to measure very large storage capacities.'
          },
          {
            id: 'dc-11',
            front: 'What is hexadecimal?',
            back: 'Hexadecimal is a base-16 number system using digits 0-9 and letters A-F. It\'s commonly used in computing to represent binary data more compactly.'
          },
          {
            id: 'dc-12',
            front: 'What is a pixel?',
            back: 'A pixel (picture element) is the smallest unit of a digital image. It\'s a single point in a raster image, containing color information.'
          },
          {
            id: 'dc-13',
            front: 'What is resolution?',
            back: 'Resolution is the number of pixels in a display or image, typically expressed as width × height (e.g., 1920×1080).'
          },
          {
            id: 'dc-14',
            front: 'What is a color depth?',
            back: 'Color depth is the number of bits used to represent the color of a single pixel. Common depths are 8-bit (256 colors) and 24-bit (16.7 million colors).'
          },
          {
            id: 'dc-15',
            front: 'What is a file format?',
            back: 'A file format is a standard way of encoding information for storage in a computer file. Examples include JPEG, PNG, MP3, and PDF.'
          },
          {
            id: 'dc-16',
            front: 'What is compression?',
            back: 'Compression is the process of reducing the size of data files by encoding information more efficiently. It can be lossless or lossy.'
          },
          {
            id: 'dc-17',
            front: 'What is a protocol?',
            back: 'A protocol is a set of rules that define how data is transmitted and received over a network. Examples include HTTP, FTP, and TCP/IP.'
          },
          {
            id: 'dc-18',
            front: 'What is bandwidth?',
            back: 'Bandwidth is the maximum rate of data transfer across a network or communication channel, typically measured in bits per second (bps).'
          },
          {
            id: 'dc-19',
            front: 'What is latency?',
            back: 'Latency is the time delay between sending and receiving data. It\'s typically measured in milliseconds and affects real-time applications.'
          },
          {
            id: 'dc-20',
            front: 'What is encryption?',
            back: 'Encryption is the process of encoding information to make it secure and unreadable to unauthorized parties. It uses algorithms and keys to protect data.'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Which component is often called the "brain" of the computer?',
          options: ['RAM', 'CPU', 'Hard Drive', 'Motherboard'],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'What is the main difference between RAM and ROM?',
          options: [
            'RAM is faster than ROM',
            'RAM is volatile, ROM is non-volatile',
            'RAM is cheaper than ROM',
            'RAM is newer technology than ROM'
          ],
          correctAnswer: 1
        },
        {
          id: 'q3',
          question: 'How many bits are in a byte?',
          options: ['4', '8', '16', '32'],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'What is the purpose of an operating system?',
          options: [
            'To make the computer look pretty',
            'To manage hardware and software resources',
            'To connect to the internet',
            'To store data permanently'
          ],
          correctAnswer: 1
        },
        {
          id: 'q5',
          question: 'Which of the following is NOT a binary number?',
          options: ['1010', '1111', '1234', '1001'],
          correctAnswer: 2
        },
        {
          id: 'q6',
          question: 'What is the main function of a GPU?',
          options: [
            'Process text documents',
            'Handle graphics and image processing',
            'Store data permanently',
            'Connect to the internet'
          ],
          correctAnswer: 1
        },
        {
          id: 'q7',
          question: 'What is the difference between HDD and SSD?',
          options: [
            'HDD is faster than SSD',
            'SSD has no moving parts, HDD does',
            'HDD is newer technology than SSD',
            'SSD is always larger than HDD'
          ],
          correctAnswer: 1
        },
        {
          id: 'q8',
          question: 'What is the purpose of a network interface card?',
          options: [
            'Process graphics',
            'Store data',
            'Connect to a network',
            'Power the computer'
          ],
          correctAnswer: 2
        },
        {
          id: 'q9',
          question: 'What is the main function of a power supply unit?',
          options: [
            'Process data',
            'Store information',
            'Convert electrical power',
            'Display images'
          ],
          correctAnswer: 2
        },
        {
          id: 'q10',
          question: 'What is the purpose of a BIOS?',
          options: [
            'Display graphics',
            'Store user data',
            'Initialize hardware during boot',
            'Connect to the internet'
          ],
          correctAnswer: 2
        },
        {
          id: 'q11',
          question: 'What is a peripheral device?',
          options: [
            'The main processor',
            'An external device that provides input/output',
            'The operating system',
            'The power supply'
          ],
          correctAnswer: 1
        },
        {
          id: 'q12',
          question: 'What is the purpose of a driver?',
          options: [
            'Power the computer',
            'Store data',
            'Allow OS to communicate with hardware',
            'Display graphics'
          ],
          correctAnswer: 2
        },
        {
          id: 'q13',
          question: 'What is the main purpose of a cache?',
          options: [
            'Store permanent data',
            'Improve performance with frequently accessed data',
            'Power the computer',
            'Display graphics'
          ],
          correctAnswer: 1
        },
        {
          id: 'q14',
          question: 'What is the function of a heat sink?',
          options: [
            'Store data',
            'Process information',
            'Cool electronic components',
            'Display images'
          ],
          correctAnswer: 2
        },
        {
          id: 'q15',
          question: 'What is the purpose of a fan in a computer?',
          options: [
            'Store data',
            'Process information',
            'Cool components',
            'Display graphics'
          ],
          correctAnswer: 2
        },
        {
          id: 'q16',
          question: 'What is the main difference between analog and digital signals?',
          options: [
            'Digital signals are always faster',
            'Analog signals are always more accurate',
            'Analog signals are continuous, digital are discrete',
            'Digital signals are always more expensive'
          ],
          correctAnswer: 2
        },
        {
          id: 'q17',
          question: 'What is the purpose of Unicode?',
          options: [
            'Store binary data',
            'Represent characters from all writing systems',
            'Process graphics',
            'Connect to networks'
          ],
          correctAnswer: 1
        },
        {
          id: 'q18',
          question: 'What is the main purpose of compression?',
          options: [
            'Improve image quality',
            'Reduce file size',
            'Increase processing speed',
            'Enhance security'
          ],
          correctAnswer: 1
        },
        {
          id: 'q19',
          question: 'What is the purpose of a protocol?',
          options: [
            'Store data',
            'Define rules for data transmission',
            'Process graphics',
            'Power the computer'
          ],
          correctAnswer: 1
        },
        {
          id: 'q20',
          question: 'What is the main purpose of encryption?',
          options: [
            'Improve performance',
            'Reduce file size',
            'Make data secure and unreadable',
            'Enhance graphics'
          ],
          correctAnswer: 2
        }
      ]
    }
  },
  {
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
  },
  {
    id: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Master modern JavaScript programming',
    level: 'beginner',
    sets: [
      {
        id: 'js-beginner',
        title: 'JavaScript Basics',
        description: 'Core JavaScript concepts and syntax',
        cards: [
          {
            id: 'js-b1',
            front: 'What is JavaScript?',
            back: 'JavaScript is a high-level, interpreted programming language that enables interactive web pages. It is an essential part of web applications and can be used for both front-end and back-end development.'
          },
          {
            id: 'js-b2',
            front: 'What are the basic data types in JavaScript?',
            back: 'JavaScript has 7 primitive data types: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. Objects are the only non-primitive data type.'
          },
          {
            id: 'js-b3',
            front: 'What is the difference between let, const, and var?',
            back: 'let and const are block-scoped, while var is function-scoped. const cannot be reassigned, while let and var can. var declarations are hoisted, while let and const are not.'
          },
          {
            id: 'js-b4',
            front: 'What is hoisting in JavaScript?',
            back: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope. Variable declarations using var are hoisted, while let and const are not. Function declarations are also hoisted.'
          },
          {
            id: 'js-b5',
            front: 'What is the difference between == and ===?',
            back: '== performs type coercion before comparison, while === checks both value and type without coercion. === is generally preferred as it\'s more predictable.'
          },
          {
            id: 'js-b6',
            front: 'What is a function?',
            back: 'A function is a reusable block of code that performs a specific task. Functions can take parameters and return values. They are first-class objects in JavaScript.'
          },
          {
            id: 'js-b7',
            front: 'What is an array?',
            back: 'An array is an ordered collection of values. Arrays can store multiple values of different types and are zero-indexed. They have built-in methods for manipulation.'
          },
          {
            id: 'js-b8',
            front: 'What is an object?',
            back: 'An object is a collection of key-value pairs. Objects can store multiple values as properties and methods. They are used to represent real-world entities.'
          },
          {
            id: 'js-b9',
            front: 'What is a string?',
            back: 'A string is a sequence of characters. Strings are immutable and have various methods for manipulation. They can be created using single or double quotes.'
          },
          {
            id: 'js-b10',
            front: 'What is a number?',
            back: 'Numbers in JavaScript are 64-bit floating point values. They can be integers or decimals. JavaScript also has special number values like Infinity and NaN.'
          },
          {
            id: 'js-b11',
            front: 'What is a boolean?',
            back: 'A boolean is a logical data type that can have only two values: true or false. Booleans are often used in conditional statements and loops.'
          },
          {
            id: 'js-b12',
            front: 'What is null?',
            back: 'null is a special value that represents the intentional absence of any object value. It is a primitive value and is often used to indicate that a variable has no value.'
          },
          {
            id: 'js-b13',
            front: 'What is undefined?',
            back: 'undefined is a special value that represents an uninitialized variable. It is a primitive value and is the default value of variables that have been declared but not assigned.'
          },
          {
            id: 'js-b14',
            front: 'What is a conditional statement?',
            back: 'A conditional statement is a block of code that executes only if a specified condition is true. JavaScript has if, else if, else, and switch statements.'
          },
          {
            id: 'js-b15',
            front: 'What is a loop?',
            back: 'A loop is a block of code that executes repeatedly until a specified condition is met. JavaScript has for, while, do...while, and for...of loops.'
          },
          {
            id: 'js-b16',
            front: 'What is the difference between for and while loops?',
            back: 'for loops are used when you know how many times you want to loop. while loops are used when you don\'t know how many times you need to loop.'
          },
          {
            id: 'js-b17',
            front: 'What is the difference between break and continue?',
            back: 'break exits a loop completely, while continue skips the current iteration and continues with the next one.'
          },
          {
            id: 'js-b18',
            front: 'What is the difference between function declaration and function expression?',
            back: 'Function declarations are hoisted and can be called before they are defined. Function expressions are not hoisted and must be defined before they are called.'
          },
          {
            id: 'js-b19',
            front: 'What is the difference between parameters and arguments?',
            back: 'Parameters are the variables listed in the function definition. Arguments are the actual values passed to the function when it is called.'
          },
          {
            id: 'js-b20',
            front: 'What is the return statement?',
            back: 'The return statement ends function execution and specifies a value to be returned to the function caller.'
          },
          {
            id: 'js-b21',
            front: 'What is the difference between local and global variables?',
            back: 'Local variables are declared inside a function and can only be accessed within that function. Global variables are declared outside any function and can be accessed anywhere.'
          },
          {
            id: 'js-b22',
            front: 'What is the difference between let and const?',
            back: 'let allows you to reassign values, while const does not. Both are block-scoped and not hoisted.'
          },
          {
            id: 'js-b23',
            front: 'What is the difference between null and undefined?',
            back: 'null is an explicit assignment of no value, while undefined means a variable has been declared but not assigned a value.'
          },
          {
            id: 'js-b24',
            front: 'What is the difference between == and ===?',
            back: '== performs type coercion before comparison, while === checks both value and type without coercion.'
          },
          {
            id: 'js-b25',
            front: 'What is the difference between != and !==?',
            back: '!= performs type coercion before comparison, while !== checks both value and type without coercion.'
          },
          {
            id: 'js-b26',
            front: 'What is the difference between && and ||?',
            back: '&& returns true if both operands are true, while || returns true if either operand is true.'
          },
          {
            id: 'js-b27',
            front: 'What is the difference between ! and !!?',
            back: '! converts a value to its boolean opposite, while !! converts a value to its boolean equivalent.'
          },
          {
            id: 'js-b28',
            front: 'What is the difference between ++ and --?',
            back: '++ increments a value by 1, while -- decrements a value by 1.'
          },
          {
            id: 'js-b29',
            front: 'What is the difference between += and -=?',
            back: '+= adds a value to a variable, while -= subtracts a value from a variable.'
          },
          {
            id: 'js-b30',
            front: 'What is the difference between *= and /=?',
            back: '*= multiplies a variable by a value, while /= divides a variable by a value.'
          }
        ]
      },
      {
        id: 'js-intermediate',
        title: 'Intermediate JavaScript',
        description: 'Advanced JavaScript features and patterns',
        cards: [
          {
            id: 'js-i1',
            front: 'What is closure in JavaScript?',
            back: 'A closure is a function that has access to variables from its outer lexical scope, even after the outer function has returned. It maintains access to its scope chain.'
          },
          {
            id: 'js-i2',
            front: 'What is the "this" keyword?',
            back: 'The this keyword refers to the object that is currently executing the code. Its value depends on how a function is called: global context, object method, constructor, or event handler.'
          },
          {
            id: 'js-i3',
            front: 'What is the difference between call(), apply(), and bind()?',
            back: 'All three methods are used to set the this value. call() invokes the function with given this and arguments. apply() is similar but takes arguments as an array. bind() returns a new function with fixed this.'
          },
          {
            id: 'js-i4',
            front: 'What is a promise?',
            back: 'A promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.'
          },
          {
            id: 'js-i5',
            front: 'What is async/await?',
            back: 'async/await is a syntax for handling promises. async functions return promises, and await pauses execution until the promise resolves. It makes asynchronous code look synchronous.'
          },
          {
            id: 'js-i6',
            front: 'What is the event loop?',
            back: 'The event loop is a mechanism that allows JavaScript to handle asynchronous operations. It continuously checks the call stack and message queue, executing callbacks when the stack is empty.'
          },
          {
            id: 'js-i7',
            front: 'What is the difference between synchronous and asynchronous code?',
            back: 'Synchronous code executes in sequence, blocking until each operation completes. Asynchronous code allows other operations to continue while waiting for an operation to complete.'
          },
          {
            id: 'js-i8',
            front: 'What is a callback function?',
            back: 'A callback function is a function passed as an argument to another function, to be executed after the main function has finished its execution.'
          },
          {
            id: 'js-i9',
            front: 'What is the spread operator?',
            back: 'The spread operator (...) allows an iterable to be expanded in places where multiple arguments or elements are expected. It can be used with arrays, objects, and function arguments.'
          },
          {
            id: 'js-i10',
            front: 'What is destructuring?',
            back: 'Destructuring is a JavaScript expression that allows you to extract values from arrays or properties from objects into distinct variables.'
          },
          {
            id: 'js-i11',
            front: 'What is the difference between map(), filter(), and reduce()?',
            back: 'map() transforms each element in an array. filter() creates a new array with elements that pass a test. reduce() reduces an array to a single value by executing a reducer function.'
          },
          {
            id: 'js-i12',
            front: 'What is the difference between forEach() and map()?',
            back: 'forEach() executes a function for each element but doesn\'t return anything. map() creates a new array with the results of calling a function for every array element.'
          },
          {
            id: 'js-i13',
            front: 'What is the difference between slice() and splice()?',
            back: 'slice() returns a shallow copy of a portion of an array without modifying the original. splice() changes the contents of an array by removing or replacing elements and/or adding new elements.'
          },
          {
            id: 'js-i14',
            front: 'What is the difference between Object.freeze() and Object.seal()?',
            back: 'Object.freeze() makes an object immutable, preventing any changes to its properties. Object.seal() prevents adding or removing properties but allows modifying existing ones.'
          },
          {
            id: 'js-i15',
            front: 'What is the difference between Object.keys() and Object.entries()?',
            back: 'Object.keys() returns an array of a given object\'s own enumerable property names. Object.entries() returns an array of a given object\'s own enumerable string-keyed property [key, value] pairs.'
          },
          {
            id: 'js-i16',
            front: 'What is the difference between Object.assign() and the spread operator?',
            back: 'Both can be used to copy objects, but Object.assign() modifies the target object, while the spread operator creates a new object. The spread operator is generally preferred for its immutability.'
          },
          {
            id: 'js-i17',
            front: 'What is the difference between Array.from() and the spread operator?',
            back: 'Array.from() can convert array-like objects to arrays and accepts a mapping function. The spread operator can only spread iterable objects into arrays.'
          },
          {
            id: 'js-i18',
            front: 'What is the difference between Array.isArray() and instanceof Array?',
            back: 'Array.isArray() is more reliable as it works across different frames/windows. instanceof Array can fail when checking arrays from different contexts.'
          },
          {
            id: 'js-i19',
            front: 'What is the difference between String.prototype.slice() and String.prototype.substring()?',
            back: 'Both extract parts of a string, but slice() can use negative indices and doesn\'t swap parameters if start > end. substring() swaps parameters if start > end and treats negative indices as 0.'
          },
          {
            id: 'js-i20',
            front: 'What is the difference between String.prototype.replace() and String.prototype.replaceAll()?',
            back: 'replace() replaces only the first occurrence of a pattern. replaceAll() replaces all occurrences of a pattern in a string.'
          }
        ]
      },
      {
        id: 'js-advanced',
        title: 'Advanced JavaScript',
        description: 'Complex JavaScript patterns and best practices',
        cards: [
          {
            id: 'js-a1',
            front: 'What is the prototype chain?',
            back: 'The prototype chain is how JavaScript implements inheritance. Each object has a prototype object, and objects inherit properties and methods from their prototype chain.'
          },
          {
            id: 'js-a2',
            front: 'What is the difference between classical and prototypal inheritance?',
            back: 'Classical inheritance uses classes and extends them, while prototypal inheritance uses objects and delegates to their prototypes. JavaScript uses prototypal inheritance.'
          },
          {
            id: 'js-a3',
            front: 'What is the difference between Object.create() and new?',
            back: 'Object.create() creates a new object with the specified prototype object. new creates an instance of a constructor function, which sets up the prototype chain.'
          },
          {
            id: 'js-a4',
            front: 'What is the difference between Object.getPrototypeOf() and Object.setPrototypeOf()?',
            back: 'Object.getPrototypeOf() returns the prototype of an object. Object.setPrototypeOf() sets the prototype of an object to another object or null.'
          },
          {
            id: 'js-a5',
            front: 'What is the difference between Object.defineProperty() and Object.defineProperties()?',
            back: 'Object.defineProperty() defines a new property or modifies an existing property on an object. Object.defineProperties() defines multiple properties on an object.'
          },
          {
            id: 'js-a6',
            front: 'What is the difference between Object.getOwnPropertyDescriptor() and Object.getOwnPropertyDescriptors()?',
            back: 'Object.getOwnPropertyDescriptor() returns a property descriptor for an own property. Object.getOwnPropertyDescriptors() returns all own property descriptors of an object.'
          },
          {
            id: 'js-a7',
            front: 'What is the difference between Object.preventExtensions() and Object.seal()?',
            back: 'Object.preventExtensions() prevents new properties from being added to an object. Object.seal() prevents new properties from being added and existing properties from being deleted.'
          },
          {
            id: 'js-a8',
            front: 'What is the difference between Object.freeze() and Object.seal()?',
            back: 'Object.freeze() makes an object immutable, preventing any changes to its properties. Object.seal() prevents adding or removing properties but allows modifying existing ones.'
          },
          {
            id: 'js-a9',
            front: 'What is the difference between Object.is() and ===?',
            back: 'Object.is() is similar to === but handles special cases like NaN and -0 differently. Object.is(NaN, NaN) is true, while NaN === NaN is false.'
          },
          {
            id: 'js-a10',
            front: 'What is the difference between Object.keys() and Object.getOwnPropertyNames()?',
            back: 'Object.keys() returns an array of a given object\'s own enumerable property names. Object.getOwnPropertyNames() returns an array of all own property names, including non-enumerable ones.'
          },
          {
            id: 'js-a11',
            front: 'What is the difference between Object.entries() and Object.fromEntries()?',
            back: 'Object.entries() converts an object to an array of [key, value] pairs. Object.fromEntries() converts an array of [key, value] pairs back to an object.'
          },
          {
            id: 'js-a12',
            front: 'What is the difference between Object.values() and Object.keys()?',
            back: 'Object.values() returns an array of a given object\'s own enumerable property values. Object.keys() returns an array of a given object\'s own enumerable property names.'
          },
          {
            id: 'js-a13',
            front: 'What is the difference between Object.getOwnPropertySymbols() and Object.getOwnPropertyNames()?',
            back: 'Object.getOwnPropertySymbols() returns an array of all symbol properties found directly on an object. Object.getOwnPropertyNames() returns an array of all string properties found directly on an object.'
          },
          {
            id: 'js-a14',
            front: 'What is the difference between Object.isExtensible() and Object.isSealed()?',
            back: 'Object.isExtensible() determines if an object is extensible. Object.isSealed() determines if an object is sealed.'
          },
          {
            id: 'js-a15',
            front: 'What is the difference between Object.isFrozen() and Object.isSealed()?',
            back: 'Object.isFrozen() determines if an object is frozen. Object.isSealed() determines if an object is sealed.'
          },
          {
            id: 'js-a16',
            front: 'What is the difference between Object.getOwnPropertyDescriptor() and Object.getOwnPropertyDescriptors()?',
            back: 'Object.getOwnPropertyDescriptor() returns a property descriptor for an own property. Object.getOwnPropertyDescriptors() returns all own property descriptors of an object.'
          },
          {
            id: 'js-a17',
            front: 'What is the difference between Object.defineProperty() and Object.defineProperties()?',
            back: 'Object.defineProperty() defines a new property or modifies an existing property on an object. Object.defineProperties() defines multiple properties on an object.'
          },
          {
            id: 'js-a18',
            front: 'What is the difference between Object.getPrototypeOf() and Object.setPrototypeOf()?',
            back: 'Object.getPrototypeOf() returns the prototype of an object. Object.setPrototypeOf() sets the prototype of an object to another object or null.'
          },
          {
            id: 'js-a19',
            front: 'What is the difference between Object.create() and new?',
            back: 'Object.create() creates a new object with the specified prototype object. new creates an instance of a constructor function, which sets up the prototype chain.'
          },
          {
            id: 'js-a20',
            front: 'What is the difference between classical and prototypal inheritance?',
            back: 'Classical inheritance uses classes and extends them, while prototypal inheritance uses objects and delegates to their prototypes. JavaScript uses prototypal inheritance.'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'js-q1',
          question: 'What is JavaScript?',
          options: [
            'A markup language',
            'A programming language',
            'A styling language',
            'A database language'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q2',
          question: 'What are the basic data types in JavaScript?',
          options: [
            'String, Number, Boolean',
            'String, Number, Boolean, Undefined, Null, Symbol, BigInt',
            'String, Number, Boolean, Array, Object',
            'String, Number, Boolean, Function'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q3',
          question: 'What is the difference between let, const, and var?',
          options: [
            'They are all the same',
            'let and const are block-scoped, var is function-scoped',
            'let is for numbers, const is for strings, var is for booleans',
            'let is for variables, const is for constants, var is for arrays'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q4',
          question: 'What is hoisting in JavaScript?',
          options: [
            'Moving variables to the bottom of their scope',
            'Moving declarations to the top of their scope',
            'Moving functions to the bottom of their scope',
            'Moving objects to the top of their scope'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q5',
          question: 'What is the difference between == and ===?',
          options: [
            'They are the same',
            '== performs type coercion, === checks both value and type',
            '== is for numbers, === is for strings',
            '== is for variables, === is for constants'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q6',
          question: 'What is closure in JavaScript?',
          options: [
            'A way to close a function',
            'A function with access to its outer scope',
            'A way to end a program',
            'A way to close a file'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q7',
          question: "What is the 'this' keyword?",
          options: [
            'A way to refer to the current function',
            'A reference to the current object',
            'A way to refer to the next function',
            'A way to refer to the previous function'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q8',
          question: 'What is the difference between call(), apply(), and bind()?',
          options: [
            'They are all the same',
            'Different ways to set the this value',
            'Different ways to call a function',
            'Different ways to bind a function'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q9',
          question: 'What is a promise?',
          options: [
            'A way to make a function call',
            'An object representing an asynchronous operation',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q10',
          question: 'What is async/await?',
          options: [
            'A way to create a function',
            'A syntax for handling promises',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q11',
          question: 'What is the event loop?',
          options: [
            'A way to create a loop',
            'A mechanism for handling asynchronous operations',
            'A way to create a function',
            'A way to create a variable'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q12',
          question: 'What is the difference between synchronous and asynchronous code?',
          options: [
            'They are the same',
            'Synchronous executes in sequence, asynchronous allows other operations to continue',
            'Synchronous is for variables, asynchronous is for functions',
            'Synchronous is for numbers, asynchronous is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q13',
          question: 'What is a callback function?',
          options: [
            'A way to create a function',
            'A function passed as an argument to another function',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q14',
          question: 'What is the difference between null and undefined?',
          options: [
            'They are the same',
            'undefined is unassigned, null is explicitly assigned',
            'undefined is for numbers, null is for strings',
            'undefined is for variables, null is for functions'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q15',
          question: 'What is the difference between function declaration and function expression?',
          options: [
            'They are the same',
            'Declaration is hoisted, expression is not',
            'Declaration is for variables, expression is for functions',
            'Declaration is for numbers, expression is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q16',
          question: 'What is the spread operator?',
          options: [
            'A way to create a function',
            'A way to expand iterables',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q17',
          question: 'What is destructuring?',
          options: [
            'A way to create a function',
            'A way to extract values from arrays or objects',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q18',
          question: 'What is the difference between map(), filter(), and reduce()?',
          options: [
            'They are the same',
            'Different array methods for transformation, filtering, and reduction',
            'Different ways to create a function',
            'Different ways to create a variable'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q19',
          question: 'What is the difference between forEach() and map()?',
          options: [
            'They are the same',
            'forEach() executes for each element, map() creates a new array',
            'forEach() is for variables, map() is for functions',
            'forEach() is for numbers, map() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q20',
          question: 'What is the difference between slice() and splice()?',
          options: [
            'They are the same',
            'slice() returns a copy, splice() modifies the array',
            'slice() is for variables, splice() is for functions',
            'slice() is for numbers, splice() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q21',
          question: 'What is the prototype chain?',
          options: [
            'A way to create a function',
            'How JavaScript implements inheritance',
            'A way to create a variable',
            'A way to create an object'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q22',
          question: 'What is the difference between classical and prototypal inheritance?',
          options: [
            'They are the same',
            'Classical uses classes, prototypal uses objects',
            'Classical is for variables, prototypal is for functions',
            'Classical is for numbers, prototypal is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q23',
          question: 'What is the difference between Object.create() and new?',
          options: [
            'They are the same',
            'Object.create() creates with prototype, new creates instance',
            'Object.create() is for variables, new is for functions',
            'Object.create() is for numbers, new is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q24',
          question: 'What is the difference between Object.freeze() and Object.seal()?',
          options: [
            'They are the same',
            'freeze() makes immutable, seal() prevents adding/removing properties',
            'freeze() is for variables, seal() is for functions',
            'freeze() is for numbers, seal() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q25',
          question: 'What is the difference between Object.keys() and Object.entries()?',
          options: [
            'They are the same',
            'keys() returns property names, entries() returns [key, value] pairs',
            'keys() is for variables, entries() is for functions',
            'keys() is for numbers, entries() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q26',
          question: 'What is the difference between Object.assign() and the spread operator?',
          options: [
            'They are the same',
            'assign() modifies target, spread creates new object',
            'assign() is for variables, spread is for functions',
            'assign() is for numbers, spread is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q27',
          question: 'What is the difference between Array.from() and the spread operator?',
          options: [
            'They are the same',
            'from() can convert array-like objects, spread only works with iterables',
            'from() is for variables, spread is for functions',
            'from() is for numbers, spread is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q28',
          question: 'What is the difference between Array.isArray() and instanceof Array?',
          options: [
            'They are the same',
            'isArray() is more reliable across contexts',
            'isArray() is for variables, instanceof is for functions',
            'isArray() is for numbers, instanceof is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q29',
          question: 'What is the difference between String.prototype.slice() and String.prototype.substring()?',
          options: [
            'They are the same',
            'slice() can use negative indices, substring() swaps parameters',
            'slice() is for variables, substring() is for functions',
            'slice() is for numbers, substring() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q30',
          question: 'What is the difference between String.prototype.replace() and String.prototype.replaceAll()?',
          options: [
            'They are the same',
            'replace() replaces first occurrence, replaceAll() replaces all',
            'replace() is for variables, replaceAll() is for functions',
            'replace() is for numbers, replaceAll() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q31',
          question: 'What is the difference between String.prototype.trim() and String.prototype.trimStart()?',
          options: [
            'They are the same',
            'trim() removes from both ends, trimStart() removes from start',
            'trim() is for variables, trimStart() is for functions',
            'trim() is for numbers, trimStart() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q32',
          question: 'What is the difference between String.prototype.padStart() and String.prototype.padEnd()?',
          options: [
            'They are the same',
            'padStart() pads beginning, padEnd() pads end',
            'padStart() is for variables, padEnd() is for functions',
            'padStart() is for numbers, padEnd() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q33',
          question: 'What is the difference between String.prototype.includes() and String.prototype.indexOf()?',
          options: [
            'They are the same',
            'includes() returns boolean, indexOf() returns index',
            'includes() is for variables, indexOf() is for functions',
            'includes() is for numbers, indexOf() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q34',
          question: 'What is the difference between String.prototype.startsWith() and String.prototype.endsWith()?',
          options: [
            'They are the same',
            'startsWith() checks beginning, endsWith() checks end',
            'startsWith() is for variables, endsWith() is for functions',
            'startsWith() is for numbers, endsWith() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q35',
          question: 'What is the difference between String.prototype.toLowerCase() and String.prototype.toUpperCase()?',
          options: [
            'They are the same',
            'toLowerCase() converts to lowercase, toUpperCase() converts to uppercase',
            'toLowerCase() is for variables, toUpperCase() is for functions',
            'toLowerCase() is for numbers, toUpperCase() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q36',
          question: 'What is the difference between String.prototype.split() and String.prototype.match()?',
          options: [
            'They are the same',
            'split() splits into array, match() retrieves regex matches',
            'split() is for variables, match() is for functions',
            'split() is for numbers, match() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q37',
          question: 'What is the difference between String.prototype.concat() and the + operator?',
          options: [
            'They are the same',
            'concat() joins strings, + operator is more commonly used',
            'concat() is for variables, + is for functions',
            'concat() is for numbers, + is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q38',
          question: 'What is the difference between String.prototype.repeat() and String.prototype.padStart()?',
          options: [
            'They are the same',
            'repeat() creates copies, padStart() pads to length',
            'repeat() is for variables, padStart() is for functions',
            'repeat() is for numbers, padStart() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q39',
          question: 'What is the difference between String.prototype.trim() and String.prototype.trimEnd()?',
          options: [
            'They are the same',
            'trim() removes from both ends, trimEnd() removes from end',
            'trim() is for variables, trimEnd() is for functions',
            'trim() is for numbers, trimEnd() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q40',
          question: 'What is the difference between String.prototype.search() and String.prototype.match()?',
          options: [
            'They are the same',
            'search() returns index, match() returns array of matches',
            'search() is for variables, match() is for functions',
            'search() is for numbers, match() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q41',
          question: 'What is the difference between String.prototype.indexOf() and String.prototype.lastIndexOf()?',
          options: [
            'They are the same',
            'indexOf() returns first occurrence, lastIndexOf() returns last occurrence',
            'indexOf() is for variables, lastIndexOf() is for functions',
            'indexOf() is for numbers, lastIndexOf() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q42',
          question: 'What is the difference between String.prototype.charCodeAt() and String.prototype.codePointAt()?',
          options: [
            'They are the same',
            'charCodeAt() returns UTF-16 code unit, codePointAt() returns Unicode code point',
            'charCodeAt() is for variables, codePointAt() is for functions',
            'charCodeAt() is for numbers, codePointAt() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q43',
          question: 'What is the difference between String.prototype.normalize() and String.prototype.localeCompare()?',
          options: [
            'They are the same',
            'normalize() returns Unicode Normalization Form, localeCompare() compares strings',
            'normalize() is for variables, localeCompare() is for functions',
            'normalize() is for numbers, localeCompare() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q44',
          question: 'What is the difference between String.prototype.toLocaleLowerCase() and String.prototype.toLocaleUpperCase()?',
          options: [
            'They are the same',
            'toLocaleLowerCase() converts to lowercase, toLocaleUpperCase() converts to uppercase',
            'toLocaleLowerCase() is for variables, toLocaleUpperCase() is for functions',
            'toLocaleLowerCase() is for numbers, toLocaleUpperCase() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q45',
          question: 'What is the difference between String.prototype.anchor() and String.prototype.link()?',
          options: [
            'They are the same',
            'anchor() creates anchor element, link() creates link element',
            'anchor() is for variables, link() is for functions',
            'anchor() is for numbers, link() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q46',
          question: 'What is the difference between String.prototype.big() and String.prototype.small()?',
          options: [
            'They are the same',
            'big() creates big font, small() creates small font',
            'big() is for variables, small() is for functions',
            'big() is for numbers, small() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q47',
          question: 'What is the difference between String.prototype.bold() and String.prototype.italics()?',
          options: [
            'They are the same',
            'bold() creates bold text, italics() creates italic text',
            'bold() is for variables, italics() is for functions',
            'bold() is for numbers, italics() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q48',
          question: 'What is the difference between String.prototype.fixed() and String.prototype.strike()?',
          options: [
            'They are the same',
            'fixed() creates monospace font, strike() creates strikethrough text',
            'fixed() is for variables, strike() is for functions',
            'fixed() is for numbers, strike() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q49',
          question: 'What is the difference between String.prototype.sub() and String.prototype.sup()?',
          options: [
            'They are the same',
            'sub() creates subscript text, sup() creates superscript text',
            'sub() is for variables, sup() is for functions',
            'sub() is for numbers, sup() is for strings'
          ],
          correctAnswer: 1
        },
        {
          id: 'js-q50',
          question: 'What is the difference between String.prototype.fontcolor() and String.prototype.fontsize()?',
          options: [
            'They are the same',
            'fontcolor() sets color, fontsize() sets size',
            'fontcolor() is for variables, fontsize() is for functions',
            'fontcolor() is for numbers, fontsize() is for strings'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 'react-basics',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React and modern web development',
    level: 'beginner',
    sets: [
      {
        id: 'react-core',
        title: 'React Core Concepts',
        description: 'Understanding React fundamentals and component-based architecture',
        cards: [
          {
            id: 'rc-1',
            front: 'What is React?',
            back: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It\'s maintained by Facebook and a community of developers.'
          },
          {
            id: 'rc-2',
            front: 'What is a component?',
            back: 'A component is a reusable piece of UI that can contain its own logic and state. Components can be functional or class-based.'
          },
          {
            id: 'rc-3',
            front: 'What is JSX?',
            back: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It gets transformed into regular JavaScript.'
          },
          {
            id: 'rc-4',
            front: 'What is state?',
            back: 'State is a JavaScript object that stores a component\'s dynamic data and determines the component\'s behavior and rendering.'
          },
          {
            id: 'rc-5',
            front: 'What are props?',
            back: 'Props (properties) are read-only components that are passed from parent to child components. They are used to pass data and event handlers.'
          },
          {
            id: 'rc-6',
            front: 'What is the Virtual DOM?',
            back: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM.'
          },
          {
            id: 'rc-7',
            front: 'What is a hook?',
            back: 'Hooks are functions that let you use state and other React features in functional components. Examples include useState and useEffect.'
          },
          {
            id: 'rc-8',
            front: 'What is useState?',
            back: 'useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.'
          },
          {
            id: 'rc-9',
            front: 'What is useEffect?',
            back: 'useEffect is a Hook that lets you perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulations.'
          },
          {
            id: 'rc-10',
            front: 'What is a controlled component?',
            back: 'A controlled component is a form element whose value is controlled by React state. The component\'s value is always in sync with the state.'
          },
          {
            id: 'rc-11',
            front: 'What is a key prop?',
            back: 'The key prop is a special attribute used to identify which items have changed, been added, or been removed in lists. It helps React optimize rendering.'
          },
          {
            id: 'rc-12',
            front: 'What is prop drilling?',
            back: 'Prop drilling is the process of passing props through multiple levels of components. It can be avoided using Context or state management libraries.'
          },
          {
            id: 'rc-13',
            front: 'What is Context?',
            back: 'Context provides a way to pass data through the component tree without having to pass props manually at every level.'
          },
          {
            id: 'rc-14',
            front: 'What is a ref?',
            back: 'A ref is a way to access and interact with DOM elements or React components directly. It\'s created using useRef or createRef.'
          },
          {
            id: 'rc-15',
            front: 'What is a higher-order component (HOC)?',
            back: 'A HOC is a function that takes a component and returns a new component with additional functionality. It\'s used for code reuse and logic sharing.'
          },
          {
            id: 'rc-16',
            front: 'What is a custom hook?',
            back: 'A custom hook is a JavaScript function that starts with "use" and can call other hooks. It allows you to extract component logic into reusable functions.'
          },
          {
            id: 'rc-17',
            front: 'What is React Router?',
            back: 'React Router is a library for handling routing in React applications. It enables navigation between different components while maintaining the URL.'
          },
          {
            id: 'rc-18',
            front: 'What is Redux?',
            back: 'Redux is a state management library for JavaScript applications. It provides a predictable state container and helps manage application state.'
          },
          {
            id: 'rc-19',
            front: 'What is a reducer?',
            back: 'A reducer is a pure function that takes the current state and an action, and returns the new state. It\'s used in state management to handle state updates.'
          },
          {
            id: 'rc-20',
            front: 'What is the difference between state and props?',
            back: 'State is managed within a component and can be changed, while props are read-only and passed from parent to child components.'
          }
        ]
      },
      {
        id: 'react-advanced',
        title: 'Advanced React Concepts',
        description: 'Understanding advanced React patterns and best practices',
        cards: [
          {
            id: 'ra-1',
            front: 'What is code splitting?',
            back: 'Code splitting is a technique that allows you to split your code into various bundles which can then be loaded on demand or in parallel.'
          },
          {
            id: 'ra-2',
            front: 'What is lazy loading?',
            back: 'Lazy loading is a technique that delays the loading of non-critical resources at page load time. It helps improve initial load performance.'
          },
          {
            id: 'ra-3',
            front: 'What is memoization?',
            back: 'Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.'
          },
          {
            id: 'ra-4',
            front: 'What is React.memo?',
            back: 'React.memo is a higher-order component that memoizes a component. It prevents unnecessary re-renders when props haven\'t changed.'
          },
          {
            id: 'ra-5',
            front: 'What is useMemo?',
            back: 'useMemo is a Hook that memoizes a computed value. It only recomputes the value when one of its dependencies has changed.'
          },
          {
            id: 'ra-6',
            front: 'What is useCallback?',
            back: 'useCallback is a Hook that memoizes a callback function. It returns the same function instance between re-renders unless dependencies change.'
          },
          {
            id: 'ra-7',
            front: 'What is a portal?',
            back: 'Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.'
          },
          {
            id: 'ra-8',
            front: 'What is error boundary?',
            back: 'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.'
          },
          {
            id: 'ra-9',
            front: 'What is a render prop?',
            back: 'A render prop is a technique for sharing code between components using a prop whose value is a function that returns a React element.'
          },
          {
            id: 'ra-10',
            front: 'What is a compound component?',
            back: 'Compound components are a pattern where components work together to share state and handle logic while giving you a flexible way to customize the UI.'
          },
          {
            id: 'ra-11',
            front: 'What is the Context API?',
            back: 'The Context API is a React feature that provides a way to pass data through the component tree without having to pass props manually at every level.'
          },
          {
            id: 'ra-12',
            front: 'What is a custom hook?',
            back: 'A custom hook is a JavaScript function that starts with "use" and can call other hooks. It allows you to extract component logic into reusable functions.'
          },
          {
            id: 'ra-13',
            front: 'What is React.lazy?',
            back: 'React.lazy is a function that lets you render a dynamic import as a regular component. It\'s used for code splitting and lazy loading.'
          },
          {
            id: 'ra-14',
            front: 'What is Suspense?',
            back: 'Suspense is a React component that lets you specify a loading state while waiting for some code to load. It works with React.lazy for code splitting.'
          },
          {
            id: 'ra-15',
            front: 'What is a controlled component?',
            back: 'A controlled component is a form element whose value is controlled by React state. The component\'s value is always in sync with the state.'
          },
          {
            id: 'ra-16',
            front: 'What is an uncontrolled component?',
            back: 'An uncontrolled component is a form element whose value is controlled by the DOM. It maintains its own internal state.'
          },
          {
            id: 'ra-17',
            front: 'What is the difference between useEffect and useLayoutEffect?',
            back: 'useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations.'
          },
          {
            id: 'ra-18',
            front: 'What is the purpose of useRef?',
            back: 'useRef returns a mutable ref object that persists for the full lifetime of the component. It can be used to access DOM elements or store mutable values.'
          },
          {
            id: 'ra-19',
            front: 'What is the purpose of useReducer?',
            back: 'useReducer is a Hook that is used for state management. It accepts a reducer function and an initial state, and returns the current state and a dispatch function.'
          },
          {
            id: 'ra-20',
            front: 'What is the purpose of useImperativeHandle?',
            back: 'useImperativeHandle customizes the instance value that is exposed when using React.forwardRef. It allows you to control what methods are exposed to parent components.'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'What is the main purpose of React?',
          options: [
            'To style web pages',
            'To build user interfaces',
            'To connect to databases',
            'To handle server-side logic'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'What is JSX?',
          options: [
            'A database query language',
            'A styling language',
            'A syntax extension for JavaScript',
            'A server-side framework'
          ],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'What is the difference between state and props?',
          options: [
            'State is for styling, props are for data',
            'State is mutable, props are read-only',
            'State is for functions, props are for variables',
            'State is for HTML, props are for CSS'
          ],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'What is the purpose of useEffect?',
          options: [
            'To style components',
            'To handle routing',
            'To perform side effects',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q5',
          question: 'What is a controlled component?',
          options: [
            'A component that uses CSS',
            'A component that uses JavaScript',
            'A component whose value is controlled by React state',
            'A component that controls other components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q6',
          question: 'What is the purpose of the key prop?',
          options: [
            'To style elements',
            'To identify items in lists',
            'To connect to APIs',
            'To handle events'
          ],
          correctAnswer: 1
        },
        {
          id: 'q7',
          question: 'What is prop drilling?',
          options: [
            'A way to style components',
            'A way to handle events',
            'Passing props through multiple levels',
            'A way to create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q8',
          question: 'What is the purpose of Context?',
          options: [
            'To style components',
            'To handle routing',
            'To pass data through the component tree',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q9',
          question: 'What is a custom hook?',
          options: [
            'A way to style components',
            'A way to handle events',
            'A reusable function that can use other hooks',
            'A way to create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q10',
          question: 'What is the purpose of useMemo?',
          options: [
            'To style components',
            'To handle routing',
            'To memoize computed values',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q11',
          question: 'What is the purpose of useCallback?',
          options: [
            'To style components',
            'To memoize callback functions',
            'To handle routing',
            'To create new components'
          ],
          correctAnswer: 1
        },
        {
          id: 'q12',
          question: 'What is the purpose of a portal?',
          options: [
            'To style components',
            'To handle routing',
            'To render children outside the DOM hierarchy',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q13',
          question: 'What is an error boundary?',
          options: [
            'A way to style components',
            'A way to handle routing',
            'A component that catches JavaScript errors',
            'A way to create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q14',
          question: 'What is a render prop?',
          options: [
            'A way to style components',
            'A way to handle routing',
            'A prop whose value is a function that returns a React element',
            'A way to create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q15',
          question: 'What is a compound component?',
          options: [
            'A way to style components',
            'A way to handle routing',
            'Components that work together to share state',
            'A way to create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q16',
          question: 'What is the purpose of React.lazy?',
          options: [
            'To style components',
            'To handle routing',
            'To render dynamic imports as regular components',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q17',
          question: 'What is the purpose of Suspense?',
          options: [
            'To style components',
            'To handle routing',
            'To specify a loading state while waiting for code to load',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q18',
          question: 'What is the difference between useEffect and useLayoutEffect?',
          options: [
            'useEffect is for styling, useLayoutEffect is for data',
            'useEffect runs after render, useLayoutEffect runs synchronously',
            'useEffect is for functions, useLayoutEffect is for variables',
            'useEffect is for HTML, useLayoutEffect is for CSS'
          ],
          correctAnswer: 1
        },
        {
          id: 'q19',
          question: 'What is the purpose of useRef?',
          options: [
            'To style components',
            'To handle routing',
            'To access DOM elements or store mutable values',
            'To create new components'
          ],
          correctAnswer: 2
        },
        {
          id: 'q20',
          question: 'What is the purpose of useReducer?',
          options: [
            'To style components',
            'To handle routing',
            'To manage state with a reducer function',
            'To create new components'
          ],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 'git-github-basics',
    title: 'Git & GitHub Essentials',
    description: 'Master version control with Git and GitHub',
    level: 'beginner',
    sets: [
      {
        id: 'git-basics',
        title: 'Basic Git Commands',
        description: 'Essential Git commands for version control',
        cards: [
          {
            id: 'gb-1',
            front: 'What is the command to initialize a new Git repository?',
            back: 'git init - This command creates a new Git repository in the current directory.'
          },
          {
            id: 'gb-2',
            front: 'How do you check the status of your Git repository?',
            back: 'git status - Shows the current state of your working directory and staging area.'
          },
          {
            id: 'gb-3',
            front: 'What command adds files to the staging area?',
            back: 'git add <filename> or git add . - Adds files to the staging area. Use . to add all files.'
          },
          {
            id: 'gb-4',
            front: 'How do you commit changes in Git?',
            back: 'git commit -m "your message" - Creates a new commit with the staged changes and a descriptive message.'
          },
          {
            id: 'gb-5',
            front: 'What command shows the commit history?',
            back: 'git log - Displays the commit history with details like author, date, and commit message.'
          },
          {
            id: 'gb-6',
            front: 'How do you view the differences between your working directory and the last commit?',
            back: 'git diff - Shows the differences between your working directory and the last commit.'
          },
          {
            id: 'gb-7',
            front: 'What command shows the differences between staged changes and the last commit?',
            back: 'git diff --staged - Shows the differences between staged changes and the last commit.'
          },
          {
            id: 'gb-8',
            front: 'How do you remove a file from Git tracking while keeping it in your working directory?',
            back: 'git rm --cached <filename> - Removes the file from Git tracking but keeps it in your working directory.'
          },
          {
            id: 'gb-9',
            front: 'What command shows the commit history in a more concise format?',
            back: 'git log --oneline - Shows each commit on a single line with its hash and message.'
          },
          {
            id: 'gb-10',
            front: 'How do you view the changes in a specific commit?',
            back: 'git show <commit-hash> - Shows the changes made in the specified commit.'
          },
          {
            id: 'gb-11',
            front: 'What command helps you create a more detailed commit message?',
            back: 'git commit - Opens your default editor to write a detailed commit message.'
          },
          {
            id: 'gb-12',
            front: 'How do you amend the last commit message?',
            back: 'git commit --amend -m "new message" - Changes the message of the last commit.'
          },
          {
            id: 'gb-13',
            front: 'What command shows the current Git configuration?',
            back: 'git config --list - Shows all Git configuration settings.'
          },
          {
            id: 'gb-14',
            front: 'How do you set your Git username and email?',
            back: 'git config --global user.name "Your Name" and git config --global user.email "your.email@example.com"'
          },
          {
            id: 'gb-15',
            front: 'What command helps you find a specific commit by its message?',
            back: 'git log --grep="search term" - Searches commit messages for the specified term.'
          },
          {
            id: 'gb-16',
            front: 'How do you view the commit history of a specific file?',
            back: 'git log --follow <filename> - Shows the commit history of a file, including its previous names.'
          },
          {
            id: 'gb-17',
            front: 'What command shows the changes made by each commit?',
            back: 'git log -p - Shows the patch (changes) for each commit.'
          },
          {
            id: 'gb-18',
            front: 'How do you create a new commit that undoes all changes from a specific commit?',
            back: 'git revert <commit-hash> - Creates a new commit that undoes the changes from the specified commit.'
          },
          {
            id: 'gb-19',
            front: 'What command helps you clean up untracked files?',
            back: 'git clean -n (dry run) or git clean -f (force) - Removes untracked files from the working directory.'
          },
          {
            id: 'gb-20',
            front: 'How do you view the commit history in a graphical format?',
            back: 'git log --graph --oneline --all - Shows a graphical representation of the commit history.'
          }
        ]
      },
      {
        id: 'git-branching',
        title: 'Git Branching',
        description: 'Working with branches in Git',
        cards: [
          {
            id: 'br-1',
            front: 'How do you create a new branch?',
            back: 'git branch <branch-name> - Creates a new branch. Use git checkout -b <branch-name> to create and switch to it.'
          },
          {
            id: 'br-2',
            front: 'What command switches to a different branch?',
            back: 'git checkout <branch-name> - Switches to the specified branch.'
          },
          {
            id: 'br-3',
            front: 'How do you merge a branch into your current branch?',
            back: 'git merge <branch-name> - Merges the specified branch into your current branch.'
          },
          {
            id: 'br-4',
            front: 'What command shows all branches?',
            back: 'git branch - Lists all local branches. Use git branch -a to see all branches including remote ones.'
          },
          {
            id: 'br-5',
            front: 'How do you delete a branch?',
            back: 'git branch -d <branch-name> - Deletes the specified branch. Use -D for force delete.'
          },
          {
            id: 'br-6',
            front: 'How do you create a new branch from a specific commit?',
            back: 'git branch <branch-name> <commit-hash> - Creates a new branch starting from the specified commit.'
          },
          {
            id: 'br-7',
            front: 'What command shows the relationship between branches?',
            back: 'git log --graph --oneline --all - Shows a graphical representation of branch relationships.'
          },
          {
            id: 'br-8',
            front: 'How do you rename a branch?',
            back: 'git branch -m <old-name> <new-name> - Renames a branch locally.'
          },
          {
            id: 'br-9',
            front: 'What command shows which branches are already merged into the current branch?',
            back: 'git branch --merged - Lists branches that have been merged into the current branch.'
          },
          {
            id: 'br-10',
            front: 'How do you create a new branch and switch to it in one command?',
            back: 'git checkout -b <branch-name> - Creates and switches to a new branch.'
          },
          {
            id: 'br-11',
            front: 'What command helps you track a remote branch?',
            back: 'git branch --set-upstream-to=origin/<branch-name> <local-branch-name>'
          },
          {
            id: 'br-12',
            front: 'How do you merge a specific commit into your current branch?',
            back: 'git cherry-pick <commit-hash> - Applies the changes from a specific commit to your current branch.'
          },
          {
            id: 'br-13',
            front: 'What command shows the commit history of a specific branch?',
            back: 'git log <branch-name> - Shows the commit history of the specified branch.'
          },
          {
            id: 'br-14',
            front: 'How do you create a new branch from a remote branch?',
            back: 'git checkout -b <local-branch-name> origin/<remote-branch-name>'
          },
          {
            id: 'br-15',
            front: 'What command helps you find which branch contains a specific commit?',
            back: 'git branch --contains <commit-hash> - Shows all branches that contain the specified commit.'
          },
          {
            id: 'br-16',
            front: 'How do you merge multiple branches at once?',
            back: 'git merge <branch1> <branch2> - Merges multiple branches into your current branch.'
          },
          {
            id: 'br-17',
            front: 'What command shows the differences between your current branch and another branch?',
            back: 'git diff <branch-name> - Shows the differences between your current branch and the specified branch.'
          },
          {
            id: 'br-18',
            front: 'How do you create a new branch from a tag?',
            back: 'git checkout -b <branch-name> <tag-name> - Creates a new branch from a specific tag.'
          },
          {
            id: 'br-19',
            front: 'What command helps you find which branches have been merged into the main branch?',
            back: 'git branch --merged main - Lists branches that have been merged into the main branch.'
          },
          {
            id: 'br-20',
            front: 'How do you create a new branch from a specific file in another branch?',
            back: 'git checkout <branch-name> -- <file-path> - Gets a specific file from another branch.'
          }
        ]
      },
      {
        id: 'github-commands',
        title: 'GitHub Commands',
        description: 'Working with remote repositories on GitHub',
        cards: [
          {
            id: 'gh-1',
            front: 'How do you add a remote repository?',
            back: 'git remote add origin <repository-url> - Adds a remote repository named "origin" with the specified URL.'
          },
          {
            id: 'gh-2',
            front: 'What command pushes changes to GitHub?',
            back: 'git push origin <branch-name> - Pushes your local commits to the remote repository.'
          },
          {
            id: 'gh-3',
            front: 'How do you pull changes from GitHub?',
            back: 'git pull origin <branch-name> - Fetches and merges changes from the remote repository.'
          },
          {
            id: 'gh-4',
            front: 'What command clones a repository?',
            back: 'git clone <repository-url> - Creates a local copy of a remote repository.'
          },
          {
            id: 'gh-5',
            front: 'How do you fetch changes without merging?',
            back: 'git fetch origin - Downloads changes from the remote repository without merging them.'
          },
          {
            id: 'gh-6',
            front: 'How do you update your local repository with changes from the remote?',
            back: 'git pull --rebase origin <branch-name> - Fetches and rebases your local changes on top of remote changes.'
          },
          {
            id: 'gh-7',
            front: 'What command shows the remote repository information?',
            back: 'git remote -v - Shows the URLs of the remote repositories.'
          },
          {
            id: 'gh-8',
            front: 'How do you add multiple remote repositories?',
            back: 'git remote add <remote-name> <repository-url> - Adds a new remote with a custom name.'
          },
          {
            id: 'gh-9',
            front: 'What command helps you update the remote repository URL?',
            back: 'git remote set-url origin <new-url> - Updates the URL of the remote repository.'
          },
          {
            id: 'gh-10',
            front: 'How do you push a new branch to the remote repository?',
            back: 'git push -u origin <branch-name> - Pushes a new branch and sets up tracking.'
          },
          {
            id: 'gh-11',
            front: 'What command shows the differences between your local and remote branches?',
            back: 'git diff origin/<branch-name> - Shows the differences between your local and remote branch.'
          },
          {
            id: 'gh-12',
            front: 'How do you fetch changes from a specific remote?',
            back: 'git fetch <remote-name> - Downloads changes from the specified remote repository.'
          },
          {
            id: 'gh-13',
            front: 'What command helps you update your local repository with all remote changes?',
            back: 'git pull --all - Fetches and merges changes from all remote repositories.'
          },
          {
            id: 'gh-14',
            front: 'How do you push tags to the remote repository?',
            back: 'git push origin --tags - Pushes all tags to the remote repository.'
          },
          {
            id: 'gh-15',
            front: 'What command shows the remote branches?',
            back: 'git branch -r - Lists all remote branches.'
          },
          {
            id: 'gh-16',
            front: 'How do you delete a remote branch?',
            back: 'git push origin --delete <branch-name> - Deletes a branch on the remote repository.'
          },
          {
            id: 'gh-17',
            front: 'What command helps you update your local repository with remote changes without merging?',
            back: 'git fetch --prune - Removes references to deleted remote branches and updates your local repository.'
          },
          {
            id: 'gh-18',
            front: 'How do you push changes to a specific remote?',
            back: 'git push <remote-name> <branch-name> - Pushes changes to the specified remote repository.'
          },
          {
            id: 'gh-19',
            front: 'What command shows the commit history of a remote branch?',
            back: 'git log origin/<branch-name> - Shows the commit history of a remote branch.'
          },
          {
            id: 'gh-20',
            front: 'How do you update your local repository with changes from a specific remote branch?',
            back: 'git pull origin <remote-branch>:<local-branch> - Pulls changes from a specific remote branch to a local branch.'
          }
        ]
      },
      {
        id: 'git-advanced',
        title: 'Advanced Git Commands',
        description: 'Advanced Git operations and troubleshooting',
        cards: [
          {
            id: 'adv-1',
            front: 'How do you undo the last commit?',
            back: 'git reset HEAD~1 - Undoes the last commit while keeping the changes staged. Add --hard to discard changes.'
          },
          {
            id: 'adv-2',
            front: 'What command shows the differences between branches?',
            back: 'git diff <branch1>..<branch2> - Shows the differences between two branches.'
          },
          {
            id: 'adv-3',
            front: 'How do you stash changes?',
            back: 'git stash - Temporarily saves your changes. Use git stash pop to apply them later.'
          },
          {
            id: 'adv-4',
            front: 'What command rebases your branch?',
            back: 'git rebase <base-branch> - Replays your changes on top of the specified branch.'
          },
          {
            id: 'adv-5',
            front: 'How do you resolve merge conflicts?',
            back: '1. Edit the conflicted files\n2. git add the resolved files\n3. git commit to complete the merge'
          },
          {
            id: 'adv-6',
            front: 'How do you create a new commit that combines multiple commits?',
            back: 'git reset --soft HEAD~n (where n is the number of commits) then git commit -m "new message"'
          },
          {
            id: 'adv-7',
            front: 'What command helps you find which commit introduced a bug?',
            back: 'git bisect start and git bisect good/bad - Uses binary search to find the commit that introduced a bug.'
          },
          {
            id: 'adv-8',
            front: 'How do you create a new commit that undoes changes from multiple commits?',
            back: 'git revert <commit1>..<commit2> - Creates new commits that undo the changes from a range of commits.'
          },
          {
            id: 'adv-9',
            front: 'What command helps you clean up your repository?',
            back: 'git gc - Runs garbage collection to optimize your repository.'
          },
          {
            id: 'adv-10',
            front: 'How do you create a new commit that combines changes from multiple branches?',
            back: 'git merge --no-ff <branch1> <branch2> - Creates a merge commit that combines changes from multiple branches.'
          },
          {
            id: 'adv-11',
            front: 'What command helps you find which commit introduced a specific line of code?',
            back: 'git blame <filename> - Shows who last modified each line of a file and when.'
          },
          {
            id: 'adv-12',
            front: 'How do you create a new commit that splits a previous commit?',
            back: 'git reset --soft HEAD~1 then git reset HEAD <file> then git commit -m "first part" then git add <file> then git commit -m "second part"'
          },
          {
            id: 'adv-13',
            front: 'What command helps you find which commit introduced a specific change?',
            back: 'git log -S "search term" - Searches for commits that introduced or removed the specified term.'
          },
          {
            id: 'adv-14',
            front: 'How do you create a new commit that combines changes from multiple commits?',
            back: 'git reset --soft HEAD~n then git commit -m "combined commit" - Combines multiple commits into one.'
          },
          {
            id: 'adv-15',
            front: 'What command helps you find which commit introduced a specific file?',
            back: 'git log --diff-filter=A -- <filename> - Shows the commit that added the specified file.'
          },
          {
            id: 'adv-16',
            front: 'How do you create a new commit that undoes changes from a specific file?',
            back: 'git checkout <commit-hash> -- <filename> then git commit -m "revert file" - Reverts a specific file to a previous state.'
          },
          {
            id: 'adv-17',
            front: 'What command helps you find which commit removed a specific file?',
            back: 'git log --diff-filter=D -- <filename> - Shows the commit that deleted the specified file.'
          },
          {
            id: 'adv-18',
            front: 'How do you create a new commit that combines changes from multiple files?',
            back: 'git add <file1> <file2> then git commit -m "combined changes" - Combines changes from multiple files into one commit.'
          },
          {
            id: 'adv-19',
            front: 'What command helps you find which commit modified a specific line?',
            back: 'git log -L <start>,<end>:<filename> - Shows the commit that modified the specified lines.'
          },
          {
            id: 'adv-20',
            front: 'How do you create a new commit that splits changes from a specific file?',
            back: 'git reset HEAD <file> then git add -p <file> then git commit -m "first part" then git add <file> then git commit -m "second part"'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Which command is used to initialize a new Git repository?',
          options: ['git start', 'git init', 'git new', 'git create'],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'What is the correct command to create and switch to a new branch?',
          options: [
            'git branch new-branch',
            'git checkout new-branch',
            'git checkout -b new-branch',
            'git create-branch new-branch'
          ],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'How do you push changes to a remote repository?',
          options: [
            'git send origin main',
            'git push origin main',
            'git upload origin main',
            'git submit origin main'
          ],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'What command is used to temporarily save changes without committing?',
          options: ['git save', 'git store', 'git stash', 'git cache'],
          correctAnswer: 2
        },
        {
          id: 'q5',
          question: 'Which command shows the differences between your working directory and the staging area?',
          options: ['git show', 'git diff', 'git compare', 'git status'],
          correctAnswer: 1
        },
        {
          id: 'q6',
          question: 'What command shows the differences between staged changes and the last commit?',
          options: ['git diff', 'git diff --staged', 'git show', 'git status'],
          correctAnswer: 1
        },
        {
          id: 'q7',
          question: 'How do you create a new branch from a specific commit?',
          options: [
            'git branch <branch-name>',
            'git branch <branch-name> <commit-hash>',
            'git checkout <commit-hash>',
            'git create-branch <branch-name> <commit-hash>'
          ],
          correctAnswer: 1
        },
        {
          id: 'q8',
          question: 'What command helps you find which commit introduced a bug?',
          options: [
            'git find-bug',
            'git debug',
            'git bisect',
            'git search-bug'
          ],
          correctAnswer: 2
        },
        {
          id: 'q9',
          question: 'How do you update your local repository with changes from all remotes?',
          options: [
            'git pull --all',
            'git fetch --all',
            'git update --all',
            'git sync --all'
          ],
          correctAnswer: 1
        },
        {
          id: 'q10',
          question: 'What command shows the commit history in a graphical format?',
          options: [
            'git show-graph',
            'git log --graph',
            'git history --graph',
            'git view-graph'
          ],
          correctAnswer: 1
        },
        {
          id: 'q11',
          question: 'How do you stage specific parts of a file?',
          options: [
            'git add -p',
            'git stage -p',
            'git add --partial',
            'git stage --partial'
          ],
          correctAnswer: 0
        },
        {
          id: 'q12',
          question: 'What command helps you find which commit introduced a specific line of code?',
          options: [
            'git find-line',
            'git blame',
            'git search-line',
            'git show-line'
          ],
          correctAnswer: 1
        },
        {
          id: 'q13',
          question: 'How do you push a new branch to the remote repository?',
          options: [
            'git push -u origin <branch-name>',
            'git push origin <branch-name>',
            'git push --new origin <branch-name>',
            'git push --branch origin <branch-name>'
          ],
          correctAnswer: 0
        },
        {
          id: 'q14',
          question: 'What command shows the relationship between branches?',
          options: [
            'git show-branches',
            'git branch-relations',
            'git log --graph',
            'git view-branches'
          ],
          correctAnswer: 2
        },
        {
          id: 'q15',
          question: 'How do you create a new commit that undoes changes from multiple commits?',
          options: [
            'git undo <commit1>..<commit2>',
            'git revert <commit1>..<commit2>',
            'git remove <commit1>..<commit2>',
            'git delete <commit1>..<commit2>'
          ],
          correctAnswer: 1
        },
        {
          id: 'q16',
          question: 'What command helps you clean up your repository?',
          options: [
            'git clean',
            'git optimize',
            'git gc',
            'git maintenance'
          ],
          correctAnswer: 2
        },
        {
          id: 'q17',
          question: 'How do you update the remote repository URL?',
          options: [
            'git remote update origin <new-url>',
            'git remote set-url origin <new-url>',
            'git remote change origin <new-url>',
            'git remote modify origin <new-url>'
          ],
          correctAnswer: 1
        },
        {
          id: 'q18',
          question: 'What command shows the differences between your local and remote branches?',
          options: [
            'git diff origin/<branch-name>',
            'git compare origin/<branch-name>',
            'git show-diff origin/<branch-name>',
            'git view-diff origin/<branch-name>'
          ],
          correctAnswer: 0
        },
        {
          id: 'q19',
          question: 'How do you create a new commit that combines changes from multiple files?',
          options: [
            'git commit --combine <file1> <file2>',
            'git add <file1> <file2> && git commit',
            'git merge-files <file1> <file2>',
            'git combine <file1> <file2>'
          ],
          correctAnswer: 1
        },
        {
          id: 'q20',
          question: 'What command helps you find which commit introduced a specific change in all files?',
          options: [
            'git log -p | grep "search term"',
            'git search-all "search term"',
            'git find-all "search term"',
            'git show-all "search term"'
          ],
          correctAnswer: 0
        }
      ]
    }
  },
  {
    id: 'html-css-basics',
    title: 'HTML & CSS Fundamentals',
    description: 'Master the building blocks of web development',
    level: 'beginner',
    sets: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Understanding HTML structure and elements',
        cards: [
          {
            id: 'html-1',
            front: 'What is HTML?',
            back: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It defines the structure and content of a webpage.'
          },
          {
            id: 'html-2',
            front: 'What is a doctype?',
            back: 'The doctype declaration specifies the version of HTML being used. It helps browsers render the page correctly. Example: <!DOCTYPE html>'
          },
          {
            id: 'html-3',
            front: 'What is a tag?',
            back: 'A tag is used to define HTML elements. They come in pairs: opening and closing tags. Example: <p>content</p>'
          },
          {
            id: 'html-4',
            front: 'What is an attribute?',
            back: 'Attributes provide additional information about HTML elements. They are always specified in the start tag. Example: <img src="image.jpg" alt="description">'
          },
          {
            id: 'html-5',
            front: 'What is a comment?',
            back: 'Comments are used to leave notes in the code for other developers. They are not displayed in the browser. Example: <!-- This is a comment -->'
          },
          {
            id: 'html-6',
            front: 'What is semantic HTML?',
            back: 'Semantic HTML uses meaningful tags that clearly describe their content. Examples include <header>, <nav>, <main>, <article>, <section>, and <footer>.'
          },
          {
            id: 'html-7',
            front: 'What is the difference between <div> and <span>?',
            back: '<div> is a block-level element that creates a new line, while <span> is an inline element that doesn\'t create a new line.'
          },
          {
            id: 'html-8',
            front: 'What is the purpose of the <meta> tag?',
            back: 'The <meta> tag provides metadata about the HTML document, such as character encoding, viewport settings, and SEO information.'
          },
          {
            id: 'html-9',
            front: 'What is the difference between <ul> and <ol>?',
            back: '<ul> creates an unordered list with bullet points, while <ol> creates an ordered list with numbers or letters.'
          },
          {
            id: 'html-10',
            front: 'What is the purpose of the <form> element?',
            back: 'The <form> element is used to create an HTML form for user input. It can contain various input elements like text fields, checkboxes, and buttons.'
          },
          {
            id: 'html-11',
            front: 'What is the difference between GET and POST methods?',
            back: 'GET sends data in the URL, while POST sends data in the request body. GET is for retrieving data, POST is for submitting data.'
          },
          {
            id: 'html-12',
            front: 'What is the purpose of the <table> element?',
            back: 'The <table> element is used to create tables with rows and columns. It includes <tr> for rows, <td> for cells, and <th> for header cells.'
          },
          {
            id: 'html-13',
            front: 'What is the purpose of the <iframe> element?',
            back: 'The <iframe> element is used to embed another HTML document within the current document. It\'s commonly used for videos, maps, and other external content.'
          },
          {
            id: 'html-14',
            front: 'What is the purpose of the <canvas> element?',
            back: 'The <canvas> element is used to draw graphics using JavaScript. It provides a drawing surface for creating animations, games, and other visual content.'
          },
          {
            id: 'html-15',
            front: 'What is the purpose of the <video> element?',
            back: 'The <video> element is used to embed video content in a webpage. It supports multiple video formats and provides controls for playback.'
          },
          {
            id: 'html-16',
            front: 'What is the purpose of the <audio> element?',
            back: 'The <audio> element is used to embed sound content in a webpage. It supports multiple audio formats and provides controls for playback.'
          },
          {
            id: 'html-17',
            front: 'What is the purpose of the <figure> element?',
            back: 'The <figure> element is used to group media content with a caption. It\'s commonly used with images, videos, and other media.'
          },
          {
            id: 'html-18',
            front: 'What is the purpose of the <details> element?',
            back: 'The <details> element creates a disclosure widget that can be toggled open and closed. It\'s used for additional information that can be shown or hidden.'
          },
          {
            id: 'html-19',
            front: 'What is the purpose of the <dialog> element?',
            back: 'The <dialog> element represents a dialog box or window. It\'s used for modal dialogs, popups, and other interactive content.'
          },
          {
            id: 'html-20',
            front: 'What is the purpose of the <template> element?',
            back: 'The <template> element is used to hold HTML content that should not be rendered immediately. It can be cloned and inserted into the document using JavaScript.'
          }
        ]
      },
      {
        id: 'css-basics',
        title: 'CSS Fundamentals',
        description: 'Understanding CSS styling and layout',
        cards: [
          {
            id: 'css-1',
            front: 'What is CSS?',
            back: 'CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML. It controls layout, colors, fonts, and animations.'
          },
          {
            id: 'css-2',
            front: 'What is a selector?',
            back: 'A selector is used to select HTML elements for styling. Examples include element selectors (p), class selectors (.class), and ID selectors (#id).'
          },
          {
            id: 'css-3',
            front: 'What is a property?',
            back: 'A property is a characteristic of an HTML element that can be styled. Examples include color, font-size, margin, and padding.'
          },
          {
            id: 'css-4',
            front: 'What is a value?',
            back: 'A value is assigned to a property to determine its appearance. Examples include color values (red, #FF0000), size values (10px, 2em), and position values (center, left).'
          },
          {
            id: 'css-5',
            front: 'What is a declaration?',
            back: 'A declaration is a property-value pair in a CSS rule. Example: color: blue;'
          },
          {
            id: 'css-6',
            front: 'What is the box model?',
            back: 'The box model describes how elements are rendered as boxes with content, padding, border, and margin. It affects layout and spacing.'
          },
          {
            id: 'css-7',
            front: 'What is the difference between margin and padding?',
            back: 'Margin is the space outside an element\'s border, while padding is the space between the content and the border.'
          },
          {
            id: 'css-8',
            front: 'What is the difference between display: block and display: inline?',
            back: 'Block elements take up the full width and create a new line, while inline elements only take up as much width as necessary and don\'t create new lines.'
          },
          {
            id: 'css-9',
            front: 'What is flexbox?',
            back: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides flexible and responsive layouts.'
          },
          {
            id: 'css-10',
            front: 'What is CSS Grid?',
            back: 'CSS Grid is a two-dimensional layout system for creating complex web layouts. It allows for both rows and columns to be defined.'
          },
          {
            id: 'css-11',
            front: 'What is a media query?',
            back: 'A media query is a CSS technique that applies styles based on device characteristics, such as screen size, resolution, and orientation.'
          },
          {
            id: 'css-12',
            front: 'What is the difference between position: relative and position: absolute?',
            back: 'Relative positioning moves an element relative to its normal position, while absolute positioning removes the element from the normal flow and positions it relative to its nearest positioned ancestor.'
          },
          {
            id: 'css-13',
            front: 'What is the z-index property?',
            back: 'The z-index property specifies the stack order of elements. Elements with higher z-index values appear on top of elements with lower values.'
          },
          {
            id: 'css-14',
            front: 'What is a CSS variable?',
            back: 'CSS variables (custom properties) allow you to store and reuse values throughout your stylesheet. They are defined with -- and accessed with var().'
          },
          {
            id: 'css-15',
            front: 'What is the difference between em and rem units?',
            back: 'em is relative to the font-size of the element, while rem is relative to the font-size of the root element (html).'
          },
          {
            id: 'css-16',
            front: 'What is the purpose of the @import rule?',
            back: 'The @import rule is used to import one stylesheet into another. It must be placed at the top of the stylesheet.'
          },
          {
            id: 'css-17',
            front: 'What is the purpose of the @media rule?',
            back: 'The @media rule is used to apply styles based on media queries. It allows for responsive design by targeting specific device characteristics.'
          },
          {
            id: 'css-18',
            front: 'What is the purpose of the @keyframes rule?',
            back: 'The @keyframes rule is used to create animations. It defines the stages and styles of the animation.'
          },
          {
            id: 'css-19',
            front: 'What is the purpose of the transform property?',
            back: 'The transform property allows you to modify the coordinate space of an element. It can be used for rotation, scaling, translation, and skewing.'
          },
          {
            id: 'css-20',
            front: 'What is the purpose of the transition property?',
            back: 'The transition property allows you to change property values smoothly over a given duration. It creates animations between states.'
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'What is the purpose of HTML?',
          options: [
            'To style web pages',
            'To create the structure of web pages',
            'To add interactivity to web pages',
            'To connect to databases'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'What is the purpose of CSS?',
          options: [
            'To create the structure of web pages',
            'To style web pages',
            'To add interactivity to web pages',
            'To connect to databases'
          ],
          correctAnswer: 1
        },
        {
          id: 'q3',
          question: 'What is semantic HTML?',
          options: [
            'HTML that uses only div elements',
            'HTML that uses meaningful tags',
            'HTML that uses only class names',
            'HTML that uses only inline styles'
          ],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'What is the box model?',
          options: [
            'A way to create boxes in CSS',
            'A way to create layouts in CSS',
            'A way to describe how elements are rendered',
            'A way to create animations in CSS'
          ],
          correctAnswer: 2
        },
        {
          id: 'q5',
          question: 'What is the difference between margin and padding?',
          options: [
            'Margin is inside, padding is outside',
            'Margin is outside, padding is inside',
            'Margin is for text, padding is for images',
            'Margin is for color, padding is for size'
          ],
          correctAnswer: 1
        },
        {
          id: 'q6',
          question: 'What is flexbox?',
          options: [
            'A way to create tables',
            'A way to create animations',
            'A way to create flexible layouts',
            'A way to create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q7',
          question: 'What is CSS Grid?',
          options: [
            'A way to create tables',
            'A way to create animations',
            'A way to create two-dimensional layouts',
            'A way to create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q8',
          question: 'What is a media query?',
          options: [
            'A way to create tables',
            'A way to create animations',
            'A way to create responsive designs',
            'A way to create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q9',
          question: 'What is the difference between em and rem units?',
          options: [
            'em is for text, rem is for images',
            'em is relative to parent, rem is relative to root',
            'em is for color, rem is for size',
            'em is for layout, rem is for animation'
          ],
          correctAnswer: 1
        },
        {
          id: 'q10',
          question: 'What is the purpose of CSS variables?',
          options: [
            'To create tables',
            'To create animations',
            'To store and reuse values',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q11',
          question: 'What is the purpose of the transform property?',
          options: [
            'To create tables',
            'To create animations',
            'To modify the coordinate space of an element',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q12',
          question: 'What is the purpose of the transition property?',
          options: [
            'To create tables',
            'To create smooth animations between states',
            'To create layouts',
            'To create colors'
          ],
          correctAnswer: 1
        },
        {
          id: 'q13',
          question: 'What is the purpose of the @keyframes rule?',
          options: [
            'To create tables',
            'To create animations',
            'To create layouts',
            'To create colors'
          ],
          correctAnswer: 1
        },
        {
          id: 'q14',
          question: 'What is the purpose of the z-index property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify the stack order of elements',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q15',
          question: 'What is the purpose of the position property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify how an element is positioned',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q16',
          question: 'What is the purpose of the display property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify how an element is displayed',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q17',
          question: 'What is the purpose of the float property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify how an element should float',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q18',
          question: 'What is the purpose of the clear property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify which sides of an element can be next to floating elements',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q19',
          question: 'What is the purpose of the overflow property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify what happens if content overflows an element\'s box',
            'To create colors'
          ],
          correctAnswer: 2
        },
        {
          id: 'q20',
          question: 'What is the purpose of the visibility property?',
          options: [
            'To create tables',
            'To create animations',
            'To specify whether an element is visible or hidden',
            'To create colors'
          ],
          correctAnswer: 2
        }
      ]
    }
  }
]; 