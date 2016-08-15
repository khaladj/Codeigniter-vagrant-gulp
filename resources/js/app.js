/**********************************************************
Load map (synchronously)
***********************************************************/
var load_map=function(){
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
      credentials:'Av9JcLdtfrLzO-_ITZjWvMgjmr-8ChIJ6kl0MBCHvJEWJwq8K2zES5Aue9umfftz',
    });

  $("#myBtn2 ").click(function() {
      $("#myModal2").modal({
          keyboard: true,
          backdrop: true
      }).draggable();
  });


 $('button').click(function(){
   var ipanel  = $(this).attr("ak-toggle");
   if ( !ipanel )
        return;
   if ( $(ipanel).hasClass('ipanel-bottom') )
    $(ipanel).animate({'bottom':'0'},300);
 });


 $('.close-all-panels, .ipanel-close-button').click(function(evt) {
      var ipanel =$('.ipanel');
      if ( $(evt.target).closest('.close-all-panels').length  && !$(evt.target).closest('.ipanel-close-button').length){
        if ($(evt.target).closest('.ipanel').length || $(evt.target).closest('button').length || $(evt.target).closest('.modal').length) return;
      }
      if ( ipanel.length > 0 ){
        if(  ipanel.hasClass("ipanel-bottom") )
          $('.ipanel-bottom').animate({'bottom':'-100%'},300);
      }
  });
}
