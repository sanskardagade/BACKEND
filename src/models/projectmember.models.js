import mongoose, { Schema } from "mongoose";
import {AvailableUserRole, UserRolesEnum} from "../utils/constants.js"

const projectMemberSchema = new Schema ({
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})