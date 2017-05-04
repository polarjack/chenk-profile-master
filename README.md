# clone first #

```git clone https://github.com/louiselin/chenkung_profile.git```


## How do I get set up? ##

```
    cd chenkung_profile
    npm start
```

* 跑在背景
``` 
    tmux 
    npm start 
```
在執行畫面ctrl+b進入tmux指令，按d（離開tmux）
 
```tmux attach -t 0 ```（執行list 0）



## Add Pages ##
* 增加新頁面
    - 表示說在index下的頁面(修改routes後，需要重啟專案)
        ```vim routes/index.js```
```
    router.get('/xxx', function(req, res, next) {
            res.render('xxx', { title: '<title name here!>'});
    });
```


## Update Files ##
個人網站的部分使用Node.js／jade模板引擎寫的，寫法跟一般的html很像，但是最大的特色不像HTML使用成對的tag來描述，而是使用縮排的階層關係，解決掉嵌套和成對tag的問題，寫起來比較簡潔。

* 每頁都會有：
    * ```nav.jade```
      * 指的是有選單和主要訊息的部分，包含：每一頁的連結、老師資訊以及不變的連結和footer。
      * 加入方式：在每頁需要固定出現的地方加入```include nav```。
    * ```layout.jade```
      * 主要放使用的js和css的cdn。
      * 加入方式：在一開始加入```extends layout```。
* 響應式網頁css：
    * 手機：```public/stylesheet/style_mobile.css```
        *  @media screen and (max-width: 900px)
    * 電腦：```public/stylesheet/style_web.css```
        * @media screen and (min-width: 900px)
* 個人網站大頭貼：
    * ```public/images```
## Reference ##
[Node.js Jade](https://www.npmjs.com/package/jade)
