const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cdsi2122'
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la bdd");
});
/*db.query("SELECT * FROM achat", (err, result) => {
    console.log(result);
})*/

let users = {
    1: {
        id: '1',
        nom: 'Thiery',
        prenom: 'Guillaume'
    },
    2: {
        id: '2',
        nom: 'Lebaron',
        prenom: 'Sandrine'
    }
};

app.get('/achats', (req, res) => {
    db.query("SELECT * FROM achat", (err, result) => {
        return res.send(result);
    });
})
app.get('/achats/:id', (req, res) => {
    db.query("SELECT * FROM achat where idAchat = \"" + req.params.id + "\"", (err, result) => {
        return res.send(result);
    });

})

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
})
app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
})
app.post('/', (req, res) => {
    return res.send('Requete POST reçue');
})
app.put('/', (req, res) => {
    return res.send('Requete PUT reçue');
})
app.delete('/', (req, res) => {
    return res.send('Requete DELETE reçue');
})


app.listen(3000, () => {
    console.log("Serveur lancé sur le port http://localhost:3000 ");
})
