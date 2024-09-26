const express = require("express")
const Razorpay = require('razorpay');
const cors = require("cors") 
const app = express()

const razorpay = new Razorpay({
    key_id: 'rzp_test_JVoQUmr7AVNOjC',
    key_secret: 'xAwuGYBBTtcFLkYR2CjnV8m5',
  });

  app.use(cors())

app.listen(8080)

app.get('/order',async (req,res)=>{
   const data = await razorpay.orders.create({
        "amount": (500*100),
        "currency": "INR",
        "receipt": "RCP_ID_"+Date.now()
       
      })

      res.json({
        amount : data.amount,
        orderId:data.id
      })
})