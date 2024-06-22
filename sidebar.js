function load(element) {
    var sibs = [];
    const obj = document.querySelector("object");
    while (element.previousSibling != null) {
        element = element.previousSibling;
        if (element.nodeType === 1) continue; 
        sibs.push(element);
    }
    var index = sibs.length;
    
    obj.data = `Article Archive ${index}.html`;
}
