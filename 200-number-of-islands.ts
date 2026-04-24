/**
 * Solution explanation: 
 * visited grid, iterate through spots
 * If not visited and island -- explore island in recursive
 * function, and mark visited
 * 
 */

function numIslands(grid: string[][]): number {
    let numIslands = 0;
    const visited = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(false)
    );

    function explore(row: number, col: number): void {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
            return;
        }
        if (visited[row][col] || grid[row][col] === "0") return;
        
        visited[row][col] = true;
        explore(row-1, col);
        explore(row+1, col);
        explore(row, col-1);
        explore(row, col+1);
    }

    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === "1") {
                numIslands++;
                explore(i, j);
            }
        }
    }

    return numIslands;
};
