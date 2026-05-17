const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")
app.get("/", (req, res) => {
    res.json({ message: "Interview AI Backend Server is running successfully!" })
})

/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)


// Global error handler
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err)
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error"
    })
})


module.exports = app