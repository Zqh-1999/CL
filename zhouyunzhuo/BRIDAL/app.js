const express=require('express');
const app=express();


app.use(express.static('./public'));


const routerBrida=require('./route/Brida');
app.use(routerBrida);

const routerGroom=require('./route/Groom');
app.use(routerGroom);

const routerbody=require('./route/body');
app.use(routerbody)

const AMonent=require('./route/AMonent');
app.use(AMonent)

app.set('view engine' ,'ejs');
app.set('views',__dirname+'/views');

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})