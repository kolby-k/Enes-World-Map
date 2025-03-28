const fs = require("fs");

// Paths to your CSV file and the output JSON file
const csvFilePath = "./top-17.csv";
const outputFilePath = "output.json";

// Read the CSV file
fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading CSV file:", err);
    return;
  }

  // Split the CSV content into lines and remove any extra whitespace
  const lines = data.trim().split("\n");
  if (lines.length === 0) {
    console.error("CSV file is empty");
    return;
  }

  // Use the first line as headers
  const headers = lines[0].split(",");

  // Convert each line into a JSON object
  const jsonArray = lines.slice(1).map((line) => {
    const values = line.split(",");
    const jsonObject = {};
    headers.forEach((header, index) => {
      let headerLabel = header;
      let value = values[index];
      if (header === "latitude") {
        headerLabel = "location";
        value = { lat: parseFloat(value) };
      } else if (header === "longitude") {
        headerLabel = "location";
        value = { ...jsonObject["location"], lng: parseFloat(value) };
      }
      jsonObject[headerLabel] = value;
    });
    return jsonObject;
  });

  // Write the JSON array to an output file
  fs.writeFile(outputFilePath, JSON.stringify(jsonArray, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log(
        `CSV data has been converted to JSON and saved to ${outputFilePath}`
      );
    }
  });
});
