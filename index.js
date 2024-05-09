
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const PORT = 5500;
const db = new sqlite3.Database('./brandslinks.db');

const app = express();

app.use(cors()); 
app.use(express.static("public"));

app.get('/brand:option', (req, res) => {
    const testin = req.params.option;

    console.log(testin);
    const query = `SELECT * FROM MakeupBrands WHERE "BrandName" = ` +  `'` + `${testin}` + `';`;
    console.log(query);
    db.serialize(() => {
        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Query successful");
                req.params.get
                res.json(rows); 
                console.log(rows)
            }
        });
    });
});

app.get('/product:option', (req, res) => {
    const testin = req.params.option;
    console.log(testin);
    const query = `SELECT ` + `${testin}, ${testin}Link` + ` FROM MakeupBrands;`;
    console.log(query);
    db.serialize(() => {
        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Query successful");
                req.params.get
                res.json(rows); 
                console.log(rows)
            }
        });
    });
});

app.get('/allBrands', (req, res) => {
    const query = `SELECT BrandName FROM MakeupBrands ;`;
    db.serialize(() => {
        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Query successful");
                req.params.get
                res.json(rows); 
                console.log(rows)
            }
        });
    });
})

app.get('/search/:product/:brand', (req, res) => {
    const query = `SELECT ` + `${req.params.product}, ${req.params.product}Link` + ` FROM MakeupBrands WHERE BrandName = "` + `${req.params.brand}` + `";`;
    console.log(query)
    db.serialize(() => {
        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Query successful");
                req.params.get
                res.json(rows); 
                console.log(rows)
            }
        });
    });
})


const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

server.on('close', () => {
    console.log('Server stopped. Closing database connection.');
    db.close();
});
