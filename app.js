const http = require('http');
const carsModels = require('./cars');
const htmlGen = require('./htmlGenerator');

const PORT =3000;

const requestListener = (req, res) =>{
    const cars = carsModels.getCars();
    console.log(cars);
    res.setHeader("Content-Type", "text/html");
    res.write(htmlGen.getHTMLDocumentStart());
    res.write('<body>');
    res.write(`<p>${carsModels.getCarInformation(1)}</p>`);
    res.write(`<p>${carsModels.getCarAge(1)}</p>`);
    res.write('</body>');
    res.write(htmlGen.getHTMLDocumentEnd());
    res.end();
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);

});