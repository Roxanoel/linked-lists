const LinkedList = require('./linkedlists');

// For scoping 
let linkedList;

beforeEach(() => {
    // Create a new blank instance
    linkedList = LinkedList();
});

describe('Appending & prepending nodes', () => 
{ 
    test('append(value) on empty list', () => {
    linkedList.append('value');
    expect(linkedList.getHead().data).toBe('value');
    expect(linkedList.getHead().next).toBe(null);
    });
    test('prepend(value) on empty list', () => {
        linkedList.prepend('value');
        expect(linkedList.getHead().data).toBe('value');
        expect(linkedList.getHead().next).toBe(null);
    });
    test('append(value) on list which already has a head', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.getHead().next.data).toBe(2);
    });
    test('prepend(value) on list which already has a head', () => {
        linkedList.append(1);
        linkedList.prepend(2);
        expect(linkedList.getHead().data).toBe(2);
    });
});

describe('LinkedList property fields', () => {
    test('head is null for empty list', () => {
        expect(linkedList.getHead()).toBe(null);
    });
    test('tail is null for empty list', () => {
        expect(linkedList.getTail()).toBe(null);
    });
    test('tail is correctly updated when adding a new node', () => {
        linkedList.append(1);
        expect(linkedList.getTail().data).toBe(1);
        linkedList.append(2);
        expect(linkedList.getTail().data).toBe(2);
    });
    test('size is 0 for empty list', () => {
        expect(linkedList.getSize()).toBe(0);
    });
    test('size is updated correctly upon adding new elements', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.getSize()).toBe(2);
    });
});

describe('Retrieving nodes by "index"', () => {
    test('at(index) works on a list of size 1', () => {
        linkedList.append(1);
        expect(linkedList.at(0).data).toBe(1);
    });
    test('at(index) returns null if the index overflows the list', () => {
        linkedList.append(1);
        expect(linkedList.at(1)).toBe(null);
    });
    test('at(index) works for a larger list', () => {
        for(let i = 1; i < 6; i++) {
            linkedList.append(i);  // 1(head) -> 2 -> 3 -> 4 -> 5(tail) -> null
        }
        expect(linkedList.at(2).data).toBe(3);
    });
});

describe('Removing nodes', () => {
    test('pop works for a list of size 1', () => {
        linkedList.append(1);
        linkedList.pop();
        expect(linkedList.getSize()).toBe(0);
    });
    test('popping the only element of a list resets its head and tail', () => {
        linkedList.append(1);
        linkedList.pop();
        expect(linkedList.getHead()).toBe(null);
        expect(linkedList.getTail()).toBe(null);
    });
    test('pop removes the last element of the list', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.getTail().data).toBe(2);
        linkedList.pop();
        expect(linkedList.getTail().data).toBe(1);
    });
});

describe.skip('Searching the list', () => {
    test('contains returns true if value is in the list', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.contains(1)).toBe(true);
        expect(linkedList.contains(2)).toBe(true);
    });
    test('contains returns false if value is not in the list', () => {
        expect(linkedList.contains(2)).toBe(false);
        linkedList.append(1);
        expect(linkedList.contains(2)).toBe(false);
    });
    test('find(value) returns null if the list is empty', () => {
        expect(linkedList.find(1)).toBe(null);
    });
    test('find(value) returns null if the value is not contained within', () => {
        linkedList.append(1);
        expect(linkedList.find(2)).toBe(null);
    });
    test('find(value) returns the index of said value', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.find(1)).toBe(0);
        expect(linkedList.find(2)).toBe(1);
    }); 
    test('find(value) returns first instance of duplicate value', () => {
        linkedList.append(1);
        linkedList.append(1);
        expect(linkedList.find(1)).toBe(0);
    });
});

describe.skip('Transform list into string', () => {
    test('toString returns "null" if the list is empty', () => {
        expect(linkedList.toString()).toBe('null');
    });
    test('toString returns correct format when single element', () => {
        linkedList.append(1);
        expect(linkedList.toString()).toBe('( 1 ) -> null');
    });
    test('toString returns correct format when more than one element', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.toString()).toBe('( 1 ) -> ( 2 ) -> null');
        linkedList.append(3);
        expect(linkedList.toString()).toBe('( 1 ) -> ( 1 ) -> ( 3 ) -> null');
    });
});

