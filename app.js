const { nanoid } = require('nanoid'); // import third party module nanoid
const express = require('express'); // import third party module express
const app = express(); // execute express
const port = process.env.PORT || 3000; // kita mau gunakan port 3000, jika tidak ada maka gunakan port yg ada di environment dimana kita deploy web app kita


// Routes 
app.get('/', (req, res) => { // kalau ada req ke / maka jalankan function di bwah ini
    res.send(`Hello World!` + process.env.Tumbal);
});

app.get('/coba', (req, res) => { // kalau ada req ke /coba maka jalankan function di bwah ini
    res.send('Sukses mi dalam deploy web app ke RAILWAY!! untk kedua kalinya mi nahh setelah di SHUTDOWN');
});

app.get('/makan', (req, res) => { // kalau ada req ke /makan maka jalankan function di bwah ini
    res.send('Silahkan Makan Banyak Banyak Yaaa Ciayooo!');
});

app.get('/api', (req, res) => { // kalau ada req ke /api maka jalankan function di bwah ini
    res.status(200).json({
        status: 'success',
        message: 'API is working!',
        data: {
            id: nanoid(10),
            name: 'Tumbal',
        }
    });
});


// Untuk Jalankan / BootUp server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(process.version);
});
