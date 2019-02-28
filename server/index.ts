import { createServer } from "http";
import routes from "../src/shared/routes";
import * as next from "next";

const port = parseInt(process.env.PORT || "", 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
