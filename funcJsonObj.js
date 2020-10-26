function showCurrentPlanPrettifiedJson() {
    var jsonObj = JSON.parse(localStorage.getItem('history'))
    var jsonObj = JSON.parse(jsonObj[jsonObj.length - 1]);
    var jsonStr = JSON.stringify(jsonObj, null, 4);
    document.getElementById('saveCurrentPlan').value = jsonStr;
}

function importPlanJson() {
    var jsonStr = document.getElementById('saveCurrentPlan').value;
    var jsonObj = JSON.parse(jsonStr);
    loadObj(jsonObj);
}