import {User} from "../models/user.models.js"
import {Project} from "../models/project.models.js"
import {ProjectMember} from "../models/projectmember.models.js"
import {ApiResponse} from "../utils/api-response.js"
import {ApiError} from "../utils/api-error.js"
import {asyncHandler, AsyncHandler} from "../utils/async-handler.js"
import mongoose from "mongoose"
import { UserRolesEnum } from "../utils/constants.js"

const getProjects = asyncHandler(async(req,res) =>{
    //test
    const {name,description} = req.body;

    const project = await Project.create({
        name,
        description,
        createdBy: new mongoose.Types.ObjectId(req.user._id),
    });

    await ProjectMember.create(
        {
            user: new mongoose.Types.ObjectId(req.user._id),
            project: new mongoose.Types.ObjectId(project._id),
            role: UserRolesEnum.ADMIN
        }
    )

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                project,
                "Project created successfully"
            )
        )

}) 

const updatedProject = asyncHandler(async(req,res) =>{
    const {name,description} = req.body
    const {projectId} = req.params

    await Project.findByIdAndUpdate(
        projectId,
        {
            name,
            description
        },
        {new:true}
    )

    if(!project){
        throw new ApiError(404,"Project not found")
    }
    return res      
        .status(200)
        .json(
            200,
            project,
            "Project Updated Successful"
        )
})

const deleteProject = asyncHandler(async(req,res) =>{
    const {projectId} = req.params
    const project = await Project.findByIdAndDelete(projectId)

    if(!project){
        throw new ApiError(404,"Project not found")
    }
    
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            project,
            "Project deleted successfully"
        ))
})
export{
    getProjects,

}