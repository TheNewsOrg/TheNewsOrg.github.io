function load(element) {
    var sibs = [];
    const frame = document.querySelector("iframe");
    while (element.previousSibling != null) {
        element = element.previousSibling;
        if (element.nodeType === 1) continue; 
        sibs.push(element);
    }
    var index = sibs.length;
    
    frame.src = `Article Archive ${index}.html`;
}
