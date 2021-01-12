
/**
 * PriorityQueue class
 * 
 */

export default class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * Add element at the correct location of the queue 
     */
    enqueue(elem) { 

        var contain = false; 
    
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].dist > elem.dist) {
                this.items.splice(i, 0, elem);  // enqueue
                contain = true; 
                break; 
            } 
        } 

        // highest element's distance of the queue
        if (!contain) { 
            this.items.push(elem); 
        } 
    } 

    /**
     * remove the first element of the queue and return it
     */
    dequeue() { 
        if (this.isEmpty()) 
            console.log("underflow"); 
        return this.items.shift(); 
    } 

    /**
     * Check if the queue is empty
     */
    isEmpty() {
        return this.items.length === 0;
    }


    /**
     * Get and element of the queue by id
     * Return null if the element is not in the queue
     * @param {int} id 
     */
    get(id) {
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].id === id) 
                return this.items[i];
        }
        return null;
    }

    /**
     * Update an element in the queue by deleting
     * and placing it at the correct location in the queue. 
     */
    update(elem) {
        let i = 0;
        for (i = 0; i < this.items.length; i++) { 
            if (this.items[i].id === elem.id) { 
                this.items.splice(i,1);
                break; 
            } 
        }

        if (this.isEmpty()) {
            this.items.push(elem);
            return;
        }

        // add element at the correct location in the queue
        for (i = 0; i < this.items.length; i++) { 
            if (this.items[i].dist > elem.dist) {
                this.items.splice(i, 0, elem); 
                break; 
            } 
        }
    }

}