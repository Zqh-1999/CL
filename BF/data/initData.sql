-- 1.创建数据库
create database alibxA;
-- 2.使用数据库
use alibxA;
-- 3.创建表
create table users (
  id int primary key auto_increment comment '用户ID',
  avatar varchar(255) not null default '/uploads/avatar_1.jpg',
  email varchar(30) not null,
  slug  varchar(30) not null,
  nickname varchar(30),
  `status` varchar(15) not null comment '状态有四种: 未激活（unactivated）/ 激活（activated）/ 禁止（forbidden）/ 回收站（trashed）'
);
-- 4.插入数据

insert into users values
(null, default, 'xiaoming@163.com','蔡徐坤', '我爱我阿', 'activated'),
(null, default, 'xiaohong@163.com','蔡徐白', '我爱阿吉', 'activated'),
(null, default, 'xiaolan@163.com','蔡徐绿', '我我阿吉', 'activated'),
(null, default, 'xiaolv@163.com','蔡徐蓝', '爱我阿吉', 'activated'),
(null, default, 'xiaohuang@163.com','蔡徐球', '我爱我阿吉1', 'activated'),
(null, default, 'xiaowangba163.com','蔡徐紫', '我爱我吉', 'activated');