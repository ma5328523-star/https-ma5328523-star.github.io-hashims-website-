function copyNumber(){
    navigator.clipboard.writeText("+923125328523");

    let btn = event.target;
    btn.innerText = "Copied ✔";
    btn.style.background = "#090a0a";

    setTimeout(() => {
        btn.innerText = "Copy Number";
        btn.style.background = "#fff";
    }, 1500);
}