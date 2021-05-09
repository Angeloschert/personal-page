// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Frameworks/Libraries', 'Javascript'],
  },
  {
    title: 'Web3.JS',
    competency: 3,
    category: ['Frameworks/Libraries', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Frameworks/Libraries', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frameworks/Libraries', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Frameworks/Libraries', 'Javascript'],
  },
  {
    title: 'SpringBoot Microservices',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Frameworks/Libraries', 'Python'],
  },
  {
    title: 'Stripe',
    competency: 2,
    category: ['Frameworks/Libraries'],
  },
  {
    title: 'Git/Gerrit',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jira',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kibana',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Openshift',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Solidity',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++/C',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Frameworks/Libraries', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
