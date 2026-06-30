import express from "express";
import pool from "./db.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/test-db", async (req, res) => {
    try{
        const result = await pool.query('SELECT NOW()');
        res.send(`Database connected. Current time: ${result.rows[0].now}`);
    } catch (err){
        console.error(err);
        res.status(500).send('Database connection failed');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});