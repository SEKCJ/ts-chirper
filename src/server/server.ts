import * as express from 'express';
import * as path from 'path';
import routes from './routes';


const app = express();


app.use(express.json())
app.use(express.static('public'));
app.use(['/post', '/admin/:id'], (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use('/api', routes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
