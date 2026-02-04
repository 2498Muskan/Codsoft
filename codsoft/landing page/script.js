function showContent(id) {
    document.querySelectorAll('.details').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
function showSuccess() {
    document.getElementById('success').style.display = 'block';
    return false; // prevents page reload
}
