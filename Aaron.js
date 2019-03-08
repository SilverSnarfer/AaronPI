
function render(NodeClass, target) {
    let obj = new NodeClass();
    if (obj.eventNodes.legnth < 1) {
        target.append(obj.node);
        return;
    }
    obj.eventNodes.forEach(elem => {
        elem.node.val.addEventListener(elem.event, elem.node.handler);
    });
    target.append(obj.node);
}


function replace(obj, targetDocNode){

}

function replaceLocal(obj, targetNode){

}

function remove(obj){

}

function removeLocal(obj){

}





