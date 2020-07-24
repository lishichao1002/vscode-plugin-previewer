const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    console.log('恭喜，您的扩展“vscode-plugin-demo”已被激活！');
    // 注册命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', function () {
        // vscode.window.showInformationMessage('Hello World!');
        // vscode.window.showInputBox({
        //     placeHolder: 'Please input the image path'
        // })
        // .then(console.log)
        vscode.window.showOpenDialog({
            filters: {'Images': ['png', 'jpg', 'gif', 'bmp', 'jpeg', 'svg', 'webp']}
        }).then(result => {
            console.log(result)
            
        }, console.error)
    }));

    require('./src/hover')(context);
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
    console.log('您的扩展“vscode-plugin-demo”已被释放！')
};