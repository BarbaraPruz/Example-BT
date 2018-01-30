var lastId='';
const content = [
    { name: 'africa', pic: 'africa.jpg', info: 'Africa!'},
    { name: 'antartica', pic: 'antartica.jpeg',info: "Antartica!"},
    { name: 'asia', pic: 'asia.jpeg', info: "Asia!"},
    { name: 'australia', pic: 'australia.jpeg',info: "Australia!"},
    { name: 'europe', pic: 'europe.jpeg',info: "Europe!"},
    { name: 'northAmerica', pic: 'northamerica.jpeg',info: "North America!"},
    { name: 'southAmerica', pic: 'southamerica.jpeg',info: "South America!"}          
];
const fillerText='Et oblique mnesarchum eam, dicta principes ea eos. Ullum constituto liberavisse pro eu, an usu alia aliquid. Aperiam labores laboramus ex mel. Eos affert fierent ne. Vim iudico tritani constituam ex, ad simul iudicabit mei. Per offendit salutandi cu, ut duo clita regione platonem. Has ne rebum delicatissimi, at vix libris ponderum. Vel cu mazim adolescens. Impetus sadipscing ea mei, id has integre explicari persecuti, est ex natum nihil fabellas. Vero erroribus posidonium nec ad. Suas nostro nusquam eu has, sed dicit omnes insolens in, te elit dicant eum. Probo inani maluisset eu his, homero semper oportere vim at. Id autem noster signiferumque eum.Et oblique mnesarchum eam, dicta principes ea eos. Ullum constituto liberavisse pro eu, an usu alia aliquid. Aperiam labores laboramus ex mel. Eos affert fierent ne. Vim iudico tritani constituam ex, ad simul iudicabit mei. Per offendit salutandi cu, ut duo clita regione platonem. Has ne rebum delicatissimi, at vix libris ponderum. Vel cu mazim adolescens. Impetus sadipscing ea mei, id has integre explicari persecuti, est ex natum nihil fabellas. Vero erroribus posidonium nec ad.';
function getContent(ev) {
    if (lastId) {
        $('#'+lastId).css('color','black');
    }
    $('#'+ev.target.id).css('color','red');
    lastId = ev.target.id;    
    var idx = content.findIndex ( (v) => {return v.name===ev.target.id});  
    $('#img').html('<img src="images\\'+content[idx].pic + '">'); 
    $('#content').html('<p>I am ' + content[idx].info + '</p><p>'+fillerText+'</p>');       
}


$(document).ready(function() {
    var href = window.location.href; 
    var c = href.slice(href.lastIndexOf('?')+1);               
    $('.navbtn').on('click', getContent);     
    var e = jQuery.Event( 'click', { target: { id: c}} );
    getContent(e);        
});