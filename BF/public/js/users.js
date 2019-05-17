// 显示全部用户方法
function show() {
  $.ajax({
    type: 'get',
    url: '/admin/showUsers',
    data: '',
    success: function (data) {
      let usersHtml = template('users_template', { list: data })
      $('tbody').html(usersHtml)
    }
  })
}
show();

// 添加用户
$('#form').bootstrapValidator({
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
}).on('success.form.bv', function (e) {
  $.ajax({
    type: 'post',
    url: '/admin/addUser',
    data: $('#form').serialize(),
    success: function (data) {
      if (data.code == '1001') {
        show()
        let formHtml = template('form_template');
        $('#form').html(formHtml)
      }
    }
  })
});

// 删除用户
$('tbody').on('click', '.btn-danger', function () {
  console.log(1)
  $.ajax({
    type: 'get',
    url: '/admin/deleteUser',
    data: { id: $(this).attr('data-id') },
    beforeSend: function () {
      let flag = confirm('您确定删除吗?')
      if (!flag) {
        return false
      }
    },
    success: function (data) {
      if (data.code == '1002') {
        show()
        alert(data.msg)
      }
    }
  })
})

// 修改用户 回显
$('tbody').on('click', '.btn-default', function () {
  $.ajax({
    type: 'get',
    url: '/admin/backUser',
    data: { id: $(this).data('id') },
    success: function (data) {
      let backHtml = template('back_template', data[0])
      $('.col-md-4').html(backHtml)
    }
  })
})

// 修改用户 修改
$('.col-md-4').on('click', '.btn-primary', function () {
  $.ajax({
    type: 'post',
    url: '/admin/updataUser',
    data: $('#form').serialize() + '&id=' + $(this).data('id'),
    success: function (data) {
      if (data.code == '1003') {
        show()
        let addHtml = template('form_template')
        $('.col-md-4').html(addHtml)
      }
    }
  })
})

// #region 批量删除

// 点击全选按钮
$('.all_chk').on('click', function () {
  // 找到tbody所有的选择按钮 点击全选按钮的时候 给他们 附上 全选按钮的选中状态
  $('tbody').find('input').prop('checked', $(this).prop('checked'))
  // 获取全选按钮的状态来判断
  if ($(this).prop('checked')) {
    // 显示
    $('.btn-sm').show(120)
  } else {
    // 隐藏
    $('.btn-sm').hide(60)
  }
})

// 点击tbody里的选择按钮
$('table').on('click', '.item-checked', function () {
  // 每次点击获取tbody里选择按钮的个数
  let item = $('tbody .item-checked').size()
  // 每次点击获取tbody里被选中的选择按钮的个数
  let checkedItem = $('tbody .item-checked:checked').size()
  // 判断被选中的选择按钮是否 > 2 来控制批量删除按钮的显示和隐藏
  checkedItem >= 2 ? $('.btn-sm').show(120) : $('.btn-sm').hide(60)
  // 如果tbody里选择按钮的个数和tbody里被选中按钮的个数相同 那么就让全选按钮选中 否则就不选中
  item == checkedItem ? $('.all_chk').prop('checked', true) : $('.all_chk').prop('checked', false)
})

// 点击批量删除按钮
$('.btn-sm').on('click', function () {
  // 建立一个空数组用来接收被删除信息的ID id是唯一的所以用(批量)
  let idArr = []
  // 获取tbody里被点击的按钮的id 用each
  $('tbody .item-checked:checked').each(function (index, ele) {
    idArr.push($(ele).data('id'))
  })
  $.ajax({
    type: 'get',
    url: '/admin/deleteUsers',
    data: { id: idArr },
    beforeSend: function () {
      let flag = confirm('您确定要删除吗?')
      if (!flag) {
        return false
      }
    },
    success: function (data) {
      if (data.code == '1002') {
        show()
        $('.btn-sm').hide()
      }
    }
  })
})
// #endregion