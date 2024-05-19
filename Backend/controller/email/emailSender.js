const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config();
const sendMail = async (to,subject,text) => {
    try {
        //transporter object 
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME, 
                pass: process.env.EMAIL_PASSWORD 
            }
        });

        // Set up email data
        let mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: to,
            subject: subject,
            text: text
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        // console.log('Message sent: %s', info.messageId);
        return 'success'
    } catch (error) {
        // console.error('Error sending email:', error);
        return 'error'
    }
};
// const sendMail = async (req, res) => {
//     const data = req.body.emailData;
//     const emailData = {
//         to: data.to,
//         subject: data.subject,
//         text: data.text
//     };
//     try {
//         //transporter object 
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USERNAME, 
//                 pass: process.env.EMAIL_PASSWORD 
//             }
//         });

//         // Set up email data
//         let mailOptions = {
//             from: process.env.EMAIL_USERNAME,
//             to: emailData.to,
//             subject: emailData.subject,
//             text: emailData.text
//         };

//         // Send email
//         let info = await transporter.sendMail(mailOptions);
//         // console.log('Message sent: %s', info.messageId);
//         res.status(200).send('success');
//     } catch (error) {
//         // console.error('Error sending email:', error);
//         res.status(500).send('error');
//     }
// };

export default sendMail;