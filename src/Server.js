const express = require("express");
const bodyParser = require("body-parser");
const XLSX = require("xlsx");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json());

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  // Create or read the existing Excel file
  const filePath = "form-data.xlsx";
  let workbook;
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
  } else {
    workbook = XLSX.utils.book_new(); // Create new workbook if file doesn't exist
  }

  // Prepare data
  const newRow = [{ Name: name, Email: email, Message: message }];
  const newWorksheet = XLSX.utils.json_to_sheet(newRow, {
    header: ["Name", "Email", "Message"],
  });

  // Append data to the existing worksheet
  const sheetName = "Submissions";
  if (workbook.Sheets[sheetName]) {
    const existingData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const updatedData = existingData.concat(newRow);
    const updatedWorksheet = XLSX.utils.json_to_sheet(updatedData);
    workbook.Sheets[sheetName] = updatedWorksheet;
  } else {
    XLSX.utils.book_append_sheet(workbook, newWorksheet, sheetName);
  }

  // Write the file
  XLSX.writeFile(workbook, filePath);
  res.status(200).json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
