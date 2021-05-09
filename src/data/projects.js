// TODO Add a couple lines about each project
const data = [
  {
    title: 'Facial Mask Detector',
    subtitle: 'Personal Project',
    link: 'https://github.com/Angeloschert/facial-mask-recognition',
    image: '/images/projects/facial_mask_detector.gif',
    date: '2020-09-24',
    desc:
      'The detector is implemented with convolutional neural networks and other image classification algorithms using Keras and Tensorflow. '
      + 'The app captures and processes camera images using OpenCV and classifies multiple human faces as being with masks or without. '
      + 'Besides, the trained images are adopted landmark extraction with non-maximal suppression, '
      + 'in order to pivot, and generate models from MTCNN and MobileNet.',
  },
  {
    title: 'Distribted Compiler Collection',
    subtitle: 'A group project from 2019 ETHUofT Hackathon',
    link: 'https://devpost.com/software/distributed-compiler-collection',
    image: '/images/projects/dcc.jpg',
    date: '2019-03-15',
    desc:
      'The compiler collection is built upon Python for backend and it achieves the distribution of '
      + 'file compilation process with IPFS and trackers. The app employs the blockchain fundamentals '
      + 'to create a merit-based tasking system, which is guaranteed and maintained by smart contracts'
      + 'written in Solidity, held in interaction with the Flask frontend via Web3.JS. '
      + 'It solves the issue of untrusted and/or unsecure compilers by decentralizing the compiltion tasks to multiple workers.',
  },
];

export default data;
