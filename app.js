const express = require("express");

const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));

var items = ["Study","Code","Games"];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(request,respond){
  var day = new Date();
  var today;

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }



  today = day.toLocaleDateString("en-US",options);

  respond.render("list",{daytype: today, newlistitem: items});
});

app.post("/",function(req,res){
  item = req.body.additem;
  items.push(item);
  res.redirect("/");
})




app.listen(3000,function(request,response){
  console.log("Server running at port 3000");
});
