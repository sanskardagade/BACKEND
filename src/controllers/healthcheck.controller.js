import {ApiResponse} from "../utils/api-response.js"
import { asyncHandler } from "../utils/async-handler.js";
// const healthCheck = (req,res) =>{
//     try{
//         res
//         .status(200)
//         .json(new ApiResponse(200,{message:"Server is running"}));
//     }
//     catch(error){

//     }
// }


// const healthCheck = async (req,res,next) =>{
//     const user = await getFromDB();
//     try{
//         res
//         .status(200)
//         .json(new ApiResponse(200,{message:"Server is running"}));
//     }
//     catch(error){
//         next(err)
//     }
// }


const healthCheck = asyncHandler(async(req,res)=>{
    res
    .status(200)
    .json(
        new ApiResponse(200,{message:"Server is still running"})
    )
})



export {healthCheck};
// export default healthCheck;