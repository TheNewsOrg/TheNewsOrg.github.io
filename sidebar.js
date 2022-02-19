const archivelis = Document.querySlectorAll("div.sidebar ul li");

console.log(archivelis);

archivelis.onclick = function () {load()};

function load (archive) {
    for (let i = 0; i < archivelis.length; i++) {
        const archiveli = archivelis[i];
				
        var num = i + 1;
        archiveli.data === 'Article Archive ' + num + '.txt';
        console.log(archiveli.data);
    }
}