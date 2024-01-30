

function main(){
    // var form = document.querySelector("body > div.openerp.openerp_webclient_container > table > tbody > tr > td.oe_leftbar");
    // form.style.display = 'none';

    var linkContainer = document.querySelector("body > div.openerp.openerp_webclient_container > table > tbody > tr > td.oe_leftbar > div > div:nth-child(2) > div > div > div:nth-child(1)");
    
    var divs = linkContainer.querySelectorAll("div");
    divs.forEach((div)=>{
        console.log(div.innerText);
    })


    var uls = linkContainer.querySelectorAll("ul");
    uls.forEach((ul)=>{
        var lis = ul.querySelectorAll("li");
        lis.forEach((li)=>{
            var span = li.querySelector("span");
            console.log(span);
        })
        console.log("\n\n");
    })


}


window.onpopstate = function(event) {
    const hashLoc = "https://lms.uet.edu.pk/web?"
    const hash = window.location.href;
    console.log(hash);

    if(hash.includes(hashLoc)){
        main();
        console.log("Match")
    }

}