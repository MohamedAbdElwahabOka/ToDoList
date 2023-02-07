const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let newItems = ["Buy Food"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');




app.get("/", function (req, res) {

    var today = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long' };
    var day = (today.toLocaleDateString("en-US", options));

    res.render('list', { kindOfDay: day, newListItems: newItems });

    app.post("/", (req, res) => {
        var newItem = req.body.newItem;
        newItems.push(newItem);

        res.redirect("/");
    });
});

app.listen(3000, function () {
    console.log("server on port 3000");
}
) 