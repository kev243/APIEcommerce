import express, { json, urlencoded, Request } from "express";
import productsRoutes from "./routes/products/index.js";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
// app.use(
//   json({
//     verify: (req: Request, res, buf) => {
//       req.rawBody = buf;
//     },
//   })
// );
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//End Point
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
