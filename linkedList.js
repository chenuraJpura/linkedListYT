// Construct Single for Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  getData(){
    return this.data;
  }

  getNext(){
    return this.next;
  }

}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
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

  // Insert at index
  insertAt(data, index) {
    //  If index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    //console.log(this.head.getNext());
    let current = this.head;
    let toStringNode="";
    while (current) {
      toStringNode+=` ${current.data} `;
      current = current.next;
    }
    console.log(toStringNode);
  }
}

//intializing new linkedlist
const newLinkedList = new LinkedList();

//create part

//enter first intail value for linked list
newLinkedList.insertFirst(100);

//enter second value for our linkedlist using insertFirst function
newLinkedList.insertFirst(200);

//after using insertFirst function
newLinkedList.printListData();


//insert last
newLinkedList.insertLast(50);
//print after enter new value for last 
newLinkedList.printListData();

//update part

//insert by index
newLinkedList.insertAt(150,1);
//print after enter new value for index 1 
newLinkedList.printListData();


//view/read part

//view existing index
//newLinkedList.getAt(1);

//remove part

//remove node by index
newLinkedList.removeAt(2);
//print after remove index 2 value 100 
newLinkedList.printListData();


newLinkedList.clearList();
newLinkedList.printListData();
