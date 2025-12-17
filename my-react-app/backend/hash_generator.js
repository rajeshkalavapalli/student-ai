// hash_generator.js

const bcrypt = require('bcrypt');

const passwordToHash = ''; // 🚨 Replace with the actual password you want

async function generateHash() {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(passwordToHash, salt);
        
        console.log("Original Password:", passwordToHash);
        console.log("Generated Hash:", hash);
        
        // You can use a temporary model save here too, but logging is simplest
        process.exit();
        
    } catch (error) {
        console.error("Hashing failed:", error);
    }
}

generateHash();