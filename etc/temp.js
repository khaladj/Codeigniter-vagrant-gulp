var close_all_panels =function(evt){
  var  ipanel =$(".ipanel-active");
  if ( $(evt.target).closest('.ipanel').length || $(evt.target).closest('button').length  || $(evt.target).closest('.modal').length || $(evt.target).closest('a').length )
      return;
   if ( ipanel.length > 0 ){
     if(  ipanel.hasClass("ipanel-bottom") )
        hide_panel('bottom');
     if(  ipanel.hasClass("ipanel-left") )
        hide_panel('left');
     if(  ipanel.hasClass("ipanel-right") )
        hide_panel('right');
   }
}


var hide_panel = function(dir){
  var  ipanel =$(".ipanel-active");
  if(  ipanel.hasClass('ipanel-'+dir) ){
      var ps = {'left':'-100%'};
      $('.ipanel-'+dir)
        .removeClass('ipanel-active')
        .animate(ps,'slow')
  }
}

$("#myBtn2 ").click(function() {
    $("#myModal2").modal({
        keyboard: true,
        backdrop: true
    });
});



$('button,a').click(function(evt){
 var ipanel  = $(this).attr("ak-toggle");
 if ( !ipanel )
      return;
 if ( $(ipanel).hasClass('ipanel-active') ){

    if(  $(ipanel).hasClass("ipanel-bottom") ){
      $('.ipanel-bottom')
        .removeClass('ipanel-active')
        .animate({'bottom':'-100%'},'slow');
    }

    if(  $(ipanel).hasClass("ipanel-left") ){
      $('.ipanel-left')
        .removeClass('ipanel-active')
        .animate({'left':'-100%'},'slow')

    }

    if(  $(ipanel).hasClass("ipanel-right") ){
      $('.ipanel-right')
        .removeClass('ipanel-active')
        .animate({'right':'-100%'},'slow')

    }
 }else{
   if ( $(ipanel).hasClass('ipanel-bottom') ){
      $('.ipanel-bottom')
        .addClass('ipanel-active')
        .animate({'bottom':0},'slow');
      $('.ipanel-left')
          .removeClass('ipanel-active')
          .animate({'left':'-100%'},'slow');
      $('.ipanel-right')
          .removeClass('ipanel-active')
          .animate({'right':'-100%'},'slow');
   }else
     if ( $(ipanel).hasClass('ipanel-left') ){
       $('.ipanel-bottom')
         .removeClass('ipanel-active')
         .animate({'bottom':'-100%'},'slow');
       $('.ipanel-left')
         .addClass('ipanel-active')
         .animate({'left':'0'},'slow');
       $('.ipanel-right')
           .removeClass('ipanel-active')
           .animate({'right':'-100%'},'slow');
    }else if ( $(ipanel).hasClass('ipanel-right') ){
        $('.ipanel-bottom')
          .removeClass('ipanel-active')
          .animate({'bottom':'-100%'},'slow');
        $('.ipanel-left')
          .removeClass('ipanel-active')
          .animate({'left':'-100%'},'slow');
        $('.ipanel-right')
          .addClass('ipanel-active')
          .animate({'right':'0'},'slow');
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
          .animate({'bottom':'-100%'},'slow');
      }
      if(  ipanel.hasClass("ipanel-left") ){
        $('.ipanel-left')
          .removeClass('ipanel-active')
          .animate({'left':'-100%'},'slow');
      }

      if(  ipanel.hasClass("ipanel-right") ){
        $('.ipanel-right')
          .removeClass('ipanel-active')
          .animate({'right':'-100%'},'slow');
      }
    }
});

$('.close-all-panels')
     .hammer({ prevent_default: true })
     .on("swipe click swipedown",function(evt) {
           close_all_panels(evt);
 });
