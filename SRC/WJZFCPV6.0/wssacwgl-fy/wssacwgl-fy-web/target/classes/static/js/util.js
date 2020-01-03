function getContextPath() {
    if (!getContextPath.baseURL) {
        getContextPath.baseURL = document.getElementById('utilScript').getAttribute('bashURL');
    }
    if (!!getContextPath.baseURL && arguments.length > 0){
        return getContextPath.baseURL.replace(/[^\/]+\/?$/,arguments[0]);
    }
    return !!getContextPath.baseURL?getContextPath.baseURL:"/";
}

function GetQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");

    var r = window.location.search.substr(1).match(reg);

    if (r!=null) return (r[2]);
    return null;

}