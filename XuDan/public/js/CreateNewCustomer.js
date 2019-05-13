// 功能二: 添加用户
$('#add-user')
.bootstrapValidator({
  message: 'This value is not valid',
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
    email: {
      message: 'The username is not valid',
      validators: {
        notEmpty: {
          message: '邮箱必须填写'
        },
        stringLength: {
          min: 6,
          max: 30,
          message: '邮箱长度在6到30个字符之间'
        },
        regexp: {
          // regexp: /^[a-zA-Z0-9_\.]+$/,
          regexp: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          message: '您的邮箱的格式有误'
        }
      }
    },
    slug: {
      validators: {
        notEmpty: {
          message: '别名不为空,涉及到具体的网址'
        },
        stringLength: {
          min: 1,
          max: 30,
          message: '别名长度在1到30个字符之间'
        }
      }
    },
    nickname: {
      validators: {
        notEmpty: {
          message: '昵称有助于发现最美的你'
        }
      }
    },
    password: {
      validators: {
        notEmpty: {
          message: '密码必须填写'
        },
        stringLength: {
          min: 6,
          max: 30,
          message: '密码的长度在6-30位之间'
        },
        regexp: {
          regexp: /^[a-zA-Z0-9_\.]+$/,
          message: '密码只能由数字字母下划线组成'
        }
      }
    }
  }
})
.on('success.form.bv', function (e) {
  // Prevent form submission
  e.preventDefault();

  // Get the form instance
  var $form = $(e.target);

  // Get the BootstrapValidator instance
  var bv = $form.data('bootstrapValidator');
  // Use Ajax to submit form data
  console.log($form.serialize());
  $.ajax({
    type: 'post',
    url: '/admin/userAdd',
    data: $form.serialize(),
    success: function (data) {
      // console.log(data);
      if (data.code == '1001') {
        showUsers();
        location.reload();
      }
    }
  })
});