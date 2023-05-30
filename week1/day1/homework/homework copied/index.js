function submit(answer) {
    var container = document.querySelector('#answer'+answer);
    var style = container.style.backgroundColor
    if (answer == 1) {
        if (style != 'red') {
            container.style.backgroundColor = 'red'
        } else {
            container.style.backgroundColor = '#73916932';
        }
    }
    if (answer == 2) {
        if (style != 'green') {
            container.style.backgroundColor = 'green'
        } else {
            container.style.backgroundColor = '#73916932';
        }
    }
    if (answer == 3) {
        if (style != 'red') {
            container.style.backgroundColor = 'red'
        } else {
            container.style.backgroundColor = '#73916932';
        }
    }
}