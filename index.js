const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('ttps://www.free-css.com/assets/files/free-css-templates/download/page257/chershoee.zip')
})
app.listen(process.env.PORT || 3000)
