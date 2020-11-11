const user = "root";
const password = "rohit1234";
const host = "34.74.147.38";
const port = "27017";
const database = "ourTest";

module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=admin`,
    // 'mongoUrl': 'mongodb://localhost:27017/ourTest'
}
