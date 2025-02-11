import { routes } from "./api/routes";
import { db } from "./infra/models";
import multer from "multer";
import path from "path";
import express, { Request } from "express";
import RestaurantErrors from "./api/middlewares/errors/RestaurantErrors";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (_req: Request, file: any, cb: any) {
    let folder = "";

    if (file.fieldname === "url_image_restaurant") {
      folder = "restaurants";
    } else if (file.fieldname === "url_image_product") {
      folder = "products";
    }

    cb(null, `public/images/${folder}`);
  },
  filename: function (_req: Request, file: any, cb: any) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (_req: Request, file: any, cb: any) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg|webp)$/)) {
      return cb(new Error("Insira apenas arquivos JPG, PNG, JPEG ou WEBP"));
    }

    cb(undefined, true);
  },
});

app.use(upload.any());

app.use("/", routes);

db.sync()
  .then(() => {
    app.listen(21092, () => {
      console.log("Aplicação UP 🚀");
    });
  })
  .catch((e: Error) => {
    console.log(e);
    throw new RestaurantErrors("Não foi possível realizar a conexão com o banco de dados");
  });
