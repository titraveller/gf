// coze-config.js
// 封装 Coze SDK 初始化逻辑
function initCozeBot() {
    if (typeof CozeWebSDK === 'undefined') {
        console.error("Coze SDK 未能加载，请检查网络或 CDN 链接。");
        return;
    }

    const client = new CozeWebSDK.WebChatClient({
        config: {
            bot_id: '你的_BOT_ID', // 替换为你的 Bot ID
        },
        componentProps: {
            title: '智能投研投顾系统 v1.0',
            placeholder: '输入您的投资目标，我将为您生成回测报告...',
            icon: 'https://p16-va.lemon8cdn.com/obj/tos-maliva-i-no9a4p4ogb-us/68e21714c382431697334757c3e5669b', // 可以换个图标
        },
        auth: {
            type: 'token',
            token: 'YOUR_PAT_TOKEN', // 建议在汇报时说明：实际环境中由服务端动态下发
        }
    });

    console.log("Coze Bot 封装组件初始化成功");
}

// 页面加载完成后启动
document.addEventListener('DOMContentLoaded', initCozeBot);
