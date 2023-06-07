const express = require('express')
const mongoose = require('mongoose')
const dotenv= require('dotenv').config()
const cors= require('cors')
const authController=require('./controllers/authController')
const blogController=require('./controllers/blogController'  )
const multer = require('multer')
//backend applicn initialisation
const app= express()



const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
};

connectToMongo();

//routes:

app.use('/images', express.static('public/images'))

//  mechanism by which a front-end client can make requests for resources to an external back-end server.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/auth', authController)
app.use('/blog', blogController)

// multer:Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})



//connect server
app.listen(process.env.PORT, ()=> console.log('Server has been started successfully '))