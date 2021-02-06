class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        var node = new Node(value, null, null);

        if (this.root == null) {
            this.root = node;
        }
        else {
            var curr = this.root;
            var prev;

            while(curr) {
                if (value <= curr.value) {
                    prev = curr;
                    curr = curr.left;
                }
                else {
                    prev = curr;
                    curr = curr.right;
                }
            }

            if (value <= prev.value) {
                prev.left = node;
            }
            else {
                prev.right = node;
            }
        }
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);   
        }
    }

    preorder(node) { 
        if(node != null) { 
            console.log(node.value); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    }

    postorder(node) { 
        if(node !== null) { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    } 
}


var BST1 = new BST(); 

BST1.insert(15); 
BST1.insert(25); 
BST1.insert(10); 
BST1.insert(7); 
BST1.insert(22); 
BST1.insert(17); 
BST1.insert(13); 
BST1.insert(5); 
BST1.insert(9); 
BST1.insert(27);

BST1.inorder(BST1.root);