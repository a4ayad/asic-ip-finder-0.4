import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'
// const ENV = (process.env  == 'development') ? 'something' : 'something'

app.get("/", (req,res) =>
    res.send({response: "OK"}))

app.get("/asic_ips", (req, res) =>
    res.send({asic_ips: "Best ASIC IPs"}))

app.get("/new", (req, res) =>
    res.send("New ASIC IPs"))

app.listen(PORT, () => console.log(`server running on http://${HOST}:${PORT}`))