const express=require('express')
const v1Routes=require('./v1');


const router=express();

router.use('/v1',v1Routes);
module.exports=router;