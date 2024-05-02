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
    const range = sheet.getRange("D2:D" + (1 + lightsData.length - 1));  
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
    try {
        var data = JSON.parse(e.postData.contents);
        var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(RANGE);
        const lightsData = fetchLights();  // Завжди отримуємо актуальні дані про світлофори
        switch (data.action) {
            case 'resetClicks':
                if (lightsData.length > 0) {
                    var range = sheet.getRange('D2:D' + (1 + lightsData.length));  // Виправлення діапазону
                    range.setValues(Array(lightsData.length).fill([0]));
                    return ContentService.createTextOutput(JSON.stringify({status: "success", "data": "Clicks reset successfully"}))
                                          .setMimeType(ContentService.MimeType.JSON);
                } else {
                    return ContentService.createTextOutput(JSON.stringify({status: "error", "data": "No lights to reset"}))
                                          .setMimeType(ContentService.MimeType.JSON);
                }
            case 'setLightState':
                const lightIndex = lightsData.findIndex(light => Number(light.id) === Number(data.id));
                if (lightIndex !== -1) {
                    const range = sheet.getRange("D" + (lightIndex + 2));  
                    range.setValue(data.state);  
                    return ContentService.createTextOutput(JSON.stringify({status: "success", "data": "Light state updated successfully"}))
                                          .setMimeType(ContentService.MimeType.JSON);
                } else {
                    return ContentService.createTextOutput(JSON.stringify({status: "error", "data": "Light not found"}))
                                          .setMimeType(ContentService.MimeType.JSON);
                }
            default:
                return ContentService.createTextOutput(JSON.stringify({status: "error", "data": "Invalid action"}))
                                      .setMimeType(ContentService.MimeType.JSON);
        }
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({status: "error", "message": error.message}))
                              .setMimeType(ContentService.MimeType.JSON);
    }
}







*/