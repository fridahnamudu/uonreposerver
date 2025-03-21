const express = require('express');
const FileRoutes = require('./src/routes/files.routes');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 9000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATUS route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running!', status: 'OK', APIhealth: 'Good' });
});

app.use('/api/files', FileRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
