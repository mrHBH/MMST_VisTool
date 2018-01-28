var Availablegraphsets = ["hello first element","second element"];
var availablerevisions = ["first revion"];
var el = document.createElement( 'html' );

var url='';


function loadavailablerevisions(selection) {
    availablerevisions = [];
    url="http://127.0.0.1:8080/r43ples/revisiongraph?graph="+selection
    result = httpGet(url);
    
    rdf = turtle.parse(result);
    
	
graph = triplesToGraph(rdf);


	update();
    nodetexts=svg.selectAll(".node-text")
    refrechsearch();
    console.log(rdf)
return result}



function reloadgraphs() {
    Availablegraphsets = [];
    url="http://127.0.0.1:8080/r43ples/createSampleDataset?dataset=all"
    result = httpGet(url);   

    el.innerHTML = result;
    ul=el.querySelector('.row ul ');
    for (var itemi=0;itemi<ul.childNodes.length;itemi++) {
        var item = ul.childNodes[itemi];
        if (item.nodeName == "LI") {
           Availablegraphsets.push(item.innerHTML)}} // Iterate things in this LI in the case that you need it put your code here to get the a element and change the color and background
       return 0;    
    }

function httpGet(theUrl)
{
    var result='';

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );    
    result=xmlHttp.responseText;
    alert('done')
    return result;
    
}
