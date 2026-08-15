

function validTree(n, edges) {
    // needs one less egde
    if (edges.length > n-1) {
        return false;
    }

    const adj = Array.from({ length: n }, () => []);

    // for each edge, push to adjagency list
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visit = new Set();
    const dfs = (node, parent) => {
        // if not visited, visit neighbors
        if (visit.has(node)) {
            return false;
        }

        visit.add(node);
        for (const nei of adj[node]) {
            if (nei === parent) {
                continue;
            }

            if (!dfs(nei, node)) {
                return false;
            }
        }
        return true;
    }
    return dfs(0, -1) && visit.size === n;
}