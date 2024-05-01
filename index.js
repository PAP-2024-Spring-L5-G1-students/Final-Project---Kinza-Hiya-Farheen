const express = require('express');
const cors = require('cors');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const PORT = 5500;
const db = new sqlite3.Database('./data.db');
const testing = "TopMascara";

const app = express();

app.use(cors()); 

const html = fs.readFileSync('./index.html');

app.get('/index.html', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
});

app.get('/mascara', (req, res) => {
    db.serialize(() => {
        db.all(`SELECT ${testing} FROM MakeupBrands`, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Query successful");
                res.json(rows); 
            }
        });
    });
});

app.get('/here', (req, res) => {
    res.write("here it worked");
    res.end();
});

const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

server.on('close', () => {
    console.log('Server stopped. Closing database connection.');
    db.close();
});
