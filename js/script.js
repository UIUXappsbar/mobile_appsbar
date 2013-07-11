/* When you change APPName, be sure to update it in mylibs/util.js */     
var APPName = {                                                           
                                                                          
  methodName: function() {                                                
                                                                          
  },                                                                      
  /* Initializers */                                                      
  common: {                                                               
    init: function() {                                                    
                                                                          
    },                                                                    
    finalize: function() {                                                
                                                                          
    }                                                                     
  },                                                                      
                                                                          
  bodyId_or_className: {                                                  
    init: function() {                                                    
                                                                          
    },                                                                    
    finalize: function() {                                                
                                                                          
    } 
  } 
};

$(document).ready(UTIL.loadEvents);



$(document).ready(function() {

$('.Edit').toggle(function() {
    $(this).css({background: 'white', color: '#063b84', height: '62px'});
    $(this).parent().find('.pullDown').slideDown('slow');
    $(this).parent().animate({height: 'auto'}, 600); 
  }, function() {
    $(this).css({background: '#063b84', color: '#fff', height: '40px'});
    $(this).parent().find('.pullDown').slideUp();
    $(this).parent().animate({height: 'auto'}); 
  });

});