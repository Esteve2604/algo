const app = require('./app') // the actual Express application

app.listen(3000, () => {
  logger.info(`Server running on port 3000`)
})