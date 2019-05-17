-- 选择数据库
use pullRadish;

-- 创建user表
create table address (
    address_id int primary key auto_increment comment "地址id",
    title enum("先生","太太","女士","标题") not null,
    firstName varchar(60) not null comment "名字",
    lastName varchar(60) not null comment "姓",
    company varchar(60) not null comment "公司",
    billing varchar(60) not null comment "账单电话号码",
    contact varchar(60) not null comment "联系电话号码",
    street varchar(60) not null comment "街",
    continues varchar(60) not null comment "道",
    city varchar(60) not null comment "城市",
    postal varchar(60) not null comment "邮编/邮政编码",
    country enum("美国","中国","澳大利亚","夏威夷") not null,
    provincial enum("加州","佛罗里达","阿拉巴马","阿拉斯加州")
);

-- 插入数据
insert into address values 
(null,"先生","John","Wilson","拔萝卜公司","111111","222222","长安街","柏林大道","纽约","343700","美国","加州"),
(null,"女士","丹","徐","拔菠萝公司","333333","444444","西安街","格林大道","巴黎","343729","中国","佛罗里达");
