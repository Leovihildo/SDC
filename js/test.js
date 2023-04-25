// const fs = require('fs');

// function loadData(filename = '') {
//     return JSON.parse(
//         fs.existsSync(filename)
//         ? fs.readFileSync(filename).toString()
//         : 'null'
//     )
// }

// function addData(filename = '', json = '""') {
//     return fs.writeFileSync(filename, JSON.stringify(json))
// }
// const products = loadData('products.json');

// var brand_name = "Anderson",
//     brand_price = 180000,
//     brand_img = "../images/sneakers/Lowtops/anderson.jpg",
//     brand_category = "Midtops";

// products.push({"brand_name":brand_name+"","price":brand_price+"","image":brand_img+"","category":brand_category+""});
// addData('products.json', products);
