const express= require('express')
const path= require('path')

const app= express()
require('dotenv').config()

app.set("view engine", "ejs");

const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath))


app.get("/", (req, res)=>{
    // res.send("Home Route")
    res.render('home')
})


app.get("/about", (req, res)=>{
    // res.send("Home Route")
    const data = ['ram']
    res.render('about', {data: data})
})


app.get('/getprofile', (req, res)=>{
    res.send({
        name: "Rakesh"
    })
})


const PORT= process.env.PORT || 8000


app.listen(PORT, ()=> console.log(`Server On : ${PORT}`))