var jobsService = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs",
};

jobsService.submitNewJob = (payload) => {
    const config = {
        method: "POST",
        url: jobsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then((response) => { return { id: response.data.item, ...payload } })
};

jobsService.getJobsByPage = (pageIndex, pageSize) => {
    const config = {
        method: "GET",
        url: `${jobsService.endpoint}?pageIndex=${pageIndex}0&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

jobsService.getById = (id) => {
    const config = {
        method: "GET",
        url: `${jobsService.endpoint}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

jobsService.getBySlug = (slug) => {
    const config = {
        method: "GET",
        url: `${jobsService.endpoint}/${slug}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

jobsService.update = (id, payload) => {
    const config = {
        method: "PUT",
        url: `${jobsService.endpoint}/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config).then(() => { return { ...payload } })

};
jobsService.searchJobs = (string) => {
    const config = {
        method: "GET",
        url: `${jobsService.endpoint}/search?pageIndex=0&pageSize=10&searchTerm=${string}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}
