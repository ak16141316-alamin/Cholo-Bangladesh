const express = require('express');
const app = express();
app.use(express.json());

// স্যাম্পল ডেটাবেস (আসলে MongoDB ব্যবহার করা ভালো)
let users = [];

// ১. ওটিপি পাঠানোর এপিআই
app.post('/api/send-otp', (req, res) => {
    const { phone } = req.body;
    if (!phone) return res.status(400).send({ msg: "ফোন নম্বর দিন!" });
    
    // এখানে আসল ওটিপি গেটওয়ে কানেক্ট হবে
    console.log(`Sending OTP to ${phone}`); 
    res.send({ msg: "ওটিপি পাঠানো হয়েছে (১২৩৪)", status: "success" });
});

// ২. লগইন ভেরিফিকেশন
app.post('/api/verify-login', (req, res) => {
    const { phone, otp } = req.body;
    if (otp === "1234") { // হার্ডকোডেড টেস্ট ওটিপি
        res.send({ msg: "লগইন সফল!", token: "JWT_TOKEN_HERE" });
    } else {
        res.status(401).send({ msg: "ভুল ওটিপি!" });
    }
});

app.listen(5000, () => console.log('Cholo Bangladesh server running on port 5000'));
