import http from '../http-common';

class ClassTestApi {
    static get(id: string) {
        return http.get(`/tutorials/${id}`);
    }

    getAll() {
        return http.get("/all");
    }
}

export default new ClassTestApi();