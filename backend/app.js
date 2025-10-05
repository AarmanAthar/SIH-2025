import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'

const app = express()
const PORT = 4052

app.use(cors())
app.use(express.json())

const db =[]

app.post('/tableData', (req,res)=>{
    const {data,time} = req.body
    db.push({ data, time })
    res.send('ok')
    console.log({
        data,
        time
    })
})

app.get('/tableDataGet', (req, res) => {
  res.json(db); 
});

const Users = []
app.post('/signup',async (req,res)=> {
    const {Username, email ,password } = req.body
    const hash = await bcrypt.hash(password, 13)
    Users.push({Username , email, hash})
    res.send('ok')
    console.log(`Signup complete ${Username} `,Users)
})

app.post('/login',async (req,res)=>{
    const {Username,password} = req.body
    const user = Users.find(u => u.Username === Username)
    if (!user){
        res.send("wrong username")
        return
    }
    const isValid = await bcrypt.compare(password, user.hash)
    if(!isValid){
        res.send("wrong password")
        return
    }
    res.send("ok")

})

app.get('/loginGet',(req,res)=>{
    
})
app.listen(PORT, ()=>{
    console.log(`app running on ${PORT}`)
})