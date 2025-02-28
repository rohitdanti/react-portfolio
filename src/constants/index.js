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

export const CONTACT = {
  address: "Arizona State University, Tempe, AZ", 
  email: "rdanti1@asu.edu",
};