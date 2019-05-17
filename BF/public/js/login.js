$(function () {
  // 1.给id为form的表单添加校验
  $("#form").bootstrapValidator({
    feedbackIcons: {
      // 校验通过 显示 绿色的对号 图标
      valid: 'glyphicon glyphicon-ok',
      // 校验不通过  可以删除 的  显示红色的X 代表 校验没通过
      invalid: 'glyphicon glyphicon-remove',
      // 校验中...  转的刷新图标
      validating: 'glyphicon glyphicon-refresh'
    },
    // 提交按钮的id
    submitButtons: "#login",
    // 校验字段
    fields: {
      // 校验字段的键的名字 务必是 input的name属性的名字
      email: {
        validators: {
          notEmpty: {
            message: '用户名/邮箱不能为空'
          },
          stringLength: {
            min: "5",
            max: "20",
            message: "最短为4,最长为10"
          },
          regexp: {
            regexp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: '您的邮箱格式不正确'
          },
          callback: {}
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空！'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_]{1,20}$/,
            message: '只能为字母数字，最短1，最长20！'
          },
          callback: {}
        }
      }
    }
  }).on('success.form.bv', function (e) {
    e.preventDefault(); // 因为button的type是submit 所以该按钮有一个默认的提交事件 但是没有验证成功不能提交 因此阻止 
    var $form = $(e.target); // 就是form标签对应的对象 类似于 document.queryselect('#form标签的id')
    var bv = $form.data('bootstrapValidator'); // 获取bootstrapValidator对象
    $.ajax({
      type: 'post',
      url: '/admin/login',
      data: $form.serialize(),
      success: function (data) {
        // console.log(data);
        if (data.code == '1201') {
          location.href = '/admin/index'
        }
      }
    })
  });
})