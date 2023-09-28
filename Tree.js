class Node {
    constructor(value, name) {
        this.value = value
        this.name = name
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insertNode(name, value) {
        let newNode = new Node(name, value)
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
    
    searchNode(value) {
        if (this.root === null) {
            return null
        }
        return this.searchNodeHelper(this.root, value)
    }

    searchNodeHelper(node, value) {
        if (node === null) {
            return null
        }
        if (node.value === value) {
            return node
        } else if (value < node.value) {
            return this.searchNodeHelper(node.left, value)
        } else {
            return this.searchNodeHelper(node.right, value)
        }
    }

    // 1 - Preorder
    // 2 - Inorder
    // 3 - Postorder
    printOrder(node, order) {
        if(node === null) {
            return
        }
        order === 1 ? console.log(node.name) : null
        this.printOrder(node.left, order)
        order === 2 ? console.log(node.name) : null
        this.printOrder(node.right, order)
        order === 3 ? console.log(node.name) : null
    }

}


const dataPoint2 = () => {
    const tree = new Tree()
    tree.insertNode(50, 'A')
    tree.insertNode(25, 'B')
    tree.insertNode(75, 'C')
    tree.insertNode(20, 'D')
    tree.insertNode(37, 'E')
    tree.insertNode(90, 'F')
    tree.insertNode(10, 'G')
    tree.insertNode(30, 'H')
    tree.insertNode(39, 'I')
    tree.insertNode(82, 'J')
    tree.insertNode(26, 'K')
    tree.insertNode(86, 'L')
    return tree;
}

const dataPoint3 = () => {
    const tree = new Tree()
    tree.insertNode(101)
    tree.insertNode(33)
    tree.insertNode(9)
    tree.insertNode(39)
    tree.insertNode(105)
    tree.insertNode(104)
    tree.insertNode(144)
    return tree
}

tree2 = dataPoint2()
tree2.printOrder(tree2.root, 3)
// tree2.printOrder(tree2.root, 2)
// tree2.printOrder(tree2.root, 3)

// tree3 = dataPoint3()
// tree3.printOrder(tree3.root, 2)