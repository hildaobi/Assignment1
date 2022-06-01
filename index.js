const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8888;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(request,response)=>{
    response.render("index", { title: "Home"})
});
app.get("/consultation", (request,response)=>{
    response.render("consultation",{ title:"Consultation"})
});

app.get("/contact", (request,response)=>{
    response.render("contact",{ title:"Contact us"})
});

app.get("/about", (request,response)=>{
    response.render("about",{ title:"About"})
});


app.listen(port,() =>{
    console.log(`Listening at http://localhost:${port}`);
})