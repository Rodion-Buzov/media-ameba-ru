const cowsay = require("cowsay")

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('frontend'));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    response.render("index");
});

// подрубаем просшулку
app.listen(3000);
console.log(cowsay.say({
    text : "Сервер подрубил прослушку",
    e : "oO",
    T : "U "
}));
