var eventsService = {
    endpoint: "https://api.remotebootcamp.dev/api/events",
};

eventsService.postNewEvent = (payload) => {
    const config = {
        method: "POST",
        url: eventsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then((response) => { return { id: response.data.item, ...payload } })
};

eventsService.getUpcomingEventsByPage = (pageIndex, pageSize) => {
    const config = {
        method: "GET",
        url: `${eventsService.endpoint}/feed?pageIndex=${pageIndex}0&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}