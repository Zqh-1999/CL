let usershow = function (){
// #region 用户登录
$('.btn-login').on('click', function () {
  // formData在这里是一个变量 但是后面有一个和他同名同学的内置对象也叫formData
  let formData = $('.login-wrap').serialize();
  // console.log(formData);
  $.ajax({
    type: 'post',
    url: '/admin/login',
    data: formData,
    success: function (data) {
      if (data.code == '1201') {
        // alert(data.message);
      } else if (data.code == '1202') {
        $('..login-wrap input').val('')

      }
    }
  })
})

// #endregion
}
usershow()

