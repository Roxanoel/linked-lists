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
    expect(linkedList.head.data).toBe('value');
    expect(linkedList.head.next).toBe(null);
    });
    test('prepend(value) on empty list', () => {
        linkedList.prepend('value');
        expect(linkedList.head.data).toBe('value');
        expect(linkedList.head.next).toBe(null);
    });
    test('append(value) on list which already has a head', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.head.next.value).toBe(2);
    });
    test('prepend(value) on list which already has a head', () => {
        linkedList.append(1);
        linkedList.prepend(2);
        expect(linkedList.head.value).toBe(2);
    });
});

describe('LinkedList property fields', () => {
    test('head is null for empty list', () => {
        expect(linkedList.head).toBe(null);
    });
    test('tail is null for empty list', () => {
        expect(linkedList.tail).toBe(null);
    });
    test('tail is correctly updated when adding a new node', () => {
        linkedList.append(1);
        expect(linkedList.tail.data).toBe(1);
        linkedList.append(2);
        expect(linkedList.tail.data).toBe(2);
    });
    test('size is 0 for empty list', () => {
        expect(size).toBe(0);
    });
    test('size is updated correctly upon adding new elements', () => {
        linkedList.append(1);
        linkedList.append(2);
        expect(size).toBe(2);
    });
});

describe.skip('Retrieving nodes', () => {

});

describe.skip('Removing nodes', () => {

});

describe.skip('Searching the list', () => {

});

describe.skip('Transform list into string', () => {

});

