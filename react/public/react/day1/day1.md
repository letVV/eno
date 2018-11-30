# react

[react中文文档](https://react.docschina.org/)

jquery react 库

vue express react js框架

bootstrap css框架

facebook写的一个框架或者库，instargram,facebook客户端

react这个框架(前端包含react和react-dom)


在页面中引入这两份JS，我是下载到本地引入
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!-- 这些JS会在后端完成，而不交给前端完成，node帮你完成，vue-》vue-cli,react-》creact-react-app -->
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.js"></script>
<!--babel把ES6转为ES5，把JSX的语法转为ES5，在前端转代码-->
```

引入`vue.js`之后，在页面在全局里面有`Vue`

引入`jquery.js`之后，在页面在全局里面有`$,jQuery`

引入`react.js,react-dom.js`之后，在页面在全局里面有`React,ReactDOM`

JSX就是JS的扩展语法，它兼容JS语法

# JSX

JSX是用一个大括号实现数据绑定，区别于vue两个大括号

vue双向数据吧绑定，M->V  V->M，数据和视图相互影响的

react单向数据绑定，M->V，但是视图动数据模型不会动

# HelloWorld

html模板只能有一个根节点
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="demo"></div>
    <script src="../../js/react.js"></script>
    <script src="../../js/react-dom.js"></script>
    <script src="../../js/babel.js"></script>
    <!-- JSX -->
    <script type="text/babel">
        ReactDOM.render(
            <div>
                hello,world
                <button>ok</button>
            </div>
            
            ,
            document.querySelector("#demo")
        )
    </script>
</body>
</html>
```

## 绑定文本值

```html
<!-- react -->
<div>{data.name}</div>
<!-- vue  v-text -->
<div>{{data.name}</div>
```


## 绑定属性值

```html
<!-- react -->
<div name={data.name}></div>
<!-- vue  v-bind:xxx  :xxx-->
<div :name="data.name"></div>
```

## 支持算数运算

```html
<p>{data.num+1+"1"}</p>
```

## 函数

就是`{}`支持放函数，该函数返回的值，就是需要渲染的值
```html
var methods={
    html:function(){
        return <div>123</div>
    }
}
ReactDOM.render(
    <div>{(function(){
        var str1 = "hello";
        var str2 = "world";
        return str1+str2
    })()}
    {methods.html()}
    </div>,
    document.querySelector("#demo")
)
```

# 绑定事件

运用`onClick={函数}`，来绑定函数
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="demo"></div>
    <script src="../../js/react.js"></script>
    <script src="../../js/react-dom.js"></script>
    <script src="../../js/babel.js"></script>
    <!-- JSX -->
    <script type="text/babel">
        var methods = {
            testClick:function(){
                console.log("hello")
            }
        }
        ReactDOM.render(
            <div>
                hello,world
                <button onClick={methods.testClick}>ok</button>
            </div>
            ,
            document.querySelector("#demo")
        )
    </script>
</body>
</html>
```

# 三元表达式

```html
<p>{methods.bool?"真":"假"}</p>
```

# 列表

v-for,运用`map`方法构造数组，然后遍历渲染

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="demo"></div>
    <script src="../../js/react.js"></script>
    <script src="../../js/react-dom.js"></script>
    <script src="../../js/babel.js"></script>
    <!-- JSX -->
    <script type="text/babel">
        var data = {
            arr:[1,2,3,4,5],
            arr2:[<li key='1'>1</li>,<li key='2'>2</li>,<li key='3'>3</li>]
        }
        ReactDOM.render(
            <div>{data.arr}
                <ul>
                    {data.arr2}
                </ul>
                <ul>
                        {(function(arr){
                            var list = arr.map(function(item,index){
                                return <li key={index}>{item}</li>
                            })
                            console.log(list)
                            return list
                        })(data.arr)}
                </ul>
            </div>
            ,
            document.querySelector("#demo")
        )
    </script>
</body>
</html>
```

# 条件判断

v-if
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="demo"></div>
    <script src="../../js/react.js"></script>
    <script src="../../js/react-dom.js"></script>
    <script src="../../js/babel.js"></script>
    <!-- JSX -->
    <script type="text/babel">
        var data = {
            bool: false
        }
        ReactDOM.render(
            <div>{function(bool) {
                if(bool){
                    return "真"
                }else{
                    return "假"
                }
            }(data.bool)}</div>,
            document.querySelector("#demo")
        )
    </script>
</body>
</html>
```