## 版本要求

> - node >= v18.0.0
> - pnpm >= v8.6.0

注意：已经通过package.json文件增加限制

## 常用指令

### 安装pnpm

> 组件库使用 pnpm 作为包管理工具，请确保已安装 pnpm。

```sh
npm config set registry https://registry.npmjs.org
npm install -g pnpm
```

### 安装依赖

```sh
pnpm  install
```

### 文档相关

```sh
pnpm  run  docs:dev
pnpm  run  docs:build
pnpm  run  docs:preview
```

### 公共组件相关

```sh
pnpm  run  bui:build
pnpm  run  bui:publish
pnpm  run  bui:packtgz
```

### 公共页面相关

```sh
pnpm  run  pages:build
pnpm  run  pages:publish
pnpm  run  pages:packtgz
```

**注意：**

> **<font color='#30a46c'>业务组件库要先执行pnpm run bui:build，同时更改package.json中的版本号: </font>**
>
> **<font color='#30a46c'>才可以执行pnpm run bui:publish发版或者pnpm run bui:packtgz打本地包</font>**
>
> **<font color='#30a46c'>pages公共页面同理</font>**

## 开发指南

> **<font color='red'>分为两个库和两个开发场景：</font>**
>
> **<font color='red'>1.公共组件库和公共页面库</font>**
>
> **<font color='red'>2.本地link联调或研发云制品联调开发 </font>**

### 公共组件库

```sh
路径：
ctyk-yjk-common-components-common
        └─packages
            └─bui
```

### 公共页面库

```sh
路径：
ctyk-yjk-common-components-common
        └─packages
            └─pages
```

### 本地link调试

> **<font color='#30a46c'>详情见组件开发</font>**
>
> 1.打包组件
>
> 2.本地link到全局作用域
>
> 3.项目内link引用

### 研发云制品调试（不推荐）

> **<font color='#30a46c'>详情见组件开发</font>**
>
> 1.打包组件
>
> 2.研发制品上传
>
> 3.项目内安装制品

```sh
使用方法

1.在子项目的.npmrc 文件内，将原来的配置替换成如下
registry=https://gz01-srdart.srdcloud.cn/npm/zhyy-yth/zhyy_yth-snapshot-npm-virtual/
; engine-strict=true
; private source configuration
//gz01-srdart.srdcloud.cn/npm/zhyy-yth/zhyy_yth-snapshot-npm-virtual/:username=srd19153196308
//gz01-srdart.srdcloud.cn/npm/zhyy-yth/zhyy_yth-snapshot-npm-virtual/:_password=ZWNjY2IyYmU1NTZmNWI0MmQ1NWYzYmZkNGRmNjRkMTI=

2.如果使用过本地link方式，先删除本地link，清空缓存等
# 清空项目作用域下面的包文件
pnpm remove ctyk-yjk-common-component-bui ctyk-yjk-common-component-pages
# 清空全局作用域下面的包文件
pnpm remove ctyk-yjk-common-component-bui ctyk-yjk-common-component-pages -g
# 删除依赖和缓存
删除文件：node_modules，pnpm-lock.yaml
pnpm store prune

3.修改package.json文件
"devDependencies": {
    "ctyk-yjk-common-component-bui": "1.0.0",
    "ctyk-yjk-common-component-pages": "1.0.0",
}

4.重新安装依赖
pnpm install

5.启动项目验证
pnpm run dev

```

### 代码校验

```sh
pnpm run lint:eslint
pnpm run lint:stylelint
pnpm run lint:prettier
pnpm run lint:spell-check
pnpm run lint:lint-staged
```

## 项目目录

> 业务组将库采用 pnpm 的 monorepo 多包管理模式。
> 项目主要目录介绍
>
> - ~~demo包 - 业务组件开发验证包(已删除)~~
> - docs包 - 业务组件开发文档包
> - packages包 - 业务组件包

> packages包中主要包含
>
> - bui包 - 用于公共业务组件的开发(已发布)
> - pages包 - 用于公共页面组件的开发(已发布)
> - platform包 - common层用于业务方法层面的开发(梳理中)
> - ~~types包 - 用于业务组件的类型定义(已删除)~~
> - plugins包 - common层公共方法类(梳理中)
> - request包 - common层请求封装(梳理中)

注意：

> 业务组件的开发主要在bui包中进行。
> 业务页面的开发主要在pages包中进行。

## 开发工具

### VSCode 编辑器

**<font color='#30a46c'>工程默认带着.vscode文件, 文件中的配置开启了保存自动修复, 如果使用WebStorm等编辑器请自行配置。</font>**

.vscode文件下包含:

```sh
 extensions.json
 global.code-snippets
 settings.json
```

### VSCode插件

**<font color='#30a46c'>下面插件不允许全局禁用，项目级别的已自带安装并启用：</font>**

```sh
 vue-official
 eslint
 styleLint
 prettier
 code-spell-checker
```

## 规范要求

项目中已通过插件的形式进行了代码规范的检查，如eslint、stylelint、prettier等。

🚨 **<font color='#f14158'>禁止下列操作</font>**

```sh
# 使用-n/--no-verify参数跳过检查

git  commit  -m  'feat(ci): 完善系统配置文件'  -n
```

```sh
# 禁用校验钩子
export HUSKY=0

git  commit  -m  'feat(ci): 完善系统配置文件1'
git  commit  -m  'feat(ci): 完善系统配置文件2'
git ...

# 重新启用钩子
unset HUSKY
```

规范范围

```sh
 Eslint             【做代码质量检查】
 StyleLint          【做样式检查】
 Prettier           【做代码格式化】
 Code-spell-checker 【中文拼写检查插件】
 Commitlint         【做提交信息规范检查】
```

## 单元测试

系统已经集成了vitest, 现阶段只对platform包进行单元测试，后续根据业务放开对业务组件的单元测试。

```sh
pnpm  run  test
```
