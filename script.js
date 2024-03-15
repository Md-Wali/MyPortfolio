var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");



function opentab (tabnames){
    for(link of tablinks){
        link.classList.remove("active_links");
    };
    for(content of tabcontents){
        content.classList.remove("active_tab");
    };
    event.currentTarget.classList.add("active_links");
    document.getElementById(tabnames).classList.add("active_tab");

}



