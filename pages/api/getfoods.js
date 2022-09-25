import db from "../../utils/databasepg";
import { insertNutrition } from "../../queries/insertNutrition";

//timestamp column is in bigint format, select * from nutrition where time is between 12am and 11:59pm, with the date being the current date, and the timezone being UTC using epoch time

// setUTCHours(7,0,0,0)
// setUTCHours(30,59,59,99)

export default async (req, res) => {
  const { method, body } = req;
  const today = new Date();
  const beginningOfDay = today.setUTCHours(7, 0, 0, 0);
  const endOfDay = today.setUTCHours(30, 59, 59, 99);

  switch (method) {
    case "GET":
      try {
        const text = `
    select 
     * 
    from 
       nutrition 
    where 
      timestamp::date = '09/25/22'::date;
        `;
        const result = await db.query(text);

        if (result.rowCount === 0)
          return res.status(404).json({ message: "Nutrition Not Found" });

        return res.json(result.rows);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "PUT":
      try {
        const { title, description } = body;
        const text =
          "UPDATE nutrition SET title = $1, description = $2 WHERE id = $3 RETURNING *";
        const values = [title, description, id];
        const result = await db.query(text, values);
        return res.json(result.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "DELETE":
      try {
        const text = "DELETE FROM nutrition WHERE id = $1 RETURNING *";
        const values = [id];
        const result = await db.query(text, values);

        if (result.rowCount === 0)
          return res.status(404).json({ message: "Nutrition Not Found" });

        return res.json(result.rows[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":
      try {
        for (const food of body.foods) {
          await insertNutrition(food);
        }

        return res.json({ message: "Nutrition Inserted" });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
};
