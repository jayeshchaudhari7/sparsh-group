import app from "./src/app/app.js";
import connectDB from "./src/config/db.js";
import config from "./src/config/config.js";

await connectDB();

const PORT = process.env.PORT || config.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});