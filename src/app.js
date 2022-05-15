require("./db/connection");
const { mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovie, updateMovie, deleteMovie } = require("./movie/methods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
        //add movie function that takes yargsObj terminal input
        // node src/app.js --add --title="" --actor=" --year=""
        await addMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year});
        console.log(`Successfully added ${yargsObj.title}.`);

    } else if (yargsObj.list) {
        // list movies from database
        // node src/app.js --list
        const movieList = await listMovie();
        console.log({ movieList });

    } else if (yargsObj.update) {
        // list movies using filterObj
        // node src/app.js --add --title="" --actor="" --year=""
        await updateMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
        console.log(`${yargsObj.title} has been updated.`);

    } else if (yargsObj.delete) {
        // delete movies using filterObj
        // node src/app.js --delete --title=""
        await deleteMovie({ title: yargsObj.title });
        console.log(`${yargsObj.title} has been deleted.`);

    } else {
        console.log("Incorrect command");
    }
    await mongoose.connection.close();
    console.log(`Successfully disconected`)
  } catch (error) {
    console.log(error);
  }

};

app(yargs.argv);