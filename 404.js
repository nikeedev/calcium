//  debug.innerText += `Error code: 404, link used by user: "${window.location.href}", date: ${new Date()}, uuid: ${crypto.randomUUID()}`

let cats = [
    {
        src: "https://media1.tenor.com/m/XoRLL0SkhggAAAAd/livasmol-loading-cat.gif",
        quote: "This page seems to be...<b>not</b> found...?",
        alt: "GIF of a confused cat with a loading circle on his lobe.",
        title: "Page not found"
    },
    {
        src: "https://media1.tenor.com/m/7l4PXSCFjjQAAAAd/huh-cat.gif",
        quote: "Eh...what the f**k just happened??",
        alt: "Cat starring with a 'huh' face.",
        title: "Uh oh!"
    },
    {
        src: "https://media.tenor.com/7t63GFnoIPUAAAAd/huh-cat-huh-m4rtin.gif",
        quote: "Huh???",
        alt: "Cat saying meowing with face looking like it says 'huh'.",
        title: "WHY? WHY NOW!?"
    },
    {
        src: "https://media.tenor.com/gHGionfrEJgAAAAd/run-cat-running.gif",
        quote: "Uh oh!",
        alt: "A wild cat running around in the house because he got scared.",
        title: "D'oh! What now???",
        css: "width: 170px;"
    }
]

function regen() {
    let random_cat = cats[parseInt(Math.random()*cats.length)]
    
    cat.children[0].remove();
    quote.children[0].remove();
    
    ///

    let img = document.createElement("img");
    img.src = random_cat.src;
    img.alt = random_cat.alt;
    img.style = random_cat.css !== "" ? random_cat.css : "width: 120px;";
    
    
    cat.appendChild(img);

    ///

    let text = document.createElement("h2");
    text.classList.add("header");
    text.innerText = random_cat.quote;
    
    quote.appendChild(text);

    ///
    document.title = random_cat.title;
}

function rotat() {
    cat.classList.toggle("spinning");
}

cat.addEventListener("animationend", () => {
    cat.classList.remove("spinning");
}, { once: true });


regen();


