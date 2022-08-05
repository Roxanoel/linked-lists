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
            console.log(current);
            current.next = Node(value);
            console.log(current);
        }
    }

    return {
        getHead,  // lol
        append,
    }
}

module.exports = LinkedList;