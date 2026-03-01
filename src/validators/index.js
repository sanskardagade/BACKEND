import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase("Username must be in lowercase")
            .isLength({min:3})
            .withMessage("Username must be atleast 3 characters long"),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        
        body("fullName")
            .optional()
            .trim()
    ]
}

const userLoginValidator = () => {
    return[
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        
        body("password")
            .notEmpty()
            .withMessage("Password is required")
    ]
}

// const userChangeCurrentPasswordValidator = () =>{
//     return[
//         body("oldOassword")
//             .notEmpty()
//             .withMessage("Old Password is Required"),
        
//         body("newPassword")
//             .notEmpty()
//             .withMessage("New Password is Required"),
//     ]
// }

const userChangeCurrentPasswordValidator = () =>{
    return[
        body("oldPassword")
            .notEmpty()
            .withMessage("Old Password is Required"),
        
        body("newPassword")
            .notEmpty()
            .withMessage("New Password is Required"),
    ]
}

const userForgotPasswordValidator = () => {
    return[
        body("email")
            .notEmpty()
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email is invalid")

    ]
}

const userResetForgotPasswordValidator = () => {
    return[
        body("new Password")
            .notEmpty()
            .withMessage("Password is Required"),
            
    ]
}





export {userRegisterValidator,
        userLoginValidator,
        userChangeCurrentPasswordValidator,
        userForgotPasswordValidator,
        userResetForgotPasswordValidator,
    }