import express from 'express'
import cors from 'cors'

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

app.listen(PORT, ()=>{
    console.log(`app running on ${PORT}`)
})