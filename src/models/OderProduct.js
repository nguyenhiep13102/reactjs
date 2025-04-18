import mongoose from "mongoose";

const  orderSchema = new mongoose.Schema({
    oderItems:[
    {
         name: {type: String , required :true},
         amount: {type : Number ,required : true },
         image: {type : String , required: true},
         price: {type: Number , required: true},
         Product :{
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required : true ,
         },
    },
    ],
    shippingAddress : {
        fullName: {type: String , required : true},
        adress: {type: String, required: true},
        city: {type : String, required : true},      
        phone: {type: Number , required : true},
    },
    paymentMethod: {type: String , required: true},
    itemsPrice: { type : Number , required: true},
    shippingPrice: {type :Number, required : true},
    taxiPrice: {type : Number , required :true },
    totalPrice: {type: Number , required : true },
    user: {type: mongoose.Schema.Types.ObjectId , ref : 'User', required : true},
    isPaid : {type: Boolean, default: false},
    isDelivered: {type : Boolean , default: false},
    deliveredAt :{type: Date },
},
{
    timestamps : true ,
}
 );
const Order = mongoose.model('Order',orderSchema);
 export default Order;