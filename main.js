class Node {
    constructor(value = null, next = null){
        this.value = value
        this.next = next
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }



    prepend(value){
        this.head = new Node(value, this.head)
        this.length++
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

        this.length++
    }

    size(){
        console.log(this.length)
    }

    getHead(){
        console.log(this.head.value)
    }

    insertAt(value, index){
        let node = new Node(value)
        let current
        let nodeHolder = this.head

        for(let i = 1; i <= index; i++){
            nodeHolder = nodeHolder.next

        }

        for(let i = 1; i <= index; i++){
            if(i===1){
                current = this.head
            }else{
                current = current.next
            }
        }
        node.next = nodeHolder
        current.next = node
        this.length++

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


linko.prepend(100)
linko.append(200)
linko.append(400)
linko.append(500)


linko.insertAt(300,2)

// linko.toString()
linko.getHead()
// console.log(linko)



