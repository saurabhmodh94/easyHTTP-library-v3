class EasyHTTP {
    // GET
    async get(url) {
        let response = await fetch(url);
        let resultData = await response.json();
        return resultData;
    }
    //POST
    async post(url, data) {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let resultData = await response.json();
        return resultData;
    }
    // PUT
    async put(url, data) {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let resultData = await response.json();
        return resultData;
    }
    // DELETE
    async delete(url, ) {
        let response = await fetch(url, {
            method: 'DELETE'
        });
        let resultData = await response.json();
        return resultData;
    }
}
