import { LearningPath } from '@/types/learningPath';
import { FlashcardSet } from '@/types/flashcard';
import { Quiz } from '@/types/quiz';

export const sqlBasics: LearningPath = {
  id: 'sql-basics',
  title: 'SQL',
  description: 'Learn SQL from basics to advanced concepts',
  level: 'beginner',
  category: 'database',
  createdAt: new Date(),
  updatedAt: new Date(),
  sets: [
    {
      id: 'sql-beginner',
      title: 'SQL Beginner',
      description: 'Basic SQL concepts and features',
      category: 'sql',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'sql-b-1',
          front: 'What is SQL?',
          back: 'SQL (Structured Query Language) is a standard language for storing, manipulating, and retrieving data in relational databases.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-2',
          front: 'What is a table in SQL?',
          back: 'A table is a collection of related data organized in rows and columns, where each row represents a record and each column represents a field.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-3',
          front: 'What is a primary key?',
          back: 'A primary key is a unique identifier for each record in a table. It must contain unique values and cannot be null.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-4',
          front: 'What is a foreign key?',
          back: 'A foreign key is a field that references the primary key of another table, creating a relationship between the tables.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-5',
          front: 'What is the SELECT statement?',
          back: 'The SELECT statement is used to retrieve data from a database. It specifies which columns to retrieve and from which table.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-6',
          front: 'What is the INSERT statement?',
          back: 'The INSERT statement is used to add new records to a table. It specifies the table and the values to be inserted.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-7',
          front: 'What is the UPDATE statement?',
          back: 'The UPDATE statement is used to modify existing records in a table. It specifies the table, the new values, and which records to update.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-8',
          front: 'What is the DELETE statement?',
          back: 'The DELETE statement is used to remove records from a table. It specifies which records to delete based on a condition.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-9',
          front: 'What is the WHERE clause?',
          back: 'The WHERE clause is used to filter records based on a condition. It can be used with SELECT, UPDATE, and DELETE statements.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-10',
          front: 'What is the ORDER BY clause?',
          back: 'The ORDER BY clause is used to sort the result set in ascending or descending order based on one or more columns.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-11',
          front: 'What is the GROUP BY clause?',
          back: 'The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-12',
          front: 'What is the HAVING clause?',
          back: 'The HAVING clause is used to filter groups based on a condition, similar to WHERE but for grouped data.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-13',
          front: 'What is the LIKE operator?',
          back: 'The LIKE operator is used to search for a specified pattern in a column. It uses wildcards % and _ for pattern matching.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-14',
          front: 'What is the IN operator?',
          back: 'The IN operator allows you to specify multiple values in a WHERE clause, making it easier to test for multiple possible values.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-15',
          front: 'What is the BETWEEN operator?',
          back: 'The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-16',
          front: 'What is the NULL value?',
          back: 'NULL represents a missing or unknown value. It is different from zero or an empty string.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-b-17',
          front: 'What is the DISTINCT keyword?',
          back: 'The DISTINCT keyword is used to return only distinct (different) values, eliminating duplicate rows from the result set.',
          category: 'sql',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'sql-intermediate',
      title: 'SQL Intermediate',
      description: 'Intermediate SQL concepts and features',
      category: 'sql',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'sql-i-1',
          front: 'What is a JOIN?',
          back: 'A JOIN combines rows from two or more tables based on a related column between them.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-2',
          front: 'What is an INNER JOIN?',
          back: 'An INNER JOIN returns records that have matching values in both tables.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-3',
          front: 'What is a LEFT JOIN?',
          back: 'A LEFT JOIN returns all records from the left table and matching records from the right table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-4',
          front: 'What is a RIGHT JOIN?',
          back: 'A RIGHT JOIN returns all records from the right table and matching records from the left table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-5',
          front: 'What is a FULL JOIN?',
          back: 'A FULL JOIN returns all records when there is a match in either the left or right table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-6',
          front: 'What is a subquery?',
          back: 'A subquery is a query nested inside another query, used to return data that will be used in the main query.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-7',
          front: 'What is a view?',
          back: 'A view is a virtual table based on the result set of a SQL statement. It contains rows and columns like a real table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-8',
          front: 'What is an index?',
          back: 'An index is a data structure that improves the speed of data retrieval operations on a database table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-9',
          front: 'What is a stored procedure?',
          back: 'A stored procedure is a prepared SQL code that can be saved and reused. It can accept parameters and return values.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-10',
          front: 'What is a trigger?',
          back: 'A trigger is a stored procedure that automatically executes when an event occurs in the database.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-11',
          front: 'What is a transaction?',
          back: 'A transaction is a sequence of operations that are treated as a single unit. It must be completed entirely or not at all.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-12',
          front: 'What is normalization?',
          back: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-13',
          front: 'What is a composite key?',
          back: 'A composite key is a primary key that consists of two or more columns that uniquely identify a record.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-14',
          front: 'What is a self-join?',
          back: 'A self-join is a regular join where a table is joined with itself. It is useful for comparing rows within the same table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-15',
          front: 'What is a cross join?',
          back: 'A cross join produces a Cartesian product of the two tables, combining each row from the first table with each row from the second table.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-16',
          front: 'What is a natural join?',
          back: 'A natural join is a type of join that automatically matches columns with the same name in both tables.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-i-17',
          front: 'What is a union?',
          back: 'A union combines the result sets of two or more SELECT statements, removing duplicates.',
          category: 'sql',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'sql-advanced',
      title: 'SQL Advanced',
      description: 'Advanced SQL concepts and features',
      category: 'sql',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'sql-a-1',
          front: 'What is a window function?',
          back: 'A window function performs calculations across a set of rows that are related to the current row.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-2',
          front: 'What is a CTE (Common Table Expression)?',
          back: 'A CTE is a temporary named result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-3',
          front: 'What is a recursive query?',
          back: 'A recursive query is a query that references itself, typically used to work with hierarchical data.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-4',
          front: 'What is a materialized view?',
          back: 'A materialized view is a view that stores the query results, improving query performance at the cost of storage space.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-5',
          front: 'What is a partition?',
          back: 'A partition is a division of a table into smaller, more manageable pieces, improving query performance and maintenance.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-6',
          front: 'What is a deadlock?',
          back: 'A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-7',
          front: 'What is a cursor?',
          back: 'A cursor is a control structure that enables traversal over the records in a database, allowing row-by-row processing.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-8',
          front: 'What is a function in SQL?',
          back: 'A function is a reusable block of code that returns a value. It can be built-in or user-defined.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-9',
          front: 'What is a constraint?',
          back: 'A constraint is a rule that limits the data that can be stored in a table, ensuring data integrity.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-10',
          front: 'What is a schema?',
          back: 'A schema is a collection of database objects, including tables, views, and other database objects.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-11',
          front: 'What is a role?',
          back: 'A role is a set of permissions that can be assigned to users, simplifying security management.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-12',
          front: 'What is a transaction isolation level?',
          back: 'A transaction isolation level defines how transactions interact with each other, affecting concurrency and consistency.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-13',
          front: 'What is a lock?',
          back: 'A lock is a mechanism that prevents multiple transactions from accessing the same data simultaneously.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-14',
          front: 'What is a backup?',
          back: 'A backup is a copy of database data that can be used to restore the database in case of data loss.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-15',
          front: 'What is replication?',
          back: 'Replication is the process of copying and maintaining database objects in multiple databases.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'sql-a-16',
          front: 'What is sharding?',
          back: 'Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases.',
          category: 'sql',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    }
  ],
  quiz: {
    id: 'sql-quiz',
    title: 'SQL Quiz',
    description: 'Test your knowledge of SQL concepts',
    category: 'sql',
    passingScore: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
    questions: [
      {
        id: 'q1',
        question: 'What is SQL?',
        options: [
          'A programming language',
          'A database management system',
          'A structured query language for managing databases',
          'A web framework'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'What is a table in SQL?',
        options: [
          'A database',
          'A programming language',
          'A collection of related data organized in rows and columns',
          'A web framework'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        question: 'What is a primary key?',
        options: [
          'A database',
          'A programming language',
          'A unique identifier for each record in a table',
          'A web framework'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q4',
        question: 'What is a foreign key?',
        options: [
          'A database',
          'A programming language',
          'A field that references the primary key of another table',
          'A web framework'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q5',
        question: 'What is the purpose of SELECT?',
        options: [
          'To create a new table',
          'To modify data',
          'To retrieve data from a database',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q6',
        question: 'What is the purpose of INSERT?',
        options: [
          'To create a new table',
          'To add new records to a table',
          'To modify data',
          'To delete data'
        ],
        correctAnswer: '1',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q7',
        question: 'What is the purpose of UPDATE?',
        options: [
          'To create a new table',
          'To add new records',
          'To modify existing records',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q8',
        question: 'What is the purpose of DELETE?',
        options: [
          'To create a new table',
          'To add new records',
          'To modify data',
          'To remove records from a table'
        ],
        correctAnswer: '3',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q9',
        question: 'What is the purpose of WHERE?',
        options: [
          'To create a new table',
          'To add new records',
          'To filter records',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q10',
        question: 'What is the purpose of ORDER BY?',
        options: [
          'To create a new table',
          'To add new records',
          'To sort records',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q11',
        question: 'What is the purpose of GROUP BY?',
        options: [
          'To create a new table',
          'To add new records',
          'To group records by a column',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q12',
        question: 'What is the purpose of HAVING?',
        options: [
          'To create a new table',
          'To add new records',
          'To filter groups',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'easy'
      },
      {
        id: 'q13',
        question: 'What is a JOIN?',
        options: [
          'To create a new table',
          'To add new records',
          'To combine rows from multiple tables',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q14',
        question: 'What is an INNER JOIN?',
        options: [
          'To create a new table',
          'To add new records',
          'To return matching records from both tables',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q15',
        question: 'What is a LEFT JOIN?',
        options: [
          'To create a new table',
          'To add new records',
          'To return all records from the left table and matching records from the right',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q16',
        question: 'What is a RIGHT JOIN?',
        options: [
          'To create a new table',
          'To add new records',
          'To return all records from the right table and matching records from the left',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q17',
        question: 'What is a FULL JOIN?',
        options: [
          'To create a new table',
          'To add new records',
          'To return all records from both tables',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q18',
        question: 'What is a subquery?',
        options: [
          'To create a new table',
          'To add new records',
          'A query nested inside another query',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q19',
        question: 'What is a view?',
        options: [
          'To create a new table',
          'To add new records',
          'A virtual table based on a query',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q20',
        question: 'What is an index?',
        options: [
          'To create a new table',
          'To add new records',
          'A data structure that improves query performance',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q21',
        question: 'What is a stored procedure?',
        options: [
          'To create a new table',
          'To add new records',
          'A prepared SQL code that can be saved and reused',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q22',
        question: 'What is a trigger?',
        options: [
          'To create a new table',
          'To add new records',
          'A procedure that automatically executes when an event occurs',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q23',
        question: 'What is a transaction?',
        options: [
          'To create a new table',
          'To add new records',
          'A sequence of operations that are treated as a single unit',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q24',
        question: 'What is normalization?',
        options: [
          'To create a new table',
          'To add new records',
          'The process of organizing data to reduce redundancy',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'medium'
      },
      {
        id: 'q25',
        question: 'What is a window function?',
        options: [
          'To create a new table',
          'To add new records',
          'A function that performs calculations across a set of rows',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q26',
        question: 'What is a CTE (Common Table Expression)?',
        options: [
          'To create a new table',
          'To add new records',
          'A temporary named result set',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q27',
        question: 'What is a recursive query?',
        options: [
          'To create a new table',
          'To add new records',
          'A query that references itself',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q28',
        question: 'What is a materialized view?',
        options: [
          'To create a new table',
          'To add new records',
          'A view that stores the query results',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q29',
        question: 'What is a partition?',
        options: [
          'To create a new table',
          'To add new records',
          'A division of a table into smaller, more manageable pieces',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q30',
        question: 'What is a deadlock?',
        options: [
          'To create a new table',
          'To add new records',
          'A situation where two or more transactions are waiting for each other',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q31',
        question: 'What is a cursor?',
        options: [
          'To create a new table',
          'To add new records',
          'A control structure for traversing records in a database',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q32',
        question: 'What is a function in SQL?',
        options: [
          'To create a new table',
          'To add new records',
          'A reusable block of code that returns a value',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q33',
        question: 'What is a constraint?',
        options: [
          'To create a new table',
          'To add new records',
          'A rule that limits the data that can be stored',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q34',
        question: 'What is a schema?',
        options: [
          'To create a new table',
          'To add new records',
          'A collection of database objects',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      },
      {
        id: 'q35',
        question: 'What is a role?',
        options: [
          'To create a new table',
          'To add new records',
          'A set of permissions that can be assigned to users',
          'To delete data'
        ],
        correctAnswer: '2',
        category: 'sql',
        difficulty: 'hard'
      }
    ]
  }
}; 