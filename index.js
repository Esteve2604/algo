const app = require('./app') // the actual Express application

app.listen(8000, () => {
  logger.info(`Server running on port 8000`)
})