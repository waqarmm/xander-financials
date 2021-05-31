# xander-financials
# What is this

GET and POST all accounts info for financial transactions.

# Installation

`npm i testserver --save`

Then ...

```
Auth Example
async function auth(url, credentails) {
  const resp = await axios.post(url, newPost);
  return resp.data.token;
}
```

## OPTIONS

url :https://sandbox.primetrust.com/auth/jwts
credentails= {
email: "xyz@mail.com",
password: "your password",
};

```
 Get Example
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

Post Example
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
```
