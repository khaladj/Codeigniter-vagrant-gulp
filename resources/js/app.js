/**********************************************************
Load map (synchronously)
***********************************************************/
var load_map=function(){
    var menubar_height = "-51px";

    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
      credentials:'Av9JcLdtfrLzO-_ITZjWvMgjmr-8ChIJ6kl0MBCHvJEWJwq8K2zES5Aue9umfftz',
    });

  $("#myBtn2 ").click(function() {
      $("#myModal2").modal({
          keyboard: true,
          backdrop: true
      });
  });


$('button').click(function(evt){
   var ipanel  = $(this).attr("ak-toggle");
   if ( !ipanel )
        return;
   if ( $(ipanel).hasClass('ipanel-active') ){

      if(  $(ipanel).hasClass("ipanel-bottom") ){
          $('.ipanel-bottom')
            .removeClass('ipanel-active')
            .animate({'bottom':'-100%'},300);
      }

      if(  $(ipanel).hasClass("ipanel-left") ){
        $('.ipanel-left')
          .removeClass('ipanel-active')
          .animate({'left':'-100%'},300);
      }

   }else{
     if ( $(ipanel).hasClass('ipanel-bottom') ){
        $('.ipanel-bottom')
          .addClass('ipanel-active')
          .animate({'bottom':menubar_height},300);
        $('.ipanel-left')
            .removeClass('ipanel-active')
            .animate({'left':'-100%'},300);
     }else{
       if ( $(ipanel).hasClass('ipanel-left') ){
         $('.ipanel-bottom')
           .removeClass('ipanel-active')
           .animate({'bottom':'-100%'},300);
         $('.ipanel-left')
           .addClass('ipanel-active')
           .animate({'left':'0'},300);
      }
    }
 }
 });


 $('.ipanel-close-button')
      .click(function(evt) {
            var  ipanel =$(this).parent();
            if ( ipanel.length > 0 ){
              if(  ipanel.hasClass("ipanel-bottom") ){
                $('.ipanel-bottom')
                  .removeClass('ipanel-active')
                  .animate({'bottom':'-100%'},300);
              }

              if(  ipanel.hasClass("ipanel-left") ){
                  $('.ipanel-left')
                    .removeClass('ipanel-active')
                    .animate({'left':'-100%'},300);
              }
            }
  });

  function close_all_panels(evt){
    var  ipanel =$(".ipanel-active");
    /*
      remove the close events on the panel iteself
    */
    if ( $(evt.target).closest('.ipanel').length ||
        $(evt.target).closest('button').length  ||
        $(evt.target).closest('.modal').length )
      return;
     if ( ipanel.length > 0 ){
       if(  ipanel.hasClass("ipanel-bottom") ){
         $('.ipanel-bottom')
           .removeClass('ipanel-active')
           .animate({'bottom':'-100%'},300);
       }

       if(  ipanel.hasClass("ipanel-left") ){
           $('.ipanel-left')
             .removeClass('ipanel-active')
             .animate({'left':'-100%'},300);
       }
     }
  }


  $('.close-all-panels')
       .hammer({ prevent_default: true })
       .on("swipe click swipedown",function(evt) {
             close_all_panels(evt);
   });
}
