-- 选择数据库
use pullRadish;

-- 创建user表
create table contact (
    contact_id int primary key auto_increment comment "账户id",
    title enum("先生","太太","女士","标题") not null,
    firstName varchar(60) not null comment "名字",
    lastName varchar(60) not null comment "姓",
    email varchar(60) not null comment "邮箱",
    password varchar(60) not null comment "密码"
);

-- 插入数据
insert into contact values 
(null,"先生","John","Wilson","111111@qq.com","111111"),
(null,"女士","丹","徐","222222@qq.com","222222");
