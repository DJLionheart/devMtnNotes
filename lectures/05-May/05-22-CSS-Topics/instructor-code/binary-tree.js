class Node{
  constructor(value){
    this.left=null;
    this.right=null;
    this.data=value;
  }
  
  setData(value){
    this.data = value;
  }
  
  getData(){
    // console.log("Accessed ", this.data);
    return this.data;
  }
}

class BinaryTree{
  constructor(){
    this.root = null; // We will create an empty tree.  We could make the tree accept parameters on start to initialize the tree but we will start with it empty
    this.size=0;
    this.depth=0;
  }
  
  add(value){
    let newNode = new Node(value);
    
    if (!this.root){
      this.root = newNode;
      this.size = 1;
      this.depth=1;
      return 
    }
    
    let currentNode = this.root;
    let direction 
    let depth = 0;
    
    do{
      if (value < currentNode.getData() ){
        direction = 'left';
      }else if(value > currentNode.getData()){
        direction = 'right';
      }else {
        return;
      }
      if (currentNode[direction]){
        currentNode = currentNode[direction];  
        depth++;
      }
    }while (currentNode[direction])
    currentNode[direction] = newNode;
    this.size++;
    this.depth = Math.max(this.depth, depth);
  }
  
  find(value){
    if (!this.root){
      return false;
    }
    let currentNode = this.root;
    do{
      if (currentNode.data === value){
        return currentNode;
      }
      if (value < currentNode.data){
        currentNode = currentNode.left
      }else{
        currentNode = currentNode.right;
      }
      // currentNode = (value < currentNode.data? currentNode.left:currentNode.right);
    }while(currentNode)
    return false;
  }
  
  remove(value){
    if (!this.root){
      return false;
    }
    if (this.root.data === value){
      var replaceRoot = true;
    }
    let currentNode = this.root;
    let parentNode = this.root;
    let parentPath = null;
    let nodeToRemove =null;
    
    do{
      if (currentNode.data === value){
        nodeToRemove = currentNode;
        break;
      }
      if (value < currentNode.data){
        parentNode = currentNode;
        parentPath = 'left';
        currentNode = currentNode.left
        
      }else{
        parentNode = currentNode;
        parentPath = 'right';
        currentNode = currentNode.right;
      }
      // currentNode = (value < currentNode.data? currentNode.left:currentNode.right);
    }while(currentNode)
    if (nodeToRemove){
      if (!nodeToRemove.left && !nodeToRemove.right){
        parentNode[parentPath] = null;
        if (replaceRoot){
          this.root = null;
          this.size=0;
          this.depth=0;
        }
      }else if (nodeToRemove.right && nodeToRemove.left){
        let grandChildNode = currentNode.left;
        while (grandChildNode.right){
          grandChildNode = grandChildNode.right;
        }
        this.remove(grandChildNode.data);
        parentNode[parentPath] = grandChildNode;
        grandChildNode.right = currentNode.right;
        grandChildNode.left = currentNode.left;
        if (replaceRoot){
          this.root = parentNode[parentPath];  
        }
        
      }else{
        parentNode[parentPath] = nodeToRemove.right || nodeToRemove.left;
        if (replaceRoot){
          this.root = parentNode[parentPath];  
        }
      }
    }else{
      return false;  
    }
    
  }
  
  display(){
    // Displays some information about the tree.  
    // Ideally you'd not display a whole tree, or have a better output method than the console. 
    // But this will help us to make sure our add and remove methods are working. 
    console.log(`The tree has ${this.size} nodes`)
    
    if (this.root){
      let wordLength=20;
      let maxDepth=this.depth?this.depth:Math.ceil(Math.log(this.size)/Math.log(2));
      let depth = -1;
      var nextRow = [this.root];
      var currentRow = [];
      do{
        depth++;
        currentRow = nextRow;
         
        var notDepth = maxDepth-depth;
        var cellLength = Math.pow(2, notDepth)*wordLength;
        
        nextRow = currentRow.reduce((nextRow, node, i)=>{
          if (i===0){
            nextRow.str=" ".repeat(cellLength/2);
            nextRow.notNull=0;
          }
          if (node)
          {
            nextRow.push(node.left, node.right);
            nextRow.notNull += node.left?1:0 + node.right?1:0
          }else{
            nextRow.push(null, null);
          }
          
          nextRow.str += padNode(node, cellLength);
          return nextRow;
        },[])
        console.log(nextRow.str);
      }while(nextRow.notNull)
      
    }
    
    function padNode(node, wordLength){
      if (!node){
        return " ".repeat(wordLength);
      }
      let word = node.getData()+"";
      
      if (word.length<wordLength){
        word+=" ".repeat(wordLength-word.length);  
      }
      return word
    }
  }
}

let myTree = new BinaryTree();
myTree.display();

myTree.add("Garth");
myTree.add("Alice");
myTree.add("Tiff");
myTree.add("Mary")

myTree.add("Quincy");

myTree.add("Zachary");
myTree.add("Felicia");

myTree.add("Grant");
myTree.add("Fye");


myTree.display();

// myTree.remove('Fye');
// myTree.remove('Alice');
// myTree.remove('Garth')
// myTree.display();

