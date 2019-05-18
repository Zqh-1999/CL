 // 显示所有分类目录方法
 let show = function () {
  $.ajax({
    type: 'get',
    url: '/admin/showCategories',
    data: '',
    success: function (data) {
      let categoriesHtml = template('categories_template', { list: data })
      $('tbody').html(categoriesHtml)
    }
  })
}
show()

// 添加分类目录
$('.btn-primary').on('click', function () {
  $.ajax({
    type: 'post',
    url: '/admin/addCategory',
    data: $('form').serialize(),
    success: function (data) {
      if (data.code == '1100') {
        alert(data.msg)
        show()
        $('form')[0].reset()
      }
    }
  })
})

// 删除分类目录
$('tbody').on('click', '.btn-danger', function () {
  $.ajax({
    type: 'get',
    url: '/admin/deleteCategory',
    data: 'id=' + $(this).data('id'),
    beforeSend: function () {
      let flag = confirm('您确定删除吗？')
      if (!flag) {
        return false
      }
    },
    success: function (data) {
      if (data.code == '1101') {
        alert(data.msg)
        show()
      }
    }
  })
})

// #region 修改分类目录
// 回显
$('tbody').on('click', '.btn-info', function () {
  $.ajax({
    type: 'get',
    url: '/admin/backCategory',
    data: 'id=' + $(this).data('id'),
    success: function (data) {
      let backHtml = template('back_template', data[0])
      $('.col-md-4').html(backHtml)
    }
  })
})

// 修改
$('.col-md-4').on('click', '.btn-xiugai', function () {
  console.log('1')
  $.ajax({
    type: 'post',
    url: '/admin/updateCategory',
    data: $('form').serialize() + '&id=' + $(this).data('id'),
    success: function (data) {
      if (data.code == '1102') {
        location.href = '/admin/categories'
      }
    }
  })
})

// #endregion

// #region 批量删除
// 全选
$('.all_checked').on('click', function () {
  let flag = $(this).prop('checked')
  $('tbody input').prop('checked', flag)
  flag ? $('.all_delete').show(150) : $('.all_delete').hide(80)
})
// 单选
$('tbody').on('click', 'input', function () {
  let allcheck = $('tbody input').size()
  let allchecked = $('tbody input:checked').size()
  allchecked >= 2 ? $('.all_delete').show(150) : $('.all_delete').hide(80)
  allcheck == allchecked ? $('.all_checked').prop('checked', true) : $('.all_checked').prop('checked', false)
})
// 删除
$('.all_delete').on('click', function () {
  let idArr = []
  $('tbody input:checked').each(function (index, ele) {
    idArr.push($(ele).data('id'))
  })
  $.ajax({
    type: 'get',
    url: '/admin/deleteCategories',
    data: {id:idArr},
    beforeSend: function () {
      let flag = confirm('您确定删除吗?')
      if (!flag) {
        return false
      }
    },
    success: function (data) {
      if (data.code == '1101') {
        $('.all_delete').hide()
        show()
      }
    }
  })
})
// #endregion