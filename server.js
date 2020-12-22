const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 4000

//* MIDDLEWARE **//
app.use(cors())
app.use(express.json({ extended: false }))

app.use("/", require("./routes/emailRoute"))

process.env.NODE_ENV = "production" 

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client")))
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "index.html"))
  })
}

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
