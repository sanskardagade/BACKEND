import Mailgen from "mailgen";


const emailVerificationMailgenContent = (username,verificationUrl) => {
    return{
        body: {
            name: username,
            intro: "Welcome to our app! we are exited to have you on board",
            action:{
                instructions: "To verify your email please click on following button",
                button:{
                    color:"#22bc66",
                    text:"Verify your email",
                    link: verificationUrl
                },
            },
            outro : "Need help, or have questions? Just reply to this email we would love to here you"
        }
    }
};




const forgotPasswordMailgenCpntent = (username,passwordResetUrl) => {
    return{
        body: {
            name: username,
            intro: "We got a request to reset the passowrd of your account",
            action:{
                instructions: "To reset your passowrd click on the following link",
                button:{
                    color:"#22bc66",
                    text:"Reset Passowrd",
                    link: passwordResetUrl
                },
            },
            outro : "Need help, or have questions? Just reply to this email we would love to here you"
        }
    }
}


export{
    emailVerificationMailgenContent,
    forgotPasswordMailgenCpntent
}
