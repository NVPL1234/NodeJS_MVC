const multer = require('multer')
const express = require('express')
const data = require('./store')

const app = express()
const upload = multer()

app.use(express.json({ extended: false }))
app.use(express.static('./views'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (request, response) => {
    return response.render('index', {data: data})
})

app.post('/', upload.fields([]), (request, response)=>{
    data.push(request.body)
    return response.redirect('/')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
})