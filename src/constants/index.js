import commvault_logo from "../assets/commvault.png"
import accenture_logo from "../assets/accenture.png"
import ASU from "../assets/ASU.png" 
import elephant from "../assets/ElephantTree.png" 

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = 'Hey, I’m Rohith! A problem-solver at heart, I love building smart software, diving into data, and creating solutions that make an impact. Currently pursuing my Master’s in Computer Science at ASU, I’ve worked with companies like Commvault and Accenture on everything from AI-driven automation to large-scale cloud applications. When I’m not coding, I’m probably exploring new tech or optimizing something just for fun. ';
export const ABOUT_TEXT = [
  "I build. I solve. I innovate.",
  "From designing intuitive digital experiences to engineering intelligent, data-driven systems, I thrive at the intersection of technology and problem-solving. My journey in tech is fueled by curiosity, adaptability, and a passion for creating solutions that matter. I don't just write code—I craft experiences, streamline complex processes, and bring ideas to life with a blend of logic and creativity.",
  "With a background spanning software engineering, data science, and cloud technologies, I've tackled challenges ranging from AI-driven cybersecurity to enterprise-scale automation. But beyond the tech stack, what truly drives me is the pursuit of efficiency, impact, and innovation—whether optimizing workflows, uncovering hidden insights in data, or architecting systems that scale.",
  "I embrace challenges as opportunities to grow, collaborate, and push the boundaries of what's possible. Currently seeking opportunities in SDE, Data Science, and Salesforce Development, I'm always on the lookout for the next big challenge. Let's create, innovate, and build something extraordinary!",
];

export const EXPERIENCES = [
  {
    year: "September, 2024 - Present",
    role: "Student Research Assistant at the Dean's Office",
    company: "College of Health Solutions, ASU",
    logo: ASU,
    projects: [
      {
        title: "Comprehensive Resource Website using Airtable",
        bullets: [
          "Built an Airtable-based resource hub, designing structured tables, managing records, and automating updates with custom triggers.",
          "Migrated resources to production, created documentation, and streamlined workflows to improve accessibility and maintenance.",
        ],
      },
      {
        title: "Tableau Executive Dashboard",
        bullets: [
          "Developed a Tableau dashboard for the Dean to track key performance indicators (KPIs) such as grants, proposals, and expenditures.",
          "Optimized data visualization to improve decision-making and resource allocation for faculty and staff.",
        ],
      },
      {
        title: "Research Aid for Faculty",
        bullets: [
          "Assisted faculty in preparing proposals for Tier 3 research projects ($4M-$40M) by providing insights, SOPs, and funding strategies.",
          "Curated resources and best practices to enhance the quality and competitiveness of research grant applications.",
        ],
      }
      // {
      //   title: "AI-Driven Faculty Selection",
      //   bullets: [
      //     "Implemented AI-driven analysis to match faculty members to research projects, optimizing resource allocation and reducing hiring costs.",
      //     "Developed automation tools to streamline faculty selection, improving efficiency and project execution timelines.",
      //   ],
      // },
    ],
    technologies: ["D3.js", "Javascript", "Tableau", "Airtable"],
  },
  {
    year: "May, 2024 - August, 2024",
    role: " Intern - Data Science & Cloud Security - SaaS Team",
    company: "Commvault",
    logo: commvault_logo,
    description: "Developed an AI-driven anomaly detection system to safeguard 30K+ daily delete transactions, preventing unauthorized deletions and fortifying cybersecurity. Engineered a cloud-native security solution using Azure Machine Learning, Synapse Analytics, and Log Analytics Workspace, automating real-time threat detection. Implemented PCA-based anomaly detection, K-Means clustering, and ARIMA time series analysis, significantly improving risk mitigation. Optimized data aggregation and anomaly detection with Python, KQL, and T-SQL, cutting incident response times and streamlining security monitoring. This project transformed Commvault's cybersecurity framework, enabling automated, enterprise-scale threat detection and reinforcing data integrity",
    technologies: ["Azure Machine Learning Studio","Azure Synapse Analytics", "Azure Blob Storage", "Python", "KQL (Kusto Query Language)", "T-SQL"],
  },
  {
    year: "November, 2021 - July, 2023",
    role: "Senior Software Developer",
    logo: accenture_logo,
    company: "Accenture",
    description: "Led the transformative Salesforce implementation for Disney's Ad Sales business while at Accenture, architecting a state-of-the-art Sales Cloud platform that revolutionized ad sales tracking, deal creation, and revenue optimization across Disney's digital and linear platforms. Developed dynamic UI/UX solutions with Lightning, Apex, and SOQL, boosting advertiser engagement and driving a $17K per deal revenue increase. Orchestrated seamless integrations, optimized test coverage from 75% to 92%, and executed high-impact deployments using Copado, ANT, and Workbench, elevating Disney's ad sales ecosystem into a powerhouse of efficiency and scalability. ",
    technologies: ["Java/Apex", "Javascript", "SOAP APIs", "REST APIs", "LWC", "Aura Components", "HTML", "CSS", "SOQL", "SOSL" ],
  },
  {
    year: "November, 2020 - October, 2021",
    role: "Full Stack Developer",
    logo: accenture_logo,
    company: "Accenture",
    description: "Developed and deployed mission-critical functionalities in high-stakes production environments, ensuring seamless performance with rigorous testing and documentation. Led client demonstrations and feedback sessions, refining features to align with business needs and user expectations. Engineered sleek, high-performance Salesforce UI/UX solutions using Lightning Components and the Aura framework, optimizing user workflows and boosting engagement. Integrated SOAP web services with enterprise applications, enabling seamless data exchange, automation, and system interoperability across large-scale platforms. More than just writing code—I designed scalable, intuitive systems that streamlined operations, enhanced efficiency, and delivered business-driven impact.",
    technologies: ["Java/Apex", "Javascript", "SOAP APIs", "REST APIs", "LWC", "Aura Components", "HTML", "CSS", "SOQL", "SOSL" ],
  },
  {
    year: "June, 2019 - July, 2019",
    role: "Intern - Web Development",
    company: "Elephant Tree Technologies",
    logo: elephant,
    description: "Contributed to the development of dynamic web applications using JavaScript, React.js, and Node.js, building intuitive and responsive user experiences. Engineered and managed scalable databases, optimizing data storage and retrieval. Collaborated closely with product managers, ensuring feature prioritization aligned with business goals and user needs. This experience fueled my ability to adapt quickly, solve real-world problems, and deliver high-quality, production-ready applications in a fast-paced environment.",
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Node.js" ],
  },
];

export const CERTIFICATIONS = [
  
  {
    title: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    date: "July 19, 2021"
  },
  {
    title: "Salesforce Certified Advanced Admin",
    issuer: "Salesforce",
    date: "November 22, 2021"
  },
  {
    title: "Salesforce Certified Platform App Builder",
    issuer: "Salesforce",
    date: "September 22, 2021"
  },
  {
    title: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "January 6, 2022"
  },
  {
  title: "Salesforce Certified Platform Developer II",
  issuer: "Salesforce",
  date: "May 16, 2022",
  },
  {
  title: "Salesforce Certified JavaScript Developer I",
  issuer: "Salesforce",
  date: "November 9, 2022",
  },
  {
    title: "Copado Certified Fundamentals I",
    issuer: "Copado",
    date: "December 1, 2022"
  },
  {
  title: "Copado Certified Fundamentals II",
  issuer: "Copado",
  date: "May 24, 2023",
  },
  {
    title: "Advanced C++ Training",
    issuer: "IIT Bombay - Spoken Tutorial",
    date: "April 5, 2018"
  },
  {
    title: "C and Data Structures Training",
    issuer: "Intellipaat",
    date: "November 21, 2017"
  }
  
  
];
export const PROJECTS = [
  {
    title: "Calendar Management App",
    description:
      "Designed and developed a feature-rich desktop calendar application in Java following MVC architecture principles. The application allows users to create, update, delete, and search for events across monthly and weekly views. Custom-built controllers manage event dispatching, and the application supports notification reminders and dynamic view updates. Packaged as a standalone executable JAR, it features a user-friendly Swing interface and robust testing via JUnit to ensure high code reliability and maintainability.",
    technologies: ["Java", "MVC", "Swing", "JUnit", "Executable JAR"],
  },
  {
    title: "AWS Cloud Facial Recognition App",
    description:
      "Built a high-performance, auto-scaling facial recognition pipeline on AWS capable of analyzing thousands of video clips in under three minutes. Leveraged AWS Lambda for serverless processing, EC2 for compute elasticity, S3 for storage, and SQS for task decoupling. Employed a deep learning ResNet model for accurate face detection, integrated with a Lambda-triggered video extraction system. Implemented parallel processing via S3 event-driven triggers and used CloudWatch for performance monitoring. This solution demonstrates enterprise-grade cloud architecture and real-time computer vision capabilities.",
     github: "https://github.com/rohitdanti/Cloud-Face-Recognition",
      technologies: ["AWS Lambda", "S3", "EC2", "SQS", "ResNet", "CloudWatch", "Python"],
  },
  {
    title: "Richter's Predictor - Earthquake Damage Prediction",
    description:
      "Developed a predictive analytics solution to classify building damage from the 2015 Nepal Earthquake using machine learning. Processed a dataset with over 347,000 samples, engineered critical features, and normalized imbalanced labels. Evaluated and optimized models including Random Forest, XGBoost, KNN, and shallow Neural Networks. Achieved significant accuracy gains through ensembling, hyperparameter tuning, and 10-fold cross-validation. This project reflects practical use of ML for disaster response planning and risk management.",
    technologies: ["Python", "XGBoost", "Random Forest", "KNN", "Neural Networks", "Scikit-learn", "Pandas"],
     github: "https://github.com/rohitdanti/Richters-Predictor"
  },
  {
    title: "Arizona Nightlife Analysis using Yelp Dataset",
    description:
      "Architected a big data analytics pipeline to analyze nightlife businesses in Arizona using publicly available Yelp data. Leveraged Hadoop and PySpark to transform and clean terabyte-scale JSON records into Parquet files for optimized distributed querying. Parsed over 37,000 user profiles and 1 million+ reviews to extract behavioral patterns, customer preferences, and business engagement trends. Derived actionable insights using Spark SQL, enabling location-based strategy formulation for business owners and urban planners.",
    technologies: ["PySpark", "Hadoop", "Spark", "Parquet", "Yelp API", "Spark SQL"],
     github: "https://github.com/rohitdanti/Data-Processing-at-Scale-Arizona-Nightlife-Analysis",
  },
  {
    title: "AI-Driven Legal Risk Predictor",
    description:
      "Implemented a machine learning model to assess litigation risk by predicting the outcome category of legal cases based on historical court data. Cleaned and vectorized unstructured legal texts using TF-IDF and named entity recognition (NER). Built classification models with Logistic Regression and Random Forest, achieving over 85% accuracy on real-world datasets. Applied cross-validation, confusion matrix analysis, and feature importance plots to validate the system. This project highlights the application of AI in justice systems for legal forecasting and risk analysis.",
    technologies: ["Python", "NLP", "TF-IDF", "NER", "Scikit-learn", "Matplotlib", "Pandas"],
  },
  {
    title: "Performance Evaluation of HPC Applications in Containers vs. VMs",
    description:
      "Conducted an in-depth performance evaluation of Apache Cassandra in containerized (Docker) and virtualized (VMware) environments, publishing the results in Springer. Created Kubernetes clusters using Minikube and automated deployment pipelines for Cassandra nodes. Simulated real-world workloads using TLP-Stress and tracked key performance metrics (latency, throughput) with Metric Server. The study revealed critical trade-offs between isolation overhead and scalability in container-based HPC workflows and serves as a reference for cloud-native architecture decisions.",
    technologies: ["Docker", "VMware", "Kubernetes", "Apache Cassandra", "TLP-Stress", "Minikube", "Metric Server"],
    link: "https://www.springerprofessional.de/en/performance-evaluation-of-hpc-application-in-containerized-and-v/19917126",
  },
  {
  title: "Personal Portfolio Website",
  description:
    "Designed and developed a fully responsive personal portfolio website using React and Tailwind CSS to showcase academic background, industry experience, certifications, and projects. Implemented modular components including dynamic sections for hero content, experiences, projects, and contact. Integrated Framer Motion for interactive animations and conditional rendering for responsive design. Centralized data via a constants file for easy updates, and optimized the layout to ensure visual cohesion across dark-mode themes. Deployed via modern CI/CD workflows and structured for scalability.",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Vite"],
   github: "https://github.com/rohitdanti/react-portfolio",
}
];  

export const RECOMMENDATIONS = [
  {
  name: "Michael Moody",
  role: "Associate Director, Research Success",
  text: "I had the pleasure of working with and supervising Rohith Danti as a student worker, where he supported the Research Success Hub via data and website management. Rohith consistently demonstrated strong technical skills, the ability to take instruction and execute the vision of the Research Success Hub. Beyond his technical duties, Rohith played an integral role in building logic models that paired research faculty with students interested in research opportunities. He was also responsible for maintaining a college-wide resources repository and took initiative in developing a Tableau dashboard to track executive-level KPI metrics—contributions that had a significant impact on our operational efficiency. Most importantly, Rohith was expedient, responsive, respectful, courteous, and flexible. He quickly became a trusted and dependable member of the team, and I highly recommend him for any role that demands both technical acumen and professional integrity.",
  linkedin: "https://www.linkedin.com/in/michael-moody-144bab99/",
  },
  {
    name: "Karunakar Bojjireddy",
    role: "Director, Cloud Operations, Security and Governance, Commvault",
    text: "Rohith worked with me on the Commvault Cloud Operations team, contributing to a project in its early concept stage with dynamic requirements. He quickly adapted to new technologies and consistently delivered high-quality solutions. His expertise in Python, Azure, and modern data engineering practices, combined with his exceptional problem-solving skills, made him a valuable contributor. I highly recommend Rohit for his technical acumen and collaborative mindset.",
    linkedin: "https://www.linkedin.com/in/karunakar-bojjireddy-03b77a1/",
  },
  {
  name: "Richie Kovac",
  role: "Management Consulting Manager, Accenture",
  text: "Rohith played a pivotal role in delivering complex Salesforce solutions for a global media client. He consistently went beyond requirements—designing, building, and rigorously testing features like a custom 'Mass Upload' module used to process billions in advertising revenue. Rohith's leadership during cross-functional scrums and his ability to coach junior teammates stood out. He brings a rare blend of technical depth, delivery discipline, and collaborative spirit that any team would value.",
  linkedin: "https://www.linkedin.com/in/richie-kovac-94935888/",
},
{
  name: "Ketan Kulkarni",
  role: "Development Team Lead, Accenture",
  text: "Rohith is a fast learner with a strong ability to adapt to new technologies. During our time working together on Salesforce Implementation for Disney, he delivered complex solutions using Aura Components and Apex. His continuous pursuit of certifications reflects his dedication to growth. I appreciated his professionalism and contribution to challenging development requirements. Wishing him continued success in all his endeavors.",
  linkedin: "https://www.linkedin.com/in/ketan-kulkarni-113251209/",
},
{
  name: "Sejal Sharma",
  role: "Software Developer, Salesforce",
  text: "Rohith is a dependable team player who consistently took on critical responsibilities and actively supported team members in achieving shared goals. His role as a Full Stack Senior Analyst showcased both his technical proficiency and his leadership in problem-solving. I thoroughly enjoyed collaborating with Rohit and highly regard his ability to deliver under pressure.",
  linkedin: "https://www.linkedin.com/in/sejal-sharma-89617515b/",
  },
  
];


export const CONTACT = {
  address: "Arizona State University, Tempe, AZ", 
  email: "rdanti1@asu.edu",
  linkedin: "https://www.linkedin.com/in/rohith-danti",
  github: "https://www.github.com/rohitdanti"
};