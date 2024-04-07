var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

usersService.current = () => {
  const config = {
    method: "GET",
    url: usersService.endpoint + "/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

usersService.userLogout = () => {
  const config = {
    method: "GET",
    url: usersService.endpoint + "/logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

usersService.userLogin = (payload) => {
  const config = {
    method: "POST",
    url: usersService.endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

usersService.userRegister = (payload) => {
  const config = {
    method: "POST",
    url: usersService.endpoint + "/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

usersService.getById = (id) => {
  const config = {
    method: "GET",
    url: usersService.endpoint + "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
}
//     {
//   "firstName": "Byron",
//   "lastName": "Praetor",
//   "email": "byronpc@icloud.com",
//   "password": "Password12345!!",
//   "passwordConfirm": "Password12345!!",
//   "avatarUrl": "https://m.media-amazon.com/images/S/pv-target-images/481d1b16d6fffdcc29b3eb3e9a829e4f9182f6642c99ba0361efa47af77e9d04._SX300_.jpg",
//   "tenantId": "U06CJSS6EH0"
// }

//     {
//   "firstName": "Byron",
//   "lastName": "Luke",
//   "email": "byronpc@sabio.la",
//   "password": "Password12345!!",
//   "passwordConfirm": "Password12345!!",
//   "avatarUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marca.com%2Fen%2Flifestyle%2Fcelebrities%2F2022%2F10%2F23%2F635539ac46163f61ad8b4583.html&psig=AOvVaw1CtPZP4FKzLlmC47mrmRvt&ust=1706046626780000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPjL9Yr98YMDFQAAAAAdAAAAABAE",
//   "tenantId": "U06CJSS6EH0"
// }