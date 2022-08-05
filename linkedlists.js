function LinkedList() {
    let head = null;

    // Getters
    function getHead() {
        return head;
    }

    function getTail() {
        if (head === null) return null;
        
        let tail = head;

        while (tail.next != null) {
            tail = tail.next;
        }
        return tail;
    }

    // Factories
    function Node(value = null, next = null) {
        return {
            data: value,
            next,
        }
    };

    // Functionality
    function append(value) {
        // If the list is empty, create new node that will become the head.
        if (head === null) {
            head = Node(value);
        } else {
            // Add new node as next on the last link. 
            getTail().next = Node(value);
        }
    }

    function prepend(value) {
        // If the list is empty, create new node that will become the head.
        if (head === null) {
        head = Node(value);
        } else {
            // If there is already a head, store previous head
            const previousHead = head;

            // update head variable to the new node, with old head as its "next" property. 
            head = Node(value, previousHead);
        }
    }

    return {
        getHead,  // lol
        getTail,
        append,
        prepend,
    }
}

module.exports = LinkedList;