/**
 * Insantiate queue with root, then while queue is not empty: shift through
 * old level, pushing children to queue and keep track of level size 
 * */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    if (!root) return [];
    const q: TreeNode[] = [];
    let levelSize = 1;
    q.push(root);

    while(q.length > 0) {
        const level: number[] = [];
        let newLevelSize = 0;
        for (let i = 0; i < levelSize; i++) {
            const node = q.shift();
            level.push(node.val);
            if (node.left){
                q.push(node.left);
                newLevelSize++;
            }
            if (node.right) {
                q.push(node.right);
                newLevelSize++;
            }
        }
        result.push(level);
        levelSize = newLevelSize;
    }
    return result;
};