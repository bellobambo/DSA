const linkedList = require("./linked-list");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list().append(value);
  }

  dequeue(value) {
    return this.list.removeFromfront();
  }

  peek(value) {
    return this.list.head.value;
  }

  isEmpty(value) {
    return this.list.isEmpty();
  }

  getSize(value) {
    return this.list.getSize();
  }

  print(value) {
    return this.list.print();
  }
}

const Queue = new LinkedListQueue()
console.log(queue.isEmpty())

Queue.enqueue(10)
Queue.enqueue(20)
Queue.enqueue(30)
console.log(queue.getSize())
queue.print()


