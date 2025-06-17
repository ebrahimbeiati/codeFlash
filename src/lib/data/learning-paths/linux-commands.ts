import { LearningPath } from '../types';

export const linuxCommands: LearningPath = {
  id: 'linux-commands',
  title: 'Linux Commands',
  description: 'Learn essential Linux commands from basics to advanced',
  level: 'beginner',
  category: 'system',
  createdAt: new Date(),
  updatedAt: new Date(),
  sets: [
    {
      id: 'linux-beginner',
      title: 'Linux Beginner',
      description: 'Basic Linux commands and file operations',
      category: 'system',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'linux-b-1',
          front: 'What is the ls command?',
          back: 'The ls command lists directory contents, showing files and directories in the current directory.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-2',
          front: 'What is the cd command?',
          back: 'The cd command changes the current directory. Use cd .. to go up one level, cd ~ to go home.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-3',
          front: 'What is the pwd command?',
          back: 'The pwd (Print Working Directory) command displays the current directory path.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-4',
          front: 'What is the mkdir command?',
          back: 'The mkdir command creates a new directory. Use mkdir -p to create parent directories if needed.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-5',
          front: 'What is the rm command?',
          back: 'The rm command removes files. Use rm -r for directories, rm -f to force removal without confirmation.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-6',
          front: 'What is the cp command?',
          back: 'The cp command copies files and directories. Use cp -r to copy directories recursively.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-7',
          front: 'What is the mv command?',
          back: 'The mv command moves or renames files and directories.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-8',
          front: 'What is the touch command?',
          back: 'The touch command creates an empty file or updates the timestamp of an existing file.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-9',
          front: 'What is the cat command?',
          back: 'The cat command displays file contents. It can also concatenate multiple files.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-10',
          front: 'What is the less command?',
          back: 'The less command displays file contents one page at a time, allowing scrolling and searching.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-11',
          front: 'What is the head command?',
          back: 'The head command displays the first few lines of a file. Use -n to specify number of lines.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-12',
          front: 'What is the tail command?',
          back: 'The tail command displays the last few lines of a file. Use -f to follow file updates in real-time.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-13',
          front: 'What is the grep command?',
          back: 'The grep command searches for patterns in files. Use -i for case-insensitive search, -r for recursive search.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-14',
          front: 'What is the find command?',
          back: 'The find command searches for files in a directory hierarchy based on various criteria.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-15',
          front: 'What is the chmod command?',
          back: 'The chmod command changes file permissions. Use numbers (755) or letters (u+x) to set permissions.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-16',
          front: 'What is the chown command?',
          back: 'The chown command changes file owner and group. Use chown user:group file to change both.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-b-17',
          front: 'What is the man command?',
          back: 'The man command displays the manual pages for commands, providing detailed documentation.',
          category: 'system',
          difficulty: 'easy',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'linux-intermediate',
      title: 'Linux Intermediate',
      description: 'Intermediate Linux commands and system operations',
      category: 'system',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'linux-i-1',
          front: 'What is the ps command?',
          back: 'The ps command displays running processes. Use ps aux for detailed process information.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-2',
          front: 'What is the top command?',
          back: 'The top command displays real-time system information, including process and resource usage.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-3',
          front: 'What is the kill command?',
          back: 'The kill command terminates processes. Use kill -9 for forceful termination.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-4',
          front: 'What is the df command?',
          back: 'The df command displays disk space usage. Use df -h for human-readable format.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-5',
          front: 'What is the du command?',
          back: 'The du command estimates file space usage. Use du -h for human-readable format, du -s for summary.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-6',
          front: 'What is the tar command?',
          back: 'The tar command creates and extracts archive files. Use tar -czf to create, tar -xzf to extract.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-7',
          front: 'What is the gzip command?',
          back: 'The gzip command compresses files. Use gzip -d to decompress.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-8',
          front: 'What is the ssh command?',
          back: 'The ssh command provides secure remote login. Use ssh user@host to connect.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-9',
          front: 'What is the scp command?',
          back: 'The scp command securely copies files between hosts. Use scp file user@host:path to copy.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-10',
          front: 'What is the rsync command?',
          back: 'The rsync command synchronizes files and directories. Use rsync -av for verbose archive mode.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-11',
          front: 'What is the crontab command?',
          back: 'The crontab command manages scheduled tasks. Use crontab -e to edit, crontab -l to list.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-12',
          front: 'What is the systemctl command?',
          back: 'The systemctl command manages systemd services. Use systemctl start/stop/restart service.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-13',
          front: 'What is the journalctl command?',
          back: 'The journalctl command displays systemd journal logs. Use journalctl -f to follow logs.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-14',
          front: 'What is the netstat command?',
          back: 'The netstat command displays network connections. Use netstat -tuln for listening ports.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-15',
          front: 'What is the iptables command?',
          back: 'The iptables command configures firewall rules. Use iptables -L to list rules.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-16',
          front: 'What is the mount command?',
          back: 'The mount command attaches filesystems. Use mount -a to mount all filesystems in /etc/fstab.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-i-17',
          front: 'What is the umount command?',
          back: 'The umount command detaches filesystems. Use umount -f for force unmount.',
          category: 'system',
          difficulty: 'medium',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    },
    {
      id: 'linux-advanced',
      title: 'Linux Advanced',
      description: 'Advanced Linux commands and system administration',
      category: 'system',
      createdAt: new Date(),
      updatedAt: new Date(),
      cards: [
        {
          id: 'linux-a-1',
          front: 'What is the strace command?',
          back: 'The strace command traces system calls and signals. Use strace -p pid to trace a process.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-2',
          front: 'What is the lsof command?',
          back: 'The lsof command lists open files. Use lsof -i to show network connections.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-3',
          front: 'What is the tcpdump command?',
          back: 'The tcpdump command captures network packets. Use tcpdump -i interface to capture on specific interface.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-4',
          front: 'What is the dd command?',
          back: 'The dd command converts and copies files. Use dd if=input of=output bs=blocksize for disk operations.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-5',
          front: 'What is the fdisk command?',
          back: 'The fdisk command manipulates disk partition tables. Use fdisk -l to list partitions.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-6',
          front: 'What is the lvm command?',
          back: 'The lvm command manages Logical Volume Manager. Use pvcreate, vgcreate, lvcreate for volume management.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-7',
          front: 'What is the iostat command?',
          back: 'The iostat command reports CPU and I/O statistics. Use iostat -x for extended statistics.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-8',
          front: 'What is the vmstat command?',
          back: 'The vmstat command reports virtual memory statistics. Use vmstat 1 for real-time updates.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-9',
          front: 'What is the sar command?',
          back: 'The sar command collects and reports system activity. Use sar -u for CPU statistics.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-10',
          front: 'What is the nmap command?',
          back: 'The nmap command scans networks. Use nmap -sV for service version detection.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-11',
          front: 'What is the htop command?',
          back: 'The htop command is an interactive process viewer. Use F6 to sort, F3 to search.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-12',
          front: 'What is the nc command?',
          back: 'The nc (netcat) command is a networking utility. Use nc -l port to listen, nc host port to connect.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-13',
          front: 'What is the screen command?',
          back: 'The screen command provides terminal multiplexing. Use screen -S name to create, screen -r to attach.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-14',
          front: 'What is the tmux command?',
          back: 'The tmux command is a terminal multiplexer. Use tmux new -s name to create, tmux attach to attach.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-15',
          front: 'What is the awk command?',
          back: 'The awk command is a text processing tool. Use awk \'{print $1}\' to print first field.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        },
        {
          id: 'linux-a-16',
          front: 'What is the sed command?',
          back: 'The sed command is a stream editor. Use sed \'s/old/new/g\' to replace text.',
          category: 'system',
          difficulty: 'hard',
          reviewCount: 0,
          correctCount: 0
        }
      ]
    }
  ],
  quiz: {
    id: 'linux-quiz',
    title: 'Linux Commands Quiz',
    description: 'Test your knowledge of Linux commands.',
    category: 'system',
    timeLimit: 30,
    passingScore: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
    questions: [
      {
        id: 'q1',
        question: 'What command is used to list directory contents?',
        options: [
          'dir',
          'ls',
          'list',
          'show'
        ],
        correctAnswer: 'ls',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'What command is used to change directories?',
        options: [
          'move',
          'cd',
          'change',
          'goto'
        ],
        correctAnswer: 'cd',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        question: 'What command is used to create a new directory?',
        options: [
          'newdir',
          'mkdir',
          'createdir',
          'makedir'
        ],
        correctAnswer: 'mkdir',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q4',
        question: 'What command is used to remove a file?',
        options: [
          'del',
          'rm',
          'remove',
          'delete'
        ],
        correctAnswer: 'rm',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q5',
        question: 'What command is used to copy files?',
        options: [
          'copy',
          'cp',
          'duplicate',
          'clone'
        ],
        correctAnswer: 'cp',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q6',
        question: 'What command is used to move files?',
        options: [
          'move',
          'mv',
          'transfer',
          'shift'
        ],
        correctAnswer: 'mv',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q7',
        question: 'What command is used to display file contents?',
        options: [
          'show',
          'cat',
          'display',
          'view'
        ],
        correctAnswer: 'cat',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q8',
        question: 'What command is used to search for files?',
        options: [
          'search',
          'find',
          'locate',
          'where'
        ],
        correctAnswer: 'find',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q9',
        question: 'What command is used to display system information?',
        options: [
          'info',
          'uname',
          'system',
          'about'
        ],
        correctAnswer: 'uname',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q10',
        question: 'What command is used to display disk usage?',
        options: [
          'disk',
          'df',
          'space',
          'usage'
        ],
        correctAnswer: 'df',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q11',
        question: 'What command is used to display memory usage?',
        options: [
          'memory',
          'free',
          'mem',
          'ram'
        ],
        correctAnswer: 'free',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q12',
        question: 'What command is used to display process information?',
        options: [
          'process',
          'ps',
          'proc',
          'task'
        ],
        correctAnswer: 'ps',
        category: 'system',
        difficulty: 'easy'
      },
      {
        id: 'q13',
        question: 'What command is used to search within files?',
        options: [
          'search',
          'grep',
          'find',
          'locate'
        ],
        correctAnswer: 'grep',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q14',
        question: 'What command is used to compress files?',
        options: [
          'compress',
          'gzip',
          'zip',
          'pack'
        ],
        correctAnswer: 'gzip',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q15',
        question: 'What command is used to decompress files?',
        options: [
          'decompress',
          'gunzip',
          'unzip',
          'unpack'
        ],
        correctAnswer: 'gunzip',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q16',
        question: 'What command is used to change file permissions?',
        options: [
          'perm',
          'chmod',
          'access',
          'rights'
        ],
        correctAnswer: 'chmod',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q17',
        question: 'What command is used to change file ownership?',
        options: [
          'own',
          'chown',
          'owner',
          'possess'
        ],
        correctAnswer: 'chown',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q18',
        question: 'What command is used to display network connections?',
        options: [
          'net',
          'netstat',
          'network',
          'conn'
        ],
        correctAnswer: 'netstat',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q19',
        question: 'What command is used to test network connectivity?',
        options: [
          'test',
          'ping',
          'check',
          'verify'
        ],
        correctAnswer: 'ping',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q20',
        question: 'What command is used to display routing table?',
        options: [
          'route',
          'routing',
          'path',
          'way'
        ],
        correctAnswer: 'route',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q21',
        question: 'What command is used to display DNS information?',
        options: [
          'dns',
          'dig',
          'domain',
          'name'
        ],
        correctAnswer: 'dig',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q22',
        question: 'What command is used to display system logs?',
        options: [
          'log',
          'journalctl',
          'logs',
          'history'
        ],
        correctAnswer: 'journalctl',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q23',
        question: 'What command is used to display system services?',
        options: [
          'service',
          'systemctl',
          'services',
          'daemon'
        ],
        correctAnswer: 'systemctl',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q24',
        question: 'What command is used to display system users?',
        options: [
          'user',
          'who',
          'users',
          'people'
        ],
        correctAnswer: 'who',
        category: 'system',
        difficulty: 'medium'
      },
      {
        id: 'q25',
        question: 'What command is used to monitor system resources?',
        options: [
          'monitor',
          'top',
          'watch',
          'observe'
        ],
        correctAnswer: 'top',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q26',
        question: 'What command is used to analyze disk usage?',
        options: [
          'analyze',
          'du',
          'disk',
          'space'
        ],
        correctAnswer: 'du',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q27',
        question: 'What command is used to display system load?',
        options: [
          'load',
          'uptime',
          'system',
          'cpu'
        ],
        correctAnswer: 'uptime',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q28',
        question: 'What command is used to display system interrupts?',
        options: [
          'interrupt',
          'vmstat',
          'int',
          'irq'
        ],
        correctAnswer: 'vmstat',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q29',
        question: 'What command is used to display system memory map?',
        options: [
          'map',
          'pmap',
          'memory',
          'ram'
        ],
        correctAnswer: 'pmap',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q30',
        question: 'What command is used to display system call traces?',
        options: [
          'trace',
          'strace',
          'call',
          'sys'
        ],
        correctAnswer: 'strace',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q31',
        question: 'What command is used to display system signals?',
        options: [
          'signal',
          'kill',
          'sig',
          'interrupt'
        ],
        correctAnswer: 'kill',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q32',
        question: 'What command is used to display system timers?',
        options: [
          'timer',
          'crontab',
          'time',
          'schedule'
        ],
        correctAnswer: 'crontab',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q33',
        question: 'What command is used to display system environment?',
        options: [
          'env',
          'environment',
          'var',
          'set'
        ],
        correctAnswer: 'env',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q34',
        question: 'What command is used to display system aliases?',
        options: [
          'alias',
          'aliases',
          'shortcut',
          'name'
        ],
        correctAnswer: 'alias',
        category: 'system',
        difficulty: 'hard'
      },
      {
        id: 'q35',
        question: 'What command is used to display system history?',
        options: [
          'history',
          'hist',
          'past',
          'log'
        ],
        correctAnswer: 'history',
        category: 'system',
        difficulty: 'hard'
      }
    ]
  }
}; 