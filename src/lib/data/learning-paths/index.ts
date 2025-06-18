import { LearningPath } from '@/types/learningPath';
import { introToDigital } from './intro-to-digital';
import { introToProgramming } from './intro-to-programming';
import { htmlCssBasics } from './html-css-basics';
import { javascriptFundamentals } from './javascript-fundamentals';
import { reactBasics } from './react-basics';
import { typescriptEssentials } from './typescript-essentials';
import { gitGithubBasics } from './git-github-basics';
import { nodejsBasics } from './nodejs-basics';
import { expressBasics } from './express-basics';
import { mongodbBasics } from './mongodb-basics';
import { sqlBasics } from './sql-basics';
import { linuxCommands } from './linux-commands';
import { algorithmsDataStructures } from './algorithms-data-structures';

export const learningPaths: LearningPath[] = [
  introToDigital,
  introToProgramming,
  htmlCssBasics,
  javascriptFundamentals,
  reactBasics,
  typescriptEssentials,
  gitGithubBasics,
  nodejsBasics,
  expressBasics,
  mongodbBasics,
  sqlBasics,
  linuxCommands,
  algorithmsDataStructures
]; 