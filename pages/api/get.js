import fetch from "node-fetch";

export default function handler(req, res) {
  console.log({ req });
  const params = {
    api_key: "jgXuRhVsBVV8hvuxetUJki814pFqo2NJwQKMsbpq",
    query: req.query.search,
    dataType: "Branded",
    pagesize: 15,
  };

  const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
    params.api_key
  )}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(
    params.dataType
  )}&pageSize=${encodeURIComponent(params.pagesize)}`;

  async function getData() {
    const data = await fetch(api_url);
    return await data.json();
  }

  getData()
    .then((data) => {
      return res.json(data.foods);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
}
