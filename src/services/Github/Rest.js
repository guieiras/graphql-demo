export default function GithubRestClient(client) {
  const getPaginated = (url, perPage = 50) => {
    return new Promise((resolve, reject) => {
      const recursiveFetch = (page, previousState) => {
        client.get(`${url}?page=${page}&per_page=${perPage}`).then((response) => {
          const results = response.json;
          if(results.length === perPage) {
            recursiveFetch(page + 1, previousState.concat(results));
          } else {
            resolve(previousState.concat(results));
          }
        }).catch(reject);
      }

      recursiveFetch(1, []);
    });
  }

  const mapRepositories = (repositories) => {
    return repositories.map((repository) => new Promise((resolve) => {
      Promise.all([
        getPaginated(`https://api.github.com/repos/${repository.full_name}/collaborators`),
        getPaginated(`https://api.github.com/repos/${repository.full_name}/pulls?state=all`)
      ]).then((data) => {
        resolve({ name: repository.name, collaborators: data[0].length, prs: data[1].length })
      });
    }));
  }
  
  return (owner) => {
    return getPaginated(`https://api.github.com/users/${owner}/repos`).then((repositories) => {
      return Promise.all(mapRepositories(repositories)).then((repositories) => ({
        owner, repositories
      }));
    });
  }
}
