const positions = [
  {
    company: 'IBM',
    position: 'Software Engineer',
    daterange: 'May 2021 - Present',
    points: [
      'Waltson Health AI',
    ],
  },
  {
    company: 'Ericsson',
    position: '4G/5G Software Development Engineer',
    daterange: 'May 2020 - April 2021',
    points: [
      'Implemented the commit stats manipulation workflow that stores the commit and deployment status in Elasticsearch and visualizes the stats in Kibana',
      'Designed the MTD Counter Analyzer with Python which categorizes the MTD counters by domains, calculates rates and other stats',
      'Developed the NR DBC token report page that reports token information from the NR dev codebase including their locations, occurences and trends with commit details. The webpage is built with React, Node.js, HTML and CSS/SASS, and fetches token data from a Jenkins instance running the backend Python logics. Yaml config files are used to define the desired tokens and the search scope.',
      'Built the NR metrics dashboard with React that feeds the performance backlog from NR components and reports quantitaive stats, and established SQL log database to store incoming data and developed the server-side connection service with Express. The dashboard enables multi-level filtering on log query including component category, suite, and logging periods, and also tabularized the backlog stats and visualized each log type using amChart framework to show the value trends versus dates. It facilitates the signal analysis by 30% and greatly reduces the assessment workload.',
    ],
  },
];

export default positions;
