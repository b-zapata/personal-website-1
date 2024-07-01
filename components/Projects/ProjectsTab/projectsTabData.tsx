import { ProjectTab } from "@/types/projectTab";

const projectsTabData: ProjectTab[] = [
  {
    id: "tabOne",
    projects: [
      {
        title: "INTEX II - Online Lego Store",
        description: `This was the culminating project of the junior core of the BYU Information Systems program, part of the Integrated Experience (INTEX) series. As part of a team of four students that I had been working with throughout the semester on various projects, we developed an online retail store for a fictional client, Aurora Brickwell, who had been selling Lego products on social media but wanted a more organized platform. Some of the main features we included were: \n
		⚡ Cart and checkout functionalities \n
		⚡ Product recommendations based on machine learning algorithms \n
		⚡ Admin capabilities for adding, removing and editing users and products \n
		⚡ Two-factor authentication \n
		⚡ Protection from common cyberattacks (such as cross-site scripting and SQL injection) \n
	  We received the project prompt on Monday morning, worked 60+ hours during the week following the Scrum framework, and presented our work to faculty and industry professionals on Friday afternoon.`,
        codingStacks: [
          {
            title: "HTML",
            iconLight: "",
            iconDark: "images/icon/stacks/html-icon.png",
          },
          {
            title: "CSS",
            iconLight: "",
            iconDark: "images/icon/stacks/css-icon.png",
          },
          {
            title: "Python",
            iconLight: "",
            iconDark: "images/icon/stacks/python-icon.png",
          },
          {
            title: "JavaScript",
            iconLight: "",
            iconDark: "images/icon/stacks/js-icon.png",
          },
          {
            title: "C Sharp",
            iconLight: "",
            iconDark: "images/icon/stacks/c-sharp-icon.png",
          },
          {
            title: "SQL",
            iconLight: "",
            iconDark: "images/icon/stacks/sql-icon.png",
          },
          {
            title: "Microsoft Azure",
            iconLight: "",
            iconDark: "images/icon/stacks/azure-icon.png",
          },
          {
            title: "Figma",
            iconLight: "",
            iconDark: "images/icon/stacks/figma-2-icon.png",
          },
          {
            title: "Lucidchart",
            iconLight: "",
            iconDark: "images/icon/stacks/lucidchart-2-icon.png",
          },
        ],
        link: "",
      },
      {
        title: "INTEX I - Social Media Usage and Mental Health Dashboard",
        description: `This was the culminating project of the first semester of the BYU Information Systems junior core. As part of a team of four students that I had been working with throughout the semester on various projects, we developed a professional dashboard for the Provo City Council (fictional client) that showed the relationship between mental health and social media usage. Some of the main features we included were: \n
		⚡ Form submission functionality for new people being surveyed \n
		⚡ Admin functionalities for adding, editing, and removing data \n
		⚡ Real-time update of dashboards as data was added, removed, or edited \n
		⚡ Basic log in functionalities \n
		⚡ Professional data visualizations following best industry practices`,
        codingStacks: [
          {
            title: "HTML",
            iconLight: "",
            iconDark: "images/icon/stacks/html-icon.png",
          },
          {
            title: "CSS",
            iconLight: "",
            iconDark: "images/icon/stacks/css-icon.png",
          },
          {
            title: "Python",
            iconLight: "",
            iconDark: "images/icon/stacks/python-icon.png",
          },
          {
            title: "JavaScript",
            iconLight: "",
            iconDark: "images/icon/stacks/js-icon.png",
          },
          {
            title: "NodeJS",
            iconLight: "",
            iconDark: "images/icon/stacks/nodejs-icon.png",
          },
          {
            title: "SQL",
            iconLight: "",
            iconDark: "images/icon/stacks/sql-icon.png",
          },
          {
            title: "Amazon Web Services",
            iconLight: "images/icon/stacks/aws-light-icon.png",
            iconDark: "images/icon/stacks/aws-dark-2-icon.png",
          },
          {
            title: "Lucidchart",
            iconLight: "",
            iconDark: "images/icon/stacks/lucidchart-2-icon.png",
          },
        ],
        link: "",
      },
      {
        title: "ToaPro",
        description: `Following the Nexus development framework, I worked in a team of 60 students of my cohort to create an app for professors to use to grade the INTEX series. Some of the main features implemented were: \n
		⚡ Project submission for student teams \n
		⚡ Grid view of submissions for teaching assistants and professors \n
		⚡ Grading functionality for graders, visible to students upon completion of the grading process
`,
        codingStacks: [
          {
            title: "HTML",
            iconLight: "",
            iconDark: "images/icon/stacks/html-icon.png",
          },
          {
            title: "CSS",
            iconLight: "",
            iconDark: "images/icon/stacks/css-icon.png",
          },
          {
            title: "C Sharp",
            iconLight: "",
            iconDark: "images/icon/stacks/c-sharp-icon.png",
          },
          {
            title: "SQL",
            iconLight: "",
            iconDark: "images/icon/stacks/sql-icon.png",
          },
          {
            title: "Figma",
            iconLight: "",
            iconDark: "images/icon/stacks/figma-2-icon.png",
          },
        ],
        link: "",
      },
    ],
  },
  {
    id: "tabTwo",
    projects: [
      {
        title: "NiteOut",
        description:
          "A mobile app that finds parties and other events nearby. Aimed at a college-aged audience, it drops pins on the map with the nearest relevant parties based on filters defined by the user. Users can create parties and look for others nearby.",
        codingStacks: [
          {
            title: "FlutterFlow",
            iconLight: "",
            iconDark: "images/icon/stacks/flutterflow-icon.png",
          },
          {
            title: "Flutter",
            iconLight: "",
            iconDark: "images/icon/stacks/flutter-icon.png",
          },
          {
            title: "Google Maps",
            iconLight: "",
            iconDark: "images/icon/stacks/google-maps-icon.png",
          },
          {
            title: "Firebase",
            iconLight: "",
            iconDark: "images/icon/stacks/firebase-icon.png",
          },
        ],
        link: "",
      },
      {
        title: "MABA/MAGO",
        description:
          "A made-to-order data tracking and visualization tool for the president of the Mexico Hermosillo Mission of The Church of Jesus-Christ of Latter-day Saints. Receives thousands of rows of input data from about 180 full-time missionaries on a daily basis, and then visualizes this data through dashboards, graphs, and highlighted statistics. These visualizations are then shared with over 500 local ecclesiastical leaders, who have read rights only to the data relevant to them.",
        codingStacks: [
          {
            title: "Google Apps Script",
            iconLight: "",
            iconDark: "images/icon/stacks/google-apps-script-icon.png",
          },
          {
            title: "Google Forms",
            iconLight: "",
            iconDark: "images/icon/stacks/google-forms-icon.png",
          },
          {
            title: "Google Sheets",
            iconLight: "",
            iconDark: "images/icon/stacks/google-sheets-icon.png",
          },
        ],
        link: "",
      },
      {
        title: "Portfolio Website",
        description:
          "This website! It showcases my work and what I do when I am not doing my favorite thing: coding.",
        codingStacks: [
          {
            title: "HTML",
            iconLight: "",
            iconDark: "images/icon/stacks/html-icon.png",
          },
          {
            title: "Tailwind CSS",
            iconLight: "",
            iconDark: "images/icon/stacks/tailwind-css-2-icon.png",
          },
          {
            title: "JavaScript",
            iconLight: "",
            iconDark: "images/icon/stacks/js-icon.png",
          },
          {
            title: "TypeScript",
            iconLight: "",
            iconDark: "images/icon/stacks/ts-icon.png",
          },
          {
            title: "React",
            iconLight: "",
            iconDark: "images/icon/stacks/react-icon.png",
          },
          {
            title: "NextJS",
            iconLight: "images/icon/stacks/nextjs-light-icon.png",
            iconDark: "images/icon/stacks/nextjs-dark-icon.png",
          },
        ],
        link: "",
      },
    ],
  },
  {
    id: "tabThree",
    projects: [
      {
        title: "Lazy Ironman Registration & Tracking",
        description:
          "Developed the Lazy Ironman Registration and Tracking system for the BYU Student Wellness department. This system processes registrations, handles payments, manages waivers, and securely stores personally identifiable information. Although it wasn't part of the original requirements, I recommended and built a tracking dashboard that allows registrants to log in and track their progress in real-time. I integrated the dashboard with the Strava API and implemented a login functionality for registrants.",
        codingStacks: [
          {
            title: "Mendix",
            iconLight: "",
            iconDark: "images/icon/stacks/mendix-icon.png",
          },
          {
            title: "Java",
            iconLight: "",
            iconDark: "images/icon/stacks/java-icon.png",
          },
          {
            title: "Strava",
            iconLight: "",
            iconDark: "images/icon/stacks/strava-icon.png",
          },
        ],
        link: "",
      },
      {
        title: "ACME Website",
        description:
          "Built from scratch using Brightspot, a no-code platform, I developed a professional-looking website for the BYU ACME program. I held several meetings with stakeholders, including the program founder and former chair of the BYU Math Department, Tyler Jarvis. I gathered all their requirements and incorporated feedback from other faculty members in the Math Department. Once published, the new website resulted in a 30% increase in traffic compared to the previous version.",
        codingStacks: [],
        link: "",
      },
      {
        title: "Math Department Website",
        description:
          "A coworker and I revamped the current BYU Math department website to give it a professional, BYU-themed look. We used the Brighstpot platform.",
        codingStacks: [],
        link: "",
      },
    ],
  },
];

export default projectsTabData;
