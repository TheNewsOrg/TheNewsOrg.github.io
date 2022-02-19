//const archivelis = Document.querySlectorAll("div.sidebar ul li");

function load(element) {
    var sibs = [];
    const obj = document.querySelector("object");
    while (element.previousSibling != null) {
        element = element.previousSibling;
        if (element.nodeType === 1) continue; 
        sibs.push(element);
    }
    var Index = sibs.length;
    
    obj.data = 'Article Archive ' + Index + '.txt';
}
