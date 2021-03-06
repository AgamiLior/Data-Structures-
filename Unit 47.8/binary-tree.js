
   
/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  _goDeep(node, depth, setDepth) {
    if (!node) {
      setDepth(depth);
      return;
    }

    depth++;

    if (!node.left && !node.right) {
      setDepth(depth);
      return;
    }

    if (node.left) {
      this._goDeep(node.left, depth, setDepth);
    }
    if (node.right) {
      this._goDeep(node.right, depth, setDepth);
    }
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let mininum = null;

    const _setMinDepth = (depth) => {
      if (mininum === null) {
        mininum = depth;
        return;
      }

      if (mininum > depth) {
        mininum = depth;
        return;
      }
    }

    this._goDeep(this.root, 0, _setMinDepth);

    return mininum;
  }



  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maximum = null;

    const _setMaximum = (depth) => {
      if (maximum === null) {
        maximum = depth;
        return;
      }

      if (maximum < depth) {
        maximum = depth;
        return;
      }
    }

    this._goDeep(this.root, 0, _setMaximum);

    return maximum;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let max = 0;

    const _maxSum = (node) => {
      if (!node) {
        return 0;
      }

      const left = _maxSum(node.left);
      const right = _maxSum(node.right);

      max = Math.max(max, node.val + left + right);

      return Math.max(0, left + node.val, right + node.val);
    }

    _maxSum(this.root);

    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    const _nextLarger = (lowerBound, node) => {
      if (node === null) {
        return;
      }

      if (node.val > lowerBound) {
        if (result == null || result > node.val) {
          result = node.val;
        }
      }

      _nextLarger(lowerBound, node.left);
      _nextLarger(lowerBound, node.right);
    }

    _nextLarger(lowerBound, this.root);

    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
