spaceinvader = document.querySelector('.spaceinvader')
function openPage(pageName, elmnt, color, spaceColor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("buttblock__button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = color;
        tablinks[i].style.borderColor = color;
        document.getElementById('name').style.color = color;
        document.querySelector('.form__email').style.color = color;
        document.querySelector('.form__info').style.color = color;
        document.querySelector('.basement input').style.color = color;
        document.querySelector('.basement input').style.borderColor = color;
        links = document.querySelectorAll('.basement a')
        for (let i = 0; i < 4; i++){
            links[i].style.color = color;
        }
        text = document.querySelectorAll('.factText h1')
        for (let i = 0; i < 40; i++){
            text[i].style.color = color;
        }
       spaceinvader.style.background = `url(css/spaceinvader-${spaceColor}.png)`
    }
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();
