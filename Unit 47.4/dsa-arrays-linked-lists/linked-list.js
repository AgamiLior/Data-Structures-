/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      node.next = this.head;
      this.head = node;

      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      throw new Error("This list is empty!");
    }

    let currentNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentNode.val;
    }

    while (currentNode.next !== this.tail) {
      currentNode = node.next;
    }

    const tail = this.tail;

    this.tail = currentNode;
    this.tail.next = null;

    this.length--;

    return tail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("This list is empty!");
    }

    const node = this.head;

    if (node.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return node.val;
    }

    this.head = node.next;
    this.length--;

    return node.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let i = 0;
    let current = this.head;
    while (i < idx && current.next) {
      current = current.next;
      i++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index");
    }

    if (idx === this.length - 1) {
      this.tail.val = val;
    } else {

      let currentNode = this.head;
      let i = 0;

      while (i < idx) {
        currentNode = currentNode.next;
        i++;
      }

      currentNode.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid Index");
    }

    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;

      return;
    }

    if (idx === this.length) {
      this.tail.next = node;
      this.tail = node;

      this.length++;
    }

    let currentNode = this.head;
    let i = 0;

    while (i < idx - 1) {
      currentNode = currentNode.next;
      i++;
    }

    node.next = currentNode.next;
    currentNode.next = node;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (
      this.length === 0 ||
      idx < 0 ||
      idx >= this.length) {
      throw new Error("Invalid index!");
    }
    let currentNode;

    if (idx === 0) {
      currentNode = this.head;
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return currentNode.val;
    }

    let i = 0;
    currentNode = this.head;

    while (i < idx - 1) {
      currentNode = currentNode.next;
      i++;
    }

    const preNode = currentNode;
    currentNode = currentNode.next;

    preNode.next = currentNode.next;
    this.length--;

    if (this.tail === currentNode) {
      this.tail = preNode;
    }

    return currentNode;
  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0) {
      return 0;
    }


    let total = 0;

    let currentNode = this.head;
    total += currentNode.val;

    while (currentNode.next) {
      currentNode = currentNode.next;
      total += currentNode.val;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
