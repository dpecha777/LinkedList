/**
 * New object which can be added to a list
 * @param data to store in this object
 * @constructor
 */
var Node = function (data) {
    this.data = data;
    this.prev = null;
    this.next = null;
};

/**
 * Linked list to store nodes
 * @constructor
 */
var SinglyLinkedList = function () {
    this._length = 0;
    this.head = null;
    this.end = null;
};

/**
 * This method show how many nodes are in list
 */
SinglyLinkedList.prototype.countNodeInList = function () {
    var count = this._length;
    return console.log("Pocet objektu v seznamu: " + count);
};

/**
 * This method return value that show if the list is empty or not
 * @returns {boolean}
 */
SinglyLinkedList.prototype.isEmpty = function () {
    return this.head === null;
};

/**
 * This method add new node to a list
 * @param data to store in current node
 * @returns {Node}
 */
SinglyLinkedList.prototype.add = function (data) {
    var node = new Node(data);
    if (this.end) {
        node.prev = this.end;
        this.end.next = node;
        this.end = node;
    } else {
        node.prev = null;
        this.head = node;
        this.end = node;
    }

    this._length++;
    return node;
};

/**
 * This method add new node to start of current list
 * @param val
 */
SinglyLinkedList.prototype.addNodeToHead = function (val) {
    var node = new Node(val);

    if (this.isEmpty()) {
        this.head = node;
        node.prev = null;
        return;
    }
    this.head.prev = node;
    var lastHead = this.head;
    this.head = node;
    this.head.next = lastHead;

};

/**
 * This method check if some value is storing in the list
 * @param val that we looking for
 * @returns {null|Node|*} node object or null
 */
SinglyLinkedList.prototype.containIt = function (val) {
    var current = this.head;
    while (current !== null ) {
        if (current.data === val) {
            return current;
        }
        current = current.next;
    }

};

/**
 * This method remove node from list
 * @param val is value that specify node to remove
 */
SinglyLinkedList.prototype.removeNode = function (val) {
    var toRemove = this.containIt(val);

    if (toRemove === undefined) {
        console.log("Pozadovane cislo neni v seznamu.");
        return;
    }
    else {

        if (this.head.data === toRemove.data) {
            this.head.next.prev = null;
            this.head = this.head.next;
            this._length--;
            return;
        }

        if (this.end.data === toRemove.data) {
            toRemove.prev.next = null;
            this._length--;
            return;
        }

        if (toRemove.data === val && (toRemove !== this.head)) {
            toRemove.prev.next = toRemove.next;
            toRemove.next.prev = toRemove.prev;
            this._length--;
            return;
        }
    }
};

/**
 * This method print out all values that are stored in the list
 * @returns {string} string enum of nodes
 */
SinglyLinkedList.prototype.printAllNodeInList = function () {
    var output = '[';
    var current = this.head;

    //TODO: kouknout na hodnotu undefined

    while (current !== null) {
        output += current.data;
        if (current.next !== null) {
            output += ', ';
        }
        current = current.next;
    }
    output += ']';
    return output;
};

/**
 * ===================================================================================
 * The end of implementation
 * ===================================================================================
 */




var list = new SinglyLinkedList();

for (var i = 0; i < 50; i++) {
    list.add(Math.floor((Math.random() * 100) + 1));
}

for (var x = 0; x < 10; x++) {
    var cislo1 = Math.floor((Math.random() * 100) + 1)
    list.removeNode(cislo1);
    console.log("Cislo k vymazani " + cislo1);
}

for (var y = 0; y < 5; y++) {
    var cislo2 = Math.floor((Math.random() * 100) + 1)
    list.addNodeToHead(cislo2);
    console.log("Pridano cislo: " + cislo2);
}


console.log(list.printAllNodeInList());
list.countNodeInList();
console.log(list);

//TODO: random generator

