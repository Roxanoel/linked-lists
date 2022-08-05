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

    function getSize() {
        if (head === null) return 0;

        let count = 1; 
        let current = head;

        while(current.next != null) {
            count ++;
            current = current.next;
        }

        return count;
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

    function at(index) {
        if (head === null) return null;

        // Initialize variable to hold current position in chain 
        let current = head;
        // If more than one value, count to the right index
        for (let i = 0; i < index; i++) {
            current = current.next;
        } 

        if (!current) return null;

        return current;
    }

    function pop() {
        // If there is no head, return nothing.
        if (head === null) return;
        // If there is just one element, reset head to null & return.
        if (head.next === null) {
            head = null;
            return;
        }

        // Initialize variable to keep track of position in chain
        let current = head;
        // Traverse chain until penultimate link
        while (current.next.next != null) {
            current = current.next;
        }
        // remove last link
        current.next = null;
    }

    function contains(value) {
        // If list is empty, automatically return false.
        if (head === null) return false;
        
        // Otherwise, traverse list until a match is found
        let current = head;
        while(current != null) {
            // if value is found return true
            if (current.data === value) return true;
            // Otherwise advance one link in the chain
            current = current.next;
        }
        // If the whole chain was traversed without a match, 
        // check if the last link is a match. Otherwise, return
        // false.
        return false;
    }

    function find(value) {
        // If list is empty, automatically return null .
        if (head === null) return null;


        // Otherwise, traverse list until a match is found
        let index = 0; 
        let current = head;

        while(current != null) {
            if (current.data === value) return index;
            index ++;
            current = current.next;
        }
        // If no match was found:
        return null;
    }

    function toString() {
        // If chain is empty:
        if (head === null) return 'null';

        // Initialize string 
        let string = '';

        // Keep track of current link
        let current = head;

        // Traverse chain & add values to string following template
        while (current != null) {
            string = `${string}( ${current.data} ) -> `;
            current = current.next;
        }
        // Add null at the end 
        string = `${string}null`;

        return string;
    }

    return {
        getHead,  // lol
        getTail,
        getSize,
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
    }
}

module.exports = LinkedList;