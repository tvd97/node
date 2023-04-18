const Flower = require('../models/Flower');
const { mongooseArrayObject } = require('../util/mongooseExt');
class HomeController {
  //[get]/home
  index(req, res, next) {
    //promise
    // Flower.find({})
    //   .then((flower) => {
    //     res.render('home', {
    //       flower: mongooseArrayObject(flower),
    //     });
    //   })
    //   .catch((error) => next(error));
    res.render('./page/home/index')
    /* call back
    Flower.find({},function(flower,err)=>{})
    */
  }
}
module.exports = new HomeController();
