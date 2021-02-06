class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        var node = new Node(value);

        if (this.head == null) {
            this.head = node;
        }
        else {
            var current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    isEmpty() {
        return this.size == 0;
    }

    printSize() {
        console.log(this.size);
    }

    printList() {
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.value + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    }

    indexOf(element) {
        let count = 0;
        var current = this.head;

        while(current != null) {
            if (current.value == element) {
                return count;
            }

            current = current.next;
            count++;
        }

        return -1;
    }
}



var ll = new LinkedList();
console.log(ll.isEmpty());
ll.insert(10);
ll.insert(20);
ll.printSize();
ll.printList();
ll.insert(30); 
ll.insert(40); 
ll.insert(50); 
ll.printSize();
ll.printList();
console.log(ll.isEmpty());