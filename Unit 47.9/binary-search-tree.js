class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

 insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let node = this.root;

    while (node) {
      if (node.val > val) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else {
          node = node.left;
        }
      } else if (node.val < val) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else {
          node = node.right;
        }
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    const _insertRecursively = (node) => {
      if (node.val > val) {
        if (node.left === null) {
          node.left = newNode;
          return;
        } else {
          _insertRecursively(node.left);
        }
      } else if (node.val < val) {
        if (node.right === null) {
          node.right = newNode;
          return;
        } else {
          _insertRecursively(node.right);
        }
      } else {
        return;
      }
    }

    _insertRecursively(this.root);

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;

    while (node) {
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return undefined;
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const _findRecursively = (node) => {
      if (node === null) {
        return;
      }
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        return _findRecursively(node.left);
      } else {
        return _findRecursively(node.right);
      }
    }

    return _findRecursively(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    const values = [];

    const _traverse = (node) => {
      values.push(node.val);

      if (node.left !== null) {
        _traverse(node.left);
      }
      if (node.right !== null) {
        _traverse(node.right);
      }
    }
    _traverse(this.root);

    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    const values = [];

    const _traverse = (node) => {

      if (node.left !== null) {
        _traverse(node.left);
      }

      values.push(node.val);

      if (node.right !== null) {
        _traverse(node.right);
      }
    }
    _traverse(this.root);

    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */


  dfsPostOrder() {

    const values = [];

    const _traverse = (node) => {

      if (node.left !== null) {
        _traverse(node.left);
      }

      if (node.right !== null) {
        _traverse(node.right);
      }

      values.push(node.val);
    }
    _traverse(this.root);

    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodes = [];

    let level = 0;

    if (this.root !== null) {
      nodes[0] = [this.root];
    }

    while (nodes[level].length > 0) {
      if (nodes[level + 1] === undefined) {
        nodes[level + 1] = [];
      }
      nodes[level].forEach(node => {
        if (node.left !== null) {
          nodes[level + 1].push(node.left);
        }
        if (node.right !== null) {
          nodes[level + 1].push(node.right);
        }
      });

      level++;
    }


    let values = [];

    nodes.forEach(levelNodes => {
      values = values.concat(levelNodes.map(node => node.val));
    })

    return values;
  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
