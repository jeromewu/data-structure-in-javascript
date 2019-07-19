#!/usr/bin/env node

const Node = (value, next=null) => ({
  value,
  next,
});

const LinkedList = () => ({
  root: Node(-1),
  init(n) {
    let it = this.root;
    for(let i = 0; i < n; i++) {
      it.next = Node(i);
      it = it.next;
    }
  },
  print() {
    let it = this.root;
    while(it !== null) {
      process.stdout.write(`${it.value} `);
      it = it.next;
    }
    process.stdout.write('\n');
  },
  getNode(idx) {
    let cnt = 0;
    let it = this.root;
    while(it !== null) {
      if (cnt === idx) {
        return it;
      } else {
        it = it.next;
        cnt++;
      }
    }
    return null;
  },
  delNode(node) {
    if (node === null) {
      return;
    }

    let it = this.root;
    while(it !== null) {
      if (it.next === node) {
        it.next = node.next;
        break;
      } else if (it === node) {
        this.root = node.next;
        break;
      }
      it = it.next;
    }
  },
  insertNode(idx, node) {
    let it = this.root;
    let cnt = 0;
    while(cnt !== idx && it.next !== null) {
      it = it.next;
      cnt++;
    }
    if (node !== null) {
      node.next = it.next;
      it.next = node;
    }
  }
});

const list = LinkedList();

list.init(3);
list.print();
list.delNode(list.getNode(1));
list.print();
list.delNode(list.getNode(1));
list.print();
list.delNode(list.getNode(10));
list.print();
list.insertNode(0, Node(12));
list.print();
list.insertNode(10, Node(3));
list.print();
