DROP TABLE IF EXISTS `LOGSError`;
CREATE TABLE `LOGSError` (
  `ID` int primary key auto_increment COMMENT "ID",
  `F_YHM` varchar(50) not null  COMMENT '操作用户名',
  `F_DLIP` varchar(20) not null  COMMENT '登录IP',
  `F_CZLX` varchar(50) not null  COMMENT '操作类型',
  `F_CZNR` longtext not null  COMMENT '操作内容',
 `F_GJZ` varchar(50) DEFAULT NULL COMMENT '关键字',
  `F_CZSJ` timestamp not null  COMMENT '操作时间'
)
