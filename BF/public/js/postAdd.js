// #region 文章图片上传
$('#feature').on('change', function () {
  // 1.获取input中的文件信息
  let file = $(this)[0].files[0];
  // 2.实例化formdata
  let formdata = new FormData();
  // 3.把获取到的文件信息 添加到formdata中
  formdata.append('feature', file);
  console.log(1)
  // 4.发起ajax请求
  $.ajax({
    type: 'post',
    url: '/admin/postAddUpload',
    data: formdata,
    contentType: false,
    processData: false,
    success: function (data) {
      // console.log(data);
      $('.feature-img').show().attr('src', '/images/' + data.picAddr).after('<input name="feature" type="hidden" value="' + data.picAddr + '">');
    }
  })
  // 5.把后台返回来的图片地址放到img标签中 
  // 6.把图片地址放到隐藏域中
})
// #endregion

// #region 添加文章
$('.btn-add').on('click', function () {
  // 1.获取表单中的所有的数据
  let formdata = $('.form-add').serialize();
  // console.log(formdata);
  $.ajax({
    type: 'post',
    url: '/admin/postAddArticle',
    data: formdata,
    success: function (data) {
      // console.log(data);
      if (data.code == '1401') {
        alert(data.message);
        location.href = "/admin/post-add";
      }
    }
  })
})
// #endregion 添加文章