// CLASS TO REPRESENT THE LIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// CLASS WITH VALUE PROPERTY AND LINK TO THE NEXT NODE
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ADD NEW NODE TO END OF LIST
  append(value) {
    const node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // ADD NEW NODE TO HEAD OF LIST
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  // SHOW LIST IN CONSOLE
  toString() {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    let curr = this.head;
    let str = "";
    let tailend = "";
    while (curr) {
      curr.next ? (tailend = "") : (tailend = curr.next);
      str += curr.value + " -> " + tailend;
      curr = curr.next;
    }
    console.log(str);
  }
  // SHOW SIZE OF LIST IN CONSOLE
  sizeOfList() {
    console.log(this.size);
  }
  //SHOW HEAD
  headShow() {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    console.log(this.head);
  }
  // SHOW TAIL
  tailShow() {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    while (it < this.size - 1) {
      it++;
      prev = curr;
      curr = curr.next;
    }
    console.log(curr);
  }
  // SHOW NODE AT GIVEN INDEX
  at(index) {
    if (index < 0 || index > this.size - 1) {
      console.log(
        "List size is either nil OR Index provided exceeds list size"
      );
      return;
    }
    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    while (it < index) {
      it++;
      prev = curr;
      curr = curr.next;
    }
    console.log(curr);
  }
  // REMOVE LAST ELEMENT FROM LIST
  pop() {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    while (it < this.size - 1) {
      it++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    this.size--;
  }
  // RETURNS TRUE IF THE ELEMENT EXISTS IN THE LIST, IF NOT FALSE
  contains(element) {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    while (it < this.size) {
      it++;
      if (curr.value === element) {
        console.log(true);
        return;
      }
      prev = curr;
      curr = curr.next;
    }
    console.log(false);
  }
  // RETURNS INDEX OF NODE, IF N/A RETURNS 'NULL'
  lookFor(element) {
    if (this.size <= 0) {
      console.log("List has no nodes");
      return;
    }
    let curr,
      prev,
      it = 0;
    curr = this.head;
    prev = curr;
    while (it < this.size) {
      it++;
      if (curr.value === element) {
        console.log(`Index of node = ${it - 1}`);
        return;
      }
      prev = curr;
      curr = curr.next;
    }
    console.log("null");
  }
  // INSERT A NEW NODE WITH GIVEN VALUE AT GIVEN INDEX
  insertAt(element, index) {
    if (index > this.size) {
      console.log("Index provided exceeds list size");
      return;
    }
    const node = new Node(element);
    let curr, prev;
    curr = this.head;
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      curr = this.head;
      let it = 0;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }
  // REMOVE THE NODE AT THE GIVEN INDEX
  removeAt(index) {
    if (this.size <= 0 || index > this.size) {
      console.log("List has no elements OR Index provided exceeds list size");
      return;
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;
      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
      }
    }
  }
}
