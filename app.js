const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var item="";
var items=[];
app.get("/",function(req,res){
  var today = new Date();

  var options={
    weekday:"long",
    day:"numeric",
    month :"long"
  };
  var day = today.toLocaleDateString("en-us",options);

  res.render("list",{kindOfDay:day,newListItem:items});

});
app.post("/",function(req,res){
   item = req.body.newItem;
   items.push(item);
  //console.log()
  res.redirect("/");
});

app.listen(3000,function(){
   console.log("server is up at the port 3000");
 });