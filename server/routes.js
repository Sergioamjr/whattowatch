const routes = require("next-routes");

module.exports = routes()
  .add("/", "index")
  .add("/movies", "movies")
  .add("/genrer/:id", "genrer");
