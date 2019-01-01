export default function urlRequest({url, data = null, method, use = () => {}, onreadystatechange = () => {}}) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(...arg) {
        if (this.readyState == 4 && this.status == 200) {
            onreadystatechange();
        }
    };

    xhttp.open(method, url, true);
    use(xhttp);
    xhttp.send(data);
}
