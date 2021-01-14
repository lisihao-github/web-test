
// 增加 dom 删除 dom
// 希望增加 dom 的 api


const addNode = (node, parent) => {
    parent.appendChild(node)
}


const removeNode = (node) => {
    node.parentNode.remove(node)
}

export {
    addNode,
    removeNode
}