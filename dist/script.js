parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({1:[function(require,module,exports) {
var a=document.getElementsByClassName("text__selector");a=Array.from(a);var i="Trema";function e(){var a="";switch(i){case"Trema":a="Trema koju vi danas znate napravljena je prije \n            nekih 7 - 8 godina. \n            U trenutku kad je bila postavljena, \n            stranica je bila potpuno user-friendly. \n            Danas se na njoj nalazi ogromna količina nepotrebnih i lose \n            organiziranih informacija. \n            Obavijesti i informacije koje bi trebale biti dostupne nadohvat \n            ruke, kao raspored, vrijeme informacija, \n            popis udžbenika i razne druge važne informacije, \n            skoro je pa nemoguće pronaći. \n            Posljedica je to loseg ili nikakvog odrzavanja same web stranice. \n            To sve skupa čini stranicu veoma nepristupačnom odbojnom korisnicima \n            ( pogotovo u mobilnoj verziji ). \n            Mi, učenici i profesori, složili smo se da je potrebna promjena, \n            te smo uzeli sebi kao izazov ali i zadovoljstvo redizajnirati \n            stranicu naše škole.";break;case"Tko smo mi":a="Mi smo maturanti B smjene III. Gimnazije Split. \n            Skupina smo mladih entuzijasta programera i web designera, \n            a upoznali smo se putem izvan-nastavnih sadržaja koje smo sami \n            organizirali. Nakon godina zajednickog rada i učenja na vlastitim \n            neuspjesima i pogreskama ispoloirali smo svoje vjestine razvoja weba. \n            Odlučili napraviti novu školsku web stranicu koju bi ostavili u \n            nasljedstvo idućim generacijama mladih mijočana, \n            ali i u zahvalu profesorima koji su polagali svoje vrijeme i nade u nas.";break;case"Što tražimo":a="Tražimo vašu pomoć. \n            Projekt je velik i treba puno vremena uložiti u njega. \n            Kako bi ga brže dovršili potrebni ste nam Vi. \n            Kroz rad na velikom i ozbiljnom projektu kao što je školski \n            web uz našu pomoć naučili bi ste koristiti sve alate \n            potrebne za izradu moderne single page aplikacije, \n            te kako to izgleda raditi na velikim projektima. \n            Svaki dio koda koji biste napisali bio bi reviewan \n            od strane mentora toga područja te bi uz njegovu \n            pomoć naučili pisati uredan i optimiziran kod.";break;case"Current ekipa":a="Anđela Maleš - Dizajn<br />\n            Josip Bartulović - Backend/Frontend<br />\n            Matej Kožica - Dizajn/Frontend<br />\n            Tonino Kaštelan - Backend/Frontend<br />"}document.getElementsByClassName("text__content")[0].innerHTML=a}e(),a.forEach(function(n){n.onclick=function(){a.forEach(function(a){a.classList.remove("text__selector--selected")}),n.classList.add("text__selector--selected"),i=n.innerHTML,e()}});
},{}]},{},[1], null)
//# sourceMappingURL=/script.map