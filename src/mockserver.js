import { createServer } from 'miragejs';

function mockServer() {

    let server = createServer(
        {
            routes() {
                this.urlPrefix = "http://fakeapi.com";
                this.namespace = "/v1/api";
                this.timing = 5000;

                this.get("/books", () => {
                    return [
                        { title: "Title1", author: "Author1", year: 1990},
                        { title: "Title2", author: "Author2", year: 1982},
                        { title: "Title3", author: "Author3", year: 1980}
                    ]
                })
            }
        }
    );

    return server
}

export default mockServer;