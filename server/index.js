const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const student = require('./models/project.js');
const faculty = require('./models/faculty.js');
const User = require("./models/user"); // Import the User model

const md5 = require('md5')
const crypto = require('crypto')
const fs = require('fs')
const busboy = require('busboy')

mongoose.connect('mongodb+srv://mathavaroopan:Mathavaroopan@cluster0.e3ob10i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

// const insertProjects = async () => {
//   try {
//     let projects = [];
//     for(let d of data){
//       let project = {};
//       project.project_name = d.project_name;
//       project.Students = d.students;
//       project.guides = d.guides;
//       project.amount = d.amount;
//       project.duration = d.duration;
//       project.Start_date = d.start_year;
//       project.category = d.category;
//       project.progress = [
//         { category1: 0, category2: 0, category3: 0}
//       ];
//       project.patents = [];
//       project.research_papers = [];
//       project.ppts = [];
//       projects.push(project);
//     }
//     await faculty.insertMany(projects);
//     console.log("Data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   }
// };

// // insertProjects();

app.post('/api/projects', async (req, res) => {
    try {

      let { project_name, Students, guides, amount, duration, Start_date, category } = req.body;
      progress = [{ category1: 0, category2: 0, category3: 0}];
      patents = [];
      research_papers = [];
      ppts = [];
      Start_date = Start_date;
      const newProject = new student({
        project_name,
        Students,
        guides,
        amount,
        duration,
        Start_date,
        category,
        progress,
        patents,
        research_papers,
        ppts
      });

      await newProject.save();
      
      // Respond with a success message
      res.status(201).json({ message: 'Project created successfully' });
      console.log(newProject);
      console.log("Insert successful")
    } catch (error) {
      // If an error occurs, respond with an error message
      console.error('Error saving project:', error);
      res.status(500).json({ error: 'Failed to save project' });
    }
});

app.post('/api/projects/faculty', async (req, res) => {
  try {

    let { project_name, guides, amount, duration, Start_date, category } = req.body;
    progress = [{ category1: 0, category2: 0, category3: 0}];
    patents = [];
    research_papers = [];
    ppts = [];
    const newProject = new faculty({
      project_name,
      guides,
      amount,
      duration,
      Start_date,
      category,
      progress,
      patents,
      research_papers,
      ppts
    });

    await newProject.save();
    
    // Respond with a success message
    res.status(201).json({ message: 'Project created successfully' });
    console.log(newProject);
    console.log("Insert successful")
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Error saving project:', error);
    res.status(500).json({ error: 'Failed to save project' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
      // Fetch all projects from MongoDB
      const projects = await student.find();
      res.json(projects); // Return the projects as JSON response
  } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Failed to fetch projects' }); // Respond with an error message
  }
});

app.get('/api/faculty', async (req, res) => {
  try {
      // Fetch all projects from MongoDB
      const projects = await faculty.find();
      res.json(projects); // Return the projects as JSON response
  } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Failed to fetch projects' }); // Respond with an error message
  }
});

app.get('/api/projectNames', async (req, res) => {
  try {
      // Fetch all project names from MongoDB
      const projects = await student.find({}, 'project_name');
      const projectNames = projects.map(project => project.project_name);
      res.json(projectNames); // Return project names as JSON response
  } catch (error) {
      console.error('Error fetching project names:', error);
      res.status(500).json({ error: 'Failed to fetch project names' }); // Respond with an error message
  }
});


// Route to get project by name
app.get('/api/projects/:projectName', async (req, res) => {
  try {
      const projectName = req.params.projectName;
      // Fetch project details from MongoDB based on project name
      const project = await student.findOne({ project_name: projectName });
      res.json(project); // Return project details as JSON response
  } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ error: 'Failed to fetch project' }); // Respond with an error message
  }
});

app.post('/api/progress', async (req, res) => {
  try {
      console.log(req.body);
      const { projectId, direction, resource_utilization, satisfaction, comments } = req.body;
      console.log(direction);
      console.log(satisfaction);
      const project = await student.findById(projectId);
      console.log(project);
      if (!project) {
          return res.status(404).json({ error: 'Project not found' });
      }
      project.progress.push({ direction, resource_utilization, satisfaction, comments });
      await project.save();
      res.status(201).json({ message: 'Progress inserted successfully', project });
  } catch (error) {
      console.error('Error inserting progress:', error);
      res.status(500).json({ error: 'Failed to insert progress' });
  }
});

app.post('/api/progress-faculty', async (req, res) => {
  try {
      console.log(req.body);
      const { projectId, direction, resource_utilization, satisfaction, comments } = req.body;
      console.log(direction);
      console.log(satisfaction);
      const project = await faculty.findById(projectId);
      console.log(project);
      if (!project) {
          return res.status(404).json({ error: 'Project not found' });
      }
      project.progress.push({ direction, resource_utilization, satisfaction, comments });
      await project.save();
      res.status(201).json({ message: 'Progress inserted successfully', project });
  } catch (error) {
      console.error('Error inserting progress:', error);
      res.status(500).json({ error: 'Failed to insert progress' });
  }
});

// Define a new route for updating guide and amount
app.put('/api/projects/:projectId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const { guide, amount } = req.body;

    // Find the project by ID
    const project = await student.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Update guide and amount
    if (guide) project.guides = guide;
    if (amount) project.amount = amount;

    // Save the updated project document
    await project.save();

    // Respond with the updated project
    res.json(project);
  } catch (error) {
    console.error('Error updating guide and amount:', error);
    res.status(500).json({ error: 'Failed to update guide and amount' });
  }
});


app.post('/generate-password', async (req, res) => {
  try {
      const { username, password } = req.body;
      let user = await User.findOne({ username }); // Check if the user already exists
      let temp = await User.find();
      console.log(temp);
      console.log(user.username);
      if (user) {
          user.password = password;
      } else {
          console.log("inserted")
          user = new User({ username, password });
      }
      await user.save(); // Save the user to the database
      console.log(username, password);
      res.status(201).json({ username, generatedPassword: password }); // Respond with the username and generated password
  } catch (error) {
      console.error("Error generating password:", error);
      res.status(500).send("Internal Server Error");
  }
});


app.post('/file-upload', async (req, res) => {
  try {
      const bb = busboy({ headers: req.headers });

      const tmpFilename = md5(crypto.randomUUID());
      const filePath = './uploads/' + tmpFilename;

      const fileData = {}

      bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
          fileData.originalName = filename.filename

          file.pipe(fs.createWriteStream(filePath));


          file.on('close', async () => {
              // const username = req.user;

              // const user = await User.findOne({ username: username }).exec();

              fileData.path = 'uploads/' + tmpFilename
              // fileData.userId = user.id

              const fileStat = fs.statSync('./uploads/' + tmpFilename);
              fileData.size = fileStat.size

              // const file = await File.create(fileData)

              // res.json({ file, finalFilename: file.id });
              res.json({ fileStat });
          });

      });

      bb.on('error', (err) => {
          console.error('Error parsing file:', err);
          res.status(400).json({ error: 'Error parsing file' });
      });

      req.pipe(bb);
  } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Bad Request' });
  }
})

app.get('/file/:fileName',async(req,res)=>{
  console.log(req.params.fileName)

  const filename = req.params.fileName

  res.download('uploads/' +filename,'test.txt')

})

const PORT = 3001

app.listen(PORT, async () => {
  console.log(`Server connected @ ${PORT}...`);
});
