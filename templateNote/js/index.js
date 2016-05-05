/**
 * Created by Lihu on 2016/5/5.
 */

$(function(){
    console.log('如何使用template模板');

    // 服务端返回的数据
    var resData = {
        'title' : '程序员必读书系列',
        'bookInfo' : {
            0 : '《java从入门的到放弃》',
            1 : '《php从入门的到放弃》',
            2 : '《c从入门的到放弃》'
        },
        'authorInfo' : {
            0 : {
                'name' : '张三',
                'address' : '北京'
            },
            1 : {
                'name' : '李四',
                'address' : '上海'
            },
            2 : {
                'name' : '王五',
                'address' : '广州'
            }
        },
        'isSoldOut' : true
    };
    // 获取 testTpl id，将数据注入到这个id中
    var html = template('testTpl' , resData);
    // 获取 js_container节点，将数据渲染到里面
    $('.js_container').html( html );
    //$('.js_container').append( html );
    console.log( 'resData:' );
    console.log( resData );

});