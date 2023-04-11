function route(app){
    app.get("/home", (req, res) => {
        res.render('index');
      });
}
module.exports = route;