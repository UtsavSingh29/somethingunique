const nodemailer = require('nodemailer');

const sendOtp = async (email, otp) => {
    try {
        console.log('Connecting to SMTP server...');
        const transporter = await nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'josefa.parisian1@ethereal.email',
                pass: 'KNUPMagnRDHWtDZeKx',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        console.log('SMTP connection established.');
        const info = await transporter.sendMail({
            from: '"Professor OTP ✉️" <noreply@somethingunique.edu>',
            to: email, // Receiver email
            subject: `Your Secret Code is Ready! 🚀`, // Fun subject line
            text: `Hey there, superstar! 🌟 Your one-time access code is: ${otp}.
               Remember, it's valid for just 10 minutes! Don’t share it unless
               you want someone else stealing your campus fame.`,
            html: `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #4caf50; margin-bottom: 10px;">🚨 Your Secret Access Code is Here! 🚨</h1>
                <p style="font-size: 18px; color: #333;">Hey there, superstar! 🌟</p>
                <p style="font-size: 16px; color: #555;">Your exclusive code for <b>SomethingUnique</b> is:</p>
                <div style="font-size: 28px; font-weight: bold; color: #ff5722; margin: 20px 0;">${otp}</div>
                <p style="font-size: 16px; color: #333;">Use it to dive into the awesomeness of your college world!
                But heads up:</p>
                <p style="font-size: 16px; color: #d32f2f;"><strong>Expires in 10 minutes. ⏳</strong></p>
                <p style="font-size: 14px; color: #555; margin-top: 10px;">
                    <i>"With great codes, comes great responsibility."</i> Don’t share it unless you’re okay with
                    someone else crashing your college buzz. 😎
                </p>
                <p style="margin-top: 20px; font-size: 14px; color: #777;">Need help? Hit us up. Or better yet,
                send us a meme—we love those. 🤓</p>
                <p style="margin-top: 20px; font-size: 16px; color: #333;">
                    Cheers, <br><b>Team SomethingUnique 🚀</b>
                </p>
            </div>
        `,
        });

        return info;
    } catch (error) {
        console.error(error);
        return null;
    }
};
module.exports = sendOtp;
