import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) =>{
    const mailGenerator = new Mailgen({
        theme:"default",
        product:{
            name:"Task Manager",
            link:"https://taskmanagerlink"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        post: process
        
        .env.MAILTRAP_SMTP_POST,  
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            password: process.env.MAILTRAP_SMTP_PASSWORD
        }
    })



    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendEmail(mail)
    } catch (error) {
        console.error("email service failed make sure your credentials are correct")
        console.error("Error:",error)
    }
}

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


const forgotPasswordMailgenContent = (username,passwordResetUrl) => {
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
    forgotPasswordMailgenContent,
    sendEmail
}
