const positionsProfessional = [
  {
    company: 'IBM',
    position: 'Software Engineer @ Cognos Analytics',
    daterange: 'September 2021 - Present',
    points: [
      'Working in agile framework on backend feature development for the modeling service (MOSER) in the Cognos Analytics (CA) Software using Java',
      'Augmented the MySQL database schema loading and metadata feeding across different microservices during the asynchronous tasking procedure',
      'Developed MOSER APIs to generate mappings for overlapping objects between data modules and progressively update the table import status in REST responses',
      'Upgraded components in Modelling UI for better performance in object relationship presentation and other client experience, using React, Babel, Grunt',
      'Translated Java source codes to ECMAScript 6 to be used in the MOSER client UI',
      'Wrote JUnit tests for APIs and built the project with Maven, monitored remote build status with Jenkins and service incidents with PagerDuty and IBM Cloud',
      'Transitioned CA monolithic release to DaaS microservices within Docker containers running on Kubernetes',
    ],
  },
  {
    company: 'IBM',
    position: 'Software Engineer @ Watson Health Imaging',
    daterange: 'May 2021 - August 2021',
    points: [
      'Developed the alerting system using Prometheus to monitor the cluster health and visualize the system spectrums of worker nodes on Grafana',
      'Automated the procedures using Ansible playbooks to instantiate the subscription for Grafana operator and service accounts, and to create the dashboard UI with unique routings',
      'Contributed to the deployment pipeline for worker node VM provisioning under from template VMs, their configurations on network/hardwares in vSphere Center and root password change in batches',
      'Developed the Pod Condition Monitor in Python and Golang that detects ill-conditioned pods and posts notifications to Slack using Slack api',
      'Responsible for pipeline environment health checks and automated cleanups over 200 namespaces including goss checks, docker pruning and orphaned k8s volumes cleanup',
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

export default positionsProfessional;
