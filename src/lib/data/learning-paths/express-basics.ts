import { LearningPath } from '@/types/learningPath';
import { FlashcardSet } from '@/types/flashcard';
import { Quiz } from '@/types/quiz';

export const expressBasics: LearningPath = {
  id: 'express-basics',
  title: 'Express.js',
  description: 'Learn Express.js from basics to advanced concepts',
  level: 'beginner',
  category: 'backend',
  createdAt: new Date(),
  updatedAt: new Date(),
  sets: [
    {
      id: 'express-beginner',
      title: 'Express Beginner',
      description: 'Basic Express.js concepts and features',
      category: 'express',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'express-b-1',
          front: 'What is Express.js?',
          back: 'Express.js is a web application framework for Node.js that provides a robust set of features for web and mobile applications.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-2',
          front: 'What is middleware in Express?',
          back: 'Middleware in Express are functions that have access to the request object (req), the response object (res), and the next middleware function in the application\'s request-response cycle.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-3',
          front: 'What is a route in Express?',
          back: 'A route in Express is a combination of a URL pattern and an HTTP method that defines how the application responds to client requests.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-4',
          front: 'What is the purpose of app.get()?',
          back: 'app.get() is used to handle GET requests at a specified path, defining what happens when a client makes a GET request to that path.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-5',
          front: 'What is the purpose of app.post()?',
          back: 'app.post() is used to handle POST requests at a specified path, defining what happens when a client makes a POST request to that path.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-6',
          front: 'What is the purpose of app.put()?',
          back: 'app.put() is used to handle PUT requests at a specified path, defining what happens when a client makes a PUT request to that path.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-7',
          front: 'What is the purpose of app.delete()?',
          back: 'app.delete() is used to handle DELETE requests at a specified path, defining what happens when a client makes a DELETE request to that path.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-8',
          front: 'What is the purpose of res.send()?',
          back: 'res.send() is used to send a response to the client, automatically setting the Content-Type header based on the type of data being sent.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-9',
          front: 'What is the purpose of res.json()?',
          back: 'res.json() is used to send a JSON response to the client, automatically setting the Content-Type header to application/json.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-10',
          front: 'What is the purpose of res.redirect()?',
          back: 'res.redirect() is used to redirect the client to a different URL, sending a 302 Found response by default.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-11',
          front: 'What is the purpose of res.status()?',
          back: 'res.status() is used to set the HTTP status code of the response, allowing you to send different status codes to the client.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-12',
          front: 'What is the purpose of req.params?',
          back: 'req.params is an object containing properties mapped to the named route parameters, allowing you to access URL parameters.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-13',
          front: 'What is the purpose of req.query?',
          back: 'req.query is an object containing a property for each query string parameter in the route, allowing you to access query parameters.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-14',
          front: 'What is the purpose of req.body?',
          back: 'req.body is an object containing the parsed request body, populated by body-parser middleware, allowing you to access POST data.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-15',
          front: 'What is the purpose of req.method?',
          back: 'req.method is a string containing the HTTP method of the request, allowing you to determine the type of request.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-16',
          front: 'What is the purpose of req.path?',
          back: 'req.path is a string containing the path portion of the request URL, allowing you to access the request path.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-b-17',
          front: 'What is the purpose of req.get()?',
          back: 'req.get() is a function that returns the specified HTTP request header field, allowing you to access request headers.',
          category: 'express',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'express-intermediate',
      title: 'Express Intermediate',
      description: 'Intermediate Express.js concepts and features',
      category: 'express',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'express-i-1',
          front: 'What is the purpose of app.use()?',
          back: 'app.use() is used to mount middleware functions at a specified path, or to mount middleware for all routes if no path is specified.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-2',
          front: 'What is the purpose of express.Router()?',
          back: 'express.Router() is used to create a new router object, allowing you to modularize route handlers and create a mini-application.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-3',
          front: 'What is the purpose of res.render()?',
          back: 'res.render() is used to render a view template and send the rendered HTML string to the client, commonly used with template engines.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-4',
          front: 'What is the purpose of app.all()?',
          back: 'app.all() is used to handle all HTTP methods at a specified path, defining what happens when a client makes any type of request to that path.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-5',
          front: 'What is the purpose of app.param()?',
          back: 'app.param() is used to add callback triggers to route parameters, allowing you to perform operations on route parameters before they are passed to route handlers.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-6',
          front: 'What is the purpose of app.route()?',
          back: 'app.route() is used to create a chainable route handler for a path, allowing you to define multiple HTTP method handlers for the same path.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-7',
          front: 'What is the purpose of res.set()?',
          back: 'res.set() is used to set HTTP response headers, allowing you to customize the headers sent to the client.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-8',
          front: 'What is the purpose of res.cookie()?',
          back: 'res.cookie() is used to set a cookie in the response, allowing you to store data on the client\'s browser.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-9',
          front: 'What is the purpose of res.clearCookie()?',
          back: 'res.clearCookie() is used to clear a cookie in the response, removing it from the client\'s browser.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-10',
          front: 'What is the purpose of req.cookies?',
          back: 'req.cookies is an object containing the cookies sent by the request, populated by cookie-parser middleware.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-11',
          front: 'What is the purpose of req.headers?',
          back: 'req.headers is an object containing the HTTP headers sent by the request, allowing you to access request headers.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-12',
          front: 'What is the purpose of req.protocol?',
          back: 'req.protocol is a string containing the request protocol, allowing you to determine if the request is HTTP or HTTPS.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-13',
          front: 'What is the purpose of req.secure?',
          back: 'req.secure is a boolean that is true if the request is over HTTPS, allowing you to check if the request is secure.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-14',
          front: 'What is the purpose of req.ip?',
          back: 'req.ip is a string containing the remote IP address of the request, allowing you to access the client\'s IP address.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-15',
          front: 'What is the purpose of req.ips?',
          back: 'req.ips is an array of IP addresses in the X-Forwarded-For header, allowing you to access the client\'s IP addresses when behind a proxy.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-16',
          front: 'What is the purpose of req.subdomains?',
          back: 'req.subdomains is an array of subdomains in the domain name of the request, allowing you to access the subdomains.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-i-17',
          front: 'What is the purpose of req.originalUrl?',
          back: 'req.originalUrl is a string containing the original request URL, allowing you to access the full URL of the request.',
          category: 'express',
          difficulty: 'intermediate',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'express-advanced',
      title: 'Express Advanced',
      description: 'Advanced Express.js concepts and features',
      category: 'express',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'express-a-1',
          front: 'What is the purpose of req.accepts()?',
          back: 'req.accepts() is a function that checks if the request accepts the specified content types, allowing you to check content negotiation.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-2',
          front: 'What is the purpose of res.format()?',
          back: 'res.format() is a function that performs content negotiation on the Accept HTTP header, allowing you to send different responses based on the client\'s accepted content types.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-3',
          front: 'What is the purpose of req.range()?',
          back: 'req.range() is a function that parses the Range header field, allowing you to handle range requests for partial content.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-4',
          front: 'What is the purpose of req.baseUrl?',
          back: 'req.baseUrl is a string containing the base URL of the mounted application, allowing you to access the base URL.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-5',
          front: 'What is the purpose of req.hostname?',
          back: 'req.hostname is a string containing the hostname from the Host HTTP header, allowing you to access the hostname.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-6',
          front: 'What is the purpose of req.fresh?',
          back: 'req.fresh is a boolean that is true if the request is fresh, meaning the response is still valid and can be served from cache.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-7',
          front: 'What is the purpose of req.stale?',
          back: 'req.stale is a boolean that is true if the request is stale, meaning the response is no longer valid and should be regenerated.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-8',
          front: 'What is the purpose of req.xhr?',
          back: 'req.xhr is a boolean that is true if the request is an XMLHttpRequest, allowing you to check if the request is an AJAX request.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-9',
          front: 'What is the purpose of req.acceptsCharsets()?',
          back: 'req.acceptsCharsets() is a function that checks if the request accepts the specified character sets, allowing you to check character set negotiation.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-10',
          front: 'What is the purpose of req.acceptsEncodings()?',
          back: 'req.acceptsEncodings() is a function that checks if the request accepts the specified encodings, allowing you to check encoding negotiation.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-11',
          front: 'What is the purpose of req.acceptsLanguages()?',
          back: 'req.acceptsLanguages() is a function that checks if the request accepts the specified languages, allowing you to check language negotiation.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-12',
          front: 'What is the purpose of req.is()?',
          back: 'req.is() is a function that checks if the request is of the specified content type, allowing you to check the content type of the request.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-13',
          front: 'What is the purpose of res.append()?',
          back: 'res.append() is a function that appends the specified value to the HTTP response header field, allowing you to add headers to the response.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-14',
          front: 'What is the purpose of res.attachment()?',
          back: 'res.attachment() is a function that sets the Content-Disposition header field to attachment, allowing you to send files as attachments.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-15',
          front: 'What is the purpose of res.download()?',
          back: 'res.download() is a function that transfers the file at the specified path as an attachment, allowing you to send files to the client.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'express-a-16',
          front: 'What is the purpose of res.end()?',
          back: 'res.end() is a function that ends the response process, allowing you to end the response without sending any data.',
          category: 'express',
          difficulty: 'advanced',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    }
  ],
  quiz: {
    id: 'express-quiz',
    title: 'Express.js Quiz',
    description: 'Test your knowledge of Express.js concepts',
    category: 'express',
    passingScore: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
    questions: [
      {
        id: 'q1',
        question: 'What is Express.js?',
        options: [
          'A database',
          'A web application framework for Node.js',
          'A programming language',
          'A web browser'
        ],
        correctAnswer: '1',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'What is middleware in Express.js?',
        options: [
          'A database',
          'A programming language',
          'Functions that have access to request and response objects',
          'A web browser'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        question: 'What is a route in Express.js?',
        options: [
          'A database',
          'A programming language',
          'A web browser',
          'A path that matches a URL pattern'
        ],
        correctAnswer: '3',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q4',
        question: 'What is the purpose of app.use()?',
        options: [
          'To create a new route',
          'To start the server',
          'To mount middleware functions',
          'To connect to a database'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q5',
        question: 'What is the purpose of express.Router()?',
        options: [
          'To create a new route',
          'To start the server',
          'To connect to a database',
          'To create a modular router'
        ],
        correctAnswer: '3',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q6',
        question: 'What is the purpose of res.send()?',
        options: [
          'To create a new route',
          'To start the server',
          'To send a response',
          'To connect to a database'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q7',
        question: 'What is the purpose of res.json()?',
        options: [
          'To create a new route',
          'To start the server',
          'To send a JSON response',
          'To connect to a database'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q8',
        question: 'What is the purpose of res.render()?',
        options: [
          'To create a new route',
          'To start the server',
          'To render a view template',
          'To connect to a database'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q9',
        question: 'What is the purpose of req.params?',
        options: [
          'To access route parameters',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q10',
        question: 'What is the purpose of req.query?',
        options: [
          'To access route parameters',
          'To access query string parameters',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '1',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q11',
        question: 'What is the purpose of req.body?',
        options: [
          'To access route parameters',
          'To access query string parameters',
          'To access request body data',
          'To create a new route'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q12',
        question: 'What is the purpose of req.cookies?',
        options: [
          'To access route parameters',
          'To access query string parameters',
          'To access request body data',
          'To access cookies'
        ],
        correctAnswer: '3',
        category: 'express',
        difficulty: 'easy'
      },
      {
        id: 'q13',
        question: 'What is the purpose of app.set()?',
        options: [
          'To create a new route',
          'To start the server',
          'To set application settings',
          'To connect to a database'
        ],
        correctAnswer: '2',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q14',
        question: 'What is the purpose of app.get()?',
        options: [
          'To create a GET route',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q15',
        question: 'What is the purpose of app.post()?',
        options: [
          'To create a POST route',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q16',
        question: 'What is the purpose of app.put()?',
        options: [
          'To create a PUT route',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q17',
        question: 'What is the purpose of app.delete()?',
        options: [
          'To create a DELETE route',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q18',
        question: 'What is the purpose of app.all()?',
        options: [
          'To create a route for all HTTP methods',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q19',
        question: 'What is the purpose of app.route()?',
        options: [
          'To create a chainable route handler',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q20',
        question: 'What is the purpose of app.param()?',
        options: [
          'To add callback triggers to route parameters',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q21',
        question: 'What is the purpose of app.locals?',
        options: [
          'To store application-level variables',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q22',
        question: 'What is the purpose of res.locals?',
        options: [
          'To store response-level variables',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q23',
        question: 'What is the purpose of res.cookie()?',
        options: [
          'To set a cookie',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q24',
        question: 'What is the purpose of res.clearCookie()?',
        options: [
          'To clear a cookie',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'medium'
      },
      {
        id: 'q25',
        question: 'What is the purpose of req.accepts()?',
        options: [
          'To check if the request accepts a specific content type',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q26',
        question: 'What is the purpose of res.format()?',
        options: [
          'To send different responses based on Accept header',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q27',
        question: 'What is the purpose of req.range()?',
        options: [
          'To parse Range header',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q28',
        question: 'What is the purpose of res.attachment()?',
        options: [
          'To set Content-Disposition header',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q29',
        question: 'What is the purpose of res.download()?',
        options: [
          'To prompt a file download',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q30',
        question: 'What is the purpose of res.end()?',
        options: [
          'To end the response process',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q31',
        question: 'What is the purpose of res.redirect()?',
        options: [
          'To redirect to a different URL',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q32',
        question: 'What is the purpose of res.status()?',
        options: [
          'To set the HTTP status code',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q33',
        question: 'What is the purpose of res.type()?',
        options: [
          'To set the Content-Type header',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q34',
        question: 'What is the purpose of res.vary()?',
        options: [
          'To set the Vary header',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      },
      {
        id: 'q35',
        question: 'What is the purpose of res.set()?',
        options: [
          'To set response headers',
          'To start the server',
          'To connect to a database',
          'To create a new route'
        ],
        correctAnswer: '0',
        category: 'express',
        difficulty: 'hard'
      }
    ]
  }
}; 