const Movie = require("./model");

exports.addMovie = async (movieObj) => {
  try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
  }
};

exports.listMovie = async (movieObj) => {
    try {        
        return await Movie.find({});
        
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (filterObj) => {
    try {
        await Movie.updateOne({title: filterObj.title },{ actor: filterObj.actor, year: filterObj.year});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (filterObj) => {
    try {
        await Movie.deleteOne({ title: filterObj.title });
    } catch (error) {
        console.log(error);
    }
}
