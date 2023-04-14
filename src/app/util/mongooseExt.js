module.exports = {
  mongooseArrayObject: function (arr) {
    return arr.map((arr) => arr.toObject());
  },
  mongooseObject: function (obj) {
    return obj ? obj.toObject() : obj;
  },
};
