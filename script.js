let text_selectors = document.getElementsByClassName('text__selector');

text_selectors = Array.from(text_selectors)

let selected = "Trema"
changeText()

text_selectors.forEach(element => {
    element.onclick = () => {
        text_selectors.forEach(element => {
            element.classList.remove("text__selector--selected")
        })
        element.classList.add("text__selector--selected")
        selected = element.innerHTML
        changeText()
    }
});


function changeText() {
    let text = ''
    switch (selected) {
        case 'Trema':
            text = `Trema koju vi danas znate napravljena je prije 
            nekih 7 - 8 godina. 
            U trenutku kad je bila postavljena, 
            stranica je bila potpuno user-friendly. 
            Danas se na njoj nalazi ogromna količina nepotrebnih i lose 
            organiziranih informacija. 
            Obavijesti i informacije koje bi trebale biti dostupne nadohvat 
            ruke, kao raspored, vrijeme informacija, 
            popis udžbenika i razne druge važne informacije, 
            skoro je pa nemoguće pronaći. 
            Posljedica je to loseg ili nikakvog odrzavanja same web stranice. 
            To sve skupa čini stranicu veoma nepristupačnom odbojnom korisnicima 
            ( pogotovo u mobilnoj verziji ). 
            Mi, učenici i profesori, složili smo se da je potrebna promjena, 
            te smo uzeli sebi kao izazov ali i zadovoljstvo redizajnirati 
            stranicu naše škole.`
            break;
        case 'Tko smo mi':
            text = `Mi smo maturanti B smjene III. Gimnazije Split. 
            Skupina smo mladih entuzijasta programera i web designera, 
            a upoznali smo se putem izvan-nastavnih sadržaja koje smo sami 
            organizirali. Nakon godina zajednickog rada i učenja na vlastitim 
            neuspjesima i pogreskama ispoloirali smo svoje vjestine razvoja weba. 
            Odlučili napraviti novu školsku web stranicu koju bi ostavili u 
            nasljedstvo idućim generacijama mladih mijočana, 
            ali i u zahvalu profesorima koji su polagali svoje vrijeme i nade u nas.`
            break;
        case 'Što tražimo':
            text = `Tražimo vašu pomoć. 
            Projekt je velik i treba puno vremena uložiti u njega. 
            Kako bi ga brže dovršili potrebni ste nam Vi. 
            Kroz rad na velikom i ozbiljnom projektu kao što je školski 
            web uz našu pomoć naučili bi ste koristiti sve alate 
            potrebne za izradu moderne single page aplikacije, 
            te kako to izgleda raditi na velikim projektima. 
            Svaki dio koda koji biste napisali bio bi reviewan 
            od strane mentora toga područja te bi uz njegovu 
            pomoć naučili pisati uredan i optimiziran kod.`
            break;
        case 'Current ekipa':
            text = `Anđela Maleš - Dizajn<br />
            Josip Bartulović - Backend/Frontend<br />
            Matej Kožica - Dizajn/Frontend<br />
            Tonino Kaštelan - Backend/Frontend<br />`
            break;
    }
    document.getElementsByClassName('text__content')[0].innerHTML = text;
}