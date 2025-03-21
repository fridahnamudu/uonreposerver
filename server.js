import express from "express";
import FileRoutes from "./src/routes/files.routes";
import cors from "cors";
import morgan from "morgan";

const PORT = 5000;
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