function LinkedList() {
    let head = null;

    // Getters
    function getHead() {
        return head;
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
        // If there is already a head, follow chain until the last link
            let current = head;
            while(current.next != null) {
                current = current.next;
            }
            // Add new node as next on the last link. 
            current.next = Node(value);
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
        append,
        prepend,
    }
}

module.exports = LinkedList;