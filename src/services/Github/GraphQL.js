export default function GithubGraphqlClient(client) {  
  return (owner) => {
    return client.post("https://api.github.com/graphql", `query {
      repositoryOwner(login:"${owner}") {
        repositories(first: 100) {
          nodes {
            name
            pullRequests(states: [OPEN,CLOSED,MERGED]) {
              totalCount
            }
            collaborators {
              totalCount
            }
          }
        }
      }
    }`).then((response) => {
      return {
        owner,
        repositories: response.json.data.repositoryOwner.repositories.nodes.map((node) => ({
          name: node.name,
          collaborators: node.collaborators.totalCount,
          prs: node.pullRequests.totalCount,
        }))
      }
    });
  }
}
