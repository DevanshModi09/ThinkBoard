require('dotenv').config();
const express = require('express');
const connectDb = require('./db/connect');
const notesRoutes = require('./routes/notesRoutes');
const app = express();

// * Middlewares
app.use(express.json());

// Routes
app.use((req, res, next) => {
  console.log('a req is on the server');
  next();
});
app.use('/api/notes', notesRoutes);

// ! Starting the server
const PORT = process.env.PORT || 5001;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log('Server is now running on port : ' + PORT);
    });
  } catch (error) {
    console.log(`Server Connection Error :` + error);
  }
};
start();
