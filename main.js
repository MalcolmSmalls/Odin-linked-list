class Node {
    constructor(value = null, next = null){
        this.value = value
        this.next = next
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    append(value){
        this.head = new Node(value, this.head)
    }

}

const linko = new LinkedList()
console.log(linko)