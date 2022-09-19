import axios from "axios";

export default function handler(req, res) {
  const query = req.query.q;

  const api_url = `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&detailed=true`;

  async function getData() {
    try {
      const response = await axios.get(api_url, {
        headers: {
          "x-app-id": process.env.NEXT_PUBLIC_NUTRITIONIX_APP_ID,
          "x-app-key": process.env.NEXT_PUBLIC_NUTRITIONIX_APP_KEY,
        },
      });
      res.status(200).json({ response: response.data });
    } catch (error) {
      res.status(500).json({ error: "failed to load data" });
    }
  }
  getData();
}

// https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
//     params.api_key
//   )}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(
//     params.dataType
//   )}&pageSize=${encodeURIComponent(params.pagesize)}

// axios.get(’https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
//  headers: {
//    ‘x-app-id’: ‘your id’,
//    ‘x-app-key’: ‘your key’,
//  },
//  ...
// })
