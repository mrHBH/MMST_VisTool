var selectedgraph='';
$( "#Graphselection" ).click(function() {
 

var select = document.getElementById("selec"); 
        select.innerHTML='';

if (Availablegraphsets.length>0){               // fills the select graph dropdown menu with available graphsets
for(var i = 0; i < Availablegraphsets.length; i++) {
    var opt = Availablegraphsets[i];
    var el = document.createElement("li");
    var child = document.createElement("a");
    child.append(opt)
    el.setAttribute("id",'dropdownelement');
    el.setAttribute("role", "presentation");
    el.appendChild(child)
    
    select.appendChild(el);
 

    
}}})
$("#selec").on('click','li',(function() {
     selectedgraph = $(this).text();                   //the selected graph name is saved in this variable
}))