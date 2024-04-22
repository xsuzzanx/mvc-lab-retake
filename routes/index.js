const fs = require("fs");
const querystring = require("querystring");

const home = requre("../views/home");
const car = requre("../views/car");
const addCar = requre("../views/add-car");

const handleHome= (response) =>{
    response.setHeader("Content-Type", "text/html");
    response.write(home.renderPage());
    response.end();
};

const handleAddCar = (method, request, response) => {
    if(method === "GET"){
        response.setHeader("Content-Type", "text/html");
        response.write(addCar.renderPage());
        response.end();
    }
    else if (method === "POST"){
        let body = [];
        request.on("data", (chunk) => {
            body.push(chunk);
        });
        request.on("end", () => {
            const fileName= "formData.json";
            const parseData = querystring.parse(Buffer.concat(body).toString());
            const jsonData = JSON.stringify(parsedData);
            fs.writeFileSync(fileName, jsonData);
            response.statusCode = 302;
            response.setHeader("Location", "/car");
            response.end();
        });
    }
};

const handleCar = (response) =>{
    const fileName = "formData.json";
    fs.readFile(fileName, (err,data) => {
        response.setHeader("Content-Type", "text/html");
        let dataToSend = '';
        if(err){
            dataToSend = "No car added";
        }
        else{
            const dataFixed = JSON.parse(data);
            dataToSend = JSON.stringify(dataFixed);
        }
        response.write(car.renderPage(dataToSend));
        response.end();
    });
};

const handlePageNotFound = (response) => {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>404 Not Found</h1>");
    response.end();
}

module.exports ={
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound
};