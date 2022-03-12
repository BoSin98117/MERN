const JokeController = require('../controllers/joke.controller');


module.exports = app => {
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingUser);
    app.put('/api/jokes/:id', JokeController.updateJoke);
}