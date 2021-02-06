function addEdge(u, v, adj) {
    adj[u].push(v);
    adj[v].push(u);
}
function addVertex(u, adj, visited) {
    adj[u] = [];
    visited[u] = 0;
}

// Adjacency List for storing the graph
let adj = {};

// keep track of visited nodes
let visited = {};

// Add vertices

addVertex(1, adj, visited);
addVertex(2, adj, visited);
addVertex(3, adj, visited);
addVertex(4, adj, visited);
addVertex(5, adj, visited);
addVertex(6, adj, visited);
addVertex(7, adj, visited);
addVertex(8, adj, visited);
addVertex(9, adj, visited);

// Add edges

addEdge(2, 1, adj);
addEdge(2, 4, adj);
addEdge(2, 3, adj);
addEdge(1, 5, adj);
addEdge(4, 5, adj);
addEdge(3, 6, adj);
addEdge(5, 8, adj);
addEdge(6, 7, adj);
addEdge(8, 9, adj);
addEdge(7, 9, adj);

// Start BFS

let queue = [];
queue.push(2);
visited[2] = 1;
let bfs_traversal = [];

while(queue.length != 0){
    let u = queue.shift();
    bfs_traversal.push(u);

    for (let index = 0; index < adj[u].length; index++) {
        if (visited[adj[u][index]] == 0) {
            visited[adj[u][index]] = 1;
            queue.push(adj[u][index]);
        }
    }
}

// Print out the BFS traversal

console.log(bfs_traversal)