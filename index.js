const axios = require("axios").default;

//GET AUTH TOKEN
async function auth(url, credentails) {
  const resp = await axios.post(url, newPost);
  return resp.data.token;
}
///GET ACCOUNTS
async function get_accounts(url, token) {
  var config = {
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

////GET ACCOUNT TYPES
async function get_account_types(url, token) {
  var config = {
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
///GET ACCESS POLICIES
async function get_access_policies(url, token) {
  var config = {
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function post_accounts(url, token, data) {
  var config = {
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function post_user_invitations(url, token, data) {
  var config = {
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
module.exports.post_user_invitations = post_user_invitations;
module.exports.post_accounts = post_accounts;
module.exports.get_access_policies = get_access_policies;
module.exports.get_account_types = get_account_types;
module.exports.get_accounts = get_accounts;
module.exports.auth = auth;
