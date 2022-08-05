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
        }
        // If there is already a head, follow chain until the last link & add new node as next. 
    }

    return {
        getHead,  // lol
        append,
    }
}

module.exports = LinkedList;