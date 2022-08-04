qtdReal.addEventListener("keypress", function(e) {
    if(!numeroEPonto(e)) {
      e.preventDefault();
  }
});

telefoneInput.addEventListener("keypress", function(e) {
  if(!verificaTelefone(e)) {
    e.preventDefault();
}
});

documentoInput.addEventListener("keypress", function(e) {
  if(!numeroEPonto(e)) {
    e.preventDefault();
}
});



function numeroEPonto(e) {
    let char = String.fromCharCode(e.keyCode);
    let pattern = '[0-9 | , && .]';
    if (char.match(pattern)) {
      return true;
  }
};

function verificaTelefone(e) {
  let char = String.fromCharCode(e.keyCode);
  let pattern = '[0-9 | () && + && -]';
  if (char.match(pattern)) {
    return true;
}
};

function verificaDocumento(e) {
  let char = String.fromCharCode(e.keyCode);
  let pattern = '[0-9 | / && .]';
  if (char.match(pattern)) {
    return true;
}
};


