-- 选择数据库
use pullRadish;

-- 创建user表
create table info (
    info_id int primary key auto_increment comment "信息id",
    title enum("先生","太太","女士","标题") not null,
    firstName varchar(60) not null comment "名字",
    lastName varchar(60) not null comment "姓",
    email varchar(30) not null,
    tele varchar(30) not null comment "电话号码",
    problem enum("精品问题和评论","规模和建议","护理和维修","真实性","其他","产品查询") not null comment "问题和评论",
    message text not null
);

-- 插入数据
insert into info values 
(null,"先生","John","Wilson","1111@qq.com","123456","规模和建议","哈哈哈"),
(null,"女士","丹","徐","2427873127@qq.com","123456","精品问题和评论","嘿嘿嘿");
