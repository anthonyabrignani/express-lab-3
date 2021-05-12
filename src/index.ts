import express from 'express';
import path from 'path';
import homeRoutes  from './routes/home';
import assignmentRoutes from './routes/assignments';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoutes);
app.use("/assignments", assignmentRoutes);

app.use((req,res) => {
    res.status(404).render('error/not-found');
  });
  
  const port = 3000;
  app.listen(port, () => console.log(`Listening on port: ${port}.`));