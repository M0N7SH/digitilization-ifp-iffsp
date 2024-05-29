const data = [
    {
        project_name: "SnapzAtt",
        students: ["Aadhithya B. Kailash", "S.A.J. Akarvin Raja Prajan", "J. Harrison Vijay", "S. Keertivaas"],
        guides: ["Dr. I. Joe Louis Paul"],
        amount: 30000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Thermal and PIR sensors for electricity conservation",
        students: ["P. Koushika (IT)", "Madhuri Shakya (EEE)", "J. Neythra (EEE)"],
        guides: ["Dr. P. Vasuki (IT)", "Dr. K. Usha (EEE)"],
        amount: 13000,
        duration: 11,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "SMART 'Attendance and OD' generation using - SIoT",
        students: ["R. Rajakumaran"],
        guides: ["Dr. S. Karthika", "Dr. N. Bhalaji"],
        amount: 20000,
        duration: 18,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Automatic diagnosis of Alzheimer's disease from MRI scans using machine learning algorithms",
        students: ["R. Sai Arthi"],
        guides: ["Dr. A. Shahina"],
        amount: 23000,
        duration: 24,
        start_year: 2018,
        category: "AI in healthcare"
    },
    {
        project_name: "Generating visual patterns on smoke using Faraday's standing wave principle and its analysis",
        students: ["R.K. Rema Devi"],
        guides: ["Dr. R. Srinivasan"],
        amount: 25000,
        duration: 18,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Block-chain based E-voting recording system",
        students: ["G. P. Kamalakannan"],
        guides: ["Dr. N. Bhalaji"],
        amount: 21000,
        duration: 18,
        start_year: 2018,
        category: "Network and security"
    },
    {
        project_name: "FOG computing - A raspberry PI based decentralized network",
        students: ["E. Shanmuga Skandh Vinayak"],
        guides: ["Dr. N. Bhalaji"],
        amount: 16000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Analysis of emotion in stuttered speech - An aid to speech pathologies",
        students: ["V. Aishwarya", "Akshara Kannan", "S. Nikita"],
        guides: ["Dr. N. Sripriya", "Dr. S. Poornima"],
        amount: 18000,
        duration: 12,
        start_year: 2018,
        category: "speech language & text processing"
    },
    {
        project_name: "Drowsiness and fatigue detection for bikers using helmet",
        students: ["P. Renvitha", "M. Oviyaa"],
        guides: ["Ms. R. Swathika", "Dr. S. Sasirekha", "Dr. I. Joe Louis Paul"],
        amount: 16000,
        duration: 12,
        start_year: 2018,
        category: "AI in healthcare"
    },
    {
        project_name: "iPARK - Innovation in parking",
        students: ["K. Sai Kaushik", "B. Sanjana", "Sanjana"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 18000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Applying AI to commercial documents for summarization and recommendations",
        students: ["Anam Saatvik Reddy", "Keshav Balachandar"],
        guides: ["Dr. A. Shahina"],
        amount: 25000,
        duration: 24,
        start_year: 2018,
        category: "AI in healthcare"
    },
    {
        project_name: "Design of lombard speech corpus to build a robust speaker recognition system using deep neural networks",
        students: ["V. Supriya", "R. Manaswini"],
        guides: ["Ms. S. Uma Maheswari"],
        amount: 20000,
        duration: 12,
        start_year: 2018,
        category: "speech language & text processing"
    },
    {
        project_name: "DOC - Yourself",
        students: ["S. Aravind", "S. Harini", "R. Ishwarya", "U. Balaji"],
        guides: ["Dr. S. Sasirekha", "Dr. I. Joe Louis Paul"],
        amount: 24000,
        duration: 10,
        start_year: 2018,
        category: "AI in healthcare"
    },
    {
        project_name: "Acknowledgement on bio-metric based attendance system for SSN faculty",
        students: ["Sri Hari Karthick", "Sushmita Rajtilak"],
        guides: ["Mr. V. Sivamurugan", "Ms. E.M. Malathy"],
        amount: 9600,
        duration: 10,
        start_year: 2018,
        category: "Network and security"
    },
    {
        project_name: "The SSN Institution Research Archive (A dynamic web application to maintain institutional research data)",
        students: ["S. Rithik Prasad", "A. Shaistha", "R. Soumya"],
        guides: ["Ms. S. Uma Maheswari"],
        amount: 15000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Intelligent accident detection and alert system for emergency medical assistance",
        students: ["Chaluvadi Jwala Sowmika", "Yallala Pranusha"],
        guides: ["Ms. J.K. Josephine Julina"],
        amount: 10000,
        duration: 13,
        start_year: 2018,
        category: "AI in healthcare"
    },
    {
        project_name: "Smart Crop",
        students: ["K. Sowmya", "S. Srinidhi", "S. Rupaa Shri", "D.P. Sharavanee"],
        guides: ["Ms. R. Swathika"],
        amount: 10000,
        duration: 12,
        start_year: 2018,
        category: "Computer vision"
    },
    {
        project_name: "SSN bus tracker",
        students: ["Shubhangkar G Jain", "Sanjana Sukumar", "Priyanka Atul Srivastava"],
        guides: ["Dr. S. Sasirekha", "Dr. I. Joe Louis Paul", "Ms. R. Swathika"],
        amount: 8000,
        duration: 5,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Smart action monitoring and alerting system for elder people",
        students: ["B.A. Akash", "M. Harini", "P. Mageshwaran"],
        guides: ["Dr. S. Sasirekha", "Dr. I. Joe Louis Paul"],
        amount: 15000,
        duration: 10,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "AWMS - Air water quality monitoring for SSN campus",
        students: ["S. Preethi", "L. Ramya"],
        guides: ["Dr. N. Bhalaji"],
        amount: 15000,
        duration: 18,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Smart wearable for child tracking and monitoring",
        students: ["S. Aishwarya", "R. Mythreyi", "V. Niranjana Devi"],
        guides: ["Dr. S. Chithra"],
        amount: 12000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Pen scanner",
        students: ["K. Sujith", "Pagadala Sreenivas"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 16000,
        duration: 12,
        start_year: 2018,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Design of compact chargeable and storage device",
        students: ["P.G. Abinaya", "S. Avinash", "S. Naveen"],
        guides: ["Ms. J.K. Josephine Julina"],
        amount: 3500,
        duration: 5,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Drowsiness detection and alert system for car accident prevention",
        students: ["R.B. Jananie", "A. Anto Silviya"],
        guides: ["Mr. A. Sandana Karuppan", "Ms. N. Radha"],
        amount: 7500,
        duration: 7,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Automatic gate opening system with rational authorization technique",
        students: ["J.S.N. Spandana", "G. Subasri"],
        guides: ["Dr. P. Vasuki"],
        amount: 15000,
        duration: 12,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Silent speech recognition using alternative sensors",
        students: ["P. Vijayalakshmi", "M. Priyadharshini", "R. Mageswari"],
        guides: ["Ms. N. Radha"],
        amount: 13000,
        duration: 12,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Smart safety device for women",
        students: ["S.G. Sowmya", "S. Sowmithri", "N. Shalumeena", "B. Raksha Yavanika"],
        guides: ["Ms. T. Shanmughapriya"],
        amount: 4000,
        duration: 7,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Monitoring and obstacle detection for road safety",
        students: ["D.L. Meghna Iyer", "M. Nivedha", "B. Mrudula"],
        guides: ["Dr. S. Poornima", "Dr. N. Sripriya"],
        amount: 4000,
        duration: 15,
        start_year: 2018,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "People Xploit",
        students: ["V. Arjun Anand", "A.K. Buvanasri", "R. Meenakshi"],
        guides: ["Dr. S. Karthika"],
        amount: 25000,
        duration: 24,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Identification of prosopis juliflora from drone captured images",
        students: ["R. Aishwarya Vaikundam", "S. Harshini", "R. Jothika"],
        guides: ["Dr. R. Srinivasan", "Dr. T. Sree Sharmila"],
        amount: 30000,
        duration: 18,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "M-Shield: Android finder with remote controls",
        students: ["A. Indira Priyadarshini", "Jajula Abhaya Chetna"],
        guides: ["Dr. S. Karthika"],
        amount: 24000,
        duration: 24,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Enhanced battlefield training using virtual reality (VR) student team",
        students: ["T. Dhanwin", "R. Janani", "N. Meghna", "J. Sidhakar", "V. Viswesh Iyer"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 32000,
        duration: 12,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Reel or Real - Credibility checker for online news",
        students: ["Janice Marian Jockim", "K. Meghana"],
        guides: ["Dr. S. Karthika"],
        amount: 25000,
        duration: 24,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Smart surveillance system for theft detection in jewelry shops",
        students: ["Ch. Haindhavi", "M. Vyshnavi", "K. Bhuvana"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 9000,
        duration: 12,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Toxic gas detection and alert system for sewage",
        students: ["M. Gopi", "M.K. Nivetha", "K. Irfan Khan"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 10000,
        duration: 12,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "IoT based road accident tracking and multimedia alerting system",
        students: ["T. Aswini", "T. Dharagesh", "S. Divya"],
        guides: ["Dr. E. M. Malathy", "Mr. R. Vinobchander"],
        amount: 7000,
        duration: 8,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Ignition interlocked device for cars to prevent drunken driving",
        students: ["M. Badri Narayanan", "M. Jithesh Reddy", "V. Madhavan", "M. Amrith"],
        guides: ["Ms. R. Swathika", "Ms. N. Radha"],
        amount: 15000,
        duration: 12,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Kylindro-meter - LPG cylinder exhaustion predictor",
        students: ["K.S. Arun", "A. Arun Laxman", "S.A. Krithik Sharan", "P. Lakshanya"],
        guides: ["Dr. T. Sree Sharmila", "Dr. R. Srinivasan"],
        amount: 20000,
        duration: 18,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Wireless object finder",
        students: ["R. Aravind Angappan", "J. Bryan Ronnie", "A.H. Mohamed Jameel"],
        guides: ["Dr. N. Bhalaji"],
        amount: 12000,
        duration: 15,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Intelligent automatic traffic control system using IoT",
        students: ["A. Swathi", "Sruthi Ashok Kumar", "K. Raajalakshmi"],
        guides: ["Dr. S. Chithra"],
        amount: 8000,
        duration: 10,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Smart Mirror",
        students: ["V. Preetha", "P. Smithi"],
        guides: ["Ms. S. Poornima"],
        amount: 19000,
        duration: 18,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Speech enabled smart safety wearable device",
        students: ["G. Divyadharshini", "M. Deiva Kauvya"],
        guides: ["Ms. N. Radha", "Ms. R. Swathika", "Mr. A. Sandana Karuppan"],
        amount: 14000,
        duration: 12,
        start_year: 2019,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "The impact of Throat Microphone Lombard Speech on Automatic Speech Recognition System",
        students: ["V. Saagar Prasad", "B. Rakshana", "A. S. Bhuvaneswar", "B. Karthika"],
        guides: ["Dr. S. Uma Maheswari"],
        amount: 18000,
        duration: 18,
        start_year: 2020,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Development of Deformable Nano Photonic Crystal for application as active colour change based sensor and tunable reflectors",
        students: ["T. R. Harsha", "Sricharan Sundarbabu", "S. Nithin"],
        guides: ["Dr. Prita Nair"],
        amount: 30000,
        duration: 24,
        start_year: 2020,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "The impact of Visual Lombard Speech on Automatic Speech Recognition System",
        students: ["S. Navaneethakrishnan", "K.Krishnaraj", "B. Harikrishna"],
        guides: ["Dr. S. Uma Maheswari"],
        amount: 24000,
        duration: 18,
        start_year: 2020,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Number Plate Recognition System",
        students: ["S. Sanjay Ram", "Akshaj Varma Penmetcha"],
        guides: ["Dr. T. Sree Sharmila"],
        amount: 26000,
        duration: 12,
        start_year: 2020,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Human emotion recognition",
        students: ["S. Abirami", "S. Elakkiya", "T. S. Pooja", "S. Reethika"],
        guides: ["Dr. T. Sree Sharmila", "Dr. J. Sofia Jennifer"],
        amount: 22000,
        duration: 12,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Cymatics analysis of basic sounds of Tamil and Sanskrit",
        students: ["P. S. Shreya", "H. S. J. Sahana"],
        guides: ["Dr. R. Srinivasan"],
        amount: 24000,
        duration: 12,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Virtualized tongue drum",
        students: ["Vijay Sankar Narayanan"],
        guides: ["Dr. R. Srinivasan"],
        amount: 24000,
        duration: 6,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Brain speech recognition",
        students: ["B.S. Anirudh", "Bhavesh Narayanan", "Dasari Bhumika", "S. Dinesh", "S. Booshan"],
        guides: ["Dr. A. Shahina"],
        amount: 24000,
        duration: 20,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Image understanding and caption generation for visually impaired",
        students: ["N. Shruthi", "Thota Geethika Sree", "K. Vasuundhara", "B. Sanjoosree"],
        guides: ["Dr. T. Sree Sharmila"],
        amount: 15000,
        duration: 12,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Classification of groundnut seeds",
        students: ["M. Iswarya", "R. Keerthana", "M. Santhosh", "R. Vishali"],
        guides: ["Dr. V. Thanikachalam"],
        amount: 14000,
        duration: 12,
        start_year: 2022,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Digital monitor for hostel on unauthorized entry",
        students: ["B. Jamuna", "S. Preetha", "S. Mohamed Riyaz", "P. Shalini"],
        guides: ["Dr. P. Vasuki"],
        amount: 14000,
        duration: 7,
        start_year: 2022,
        category: "Network and security"
      },
      {
        project_name: "Impact of various musical instruments on brain using machine learning",
        students: ["R. Sneha", "G. D. Lingesh", "C. Subhalakshmi", "H. Varsha", "J.G. Premkanna"],
        guides: ["Dr. K. Kabilan"],
        amount: 24000,
        duration: 18,
        start_year: 2022,
        category: "AI in healthcare"
      },
      {
        project_name: "An IoT based baby monitoring and smart cradle system",
        students: ["Gunanicaa Arun", "Mayuri Balajee"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 19000,
        duration: 18,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Face mask detection with audio alert",
        students: ["G. Manisha", "A. Supriya Abirami", "D. Debika Piriya"],
        guides: ["Dr. T. Shanmugapriya"],
        amount: 10000,
        duration: 9,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Parkinson's disease diagnosis through image processing",
        students: ["Koushika Padmanaban", "Vandhana Vishnuraj", "Pavan Kumar Malasani Sannapaneni Kundan Sai Chowdary", "Harshithaa Murali"],
        guides: ["Dr. R. Swathika"],
        amount: 7000,
        duration: 18,
        start_year: 2022,
        category: "AI in healthcare"
      },
      {
        project_name: "Mental wellness prediction of online learners",
        students: ["R. Nusaiba Afsheen", "P. Likhith Venkat", "S. Supriya", "Krithika Dharanikota"],
        guides: ["Dr. S. Mohanavalli"],
        amount: 17000,
        duration: 18,
        start_year: 2022,
        category: "speech language & text processing"
      },
      {
        project_name: "Connected domination integrity in graphs",
        students: ["G. Harisaran", "G. Shiva"],
        guides: ["Dr. R. Sundareswaran", "Dr. M. Shanmugapriya"],
        amount: 7000,
        duration: 12,
        start_year: 2022,
        category: "Micro & Nano electronics"
      },
      {
        project_name: "3D visualizer for realistic classroom demonstration using augmented reality",
        students: ["K. Sruti", "R.M. Dhivya Lakshmi", "M. Hema"],
        guides: ["Dr. N. Sripriya", "Dr. S. Poornima"],
        amount: 28000,
        duration: 12,
        start_year: 2022,
        category: "Computer vision"
      },
      {
        project_name: "Smart access to academic research laboratory by object recognition models in internet things",
        students: ["Sobika Sree Ramesh", "Swetha Subramanian", "Sravanthi Murugesan"],
        guides: ["Dr. E.M. Malathy"],
        amount: 8000,
        duration: 9,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Facial recognition system and spoofing detection with voice controlled automatic door opening for visually impaired people with Alexa",
        students: ["S. Kavya", "R. Divya Darshni", "R. Gayathri", "B.Pavithra", "D. Pooja", "D. Pavithra"],
        guides: ["Dr. I. Joe Louis Paul", "Dr. S. Sasirekha"],
        amount: 17000,
        duration: 12,
        start_year: 2022,
        category: "Computer vision"
      },
      {
        project_name: "Periodontal disease prediction - a deep learning approach",
        students: ["Aadhithya B. Kailash", "S. Keertivaas", "A. Anni Priscilla", "P. Dharsini", "Kayanat"],
        guides: ["Dr. R. Swathika"],
        amount: 8000,
        duration: 12,
        start_year: 2022,
        category: "AI in healthcare"
      },
      {
        project_name: "A.V.I (Assistant for Visually Impaired)",
        students: ["S. N. Namshika", "M.S. Keerthi Priya", "Maadhava Muralidharan", "R. Balasubramaniam"],
        guides: ["Dr. N. Sripriya", "Dr. S. Poornima"],
        amount: 20000,
        duration: 18,
        start_year: 2022,
        category: "speech language & text processing"
      },
      {
        project_name: "Contactless smart attendance system",
        students: ["A. Mona Abishek", "S. Manikandan"],
        guides: ["Dr. K. Kabilan"],
        amount: 14000,
        duration: 18,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Web scrapping and web app development implementing real-time stock checker",
        students: ["J. Deepak", "Aadhithya K Praveen", "H. Abdurrahman", "Lalsudhesh"],
        guides: ["Dr. V. Sivamurugan", "Dr. E.M. Malathy"],
        amount: 4500,
        duration: 9,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Object classification through vocal assistance for visually impaired",
        students: ["B.Sasmitha", "S.Merudhula", "Nithish"],
        guides: ["Dr.S. Chitra"],
        amount: 6500,
        duration: 12,
        start_year: 2022,
        category: "speech language & text processing"
      },
      {
        project_name: "Effective college bus management using GPS",
        students: ["V.R. Vishnu Siddharth", "N.Subramanian", "K.S. Vishal"],
        guides: ["Dr. Ashwinth Janarthanan"],
        amount: 9000,
        duration: 24,
        start_year: 2022,
        category: "Network and security"
      },
      {
        project_name: "Automated queuing system for efficient food management",
        students: ["Vishal Prakash", "V. Rahul Shravan", "Sreeram"],
        guides: ["Dr. Ashwinth Janarthanan"],
        amount: 19000,
        duration: 19.2,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      },
      {
        project_name: "Product shipping automation in retail shops using image processing",
        students: ["Mithul Krishna", "S. Rohit Ram"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 15000,
        duration: 12,
        start_year: 2022,
        category: "Computer vision"
      },
      {
        project_name: "PUPIL - Automated system for recording and editing lectures",
        students: ["B. Sabarish Sankaran", "Adithya Muthukumar", "B. Neilalohithan"],
        guides: ["Dr. Ashwinth Janarthanan"],
        amount: 24000,
        duration: 24,
        start_year: 2022,
        category: "IOT, web services, cloud ontology"
      }
]

console.log(data.length);