function router(app){
    app.get("/home", (req, res) => {
        res.render("index");
      });
}
module.exports = router;