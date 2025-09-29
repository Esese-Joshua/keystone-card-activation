import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

// Post endpoint for sending OTP
app.post("/send-otp", async (req, res) => {
    const { to_email, otp } = req.body;

    if (!to_email, otp || !otp) {
        return res.status(400).json({ success: false, error: "Missing email or OTP" });
    }
    try {
        // Configure Gmail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        // Send OTP email
        await transporter.sendMail({
            from: `"Keystone Bank Demo" <${process.env.GMAIL_USER}>`,
            to: to_email,
            subject: "Your OTP Code",
            text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
            html: `<p> Your OTP code is: <strong> ${otp} </strong></p>`          
        });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
});


// Set port
const PORT = 5000
app.listen(PORT, () => console.log('Server running on port ${PORT}'));