import express from "express";

// components import
import Connection from "./connection/db.js";


const app = express();

Connection();

const port=8000

app.listen(port,()=> console.log(`server is running on port ${port}`))


