function clickHandleLatexToText(event) {
    var inputVal = document.getElementById("formulaInpunt").value;
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');
  
    var raw = JSON.stringify({
      "expression": inputVal
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    var fomulaOnText = fetch("http://127.0.0.1/readLatexExpression/", requestOptions)
      .then(response => response.json())
      .then(result => updateFormulaOutput(result))
      .catch(error => console.log('error', error));
  }
  
  function updateFormulaOutput(text) {
    document.getElementById('formulaOutput').value = text['expression'];
  }
  
  