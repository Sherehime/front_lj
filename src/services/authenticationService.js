


export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

const  DLINK ="dev-sw.landpro.site";

export const loginUserService = (request) => {

  const LOGIN_API_ENDPOINT = `https://${DLINK}/oauth/v2/token`;
  const username =request.user.username;
  const  password = request.user.password;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'password',
      client_id: '30_1knot2bfq6e8kccc8s04kw80sscsgogscs4wogkgw8s40g448c' ,
      client_secret: '1ib8nhrwo3vo8gg8ws0cwc80kc0ksskoo4oowggkos0c4gck4g',
      username: username,
      password: password

    })
    //JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      const data = response.json();
      console.log('LOGIN_API_ENDPOINT');
      console.log(data);
      return response.json();


    })
    .then(json => {
      console.log("sss")
      console.log(json);
      return json;
    });
};