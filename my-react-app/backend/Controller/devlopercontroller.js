const Devloper = require('../Models/devloper');
const bcrypt = require("bcrypt");

const DevloperRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1️⃣ Check if developer already exists
        const existingDev = await Devloper.findOne({ email });

        if (existingDev) {
            return res.status(409).json({ message: "Developer already exists" });
        }

        // 2️⃣ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3️⃣ Create new developer
        const newDev = new Devloper({
            name,
            email,
            password: hashedPassword
        });

        await newDev.save();

        // 4️⃣ Send success response
        return res.status(201).json({
            message: "Developer registered successfully",
            developer: { email: newDev.email, name: newDev.name }
        });

    } catch (error) {
        console.error("Registration error ->", error);
        return res.status(500).json({
            message: "Something went wrong, try after some time",
            error: error.message
        });
    }
};


const DevloperlogIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1️⃣ Check if user exists
        const devloper = await Devloper.findOne({ email });

        if (!devloper) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        // 2️⃣ Compare passwords
        const isMatch = await bcrypt.compare(password, devloper.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 3️⃣ Success
        return res.status(200).json({ message: "Developer login successfully" ,
            id:devloper._id,
            email:devloper.email

        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong, try after some time",
            error: error.message
        });
    }
};

module.exports = {DevloperRegister,DevloperlogIn}
