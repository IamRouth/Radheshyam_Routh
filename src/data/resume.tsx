import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Radheshyam Routh",
  initials: "RR",
  url: "https://dillion.io",
  location: "West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Ballabhpur,+West+Bengal+721156/@22.4401349,87.5544699,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02acf70e455695:0x549a3f2a6d520284!8m2!3d22.4397866!4d87.5550361!16s%2Fg%2F12hlhq522?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
  description:
    "An M.Sc. Big Data Analytics (Data Science) Student",
  summary:
    "Passionate about exploring the fields of Machine Learning, Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Time Series Analysis, Finance, Agentic AI, and Computer Vision. Always eager to learn, apply new concepts, and take on meaningful challenges in data-driven domains. ",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "C",
    "R",
    "Pytorch",
    "OpenCV",
    "Scikit-Learn",
    "Seaborn",
    "Neo4j",
    "Hadoop",
    "PySpark",
    "Ray",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Orcale Database",
    "MySQL Database",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "radheshyamrouth001@gmail.com",
    tel: "+91839208XXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/IamRouth",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/radheshyam-routh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/radheshyam.routh.980",
        icon: Icons.facebook,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:radheshyamrouth001@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Indian Institute of Engineering Science and Technology, Shibpur (IIEST)",
      href: "https://www.iiests.ac.in/",
      badges: [],
      location: "Onsite",
      title: "Summer Research Intern",
      logoUrl: "/IIEST_Shibpur.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
      "Project Title:- 'Few-shot latent space clustering for class-specific image generation'  Advisor:-  [Dr. Ruchira Naskar](https://sites.google.com/site/ruchiranaskar/), Associate Professor, Department of Information Technology.",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      href: "https://rkmvu.ac.in/",
      degree: "M.Sc. in Big Data Analytics (Data Science)",
      logoUrl: "/rkm_logo.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Ramakrishna Mission Vidyamandira",
      href: "https://vidyamandira.ac.in/",
      degree: "B.Sc. in Mathematics Hons.",
      logoUrl: "/rkm_logo.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Marhtala Satyeswar Institution",
      href: "",
      degree: "10+2 | PCMB",
      logoUrl: "/msi.jpg",
      start: "2019",
      end: "2021",
    },
    {
      school: "Panchgeria High School",
      href: "",
      degree: "10",
      logoUrl: "/phs.jpg",
      start: "2013",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Visual Question Answering (VQA)",
      href: "",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "Used CLIP ViT-B/32 to extract joint image-question features for a real-world, accessibility-focused VQA dataset. Trained various MLP architectures with dropout to handle noisy data and long-tail answer distributions.",
      technologies: [
        "ViT",
        "MLP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IamRouth/Visual-Question-Answering-VQA-on-Vizwiz-dataset",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/VQA.mp4.gif",
      // video:
        // "https://drXvprluxAXhAive.google.com/file/d/1MsvYpVxcr-jLbA_WMEWNu8JLmh_s0lB2/view?usp=sharing",
      video: "",
    },
    {
      title: "Video Summarization",
      href: "",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "Used GoogleNet Inception V3 to extract visual features from TVSum videos for frame-level importance prediction. Trained BiLSTM models on full and downsampled frames to generate summaries using 0/1 Knapsack under a 15\% length constraint.",
      technologies: [
        "GoogleNet",
        "Inception V3",
        "BiLSTM",
        "OpenCV",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/IamRouth/Frame-Based-Supervised-Video-Summarization",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vd_summary.gif",
      video: "",
    },
    {
      title: "Data Inferencing Using Ray",
      href: "",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "Used Ray to parallelize inference on the IMDb dataset across a cluster using DistilBERT for sentiment classification. Each Ray worker loads the model, processes a batch of texts, and returns predictions, enabling efficient distributed inference.",
      technologies: [
        "Ray",
        "DistilBERT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IamRouth/Movie-Review-Classification-by-Data-Inferencing-Using-Ray",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ray.gif",
      video: "",
    },
    {
      title: "Medical Image Classification",
      href: "",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "Implemented binary and multiclass classification using Softmax Regression, SVM, Decision Trees, and Ensemble Methods. Analyzed model performance using accuracy, precision, recall, F1-score, and ROC curves.",
      technologies: [
        "ML",
        "Classification",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IamRouth/Classification-Algorithms-on-OrganCMNIST",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/classifi.gif",
      video:"",
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Diabetes Prediction",
      href: "",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Explored Linear, Polynomial, Ridge, Lasso, Elastic Net, and SGD Regression. Applied Gradient Descent methods, Normal Equation, and SVD for optimization.",
      technologies: [
        "ML",
        "Regression",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/IamRouth/Machine_learning_Regression_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/regr.gif",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "GATE",
      dates: "2025",
      location: "",
      description:
        "Qualified GATE, 2025 in Data Science & Artificial Intelligence (DA)",
      image:
        "/gate.png",
      // win: "1st Place Winner",
      links: [
        {
          title: "GATE 2025",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gate2025.iitr.ac.in/",
        },
      ],
    },
    {
      title: "Top 2% Scorer",
      dates: "Nov 2024",
      location: "",
      description:
        "Joy of Computing Using Python Course offered by IIT Ropar ",
      image:
        "nptel.png",
      // win: "1st Place Winner",
      links: [
        {
          title: "NPTEL",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nptel.ac.in/",
        },
      ],
    },
    {
      title: "First Class 4th Rank in Graduation",
      dates: "2024",
      location: "",
      description:
        "",
      image:
        "/rkm_logo.png",
      // win: "1st Place Winner",
      links: [
        {
          title: "RKMV",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://vidyamandira.ac.in/",
        },
      ],
    },
    {
      title: "INSPIRE Scholarship",
      dates: "2021 - Ongoing",
      location: "",
      description:
        "Selected under Scholarship for Higher Education (SHE) section.",
      image:
        "/dst-logo.jpg",
      links: [
        {
          title: "Department of Science & Technology (DST), Government of India",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://online-inspire.gov.in/",
        },
      ],
    },
    {
      title: "Ray & Martin Scholarship",
      dates: "Jan 2020",
      location: "",
      description:
        "Awarded for 2019 WBBSE result ",
      image:
        "ram.png",
      // win: "1st Place Winner",
      links: [
        {
          title: "Ray & Martin",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.rayandmartin.in/",
        },
      ],
    },
    {
      title: "NMMSE Scholaraship",
      dates: "2017-2021",
      location: "",
      description:
        "Awarded for qualifying the NMMS Exam",
      image:
        "dst-logo.jpg",
      // win: "1st Place Winner",
      links: [
        {
          title: "Ministry of Education, Government of India",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "",
        },
      ],
    },

    
    
   
  ],
  // achievements = [
  // {
  //   title: "Kaggle Bronze Medal",
  //   dates: "July 2024",
  //   description: "Awarded a bronze medal in the Titanic machine learning competition.",
  //   image: "rkm_logo.png",
  // },
  // {
  //   title: "AWS Certified Cloud Practitioner",
  //   dates: "June 2023",
  //   description: "Successfully cleared AWS Cloud Practitioner certification exam.",
  //   image: "rkm_logo.png",
  // },
// ],


} as const;
