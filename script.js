$(function(){
  $("#btn+").click(function(){
    $("#nbclic").val(function(i, val) {return val*1+1});
    });
    $("#btn-").click(function(){
      $("#nbclic").val(function(i, val) {return val*1-1});
    });
});
