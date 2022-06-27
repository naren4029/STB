const serviceManager = {
  api: (method: string, url: string, params: any) => {
    let options = {};
    if (method === "POST") {
      options = {
        method: method,
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    return fetch(url, options).then((res) => res.json());
  },
};

export default serviceManager;
