const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/kalkulator', (req,res) => {
    let number1 = Number(req.body.number1);
    let number2 = Number(req.body.number2);

    let jumlah = number1 + number2;
    let kurang = number1 - number2;
    let kali = number1 * number2;
    let bagi = number1 / number2;

    const response = {
        number_1 : number1,
        number_2 : number2,
        result : {
            penjumlahan : jumlah,
            pengurangan : kurang,
            perkalian : kali,
            pembagian : bagi,
        },
    };
    res.json(response);
});

app.listen(8000, () => {
    console.log('Server run on port 8000');
});