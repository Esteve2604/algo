const app = require('./app') // the actual Express application

app.listen(process.env.PORT || 8080, () => {
  logger.info(`Server running on port 8000`)
})