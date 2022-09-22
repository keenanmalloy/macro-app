const express = require("express");
const app = express();
const port = 3001;
const databasepg = require("./databasepg");

export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ name: "jackson" });
}

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", (req, res) => {
  databasepg
    .getNutrition()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/nutrition", (req, res) => {
  databasepg
    .createNutrition(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/nutrition/:id", (req, res) => {
  databasepg
    .deleteNutrition(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// ⁣alcohol, caffiene, water, calories, protein, fats, carbs, fiber, starch, sugar, addedsugar, cystine, histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, tyrosine, valine, monofat, polyfat, omega3ala, omega3epa, omega3dha, satfat, transfat, thiamine, riboflavin, niacin, panto, pyriodox, combalamin, folate, vita, vitd, vite, vitk, calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc, cholosterol, choline