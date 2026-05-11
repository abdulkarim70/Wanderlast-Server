const express=require('express')
const app=express()

const PORT=5000;
app.get('/',(req, res)=>{
res.send('server is running fine')
})

app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`);
})