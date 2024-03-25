import { app } from "./app";
import { MongooseClient } from "./database/mongoDB";

const PORT = process.env.PORT || 3030;

try {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}/v1`)
  );
} catch (error) {
  new MongooseClient().disconnect();
}
