const docType = document.querySelector('#type_');
const docTypeCustomSelect = document.querySelector('#type_');
const docTheme = document.querySelector('#doc_theme');
const docThemeWrapper = document.querySelector('#doc_theme_wrap');

let jsonValues;

docTypeCustomSelect.addEventListener('change', (e) => {
    if (jsonValues[docType.value] && Object.keys(jsonValues[docType.value][1]).length !== 0) {
      const nameFordocTheme = jsonValues[docType.value][0];
      docTheme.innerHTML = renderOptionsHtml(jsonValues[docType.value]);
      docTheme.name = nameFordocTheme;
      docTheme.disabled = false;
      docThemeWrapper.classList.remove('form__standart-select-non-active');
    } else {
      docTheme.innerHTML = ''
      docThemeWrapper.classList.add('form__standart-select-non-active');
      docTheme.disabled = true;
    }
});

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
  fetch('https://intra.1tv.ru/owa/flow/!home_new.get_json_form_search', {
  // fetch('json.json', {
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
