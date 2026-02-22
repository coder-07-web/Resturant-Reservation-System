
import mongoose from 'mongoose';

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI,{
    dbName: "resturant_ms"
  }).then(()=>{
    console.log("Connected to databse successfully");
  })
  .catch((err)=>{
    console.log(`Some error occoured while connecting to database ${err}`)
  });
};


