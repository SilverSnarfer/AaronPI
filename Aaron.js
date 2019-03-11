
export function attach(NodeClass, target) {
    target.append(prepComponent(NodeClass));
}


export function replace(component, target){
    target.parentNode.replaceChild((component.isComponentClass ? component : prepComponent(component)), target);
}

export function registerEventNode(type, node, handler){
    return { 
        event: type,
        node: { 
            val: node, 
            handler: handler 
        }      
    }
}


export class Component {
    constructor(){
        this.eventNodes = [];
        this.isComponentClass = true;
        this.eventsRegistered = false;
    }
}

function prepComponent(NodeClass) {
    obj = new NodeClass();
    if (obj.eventNodes.legnth < 1) {
        return  obj.node;
    }
    return addEventNodes(obj, true)
}

export function addEventNodes(obj, internal = false) {
    if (obj.eventsRegistered) {
        return;
    } 
    obj.eventNodes.forEach(elem => {
        elem.node.val.addEventListener(elem.event, elem.node.handler);
    });
    obj.eventsRegistered = true;

    if (internal){return obj.node};
}
