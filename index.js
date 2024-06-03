import express from 'express'
import fs from 'fs'

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('.'));


app.listen(PORT, () => {
  console.log(`Colometa api escuchando en el puerto ${PORT}`);
});


app.get('/friends', (req, res)=>
    {
        fs.readFile('friends.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })

app.get('/', (req, res)=>
    {
        fs.readFile('index.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })

app.get('/profile', (req, res)=>
    {
        fs.readFile('profile.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })


    app.get('/nearme', (req, res)=>
    {
        fs.readFile('nearme.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })

    app.get('/home', (req, res)=>
    {
        fs.readFile('home.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })