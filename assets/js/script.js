  
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper)
}


const App = {
    //DOM
    input: document.getElementById('mainText'),
    btnEncript: document.querySelector('.encript'),
    btnDecript: document.querySelector('.decript'),
    btnCopy: document.querySelector('.copy'),
    output: document.querySelector('.outputText'),
  
    //CHAVES
    keys: {
      a: 'nz',
      b: 'oy',
      c: 'px',
      d: 'qw',
      e: 'rw',
      f: 'sv',
      g: 'tu',
      h: 'un',
      i: 'vo',
      j: 'wp',
      k: 'xq',
      l: 'yr',
      m: 'zs',
      n: 'az',
      o: 'by',
      p: 'cx',
      q: 'dw',
      r: 'ev',
      s: 'fu',
      t: 'gn',
      u: 'ho',
      v: 'ip',
      w: 'jq',
      x: 'kr',
      y: 'ls',
      z: 'mt',
    },
  
    //encript
    encript(text) {
      var chars = App.keys;
      App.output.innerHTML = text.replace(/[abcdefghijklmnopqrstuvwxyz]/g, (m) => chars[m]);
     
    },
  
    //decript
    decript(text) {      
      const flip = (data) =>
        Object.fromEntries(
          Object.entries(data).map(([key, value]) => [value, key])
        );
  
      var chars = flip(App.keys);
      App.output.innerHTML = text.replace(
        /(nz|oy|px|qw|rw|sv|tu|un|vo|wp|xq|yr|zs|az|by|cx|dw|ev|fu|gn|ho|ip|jq|kr|ls|mt)/g,
        (m) => chars[m]
      );     
    },
  
    //copiar
    copy(text) {
      try {
        navigator.clipboard.writeText(text);
         } catch (err) {
          alert('Boa! Texto copiado com sucesso!', 'success');
      }
    },
  
    //
    init() {
      App.btnEncript.addEventListener('click', () => {
        App.encript(App.input.value);
      });
  
      App.btnDecript.addEventListener('click', () => {
        App.decript(App.input.value);
      });
  
      App.btnCopy.addEventListener('click', () => {
        App.copy(App.output.innerHTML);
        alert('Boa! Texto copiado com sucesso!', 'success')
      });
    },
  };

 

  
  
  window.onload = App.init();
  

  