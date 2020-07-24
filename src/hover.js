const vscode = require('vscode');

module.exports = function (context) {
    console.log('注册鼠标悬停提示');
     // 注册鼠标悬停提示
     context.subscriptions.push(vscode.languages.registerHoverProvider('javascript', {
        provideHover(document, position, token) {
            console.warn(arguments);
            vscode.window.showInformationMessage('hover');
            return new vscode.Hover(`* **名称** <br/> ![preview](https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596219356&t=b934e90b023c6cb19e04d99663ede076)`);
        }
    }));
};
