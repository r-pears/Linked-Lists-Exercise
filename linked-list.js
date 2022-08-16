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
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.length++;
    }
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.length++;
    }
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error('This list is empty!');
    }

    let currentNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentNode.val;
    }

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    let tail = this.tail;

    this.tail = currentNode;
    this.tail.next = null;
    this.length--;

    return tail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error('This list is empty!');
    }

    let currentNode = this.head;

    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return currentNode.val;
    }

    this.head = currentNode.next;
    this.length--;

    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;

    for (let i = 0; i <= this.length; i++){
      if (i === idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;

    for (let i = 0; i <= this.length; i++){
      if (i === idx) {
        currentNode.val = val;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index');
    }

    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }    

    if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    let currentNode = this.head;
    
    for (let i = 0; i < idx; i++){
      if (i === (idx - 1)) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
      }
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (
      this.length === 0 ||
      idx < 0 ||
      idx >= this.length
    ) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;

    if (idx === 0) {
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return currentNode.val;
    }

    for (let i = 0; i < idx; i++){
      if (i === (idx - 1)) {
        let preNode = currentNode;
        currentNode = currentNode.next;

        preNode.next = currentNode.next;
        this.length--;

        if (this.tail === currentNode) {
          this.tail = preNode;
        }

        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;

    if (this.length === 0) {
      return total;
    }

    let currentNode = this.head;
    
    for (let i = 0; i <= this.length - 1; i++){
      total += currentNode.val;
      currentNode = currentNode.next;
    }
      
    return (total / this.length);
  }
}

module.exports = LinkedList;
