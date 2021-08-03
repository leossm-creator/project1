$(".card_menu").click(function(e){
  let target = $(e.currentTarget).attr("data-id");
  console.log(target);


  });


var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
