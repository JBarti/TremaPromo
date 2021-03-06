// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({30:[function(require,module,exports) {
var text_selectors = document.getElementsByClassName('text__selector');

text_selectors = Array.from(text_selectors);

var selected = "Trema";
changeText();

text_selectors.forEach(function (element) {
    element.onclick = function () {
        text_selectors.forEach(function (element) {
            element.classList.remove("text__selector--selected");
        });
        element.classList.add("text__selector--selected");
        selected = element.innerHTML;
        changeText();
    };
});

function changeText() {
    var text = '';
    switch (selected) {
        case 'Trema':
            text = "Trema koju vi danas znate napravljena je prije \n            nekih 7 - 8 godina. \n            U trenutku kad je bila postavljena, \n            stranica je bila potpuno user-friendly. \n            Danas se na njoj nalazi ogromna koli\u010Dina nepotrebnih i lose \n            organiziranih informacija. \n            Obavijesti i informacije koje bi trebale biti dostupne nadohvat \n            ruke, kao raspored, vrijeme informacija, \n            popis ud\u017Ebenika i razne druge va\u017Ene informacije, \n            skoro je pa nemogu\u0107e prona\u0107i. \n            Posljedica je to loseg ili nikakvog odrzavanja same web stranice. \n            To sve skupa \u010Dini stranicu veoma nepristupa\u010Dnom odbojnom korisnicima \n            ( pogotovo u mobilnoj verziji ). \n            Mi, u\u010Denici i profesori, slo\u017Eili smo se da je potrebna promjena, \n            te smo uzeli sebi kao izazov ali i zadovoljstvo redizajnirati \n            stranicu na\u0161e \u0161kole.";
            break;
        case 'Tko smo mi':
            text = "Mi smo maturanti B smjene III. Gimnazije Split. \n            Skupina smo mladih entuzijasta programera i web designera, \n            a upoznali smo se putem izvan-nastavnih sadr\u017Eaja koje smo sami \n            organizirali. Nakon godina zajednickog rada i u\u010Denja na vlastitim \n            neuspjesima i pogreskama ispoloirali smo svoje vjestine razvoja weba. \n            Odlu\u010Dili napraviti novu \u0161kolsku web stranicu koju bi ostavili u \n            nasljedstvo idu\u0107im generacijama mladih mijo\u010Dana, \n            ali i u zahvalu profesorima koji su polagali svoje vrijeme i nade u nas.";
            break;
        case 'Što tražimo':
            text = "Tra\u017Eimo va\u0161u pomo\u0107. \n            Projekt je velik i treba puno vremena ulo\u017Eiti u njega. \n            Kako bi ga br\u017Ee dovr\u0161ili potrebni ste nam Vi. \n            Kroz rad na velikom i ozbiljnom projektu kao \u0161to je \u0161kolski \n            web uz na\u0161u pomo\u0107 nau\u010Dili bi ste koristiti sve alate \n            potrebne za izradu moderne single page aplikacije, \n            te kako to izgleda raditi na velikim projektima. \n            Svaki dio koda koji biste napisali bio bi reviewan \n            od strane mentora toga podru\u010Dja te bi uz njegovu \n            pomo\u0107 nau\u010Dili pisati uredan i optimiziran kod.";
            break;
        case 'Current ekipa':
            text = "An\u0111ela Male\u0161 - Dizajn<br />\n            Josip Bartulovi\u0107 - Backend/Frontend<br />\n            Matej Ko\u017Eica - Dizajn/Frontend<br />\n            Tonino Ka\u0161telan - Backend/Frontend<br />";
            break;
    }
    document.getElementsByClassName('text__content')[0].innerHTML = text;
}
},{}],13:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '43095' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[13,30], null)
//# sourceMappingURL=/script.74d6c603.map