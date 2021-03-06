/**
 * Created by 啸宇 on 2016/1/6.
 */
var arr = [{
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00,
    discount:1
}, {
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00,
    discount:0.8
}];

var output = '', item, tidyList = {}, i;

for(i = 0; i < arr.length; i++)
{
    item = arr[i];

    if(!tidyList[item.barcode])
    {
        tidyList[item.barcode] = item;
    }

    item = tidyList[item.barcode];

    item.count = (item.count || 0) + 1;
    item.total = item.count * item.price * item.discount;
    item.total1 = item.count * item.price;
    item.total2=item.total1-item.total;
}

for(var key in tidyList)
{
    item = tidyList[key];
    output += '名称：' + item.name
        + ', 数量：' + item.count + '(' + item.unit + ')'
        + ', 单价：' + item.price.toFixed(2) + '(元)'
        + ', 小计：' + item.total.toFixed(2) + '(元)'
        + ', 节省：' + item.total2.toFixed(2) + '(元)\n';
}

console.log(output);