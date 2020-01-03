function getContextPath() {
    if (!getContextPath.baseURL) {
        getContextPath.baseURL = document.getElementById('utilScript').getAttribute('bashURL');
    }
    if (!!getContextPath.baseURL && arguments.length > 0){
        return getContextPath.baseURL.replace(/[^\/]+\/?$/,arguments[0]);
    }
    return !!getContextPath.baseURL?getContextPath.baseURL:"/";
}