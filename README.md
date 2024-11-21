# Pomodoro
极简风格的番茄钟🍅

界面如下：

![images](https://github.com/xiaoliu66/Pomodoro/blob/master/pomodoro.png)

基本用法：先选择时间（默认为25分钟），然后点击开始进行一个番茄时钟任务。到点了之后会出现提示音提示番茄钟结束。

待做功能：

- [x] 添加休息时间
- [x] 自定义番茄钟时间
- [X] 自定义提示音
- [x] 显示当天完成番茄钟的数量和总计时间
- [ ] 显示统计番茄钟数据
- [ ] 可导入、导出数据
- [ ] 随机显示励志语句

## 项目运行及打包

依赖node版本 v16.20.2

npm install 运行时会卡住
推荐用
```shell
yarn install
```
#### 运行项目
```shell
npm start 
```


#### 打包时下载electron-builder
```shell
cnpm i electron-builder -D
```

#### 打包项目
```shell
npm run build
```

