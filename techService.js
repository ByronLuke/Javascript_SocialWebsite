var techService = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies",
};

techService.deleteById = (id) => {
    const config = {
        method: "DELETE",
        url: `${techService.endpoint}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then(() => id)
};

techService.current = () => {
    const config = {
        method: "GET",
        url: `${techService.endpoint}/current`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config);
};

techService.submitNewCo = (payload) => {
    const config = {
        method: "POST",
        url: techService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then((response) => { return { id: response.data.item, ...payload } })
};

techService.getTechCompanies = () => {
    const config = {
        method: "GET",
        url: `${techService.endpoint}?pageIndex=0&pageSize=10`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

techService.getById = (id) => {
    const config = {
        method: "GET",
        url: `${techService.endpoint}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

techService.update = (id, payload) => {
    const config = {
        method: "PUT",
        url: `${techService.endpoint}/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => { return { id: id, ...payload } })

};
