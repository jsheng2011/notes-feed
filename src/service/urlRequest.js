export default function urlRequest({url, data = null, method, use = () => {}, onreadystatechange = () => {}, done = () => {}}) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(...arg) {
        if (this.readyState == 4 && this.status == 200) {
            onreadystatechange(...arg);
        }
    };

    xhttp.open(method, url, true);
    xhttp.onload = function() {
        done(xhttp.response);
    };
    xhttp.onerror = function() {
        done(xhttp.response);
    };
    use(xhttp);
    xhttp.send(data);
}
