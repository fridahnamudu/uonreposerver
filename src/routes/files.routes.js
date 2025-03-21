import express from "express";
import FileService from "../services/files.service";

const FileRoutes = express.Router();


FileRoutes.get("/", FileService.getFiles);
FileRoutes.post("/upload", FileService.uploadFile);
FileRoutes.delete("/delete/:fileId", FileService.deleteFile);
FileRoutes.put("/update/:fileId", FileService.updateFile);

export default FileRoutes;