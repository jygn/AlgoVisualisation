
/**
 * Source : https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
 */

export default class PriorityQueue {
    constructor() {
        this.items = [];
    }


    enqueue(element) 
    { 
        var contain = false; 
    
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].dist > element.dist) {
                this.items.splice(i, 0, element); 
                contain = true; 
                break; 
            } 
        } 
    
        if (!contain) { 
            this.items.push(element); 
        } 
    } 

    dequeue() { 
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 


    isEmpty() {
        return this.items.length === 0;
    }

    get(id) {
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].id === id) 
                return this.items[i];
        }
        return -1;
    }

    update(element) {
        let i = 0;
        for (i = 0; i < this.items.length; i++) { 
            if (this.items[i].id === element.id) { 
                this.items.splice(i,1);
                break; 
            } 
        }

        if (this.isEmpty()) {
            this.items.push(element);
            return;
        }

        for (i = 0; i < this.items.length; i++) { 
            if (this.items[i].dist > element.dist) {
                this.items.splice(i, 0, element); 
                break; 
            } 
        }
    }
}