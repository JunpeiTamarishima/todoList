$(function(){
$("button").click(function() {
  var task=$('#task').val();
  $('#list-group').append(
    
    `<li class="list-group-item">
    <span class="task">${task}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`);
  
    $(".delete").click(function() {
      $(this).parent().remove();
    });

  });

  // ローカルストレージへの書き込み関数
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  
  // ローカルストレージからの読み込み関数
  function getLocalStorage(key) {
    return localStorage.getItem(key);
  }  
 
  // 初期表示時に前回保存された値を読み込んでセット
  $("#task").val(getLocalStorage("#task"));
 
  // ボタンクリック時の処理
  $("#button").click(function(){
    setLocalStorage("#task", $("#task").val());
  });  

});


