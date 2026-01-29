const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Backend 🚀"
    });
});

app.post("/api/contact", (req, res) => {
    const { name, email } = req.body;
    res.json({
        status: "success",
        received: { name, email }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
