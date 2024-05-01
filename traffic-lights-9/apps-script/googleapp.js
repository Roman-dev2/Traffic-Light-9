//Вставити в Google Script 
/*const SPREADSHEET_ID = '1R9ecTFhMNj9TzRnbpauBKo2xwQlLZDr9BxzIduFQKM8';
const RANGE = 'DB';

function fetchLights() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(RANGE);
    let data = sheet.getDataRange().getValues();
    if (data.length > 1) {
      data = data.slice(1); // Видалення рядка з заголовками
    } else {
      console.error("Дані не знайдені");
      return [];
    }
    return data.map(row => ({
      id: row[0],
      color: row[1],
      description: row[2],
      clickcount: row[3]
    }));
  } catch (error) {
    console.error("Не вдалося завантажити дані:", error);
    return [];
  }
}

function setLightState(id, newState) {
  const lightsData = fetchLights();
  const lightIndex = lightsData.findIndex(light => Number(light.id) === Number(id));
  if (lightIndex !== -1) {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(RANGE);
    const range = sheet.getRange("D" + (lightIndex + 2));
    range.setValue(newState);
    return 'Success';
  } else {
    return 'Light not found';
  }
}

function resetClicks() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(RANGE);
    const lightsData = fetchLights();
    if (lightsData.length === 0) {
      console.error("No data available");
      return 'No data available';
    }
    const range = sheet.getRange("D2:D" + (1 + lightsData.length));
    const resetData = Array(lightsData.length).fill([0]);
    range.setValues(resetData);
    return 'Success';
  } catch (error) {
    console.error("Failed to reset clicks:", error);
    return 'Failed to reset clicks';
  }
}

function doGet(e) {
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    const params = e.parameter;
    const action = params.action;
    if (action === 'fetchLights') {
        const lights = fetchLights();
        output.setContent(JSON.stringify(lights));
        return output;
    }
    return output.setContent(JSON.stringify({error: 'Invalid request'}));
}

function doPost(e) {
    if (!e.postData) {
        return ContentService.createTextOutput('No postData found');
    }

    try {
        var params = JSON.parse(e.postData.contents);
        console.log('Action:', params.action);
        console.log('ID:', params.id);
        console.log('State:', params.state);
        switch(params.action) {
            case 'setLightState':
                var result = setLightState(params.id, params.state);
                console.log('setLightState result:', result);
                return ContentService.createTextOutput(result);
            case 'resetClicks':
                var resetResult = resetClicks();
                console.log('resetClicks result:', resetResult);
                return ContentService.createTextOutput(resetResult);
            default:
                return ContentService.createTextOutput('Invalid request');
        }
    } catch (error) {
        console.log('Error:', error.toString());
        return ContentService.createTextOutput('Error: ' + error.message);
    }
}

*/