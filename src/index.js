import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env",
})

const port = process.env.PORT  || 3000;

connectDB()
    .then(() =>{
        app.listen(port,()=> {
            console.log(`Example app listening at port http://locatlost:${port}`);
        });
    })
    .catch((err) =>{
        console.error("Monog DB Connection Error",err);
        process.exit(1);
    })
