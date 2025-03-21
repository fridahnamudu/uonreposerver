const {axiosInstance} = require("./axiosInstance");

class FileService {
    // Fetch files
    static async getFiles(req, res) {
        try {
            const response = await axiosInstance.get('/');  // Make GET request to fetch files
            res.json(response.data); // Send the response data back to the client
        } catch (error) {
            console.error('Error fetching files:', error.message);
            res.status(500).send('Error fetching files');
        }
    }

    // Upload a file
    static async uploadFile(req, res) {
        try {
            // Assuming the file is available in req.body and might be sent as FormData
            const formData = new FormData();
            formData.append('file', req.body.file); // Adjust based on how your request is structured
            
            // Post the file to your API or the Google Apps Script endpoint (if needed)
            const response = await axiosInstance.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            res.json(response.data); // Send the response data back to the client
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).send('Error uploading file');
        }
    }

    // Delete a file
    static async deleteFile(req, res) {
        const { fileId } = req.params;  // Assuming fileId is passed as a URL parameter

        try {
            // Make a DELETE request to remove the file
            const response = await axiosInstance.delete(`/delete/${fileId}`);
            
            res.json(response.data); // Send response back to the client
        } catch (error) {
            console.error('Error deleting file:', error.message);
            res.status(500).send('Error deleting file');
        }
    }

    // Update a file
    static async updateFile(req, res) {
        const { fileId } = req.params;  // Assuming fileId is passed as a URL parameter
        const { fileName, newContent } = req.body;  // Assuming we are sending file data in the request body

        try {
            // You may need to change this depending on the fields required by your Google Apps Script or API
            const data = {
                fileName: fileName,
                newContent: newContent,
            };

            // Make a PUT request to update the file
            const response = await axiosInstance.put(`/update/${fileId}`, data);

            res.json(response.data); // Send the response back to the client
        } catch (error) {
            console.error('Error updating file:', error.message);
            res.status(500).send('Error updating file');
        }
    }
}

module.exports = FileService;
