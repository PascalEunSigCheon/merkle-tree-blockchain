let without_mt_ntran = document.getElementById("without-mt-ntran");
let without_mt_filesize = document.getElementById("without-mt-filesize");
let ntransEl = document.getElementById("ntrans");
let with_mt_ntran = document.getElementById("with-mt-ntran");
let with_mt_filesize = document.getElementById("with-mt-filesize");

// with_mt_ntran.innerHTML = Math.log2(8);
// with_mt_ntran.innerHTML = 123;

function updateOutput(){
    without_mt_ntran.innerHTML = ntransEl.value;
    without_mt_filesize.innerHTML = String(Math.round(( ntransEl.value * 200 ) / 1024)) + " KB";
    let with_mt_ntran_updated = Math.round(Math.log2(ntransEl.value));
    with_mt_ntran.innerHTML = with_mt_ntran_updated;
    with_mt_filesize.innerHTML = String(Math.round(( with_mt_ntran_updated * 200 ) / 1024)) + " KB";
}

ntransEl.addEventListener('input', () => {
    updateOutput();
})

window.addEventListener('DOMContentLoaded', () => {
    ntransEl.value = 2500;
    updateOutput();
})
