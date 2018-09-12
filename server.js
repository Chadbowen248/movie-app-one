const express = require('express');
const axios = require('axios');
const API_KEY = 'b214b2f6cd4cb56d9c0a986a2215d33f'
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/search/:movie', (req, res) => {
  const movie = req.params.movie;
  axios(`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
  .then(res => res.data.results.map(item => ({
      id: item.id,
      title: item.title,
      img: item.poster_path,
      desc: item.overview,
      date: item.release_date
  })))
  .then(data => res.json(data))
})

app.listen(port, () => console.log(`Listening on port ${port}`));