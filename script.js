function themeSelect(element) {
  var chosenTheme = 'bootstrapThemes/';
  chosenTheme += element.value;
  chosenTheme += '.bootstrap.min.css';
  var theBootstrapStylesheet = document.getElementById('bootstrapStylesheet');
  theBootstrapStylesheet.setAttribute('href', chosenTheme);
}
