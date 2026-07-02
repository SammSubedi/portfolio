import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
    const { tag } = req.query;
    try {
        let result;
        if (tag) {
            result = await pool.query(
                "SELECT * FROM projects WHERE $1 = ANY(tags) ORDER BY created_at DESC",
                [tag]
            );
        } else {
            result = await pool.query(
                "SELECT * FROM projects ORDER BY created_at DESC"
            );
        }
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

export default router;