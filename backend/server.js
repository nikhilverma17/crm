const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes")
const colors = require('colors');
const path = require('path');
const { errorHandler,notFound } = require("./middlewares/errorMiddleware");
const app = express();
dotenv.config();
connectDB();

app.use(express.json());


app.use("/api/users", userRoutes); 
app.use("/api/notes", noteRoutes); 

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    });
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}

app.use(notFound);
app.use(errorHandler);

const PORT = 5000; // Hardcoded port number
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
