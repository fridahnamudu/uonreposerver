const express = require("express");
const FileService = require("../services/files.service");

const FileRoutes = express.Router();


FileRoutes.get("/", FileService.getFiles);
FileRoutes.post("/upload", FileService.uploadFile);
FileRoutes.delete("/delete/:fileId", FileService.deleteFile);
FileRoutes.put("/update/:fileId", FileService.updateFile);

module.exports = FileRoutes;