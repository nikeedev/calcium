//  debug.innerText += `Error code: 404, link used by user: "${window.location.href}", date: ${new Date()}, uuid: ${crypto.randomUUID()}`
 
// Liste over alle katte gifs og tekster
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
        width: "170px"
    }
]

// Holder styr på hvilken kat vi viser nå
let current_cat = 0;

function regen() {
    let i = 0;

    // Finner en index i katte-listen så fremt den ikke er lik nåværende katte-index (vi vil ikke få den samme memen andre gang på rad)
    while (i == current_cat) 
        i = parseInt(Math.random()*cats.length);
    
    
    current_cat = i
    // få katten 
    let random_cat = cats[current_cat];

    // Slett bort gamle quote og katt
    cat_box.children[0].remove();
    quote.children[0].remove();
    
    ///
    // Setter all infoen til det nye bildet, inkludert at størrelsen ikke skal overstige 120px for bilder vanlige uten CSS-nøkkelen (i cats object-en)
    let img = document.createElement("img");
    img.src = random_cat.src;
    img.alt = random_cat.alt;
    img.id = "cat"

    // Hvis width varibelen i katte gifen ikke er definert, sett den til width 120px med mindre annet er angitt.
    if (!random_cat.width) {
        img.style.width = "120px";
    } else {
        img.style.width = random_cat.width;
    }
   
    // Hvis animasjonen blir ferdig, slett animasjons-classen "spinning" sånn at katten ikke fortsetter å rotere uten at brukeren har trykket på noe.
    img.addEventListener("animationend", (e) => {
        e.currentTarget.classList.toggle("spinning");
    }, { once: true });

    
    // Legg til den nye katten i elementet id="cat"
    cat_box.appendChild(img);

    ///
    // Lag text element, og sett quoten lik den
    let text = document.createElement("h2");
    text.classList.add("header");
    text.innerHTML = random_cat.quote;
    
    // Legg til den nye katten i elementet id="quote"
    quote.appendChild(text);

    ///
    // Endre tittelen på nettsiden til definert tittel for katten.
    document.title = random_cat.title;
}

function rotat() {
    // Legg til spinning class som reagerer og roterer katten.
    document.querySelector("#cat").classList.remove("spinning");
    setInterval(() => document.querySelector("#cat").classList.add("spinning"), 500);
}

regen();


