// set up your connection here...this page should be done now...
const mysql = require("mysql2")

const connection = mysql.createConnection({
user: "root",
password: "rootroot",
database: "employees"
});

RTCPeerConnection.connect(function (err){
    if (err) throw err;
})

module.exports = connection;