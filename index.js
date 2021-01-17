require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT

app.listen(PORT, console.log(`Remote Connection Established on ${PORT}`));