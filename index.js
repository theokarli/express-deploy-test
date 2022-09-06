const express = require('express'); // import third party module express
const app = express(); // execute express
const port = process.env.PORT || 3000; // kita mau gunakan port 3000, jika tidak ada maka gunakan port yg ada di environment dimana kita deploy web app kita


// Routes 
app.get('/', (req, res) => { // kalau ada req ke / maka jalankan function di bwah ini
    res.send('Hello World!');
});

app.get('/coba', (req, res) => { // kalau ada req ke /coba maka jalankan function di bwah ini
    res.send('Sukses mi dalam deploy web app ke HEROKU!');
});

app.get('/makan', (req, res) => { // kalau ada req ke /makan maka jalankan function di bwah ini
    res.send('Silahkan Makan Banyak Banyak!');
});


// Untuk Jalankan / BootUp server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});