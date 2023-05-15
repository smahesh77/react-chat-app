const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//product = 28bcb244-5615-4350-86d5-d8a7fc8d2b5f

//key = 5c821132-7e7a-4d84-a545-1a5e1fd4646f

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, firstName: username},
        {headers: {"private-key": "5c821132-7e7a-4d84-a545-1a5e1fd4646f"}}
    )
    return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.response.status).json(err.response.data)

  }
});

app.listen(3001, () => {
    console.log("listening to port 3001")
});