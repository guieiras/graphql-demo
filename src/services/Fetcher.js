import { observable } from "mobx";

export default class Fetcher {
  constructor() {
    this.requests = observable([]);
  }

  get(url) {
    return window.fetch(url).then((response) => {
      return response.blob().then((blob) => {
        const size = blob.size;
        return new Response(blob).text().then((json) => {
          const pack = { url: response.url, size, json };
          this.requests.push(pack);
          return pack;
        });
      });
    });
  }
}
