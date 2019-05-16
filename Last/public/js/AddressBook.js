$(document).ready(function () {
    $('#add-users').bootstrapValidator({
        //        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitButtons: ".savebtn",
        fields: {
            firstname: {
                validators: {
                    notEmpty: {
                        message: '别名不为空,涉及到具体的网址'
                    },
                    stringLength: {
                        min: 1,
                        max: 8,
                        message: '别名长度在1到8个字符之间'
                    }
                }
            },
            lastname: {
                validators: {
                    notEmpty: {
                        message: '别名不为空,涉及到具体的网址'
                    },
                    stringLength: {
                        min: 1,
                        max: 8,
                        message: '别名长度在1到8个字符之间'
                    }
                }
            },
            company: {
                validators: {
                    notEmpty: {
                        message: '公司名不能为空'
                    },
                    stringLength: {
                        min: 8,
                        max: 20,
                        message: '公司名长度在8到20个字符之间'
                    }
                }
            },
            telephone: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '联系电话必须填写'
                    },
                    stringLength: {
                        min: 8,
                        max: 11,
                        message: '手机号长度在8到30个字符之间'
                    },
                    regexp: {
                        // regexp: /^[a-zA-Z0-9_\.]+$/,
                        regexp: /^1(3|4|5|7|8)\d{9}$/,
                        message: '您的手机号的格式有误'
                    }
                }
            },
            contact_telephone: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '紧急联系电话必须填写'
                    },
                    stringLength: {
                        min: 8,
                        max: 11,
                        message: '手机号长度在8到30个字符之间'
                    },
                    regexp: {
                        // regexp: /^[a-zA-Z0-9_\.]+$/,
                        regexp: /^1(3|4|5|7|8)\d{9}$/,
                        message: '您的紧急联系手机号的格式有误'
                    }
                }
            },
            street1: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '街道地址请填写'
                    },
                    stringLength: {
                        min: 6,
                        max: 15,
                        message: '街道地址长度在6到15个字符之间'
                    },
                    // regexp: {
                    //     // regexp: /^[a-zA-Z0-9_\.]+$/,
                    //     regexp: /^\s*\S+(?:\s+\S+){2}/,
                    //     message: '您的街道地址的格式有误'
                    // }
                }
            },
            street2: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '街道地址2请填写'
                    },
                    stringLength: {
                        min: 6,
                        max: 15,
                        message: '街道地址2的长度在6到15个字符之间'
                    },
                    // regexp: {
                    //     // regexp: /^[a-zA-Z0-9_\.]+$/,
                    //     regexp: /^\s*\S+(?:\s+\S+){2}/,
                    //     message: '您的街道地址2的格式有误'
                    // }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: '城市名不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 10,
                        message: '城市名长度在4到10个字符之间'
                    }
                }
            },
            postcode: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: '邮政编码请填写'
                    },
                    stringLength: {
                        min: 6,
                        max: 10,
                        message: '邮政编码的长度在6到10个字符之间'
                    },
                    regexp: {
                        // regexp: /^[a-zA-Z0-9_\.]+$/,
                        regexp: /^[1-9]\d{5}$/,
                        message: '您的邮政编码格式有误'
                    }
                }
            }
        }
    });
}).on('success.form.bv', function (e) {
    e.preventDefault();
    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');
    let fromdata = $('#add-users').serialize();
    console.log(fromdata)
    let option1 = $('#prefex:selected').val();
    let option2 = $('#prefox:selected').val()
    let option3 = $('#prefvx:selected').val()
    $.ajax({
        type: 'post',
        url: '/admin/BEAddressBooks',
        data: fromdata + 'prefvx&' + option3 + 'prefox&' + option2 + 'prefex&' + option1,
        success: function (data) {
            if (data.code == '1003') {
                alert(data.message)
                //   location.reload();
                $('.login-warp')[0].reset();
            }
        }
    })

});
