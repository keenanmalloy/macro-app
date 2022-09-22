const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "95574116Km",
  database: "macroapp",
});

client.connect();

client.query(`SELECT * FROM nutrition`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});

const getNutrition = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM nutrition ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
const createNutrition = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      alcohol,
      caffiene,
      water,
      calories,
      protein,
      fats,
      carbs,
      fiber,
      starch,
      sugar,
      added_sugar,
      cystine,
      histidine,
      isoleucine,
      leucine,
      lysine,
      methionine,
      phenylalanine,
      threonine,
      tryptophan,
      tyrosine,
      valine,
      monofat,
      polyfat,
      omega3ala,
      omega3epa,
      omega3dha,
      satfat,
      transfat,
      thiamine,
      riboflavin,
      niacin,
      panto,
      pyriodox,
      combalamin,
      folate,
      vita,
      vitd,
      vite,
      vitk,
      calcium,
      copper,
      iron,
      magnesium,
      manganese,
      phosphorus,
      potassium,
      selenium,
      sodium,
      zinc,
      cholosterol,
      choline,
    } = body;
    pool.query(
      "INSERT INTO nutrition ( alcohol, caffiene, water, calories, protein, fats, carbs, fiber, starch, sugar, added_sugar, cystine, histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, tyrosine, valine, monofat, polyfat, omega3ala, omega3epa, omega3dha, satfat, transfat, thiamine, riboflavin, niacin, panto, pyriodox, combalamin, folate, vita, vitd, vite, vitk, calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc, cholosterol, choline) VALUES ($1, $2) RETURNING *",
      [
        alcohol,
        caffiene,
        water,
        calories,
        protein,
        fats,
        carbs,
        fiber,
        starch,
        sugar,
        added_sugar,
        cystine,
        histidine,
        isoleucine,
        leucine,
        lysine,
        methionine,
        phenylalanine,
        threonine,
        tryptophan,
        tyrosine,
        valine,
        monofat,
        polyfat,
        omega3ala,
        omega3epa,
        omega3dha,
        satfat,
        transfat,
        thiamine,
        riboflavin,
        niacin,
        panto,
        pyriodox,
        combalamin,
        folate,
        vita,
        vitd,
        vite,
        vitk,
        calcium,
        copper,
        iron,
        magnesium,
        manganese,
        phosphorus,
        potassium,
        selenium,
        sodium,
        zinc,
        cholosterol,
        choline,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new nutrition has been added added: ${results.rows[0]}`);
      }
    );
  });
};
const deleteNutrition = () => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query(
      "DELETE FROM nutrition WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`nutrition deleted with ID: ${id}`);
      }
    );
  });
};

module.exports = {
  getNutrition,
  createNutrition,
  deleteNutrition,
};
