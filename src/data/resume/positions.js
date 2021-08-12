const positions = [
  {
    company: 'IBM',
    position: 'Software Engineer',
    daterange: 'May 2021 - Present',
    points: [
      'Developed the alerting system using Prometheus to monitor the cluster health and visualize the system spectrums of worker nodes on Grafana',
      'Automated the procedures using Ansible playbooks to instantiate the subscription for Grafana operator and service accounts, and to create the dashboard UI with unique routings',
      'Contributed to the deployment pipeline for worker node VM provisioning under from template VMs, their configurations on network/hardwares in vSphere Center and root password change in batches',
      'Responsible for pipeline environment health checks and automated cleanups in multiple namespaces including goss checks, docker pruning and orphaned k8s volumes cleanup'
    ],
  },
  {
    company: 'Ericsson',
    position: '5G/LTE Software Development Engineer',
    daterange: 'May 2020 - April 2021',
    points: [
      'Worked in the Baseband Tool Development Team under the Agile SCRUM process.',
      'Developed the NR Metrics Dashboard that feeds the performance backlogs from NR components and reports the key token stats(commits info, SHA, source files and line numbers etc) from source codes in the NR DBC codebase',
      'Established MongoDB database to process incoming device logs and implemented the server-side REST APIs with Express that supports CRUD operations to handle multi-level filtering on the query',
      'Built the backend business infrastructure in Python to fetch source codes, integrate the token information into json files, compress the output json to form the code archive and generate final meta for the frontend page',
      'Contributed to the frontend that obtains token data from Jenkins job outputs, as well as implemented the dynamic graphing system and monitoring overview page to trigger alerts for detected under-performed LTE devices',
    ],
  },
];

export default positions;
