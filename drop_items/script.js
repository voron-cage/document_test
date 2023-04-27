async function getFish() {
    let rand = Math.floor(Math.random() * 20);
    let resp = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${rand}&start-with-lorem=1`);
    let data = await resp.json();
    localStorage.setItem("fish_text_data", JSON.stringify(data));
}
function setFish(data) {
    let elContent = document.getElementsByClassName('content')[0];
    for (let [index, item] of data.entries()) {
        let elItem = document.createElement('div');
        elItem.className = 'item';
        elItem.innerHTML = `${index}: ${item}`;
        elContent.appendChild(elItem);
    }
}
let data = localStorage.getItem("fish_text_data");
if(!data) {
    await getFish();
    data = localStorage.getItem("fish_text_data");
}
data = JSON.parse(data);
setFish(data);