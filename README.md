## 项目预热
### 1.移动端设备，用户通过手指放大缩小无效

`<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">`

### 2.引入`reset.css`

移动端样式重置，将不同的手机的初始化样式做一个统一

### 3.引入`border.css`

解决分辨率较高的移动端1像素边框被显示成多倍像素

### 4.引入fastclick库

解决在某些机型中使用click会延迟3s进行

`npm I fastclick --save`

使用：

```javascript
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)
```
### 5.iconFont

在iconFont中新建Travel项目]

### 6.无用代码的删除

### 7.上传git

初始化一个git的本地仓库

`git init`

将本地的修改上传到本地的缓存区

`git add .`
将本地缓存区的内容提交到本地仓库中  -m为留一条信息

`git commit -m 'project init'`

将本地仓库与远端仓库建立一个链接，并为远端仓库取名为origin

`git remote add origin https://github.com/adagiomin/Travel.git`

将本地的代码推到线上去

`git push -u origin master`


