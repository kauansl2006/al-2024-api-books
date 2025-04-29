require("dotenv").config({ path: ".env.development.local" });

const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
