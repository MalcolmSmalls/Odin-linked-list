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



    prepend(value){
        this.head = new Node(value, this.head)
        this.size++
    }

    append(value){
        let node = new Node(value)
        let current
        if(!this.head){
            this.head = node
        }else{
            current = this.head

            while(current.next){
                current = current.next
            }
            current.next = node
        }

        this.size++
    }

    toString(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

}

const linko = new LinkedList()


linko.prepend(10)
linko.append(200)

console.log(linko)

linko.toString()