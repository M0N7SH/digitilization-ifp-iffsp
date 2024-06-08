const data = [
    {
        project_name: "Discriminative learning for material recognition",
        students: ["P. Prithvi Kiran", "Nagavel Rajasekaran", "R. Hemnat Kumar"],
        guides: ["Dr. T. Sree Sharmila", "Dr. R. Srinivasan"],
        amount: 25000,
        duration: 12,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Pulse based diagnostic system for siddha and varma treatment",
        students: ["R. Sujay", "R. Sridhar", "V. Vijay", "S. Nandhana"],
        guides: ["Dr. T. Sree Sharmila"],
        amount: 25000,
        duration: 18,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Swoosh – Sports swing analyser",
        students: ["P. Nikilesh Balaji", "S. Santhosh Kumar", "T.Y. Sarvesh Babu"],
        guides: ["Dr. Ashwinth Janarthanan"],
        amount: 25000,
        duration: 24,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Identification of medicinal plants using image analysis and deep neural networks",
        students: ["R. Narmatha", "M. Padhma Priya", "Paechiammal Gandhi", "S. Thiruvedhitha"],
        guides: ["Dr. T. Sree Sharmila"],
        amount: 14000,
        duration: 18,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Anomaly detection in an intelligent environment using big data analytics",
        students: ["S. Selcia", "N. Arvind Kumaar", "A. Iniyavai Kooral"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 8000,
        duration: 12,
        start_year: 2023,
        category: "Network and security"
    },
    {
        project_name: "Development of parametric analyser for health monitoring of distribution transformer",
        students: ["G. Pranav", "K. Varsha", "Hirthik Prassad", "Ashuthosh"],
        guides: ["Dr. S. Sasirekha", "Dr. I. Joe Louis Paul", "Dr. R. Rengaraj"],
        amount: 25000,
        duration: 10,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Vehicle number plate recognition and maintenance system",
        students: ["P. Deepthi", "U. Bhavwana", "Y. Neeti Priya", "K. Harshini"],
        guides: ["Dr. S. Sasirekha", "Dr. I. Joe Louis Paul", "Mr. R. Balathirupathi"],
        amount: 19000,
        duration: 8,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "DietChef.AI",
        students: ["Anush Rajagopalan", "R. Keerthana", "M.R. Sahithi", "Vineet Kumar Gupta"],
        guides: ["Dr. K.S. Gayathri"],
        amount: 8000,
        duration: 18,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Intra community book exchanging system",
        students: ["B. Gokulakrishnan", "T. P. Karthik Raja", "A. Madeshwaran"],
        guides: ["Dr. V. Arulkumar"],
        amount: 6500,
        duration: 9,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Automated protective and preventive measures of leaf diseases",
        students: ["Pavithra Manikandan", "Meghana Srikanth"],
        guides: ["Dr. S. Chithra"],
        amount: 19000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Real-time image captioning for CCTV grabs to improve home security",
        students: ["Vaishnavi Anand", "S. Subhiksha", "D. Debika Piriya"],
        guides: ["Dr. N. Sripriya", "Dr. S. Mohanavalli"],
        amount: 19000,
        duration: 18,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Voice assist for speech impaired people using ML and IoT",
        students: ["Jovitha Sahayaraj", "K. Kaviyapriya"],
        guides: ["Dr. P. Vasuki"],
        amount: 23000,
        duration: 12,
        start_year: 2023,
        category: "speech language & text processing"
    },
    {
        project_name: "Pothole detection using deep learning",
        students: ["Vineeth Roshan Premanand"],
        guides: ["Dr. J. Sofia Jennifer"],
        amount: 11000,
        duration: 24,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Waterline robot using reinforcement path planning algorithm",
        students: ["Chandravel Saravanan", "Deepak Chandar", "Sneha Kumarajothi", "Rupadarshini"],
        guides: ["Dr. K.S. Gayathri"],
        amount: 30000,
        duration: 12,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "E-Nose for the detection of spoilage in food",
        students: ["S. Shwetha", "Samyuktaa Sivakumar", "Pranav Moorthi", "T. Sadakopa Ramakrishnan"],
        guides: ["Dr. K.S. Gayathri"],
        amount: 13000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Sign language to text conversation",
        students: ["Aditya Jyosyula", "R. Goutham"],
        guides: ["Dr. G. Soranavalli"],
        amount: 6000,
        duration: 12,
        start_year: 2023,
        category: "speech language & text processing"
    },
    {
        project_name: "Character recognition using wearable device",
        students: ["A. Ankitha Reddy", "Ann Maria Thomas", "S. Janeshvar", "Aswath Karthik"],
        guides: ["Dr. R. Amutha"],
        amount: 16000,
        duration: 12,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Image segmentation using interval valued bipolar technology",
        students: ["Pranesh Kumar"],
        guides: ["Dr. J. Sofia Jennifer"],
        amount: 4500,
        duration: 18,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Hygiene alert system for public restrooms",
        students: ["R. Nithyasri"],
        guides: ["Dr. S. Chithra"],
        amount: 16000,
        duration: 15,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Pesticide recommender system for farmers",
        students: ["H. Harishini", "Komal Yuvaraj", "V.J. Kavyasri"],
        guides: ["Dr. K.S. Gayathri"],
        amount: 15000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Neutrosophic cubic sets and their applications in pattern recognition",
        students: ["C.V. Malavika"],
        guides: ["Dr. C. Kalaivani"],
        amount: 6000,
        duration: 18,
        start_year: 2023,
        category: "Computer vision"
    }
];

console.log(data.length);