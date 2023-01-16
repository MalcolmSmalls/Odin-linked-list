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

    getTail(){
        let current = this.head
        while(current.next){
            current = current.next
        }
        console.log(current.value)
    }

    at(index){
        let current
        for(let i = 0; i <= index; i++){
            if(i === 0){
                current = this.head
            }else{
                current = current.next
            }
        }
        console.log(current.value)
    }

    pop(){
        let current
        for(let i = 0; i < this.length-1; i++){
            if(i === 0){
                current = this.head
            }else{
                current = current.next
            }

        }
        current.next = null
        this.length--
    }

    contains(value){
        let current
        for(let i = 0; i < this.length; i++){
            if(i === 0){
                current = this.head
            }else{
                current = current.next
            } 
            
            if(current.value === value){
                return true
            }else{
                return false
            }
        }
    }

    insertAt(value, index){
        let node = new Node(value)
        let current
        let nodeHolder = this.head

        for(let i = 0; i < index; i++){
            nodeHolder = nodeHolder.next

        }

        for(let i = 0; i < index; i++){
            if(i===0){
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
linko.pop()
// linko.toString()
// linko.size()

console.log(linko.contains(1000))
// linko.at(1)



