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
    return (dates.getFullYear()+'-'+ (month<10?('0'+month):month) +'-'+dates.getDate());
}
const timeStamp = date =>{
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
module.exports = {
    formatTime: formatTime,
    formatDate,
    formatDateB,
    timeStamp,
    pageTest,
    clientCode
}