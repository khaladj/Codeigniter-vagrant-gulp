/*
   Ali Khaladj  Auguest 2016
  JQuery iPanel Plugin

  Usage no JS call use ak-toggle attribute eg:
    <button ak-toggle="#bottom-panel">Open</button>
    <div class="ipanel ipanel-X" id="bottom-panel"></div>

  X: botton, left, right, top
*/
$(function(){

jQuery.iPanel = function() {
    var iPanel={
        closeAll:function(cdr){
          $.each($(".ipanel-active"),function(i){
                var dir = iPanelDir($(this));
                // if clicking / touching the same href to avoid repopen
                if (dir !== cdr )
                  iPanel.toggle($(this),dir);
          });
        },

        toggle: function(el,dir){
          var op = {};
           op[dir] = !$( el ).hasClass('ipanel-active') ? "0" : "-100%";
           $( el ).
             animate(op,"slow").
             toggleClass("ipanel-active");
        }
    }

    var iPanelDir =function(e){
        if ( $(e).hasClass( "ipanel-bottom" ) ){
          return "bottom";
        }else if ( $(e).hasClass( "ipanel-left" ) ){
          return "left";
        }else if ( $(e).hasClass( "ipanel-right" ) ){
          return "right";
        }else if ( $(e).hasClass( "ipanel-top" ) ){
          return "top";
        }
    }

    var handleEvents = function(){

        var closeBtn = $(".ipanel-close-button");

        $("button ,a").on("click",function(){
          var el  = $(this).attr("ak-toggle");
          var dir = iPanelDir(el);
          iPanel.closeAll(dir);
          iPanel.toggle(el,dir);
        });

        closeBtn.on("click",function(){
          var dir = iPanelDir($(this).parent());
          var el  = '#'+$(this).parent().attr("id");
          iPanel.toggle(el,dir);
        });


        $('.close-all-panels')
             .hammer({ prevent_default: true })
             .on("swipe click swipedown",function(evt) {
               if ( $(evt.target).closest('.ipanel').length ||
                    $(evt.target).closest('button').length  ||
                    $(evt.target).closest('.modal').length  ||
                    $(evt.target).closest('a').length )
                   return;
               iPanel.closeAll(null);
         });

    }

    handleEvents();
  }

  $.iPanel();
});
