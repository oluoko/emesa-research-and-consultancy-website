const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Check if the directory exists, and if not, create it
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // Get the folder from request or set a default one
    const folder = req.body.folder || "userProfilePics"; // Example: User sends folder choice in request body

    // Define the base uploads path
    const basePath = "uploads/";

    // Create the full path to the desired folder
    const fullPath = path.join(basePath, folder);

    // Ensure the folder exists
    ensureDirectoryExists(fullPath);

    // Use the chosen folder as the destination
    cb(null, fullPath);
  },
  filename(req, file, cb) {
    // Generate the filename
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Images only!");
    }
  },
});

module.exports = upload;
