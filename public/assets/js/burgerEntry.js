$(function(){
  $(".formName").on("submit",function(event){
    event.preventDefault();
    var hamburgerName = {
       name: $('#burgerName').val().trim(),
       devouredit: value = 1
   };
   $.ajax("/burgers",{
     type: "POST",
     data: hamburgerName
   }).then(
     function(){
       console.log("created New burger:");
       location.reload();
     }
   )
 });
});
   
   
   
        