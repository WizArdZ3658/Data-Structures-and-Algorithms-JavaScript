function addEdge(u, v, adj) {
    adj[u].push(v);
    adj[v].push(u);
}
function addVertex(u, adj, visited) {
    adj[u] = [];
    visited[u] = 0;
}

// Recursive DFS function
function dfs(u, adj, node_count, visited) {
    let temp = 0;

    for(let i = 0; i < adj[u].length; i++) {
        if (visited[adj[u][i]] == 0) {
            visited[adj[u][i]] = 1;
            temp += dfs(adj[u][i], adj, node_count, visited);
        }
    }

    node_count[u] = temp + 1;

    return temp + 1;
}

// Adjacency List for storing the graph
let adj = {};

// Keep track of visited nodes
let visited = {};

let n = 9;
for(let i = 1; i <= n; i++) {
    addVertex(i, adj, visited);
}

addEdge(2, 1, adj);
addEdge(2, 4, adj);
addEdge(2, 3, adj);
addEdge(1, 5, adj);
addEdge(1, 6, adj);
addEdge(3, 7, adj);
addEdge(3, 8, adj);
addEdge(3, 9, adj);

let node_count = {};
visited[2] = 1;

let temp = dfs(2, adj, node_count, visited);

for(let key in node_count) {
    console.log(key, node_count[key]);
}