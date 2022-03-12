const Joke = require('../models/joke.model');


module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            console.log(newJoke);
            res.json({ Joke: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((getJokes) => {
            res.json({ Jokes: getJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ Jokes: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingUser = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(getIdd => {
            res.json({ getIdd: getIdd })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}