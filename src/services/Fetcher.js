import { observable } from "mobx";

export default class Fetcher {
  constructor() {
    this.requests = observable([]);
    this.handleResponse = this.handleResponse.bind(this);
  }

  get(url) {
    return window.fetch(url).then(this.handleResponse);
  }

  post(url, body) {
    return window.fetch(url, { body, method: "post" }).then(this.handleResponse);
  }

  handleResponse(response) {
    return response.blob().then((blob) => {
      const size = blob.size;
      return new Response(blob).text().then((json) => {
        const pack = { url: response.url, size, json: JSON.parse(json) };
        this.requests.push(pack);
        return pack;
      });
    });
  }

}
