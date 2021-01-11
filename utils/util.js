const tabbar = require('../siteinfo.js').tabbar
const PAGE_TYPE = [{
    type: "0",
    msg: "tabbar page",
    desc: "当前页面所属：tabbar主界面"
}, {
    type: "1",
    msg: "first child page",
    desc: "当前页面所属：二级页面 并无上级页面存在"
}, {
    type: "2",
    msg: "not tabbar page",
    desc: "当前页面所属：二级页面 且存在上级页面"
}]
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate();
    return [year, month, day].map(formatNumber).join('-')
}
const formatDateB = date => {
    let dates = new Date(date);
    let month = parseInt(dates.getMonth()) + 1;
    return (dates.getFullYear() + '-' + (month < 10 ? ('0' + month) : month) + '-' + dates.getDate());
}
const timeStamp = date => {
    let dates = new Date(date);
    return dates.getTime();
}


const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


const pageTest = () => {
    var pages = getCurrentPages();
    console.log(tabbar, pages)
    if (pages.length === 0) {
        return PAGE_TYPE[0]
    }
    var currentPage = pages[pages.length - 1];
    var url = currentPage.route;
    if (url && tabbar.findIndex(val => val === url) != -1) {
        return PAGE_TYPE[0]
    } else if (url && pages.length == 1) {
        return PAGE_TYPE[1]
    } else {
        return PAGE_TYPE[2]
    }
}

function clientCode(code) {
    return wx.config.codeData[code].code
}

//  ! 验证数据类型
const dataType = (data) => {
    return Object.prototype.toString.call(data).replace(/\[|]/g, '').split(" ")[1]
}
// 几天前
function commentTimeHandle(dateStr) {
    var publishTime = Date.parse(new Date(dateStr.replace(/-/g, "/"))) / 1000,
        date = new Date(publishTime * 1000),
        Y = date.getFullYear(),
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    if (M < 10) {
        M = '0' + M;
    }
    if (D < 10) {
        D = '0' + D;
    }
    if (H < 10) {
        H = '0' + H;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    var nowTime = new Date().getTime() / 1000,
        diffValue = Number(nowTime) - Number(publishTime),
        diff_days = parseInt(diffValue / 86400),
        diff_hours = parseInt(diffValue / 3600),
        diff_minutes = parseInt(diffValue / 60),
        diff_secodes = parseInt(diffValue);
    if (diff_days > 0 && diff_days < 3) {
        return diff_days + "天前";
    } else if (diff_days <= 0 && diff_hours > 0) {
        return diff_hours + "小时前";
    } else if (diff_hours <= 0 && diff_minutes > 0) {
        return diff_minutes + "分钟前";
    } else if (diff_secodes < 60) {
        if (diff_secodes <= 0) {
            return "刚刚";
        } else {
            return diff_secodes + "秒前";
        }
    } else if (diff_days >= 3 && diff_days < 30) {
        return M + '-' + D + ' ' + H + ':' + m;
    } else if (diff_days >= 30) {
        return dateStr;
    }
}
module.exports = {
    dataType,
    commentTimeHandle,
    formatTime: formatTime,
    formatDate,
    formatDateB,
    timeStamp,
    pageTest,
    clientCode
}