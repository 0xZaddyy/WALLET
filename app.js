const walletAddy = document.getElementById('walletAddy');
const btnCopy = document.getElementById('btnCopy');  



btnCopy.onclick = function () {
    walletAddy.select();

    document.execCommand('copy');
}
