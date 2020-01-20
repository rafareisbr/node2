const PORT = 5000 || process.env.PORT

const App = require('../index')

App.listen(5000, () => {
    console.log(`Listening on port ${PORT}`)
})
