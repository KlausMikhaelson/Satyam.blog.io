const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

const mongoUrl = "mongodb://localhost/Blog";

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoUrl, { useNewUrlParser: true });
      console.log('connected to MongoDB');
    } catch(error) {
      console.log('error connection to MongoDB:', error.message);
    }
  };

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {

    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }
]

    res.render('articles/index', {articles: articles})
})

app.listen(5000)