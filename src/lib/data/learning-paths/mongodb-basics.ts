import { LearningPath } from '@/types/learningPath';
import { FlashcardSet } from '@/types/flashcard';
import { Quiz } from '@/types/quiz';

export const mongodbBasics: LearningPath = {
  id: 'mongodb-basics',
  title: 'MongoDB',
  description: 'Learn MongoDB from basics to advanced concepts',
  level: 'beginner',
  category: 'database',
  createdAt: new Date(),
  updatedAt: new Date(),
  sets: [
    {
      id: 'mongodb-beginner',
      title: 'MongoDB Beginner',
      description: 'Basic MongoDB concepts and features',
      category: 'mongodb',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'mongodb-b-1',
          front: 'What is MongoDB?',
          back: 'MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents, making it easy to work with data.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-2',
          front: 'What is a document in MongoDB?',
          back: 'A document is a record in MongoDB that stores data in BSON format, similar to JSON objects with key-value pairs.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-3',
          front: 'What is a collection in MongoDB?',
          back: 'A collection is a group of MongoDB documents, similar to a table in relational databases.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-4',
          front: 'What is a database in MongoDB?',
          back: 'A database is a physical container for collections, storing data on the filesystem.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-5',
          front: 'What is BSON?',
          back: 'BSON (Binary JSON) is the binary-encoded serialization of JSON-like documents used by MongoDB.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-6',
          front: 'What is the _id field?',
          back: 'The _id field is a unique identifier for each document in a collection, automatically created if not specified.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-7',
          front: 'What is the insertOne() method?',
          back: 'insertOne() is a method to insert a single document into a collection.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-8',
          front: 'What is the find() method?',
          back: 'find() is a method to query documents in a collection, returning a cursor to the matching documents.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-9',
          front: 'What is the updateOne() method?',
          back: 'updateOne() is a method to update a single document in a collection that matches a filter.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-10',
          front: 'What is the deleteOne() method?',
          back: 'deleteOne() is a method to delete a single document from a collection that matches a filter.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-11',
          front: 'What is a query filter?',
          back: 'A query filter is a document that specifies the conditions for selecting documents to update or delete.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-12',
          front: 'What is the $set operator?',
          back: 'The $set operator replaces the value of a field with the specified value.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-13',
          front: 'What is the $inc operator?',
          back: 'The $inc operator increments the value of a field by the specified amount.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-14',
          front: 'What is the $push operator?',
          back: 'The $push operator adds an element to an array field.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-15',
          front: 'What is the $pull operator?',
          back: 'The $pull operator removes elements from an array that match a specified condition.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-16',
          front: 'What is the $sort operator?',
          back: 'The $sort operator orders the documents in a specified order (1 for ascending, -1 for descending).',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-b-17',
          front: 'What is the $limit operator?',
          back: 'The $limit operator limits the number of documents passed to the next stage in the pipeline.',
          category: 'mongodb',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'mongodb-intermediate',
      title: 'MongoDB Intermediate',
      description: 'Intermediate MongoDB concepts and features',
      category: 'mongodb',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'mongodb-i-1',
          front: 'What is an index in MongoDB?',
          back: 'An index is a data structure that improves the speed of data retrieval operations by storing a small portion of the collection\'s data in an easy-to-traverse form.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-2',
          front: 'What is a compound index?',
          back: 'A compound index is an index on multiple fields, supporting queries that match on the prefix of the index fields.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-3',
          front: 'What is a text index?',
          back: 'A text index is a special index that supports text search queries on string content.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-4',
          front: 'What is aggregation in MongoDB?',
          back: 'Aggregation is a framework for processing data records and returning computed results, similar to GROUP BY in SQL.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-5',
          front: 'What is the $match stage?',
          back: 'The $match stage filters documents to pass only those that match the specified condition to the next stage.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-6',
          front: 'What is the $group stage?',
          back: 'The $group stage groups documents by a specified expression and outputs a document for each distinct grouping.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-7',
          front: 'What is the $project stage?',
          back: 'The $project stage specifies the fields to include or exclude in the output documents.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-8',
          front: 'What is the $lookup stage?',
          back: 'The $lookup stage performs a left outer join to a collection in the same database.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-9',
          front: 'What is a replica set?',
          back: 'A replica set is a group of MongoDB instances that maintain the same data set, providing redundancy and high availability.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-10',
          front: 'What is a primary node?',
          back: 'A primary node is the main node in a replica set that receives all write operations.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-11',
          front: 'What is a secondary node?',
          back: 'A secondary node is a node in a replica set that maintains a copy of the primary\'s data set.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-12',
          front: 'What is sharding?',
          back: 'Sharding is a method for distributing data across multiple machines, enabling horizontal scaling.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-13',
          front: 'What is a shard key?',
          back: 'A shard key is a field or fields that determine how data is distributed across shards.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-14',
          front: 'What is a chunk?',
          back: 'A chunk is a contiguous range of shard key values within a particular shard.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-15',
          front: 'What is a balancer?',
          back: 'A balancer is a background process that monitors the number of chunks on each shard and migrates chunks if necessary.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-16',
          front: 'What is a config server?',
          back: 'A config server is a MongoDB instance that stores metadata about the cluster, including the chunk distribution.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-i-17',
          front: 'What is a mongos?',
          back: 'A mongos is a routing service for MongoDB shard clusters that processes queries and routes operations to the appropriate shards.',
          category: 'mongodb',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'mongodb-advanced',
      title: 'MongoDB Advanced',
      description: 'Advanced MongoDB concepts and features',
      category: 'mongodb',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'mongodb-a-1',
          front: 'What is a change stream?',
          back: 'A change stream is a feature that allows applications to access real-time data changes without the complexity and risk of tailing the oplog.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-2',
          front: 'What is a transaction?',
          back: 'A transaction is a sequence of operations that are treated as a single unit, ensuring data consistency.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-3',
          front: 'What is the WiredTiger storage engine?',
          back: 'WiredTiger is the default storage engine in MongoDB, providing document-level concurrency control and compression.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-4',
          front: 'What is the oplog?',
          back: 'The oplog is a special capped collection that keeps a rolling record of all operations that modify the data stored in the database.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-5',
          front: 'What is a covered query?',
          back: 'A covered query is a query that can be satisfied entirely using an index, without examining any documents.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-6',
          front: 'What is a sparse index?',
          back: 'A sparse index only includes documents that have the indexed field, even if the field is null.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-7',
          front: 'What is a TTL index?',
          back: 'A TTL (Time To Live) index is a special index that MongoDB can use to automatically remove documents after a certain period.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-8',
          front: 'What is a geospatial index?',
          back: 'A geospatial index supports queries that calculate geometries on an earth-like sphere.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-9',
          front: 'What is a collation?',
          back: 'A collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-10',
          front: 'What is a view?',
          back: 'A view is a queryable object whose contents are defined by an aggregation pipeline on other collections or views.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-11',
          front: 'What is a role?',
          back: 'A role is a set of privileges that can be granted to users or other roles, defining what operations they can perform.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-12',
          front: 'What is a privilege?',
          back: 'A privilege is a combination of a resource and the actions permitted on that resource.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-13',
          front: 'What is a resource?',
          back: 'A resource is a database, collection, set of collections, or the cluster, on which privileges can be granted.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-14',
          front: 'What is a backup?',
          back: 'A backup is a copy of data that can be used to restore the database in case of data loss.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-15',
          front: 'What is a restore?',
          back: 'A restore is the process of copying data from a backup to a database.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'mongodb-a-16',
          front: 'What is a dump?',
          back: 'A dump is a binary export of the contents of a database, created using the mongodump utility.',
          category: 'mongodb',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    }
  ],
  quiz: {
    id: 'mongodb-quiz',
    title: 'MongoDB Quiz',
    description: 'Test your knowledge of MongoDB concepts.',
    category: 'database',
    timeLimit: 30,
    passingScore: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
    questions: [
      {
        id: 'q1',
        question: 'What is MongoDB?',
        options: [
          'A relational database',
          'A NoSQL document database',
          'A key-value store',
          'A graph database'
        ],
        correctAnswer: 'A NoSQL document database',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'What is a document in MongoDB?',
        options: [
          'A text file',
          'A JSON-like object',
          'A table row',
          'A database schema'
        ],
        correctAnswer: 'A JSON-like object',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        question: 'What is a collection in MongoDB?',
        options: [
          'A group of databases',
          'A group of documents',
          'A group of indexes',
          'A group of users'
        ],
        correctAnswer: 'A group of documents',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q4',
        question: 'What is BSON?',
        options: [
          'Binary JSON',
          'Basic SQL Object Notation',
          'Binary SQL',
          'Basic Object Notation'
        ],
        correctAnswer: 'Binary JSON',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q5',
        question: 'What is the purpose of _id in MongoDB?',
        options: [
          'It is optional',
          'It is a unique identifier',
          'It is a foreign key',
          'It is a composite key'
        ],
        correctAnswer: 'It is a unique identifier',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q6',
        question: 'What is the insertOne() method used for?',
        options: [
          'Updating multiple documents',
          'Inserting multiple documents',
          'Inserting a single document',
          'Deleting a document'
        ],
        correctAnswer: 'Inserting a single document',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q7',
        question: 'What is the find() method used for?',
        options: [
          'Updating documents',
          'Deleting documents',
          'Querying documents',
          'Creating indexes'
        ],
        correctAnswer: 'Querying documents',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q8',
        question: 'What is the updateOne() method used for?',
        options: [
          'Updating multiple documents',
          'Updating a single document',
          'Inserting a document',
          'Deleting a document'
        ],
        correctAnswer: 'Updating a single document',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q9',
        question: 'What is the deleteOne() method used for?',
        options: [
          'Deleting multiple documents',
          'Deleting a single document',
          'Updating a document',
          'Inserting a document'
        ],
        correctAnswer: 'Deleting a single document',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q10',
        question: 'What is the $set operator used for?',
        options: [
          'Setting multiple fields',
          'Setting a single field',
          'Unsetting fields',
          'Incrementing fields'
        ],
        correctAnswer: 'Setting multiple fields',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q11',
        question: 'What is the $inc operator used for?',
        options: [
          'Setting fields',
          'Unsetting fields',
          'Incrementing fields',
          'Multiplying fields'
        ],
        correctAnswer: 'Incrementing fields',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q12',
        question: 'What is the $push operator used for?',
        options: [
          'Adding to arrays',
          'Removing from arrays',
          'Updating arrays',
          'Deleting arrays'
        ],
        correctAnswer: 'Adding to arrays',
        category: 'database',
        difficulty: 'easy'
      },
      {
        id: 'q13',
        question: 'What is a compound index?',
        options: [
          'An index on a single field',
          'An index on multiple fields',
          'A unique index',
          'A text index'
        ],
        correctAnswer: 'An index on multiple fields',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q14',
        question: 'What is a text index?',
        options: [
          'An index for numbers',
          'An index for dates',
          'An index for text search',
          'An index for arrays'
        ],
        correctAnswer: 'An index for text search',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q15',
        question: 'What is the $match stage in aggregation?',
        options: [
          'Filtering documents',
          'Grouping documents',
          'Sorting documents',
          'Limiting documents'
        ],
        correctAnswer: 'Filtering documents',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q16',
        question: 'What is the $group stage in aggregation?',
        options: [
          'Filtering documents',
          'Grouping documents',
          'Sorting documents',
          'Limiting documents'
        ],
        correctAnswer: 'Grouping documents',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q17',
        question: 'What is the $sort stage in aggregation?',
        options: [
          'Filtering documents',
          'Grouping documents',
          'Sorting documents',
          'Limiting documents'
        ],
        correctAnswer: 'Sorting documents',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q18',
        question: 'What is the $limit stage in aggregation?',
        options: [
          'Filtering documents',
          'Grouping documents',
          'Sorting documents',
          'Limiting documents'
        ],
        correctAnswer: 'Limiting documents',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q19',
        question: 'What is the $project stage in aggregation?',
        options: [
          'Filtering fields',
          'Grouping fields',
          'Sorting fields',
          'Limiting fields'
        ],
        correctAnswer: 'Filtering fields',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q20',
        question: 'What is the $unwind stage in aggregation?',
        options: [
          'Deconstructing arrays',
          'Constructing arrays',
          'Filtering arrays',
          'Sorting arrays'
        ],
        correctAnswer: 'Deconstructing arrays',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q21',
        question: 'What is the $lookup stage in aggregation?',
        options: [
          'Joining collections',
          'Splitting collections',
          'Filtering collections',
          'Sorting collections'
        ],
        correctAnswer: 'Joining collections',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q22',
        question: 'What is the $facet stage in aggregation?',
        options: [
          'Creating multiple pipelines',
          'Creating single pipeline',
          'Filtering pipeline',
          'Sorting pipeline'
        ],
        correctAnswer: 'Creating multiple pipelines',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q23',
        question: 'What is the $bucket stage in aggregation?',
        options: [
          'Grouping by ranges',
          'Grouping by values',
          'Filtering by ranges',
          'Sorting by ranges'
        ],
        correctAnswer: 'Grouping by ranges',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q24',
        question: 'What is the $geoNear stage in aggregation?',
        options: [
          'Geospatial querying',
          'Text querying',
          'Date querying',
          'Number querying'
        ],
        correctAnswer: 'Geospatial querying',
        category: 'database',
        difficulty: 'medium'
      },
      {
        id: 'q25',
        question: 'What is a change stream?',
        options: [
          'A stream of documents',
          'A stream of changes',
          'A stream of indexes',
          'A stream of users'
        ],
        correctAnswer: 'A stream of changes',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q26',
        question: 'What is a transaction?',
        options: [
          'A single operation',
          'Multiple operations',
          'A read operation',
          'A write operation'
        ],
        correctAnswer: 'Multiple operations',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q27',
        question: 'What is the WiredTiger storage engine?',
        options: [
          'A document storage engine',
          'A key-value storage engine',
          'A graph storage engine',
          'A relational storage engine'
        ],
        correctAnswer: 'A document storage engine',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q28',
        question: 'What is a replica set?',
        options: [
          'A single server',
          'Multiple servers',
          'A single database',
          'Multiple databases'
        ],
        correctAnswer: 'Multiple servers',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q29',
        question: 'What is sharding?',
        options: [
          'Splitting data',
          'Combining data',
          'Filtering data',
          'Sorting data'
        ],
        correctAnswer: 'Splitting data',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q30',
        question: 'What is a covered query?',
        options: [
          'A query using indexes',
          'A query using documents',
          'A query using collections',
          'A query using databases'
        ],
        correctAnswer: 'A query using indexes',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q31',
        question: 'What is the $expr operator used for?',
        options: [
          'Expression evaluation',
          'Document evaluation',
          'Collection evaluation',
          'Database evaluation'
        ],
        correctAnswer: 'Expression evaluation',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q32',
        question: 'What is the $text operator used for?',
        options: [
          'Text search',
          'Number search',
          'Date search',
          'Array search'
        ],
        correctAnswer: 'Text search',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q33',
        question: 'What is the $regex operator used for?',
        options: [
          'Pattern matching',
          'Value matching',
          'Type matching',
          'Size matching'
        ],
        correctAnswer: 'Pattern matching',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q34',
        question: 'What is the $where operator used for?',
        options: [
          'JavaScript evaluation',
          'Python evaluation',
          'Java evaluation',
          'C++ evaluation'
        ],
        correctAnswer: 'JavaScript evaluation',
        category: 'database',
        difficulty: 'hard'
      },
      {
        id: 'q35',
        question: 'What is the $mod operator used for?',
        options: [
          'Modulo operation',
          'Multiplication',
          'Division',
          'Addition'
        ],
        correctAnswer: 'Modulo operation',
        category: 'database',
        difficulty: 'hard'
      }
    ]
  }
}; 