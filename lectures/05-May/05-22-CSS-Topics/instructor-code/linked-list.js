// Changes
class Node{
  constructor(value, list){
    this.list = list;
    this.data = value;
    this.next=null;
  }
  setData(value){
    this.data = value;
  }
  getData(value){
    return this.data;
  }
}

class LinkedList{
  constructor(){
    this.head=null;
    this.length=0;
  }
  add(value){
    let node = new Node(value, this);
    
    if (!this.head){
      this.head = node;
      this.length = 1;
      return 
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next
    } 
    currentNode.next = node;
    this.length++;
  }
  
  remove(index){
    if (this.length <= index){
      return 'Nothing to remove';
    }
    if (index === 0){
      this.head = this.head.next;
      this.length--;
      return 
    }
    
    let currentNode = this.head;
    for (var i=0;i<index-1;i++){
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next
    this.length--;
  }
  
  display(){
    console.log("This list has " + this.length + " nodes");
    if (this.head){
      let currentNode = this.head;
      let str = '';
      do{
        str += currentNode.getData() + ' -> '
        currentNode = currentNode.next;
      }while(currentNode)
      str += 'NULL'
      console.log(str);
    }else{
      console.log("The list is empty");
    }
  }
}

let myList = new LinkedList();
myList.display();
myList.add("Cat");
myList.add("Dog");
myList.add("Sloth");
myList.add("Snake");
myList.display();

myList.remove(2);
myList.display();








