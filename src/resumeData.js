import Applause from "Images/Certificates/On_The_Spot_Award.pdf";
import BTA from "Images/Certificates/Best_Team_Award.pdf";
import CTBPA from "Images/Certificates/CTS_Star_Performer_Award.pdf";
import SLGAH from "Images/Certificates/Learning_Achievement_Award.pdf";
import SLGAI from "Images/Certificates/ILP_Kudos_Award.pdf";
import Cert_MPYC from "Images/Certificates/Microsoft DAT208x Certificate _ edX.pdf";
import Cert_VPYC from "Images/Certificates/58191_Python_certificate.pdf";
import Cert_AWS from "Images/Certificates/AWS Certified Cloud Practitioner certificate.pdf";
import Cert_Snowflake from "Images/Certificates/Snowflake_snowprocore.pdf";
import Cert_GCPPDE from "Images/Certificates/gcp_pde.pdf";

export const name = "Nithin Murarisetty";
export const currDesignation = "Systems Engineer";
export const mailId = "nithinmurarisetty@gmail.com";
export const mobileNum = "+918985602035";
export const location = "Hyderabad, INDIA";
export const linkedIn = {
  displayName: name,
  url: "https://www.linkedin.com/in/nithin-murari-68a479147/"};
export const WorkExperiences = [
  {
    designation: "Associate",
    company: "Cognizant Technology Solutions",
    startDate: "01/2022",
    endDate: "",
    location: "Hyderabad",
    rolesandResp: [
      "Designed and managed ETL workflows using AWS MWAA Airflow, optimizing data flow and ensuring efficient processing for media streaming data from multiple ad sources (SFTP, MSSQL on-prem, and Snowflake). Achieved a 60% reduction in execution time and a 30% cost reduction compared to on-prem Airflow environments.",
      "Implemented scalable, serverless data processing solutions using AWS Glue, enhancing data transformation and extraction efficiency for high-volume datasets. Achieved a 25% improvement in efficiency and reliability while reducing costs by eliminating the need for server-based data processing.",
      "Utilized Snowflake as the primary cloud-based, scalable database solution for managing and querying large-scale data, ensuring seamless integration and high performance in data analytics processes. Leveraged Snowflake's reliability and resilience to datacenter failures to enhance overall system robustness.",
      "Leveraged AWS S3 for robust and secure data storage, ensuring high availability and durability for large datasets. Implemented best practices for data management, including versioning, encryption, and lifecycle policies, to optimize storage costs and enhance data security.",
      "Developed and deployed AWS Lambda functions to automate routine tasks, streamlining operations and reducing manual intervention. Achieved a reduction of 8 man-hours per week, enhancing overall efficiency and productivity.",
      "Collaborated with clients to deliver tailored data engineering solutions that met specific requirements, enhancing overall data strategy and execution. Achieved 95% precision in data accuracy, significantly improving client satisfaction and decision-making processes.",
    ],
  },
  {
    designation: "Systems Engineer",
    company: "TATA Consultancy Services",
    startDate: "09/2018",
    endDate: "01/2022",
    location: "Chennai",
    rolesandResp: [
      "Demonstrated exceptional proficiency in Big Data technologies through rigorous training and certification. Successfully implemented data warehousing solutions, optimizing data storage, retrieval, and analysis for enhanced business intelligence.",
      "Successfully delivered a Discount Management System for the finance team using Hadoop, expertly leveraging historic data for improved financial outcomes. Initiated and developed the project from scratch, demonstrating strong project technical skills.",
      "Performed DevOps tasks by meticulously providing production support to ensure continuous stability and efficiency of critical applications. Developed automation scripts in Linux using shell scripting to verify inbound data feed accuracy and implemented timely email notifications for delayed data feeds, enhancing operational reliability.",
      "Skillfully developed multiple automation tools for generating financial reports using Matplotlib, significantly streamlining reporting processes. Reduced redundant manual work, saving 5 hours per week and enhancing overall efficiency.",
      "Engineered multiple TrafficScripts with precision to strategically maintain geo-redundancy, ensuring high availability and robust disaster recovery ( diverting traffic to under utilized cluster by 30%) . Utilized Pulse Secure Stingray Manager to detect traffic intrusion from GSLB, adding a layer of protection from DDoS attacks not captured by the Arbor Threat mitigation System.",
      "Implemented automation scripts using Oracle WebLogic to create environments and perform finance data analysis for discounts on daily feeds, streamlining processes and enhancing data accuracy.",
      "Consistently delivered POCs on content management and Hadoop ecosystems, effectively showcasing innovation and technical expertise.",
      "Earned widespread recognition and multiple awards from both the organization and clients for expertly managing and delivering multiple projects simultaneously.",
    ],
  },

];
export const Skills = [
  "Python",
  "Airflow",
  "Snowflake",
  "AWS",
  "GIT",
  "SQL",
  "PySpark",
  "Linux",
  "Hadoop",
  "Hive",
];

export const AchievementsList = [
  {
    name: "Best Performer Award",
    yearOfRelease: "2023",
    certSummary:
      "Awarded recognition of my outstanding performance and exceptional contribution on AWS and Snowflake Technologies.",
      path: CTBPA,
  },
  {
    name: "TCS Digital Cadre",
    yearOfRelease: "2021",
    certSummary:
      "Promoted to the Digital cadre for my exceptional performance in TCS Internal Digital Assessment.",
  },
  {
    name: "Best Team Award",
    yearOfRelease: "2019,2020",
    certSummary:
      "Received this Award as an Appreciation from Management for the Exceptional Performance of Team over the Project Transistion",
    path: BTA,
  },
  {
    name: "On the Spot Award",
    yearOfRelease: "2019",
    certSummary:
      "Received this Award for Contribution on the Multiple Migrations Performed successfully",
    path: Applause,
  },
  {
    name: "Star Performer Award",
    yearOfRelease: "2018",
    certSummary:
      "Received this Award for my exceptional performance in TCS Global Hackathon 2018",
    path: SLGAH,
  },
  {
    name: "ILP Kudos Award",
    yearOfRelease: "2018",
    certSummary:
      "Received this Award for my exceptional performance during training period",
    path: SLGAI,
  },
];
export const edDtls = [
  {
    degreeName: "Bachelor's of Technology",
    instituteName: "SASTRA Unversity",
    location: "Thanjavur",
    fromDate: "07/2014",
    isGPA: true,
    score: 7.1,
    toDate: "05/2018",
    specialisation: "Electronics and Communications",
  },
];
export const certificationsList = [
  {
    name: "Python Developer",
    completionDate: "02/2021",
    instituteName: "V Skills",
    path: Cert_VPYC,
  },
  {
    name: "Python For Data Science",
    completionDate: "02/2020",
    instituteName: "Microsoft",
    path: Cert_MPYC,
  },
  {
    name: "Google Cloud Professional Data Engineer",
    completionDate: "09/2021",
    instituteName: "GCP",
    path: Cert_GCPPDE,
  },
  {
    name: "SnowPro Core Certification",
    completionDate: "01/2024",
    instituteName: "Snowflake",
    path: Cert_Snowflake,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    completionDate: "08/2024",
    instituteName: "AWS",
    path: Cert_AWS,
  },
];
export const toolsUsed = [
  "VS Code",
  "Jupyter Notebook",
  "PyCharm",
  "GitHub For Desktop",
  "SQL Developer",
  "SSMS",
  "Visual Studio",
  "GIT Bash",
  "Eclipse",
  "Azure Pipeline",
  "WinSCP",
  "Jira",
  "FileZilla",
  "Postman",
  "Tableau",
  "Power BI",
];
export const hobbies = ["Cricket", "Badminton", "Cooking", "Travelling", "Swimming"];