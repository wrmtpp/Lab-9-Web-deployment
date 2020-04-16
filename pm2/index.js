
let express = require('express')
let app = express()

app.get('/', (req, res) => {

    console.log('LAB 9 Web deployment')


    res.send({

        Checkpoint: 'LAB 9 Web deployment',
        ID: 5835512115,
        Name: 'Woramet',
        Surname: 'Prompen',
        Sec: 02
    })
})

app.get('/crash', (req, res) => {

    console.log('Crash!!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT, () => console.log('Sv is running at', process.env.PORT))