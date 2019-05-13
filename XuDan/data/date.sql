-- 创建数据库pullRadish
create database pullRadish;

-- 选择数据库
use pullRadish;

-- 创建user表
create table users (
    id int primary key auto_increment comment "用户id",
    
    sex enum("先生","太太","女士","标题") not null,
    firstName varchar(60) not null comment "名字",
    lastName varchar(60) not null comment "姓",
    country enum("美国","中国","日本","韩国","澳大利亚","加拿大","不丹","丹麦","瑞典","瑞士") not null,
    email varchar(30) not null,
    password varchar(30) not null
)

-- 插入数据
insert into users values 
(null,"先生","John","Wilson","美国","1111@qq.com","123456"),
(null,"女士","丹","徐","中国","2427873127@qq.com","123456");
