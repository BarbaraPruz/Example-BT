var lastId='';
const content = [
    { name: 'aurora', pic: 'aurora.jpg', info: 'Aurora Borealis!'},
    { name: 'grandCanyon', pic: 'grandcanyon.jpg',info: "Grand Canyon!"},
    { name: 'greatBarrierReef', pic: 'greatBarrierReef.jpg', info: "Great Barrier Reef!"},
    { name: 'harborRio', pic: 'harborRio.jpg',info: "Harbor of Rio de Janiero!"},
    { name: 'mountEverest', pic: 'mountEverest.jpg',info: "Mount Everest!"},
    { name: 'paricutin', pic: 'paricutin_volcano.jpg',info: "Par&iacute;cutin Volcano!"},
    { name: 'victoriaFalls', pic: 'victoriaFalls.jpg',info: "Victoria Falls!"}          
];

const fillerText='Et oblique mnesarchum eam, dicta principes ea eos. Ullum constituto liberavisse pro eu, an usu alia aliquid. Aperiam labores laboramus ex mel. Eos affert fierent ne. Vim iudico tritani constituam ex, ad simul iudicabit mei. Per offendit salutandi cu, ut duo clita regione platonem. Has ne rebum delicatissimi, at vix libris ponderum. Vel cu mazim adolescens. Impetus sadipscing ea mei, id has integre explicari persecuti, est ex natum nihil fabellas. Vero erroribus posidonium nec ad. Suas nostro nusquam eu has, sed dicit omnes insolens in, te elit dicant eum. Probo inani maluisset eu his, homero semper oportere vim at. Id autem noster signiferumque eum.Et oblique mnesarchum eam, dicta principes ea eos. Ullum constituto liberavisse pro eu, an usu alia aliquid. Aperiam labores laboramus ex mel. Eos affert fierent ne. Vim iudico tritani constituam ex, ad simul iudicabit mei. Per offendit salutandi cu, ut duo clita regione platonem. Has ne rebum delicatissimi, at vix libris ponderum. Vel cu mazim adolescens. Impetus sadipscing ea mei, id has integre explicari persecuti, est ex natum nihil fabellas. Vero erroribus posidonium nec ad.';
function getContent(ev) {
    if (lastId) {
        $('#'+lastId).css('color','black');
    }
    $('#'+ev.target.id).css('color','red');
    lastId = ev.target.id;    
    var idx = content.findIndex ( (v) => {return v.name===ev.target.id});  
    $('#img').html('<img class="img-fluid" src="images\\'+content[idx].pic + '">'); 
    $('#content').html('<h2>I am ' + content[idx].info + '</h2><p>'+fillerText+'</p>');  

}


$(document).ready(function() {
    var href = window.location.href; 
    var c = href.slice(href.lastIndexOf('?')+1);               
    $('.navbtn').on('click', getContent);     
    $('#btnCollapse').on('click', function() {
        console.log('collapse clicked');
         $('#iconCollapse').toggleClass('fa-angle-down');
         $('#iconCollapse').toggleClass('fa-angle-up');
       });    
    var e = jQuery.Event( 'click', { target: { id: c}} );
    getContent(e);        
});