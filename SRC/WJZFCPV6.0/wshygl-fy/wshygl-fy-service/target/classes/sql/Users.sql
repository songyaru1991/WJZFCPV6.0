drop database figurecloud;

create database figurecloud;

use figurecloud;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `User_ID` varchar(50) primary key COMMENT 'User_ID',
  `LoginName` varchar(50) DEFAULT NULL COMMENT '帐号',
  `PassWord` varchar(50) DEFAULT NULL COMMENT '密码',
  `UserName` varchar(50) DEFAULT NULL COMMENT '姓名',
  `JH` varchar(20) DEFAULT NULL,
  `AREA_CODE` varchar(50) DEFAULT NULL COMMENT '区域代码',
  `AREA` varchar(50) DEFAULT NULL COMMENT '区域名称',
  `YHLB` varchar(50) DEFAULT NULL COMMENT '用户类别 0:超级管理员 1:公安局系统 2:法院系统 3:法院系统 4:司法局系统 5:政法委系统 6:监察局系统 7:监狱系统',
  `GrantRoles` varchar(200) DEFAULT NULL COMMENT '所属角色 0:超级管理员',
  `zhiwei` char(1) DEFAULT NULL COMMENT '职位：0：一般用户；1：部门负责人；2：检察长',
  `mobilephone` varchar(50) DEFAULT NULL COMMENT '电话号码',
  `yhdw` varchar(50) DEFAULT NULL COMMENT '用户单位',
  `ssks` varchar(50) DEFAULT NULL COMMENT '所属科室',
  `sfxszjclaj` char(1) DEFAULT NULL COMMENT 'Y:一直显示最近处理案件 N: 不显示最近处理案件',
  `fingertemplate` varchar(2000) DEFAULT NULL COMMENT '指纹相关',
  `UserState` int DEFAULT NULL COMMENT '0：禁用,1：正常',
  `AddTime` datetime DEFAULT NULL,
  `AddUSer` varchar(50) DEFAULT NULL,
  `IP_LIMIT` varchar(500) DEFAULT NULL COMMENT '限定IP地址访问'
)