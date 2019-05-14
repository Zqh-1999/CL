$('.buttons').click(function () {
  $('.navg').hide()
})


$('.buttons').click(function () {
  location.href = '/admin/login';
})
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
        $('.navg').show()
      } else if (data.code == '1202') {
        // 清空数据
        $('.login-wrap')[0].reset();
        alert(data.message);
        location.href = "/admin/DashBoaro";
      }
    }
  })
})