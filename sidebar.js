//const archivelis = Document.querySlectorAll("div.sidebar ul li");

function load(element) {
    var sibs = [];
    while (element = element.previousSibling) {
        if (element.nodeType === 1) continue; 
        sibs.push(element);
        console.log(element.innerHTML)
    }
    var Index = sibs.length;
    element.data === 'Article Archive ' + Index + '.txt';
    console.log(Index.data);
}
