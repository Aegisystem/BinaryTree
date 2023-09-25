class Tree {
    constructor() {
        this.root = null
    }

    insertNode(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return
        }
        this.insertNodeHelper(this.root, newNode)
    }
    
    insertNodeHelper(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNodeHelper(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNodeHelper(node.right, newNode)
            }
        }
    }
    
    // 1 - Preorder
    // 2 - Inorder
    // 3 - Postorder
    printOrder(node, order) {
        if(node === null) {
            return
        }
        order === 1 ? console.log(node.value) : null
        this.printOrder(node.left, order)
        order === 2 ? console.log(node.value) : null
        this.printOrder(node.right, order)
        order === 3 ? console.log(node.value) : null
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new Tree()
tree.insertNode(10)
tree.insertNode(3)
tree.insertNode(11)
tree.printOrder(tree.root, 3)
