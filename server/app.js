const express=require('express')
const app=express()
const cors=require('cors')
const stripe=require('stripe')('sk_test_51QZ1vAAh9mF3tGjWagsR6eZUHlZo5NW8gNEKVEqTmC1GQxOlb0K1FFGI8cvoXaWv3ulWlGm9GbKiMOqTFhU0kC2P00K8MdAQr3')
const {v4:uuidv4}=require('uuid')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
  res.send('payment integeration')
})
app.post('/payment',(req,res)=>{
const{token,totalPrice}=req.body
const transKey=uuidv4()
return stripe.customers.create({
  email:token.email,
  source:token.id
}).then((customer)=>{
  stripe.charges.create({
    amount:totalPrice,
    currency:'inr',
    customer:customer.id,
    receipt_email:token.email,
  }).then((result)=>{
    res.json(result)
  }).catch((err)=>{console.log(err)})
})
})
app.listen(8080,()=>{
    console.log('server connected')
})