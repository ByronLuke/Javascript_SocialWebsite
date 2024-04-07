var friendsService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends",
};

friendsService.deleteById = (id) => {
    const config = {
        method: "DELETE",
        url: `${friendsService.endpoint}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then(() => id)
};

friendsService.current = () => {
    const config = {
        method: "GET",
        url: `${friendsService.endpoint}/current`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config);
};

friendsService.submitNewFriend = (payload) => {
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then((response) => { return { id: response.data.item, ...payload } })
};

friendsService.getByFriendsPage = () => {
    const config = {
        method: "GET",
        url: `${friendsService.endpoint}?pageIndex=0&pageSize=10`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

friendsService.getById = (id) => {
    const config = {
        method: "GET",
        url: `${friendsService.endpoint}/${id}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}

friendsService.update = (id, payload) => {
    const config = {
        method: "PUT",
        url: `${friendsService.endpoint}/${id}`,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => { return { id: id, ...payload } })

};

friendsService.searchFriends = (string) => {
    const config = {
        method: "GET",
        url: `${friendsService.endpoint}/search?pageIndex=0&pageSize=10&q=${string}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
}
// function sumbitUpdatedFriend(e) {
//     e.preventDefault()
//     payload = formData()
//     payload.id = id;
//     payload.statusId = "Active"
//     friendsService.update(id, payload).then(onSuccessUpdatedFriend).catch(onErrorUpdatedFriend)
// }
// function onSuccessUpdatedFriend(response) {
//     var card = $(`button[name='${response.id}']`).closest(".card")
//     card.find('.title').text(response.title)
//     card.find('.summary').text(response.summary)
//     card.find('.bio').text(response.bio)
//     card.find('.slug').text(response.slug)
//     card.find(".card-img-top").attr("src", response.primaryImage.imageUrl)


// }
// function onErrorUpdatedFriend(err) {
//     console.error(err)
// }