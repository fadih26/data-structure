const Node = require('./Node');
  
  class LinkedList {
    constructor() {
      this.head = null; // The first node in the list
      this.size = 0;    // Number of nodes in the list
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.size++;
    }
  
    // Insert a node at a specific position
    insertAt(data, position) {
      if (position < 0 || position > this.size) {
        return false; // Invalid position
      }
  
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let index = 0;
        while (index < position - 1) {
          current = current.next;
          index++;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
  
      this.size++;
      return true;
    }
  
    // Remove a node at a specific position
    removeFrom(position) {
      if (position < 0 || position >= this.size) {
        return null; // Invalid position
      }
  
      if (position === 0) {
        const removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode.data;
      } else {
        let current = this.head;
        let index = 0;
        while (index < position - 1) {
          current = current.next;
          index++;
        }
        const removedNode = current.next;
        current.next = current.next.next;
        this.size--;
        return removedNode.data;
      }
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
      result += 'null';
      console.log(result);
    }
  }
  
  // Example usage:
  const myList = new LinkedList();
  myList.append(1);
  myList.append(2);
  myList.append(3);
  myList.insertAt(4, 1); // Insert 4 at position 1
  myList.removeFrom(2);  // Remove node at position 2
  myList.print(); // Output: 1 -> 4 -> 3 -> null
 