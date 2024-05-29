const data = [
    {
        project_name: "Smart Tamil Text Input Method For Android Systems",
        students: ["Adharsh Gurudev V", "Eraiyanbu P", "Harini V", "Harish R M", "Kanitha S A"],
        guides: ["Dr. Aravindan Chandrabose"],
        amount: 25000,
        duration: 12,
        start_year: 2023,
        category: "speech language & text processing"
    },
    {
        project_name: "Analysing Tremors and Gait Patterns For Early Detection of Motor Disorder Symptoms in Neurodegenerative Disease",
        students: ["Naila Nuhmam", "Priyamvadha Pradeep", "Sanjeevini R", "Vasundhara B"],
        guides: ["Dr. A. Shahina"],
        amount: 24000,
        duration: 24,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Autonomous Delivery Robot",
        students: ["Padmapriya C", "Madhukrishaa N K"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 30000,
        duration: 18,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "AI-based Career Counselling",
        students: ["Amitoj Singh", "Harsh Bansal", "Neha Sharma", "Mohammad Rayyan"],
        guides: ["Dr. K. S Gayathri"],
        amount: 10000,
        duration: 12,
        start_year: 2023,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Hate Speech Detection Using Machine Learning",
        students: ["Annu G", "Apoorva A", "Farha Afreen"],
        guides: ["Dr. N. Radha"],
        amount: 9000,
        duration: 8,
        start_year: 2023,
        category: "speech language & text processing"
    },
    {
        project_name: "AgriChain",
        students: ["Prithik N", "Purushothaman", "Vemula Muni Karthik", "Vijaymurugan N"],
        guides: ["Dr. Bhalaji Natarajan"],
        amount: 18000,
        duration: 24,
        start_year: 2023,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Drowsiness Detection and Alarm System Using Image Processing and Deep Learning",
        students: ["Dunya Syed Hassan", "Ritujaa B", "Tanushree Panneer Selvam", "Mohit Sandeep"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 15000,
        duration: 12,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "LIDAR-Based Road Surface Anomaly Detection: Speed Bumps and Potholes",
        students: ["Varsha Vijay", "Sindhujaa Illangovan", "Shreyaa S", "Preethi Prative"],
        guides: ["Dr. I. Joe Louis", "Paul"],
        amount: 21000,
        duration: 18,
        start_year: 2023,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Smart Mental Health Identifier",
        students: ["Ashwin Kumar S", "Sundaresh Karthic Ganesan"],
        guides: ["Dr. E. Suganya"],
        amount: 3000,
        duration: 9,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Train Your Brain For Autism Children",
        students: ["Atchaya R", "Priyadharshini R", "Keerthana N"],
        guides: ["Dr. E. Suganya"],
        amount: 5000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "GameElevate: Evaluating Badminton Player’s Performance Using Deep Reinforcement Learning",
        students: ["Singaram P L", "Thejesswini B", "Piriyadharshini A"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 13000,
        duration: 18,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "AI-Enhanced Road Safety App for Wet Conditions",
        students: ["Balasubramaniam H", "Nandana M", "Thomas Jones Kevin J F", "Athish Pranav H H"],
        guides: ["Dr. K. S. Gayathri"],
        amount: 12000,
        duration: 18,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Design and Construction of a Smart Shoe for the Visually Impaired",
        students: ["Neha Shanmitha", "Soundharya Y", "Tamil Mughilan"],
        guides: ["Dr. P. Vasuki"],
        amount: 18000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Smart Bin Using Deep Learning and IoT",
        students: ["Subhalakshmi Chellakumar", "Srinivasan R", "Jaya Yayadhi", "Induja M C"],
        guides: ["Dr. R. Swathika"],
        amount: 12000,
        duration: 8,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Distress Detection and Pavement crack classification using Deep Learning for Road Safety",
        students: ["Parthiban D", "Sriram J", "Srujana Srinivasan", "Thanuja A"],
        guides: ["Dr. R. Swathika"],
        amount: 16000,
        duration: 8,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Gamified Approach to Develop Values and Life Skills in Children",
        students: ["Abdullah Yassir A", "Ashuwin P", "Bharath P", "Lewin Jesudhas H"],
        guides: ["Dr. E. Suganya"],
        amount: 5000,
        duration: 12,
        start_year: 2023,
        category: "AI in healthcare"
    },
    {
        project_name: "Scholar Commute Aid",
        students: ["Hari Hara Sudhan R", "Kishore P", "Srinivas S", "Yuthika Anvitha S"],
        guides: ["Dr. R. Swathika"],
        amount: 14000,
        duration: 14,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    },
    {
        project_name: "Student Information Management System",
        students: ["Swetha K V", "Sudhiksha N B"],
        guides: ["Dr. S. Mohanavalli"],
        amount: 10000,
        duration: 18,
        start_year: 2023,
        category: "Micro & Nano electronics"
    },
    {
        project_name: "Identification of Unknown Person Entering into Hostel Using Facial Recognition",
        students: ["Shanjay Athithya G", "Vignesh M", "Saravanan B", "Saravanan K"],
        guides: ["Dr. R. Swathika"],
        amount: 19000,
        duration: 15,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Safety Enhancement Using Helmet & Number Plate Detection",
        students: ["Karunanudhi Ayyamperumal", "Kathir Kaman A", "Kaushik Ananth Kumar S"],
        guides: ["Dr. N. Sripriya"],
        amount: 18000,
        duration: 12,
        start_year: 2023,
        category: "Computer vision"
    },
    {
        project_name: "Gatepass Management System",
        students: ["Aravind J", "Dhanush A", "Henry J M"],
        guides: ["Dr. E. Suganya"],
        amount: 17000,
        duration: 18,
        start_year: 2023,
        category: "IOT, web services, cloud ontology"
    }
];

console.log(data.length);