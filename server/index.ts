import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.get("/hello", async (req: Request, res: Response) =>
      res.json({ hello: "world 🪐" })
    );
    server.get("/", (req: Request, res: Response) => app.render(req, res, "/"));
    server.all("*", (req: Request, res: Response) => handle(req, res));
    server.listen(port, (err?: Error) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
