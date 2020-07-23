const docType = document.querySelector('#type_');
const docTypeCustomSelect = document.querySelector('#type__chosen');
const docTheme = document.querySelector('#doc_theme');

let jsonValues;

docTypeCustomSelect.addEventListener('click', (e) => {
  if (e.target.classList.contains('active-result')) {
    if (jsonValues[docType.value]) {
      const nameFordocTheme = jsonValues[docType.value][0];
      docTheme.innerHTML = renderOptionsHtml(jsonValues[docType.value]);
      docTheme.name = nameFordocTheme;
      docTheme.disabled = false;
    } else {
      docTheme.innerHTML = ''
      docTheme.disabled = true;
    }
  }
})

const renderOptionsHtml = (obj) => {
  optionsObj = obj[1];
  htmlValue = '';

  for (let key in optionsObj) {
    const newOption = `
      <option class="form__option" value="${key}">
        ${optionsObj[key]}
      </option>
    `
    htmlValue += newOption;
  }
  
  return htmlValue;
}


referToJson = () => {
  fetch('https://malininss.github.io/intra-form/v5/json.json', {
    method: 'get'
  }).then( response => {
    return response.json()
  }).then( json  => {
    jsonValues = json;
  }).catch(e => {
    console.log('Error: ' + e);
  });
}

referToJson();
