export const htmlCssBasics =  {
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