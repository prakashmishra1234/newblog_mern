const axios = require("axios");

class UserApi {
  getUserData = () => {
    axios
      .get(`http://localhost:3000/api/v1/me`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };
}

const api = new UserApi();

console.log(api.getUserData());
