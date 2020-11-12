$('#testingButton', window.parent.document).click(function() {
    console.log("coucou");
    $('#exportImportModal').modal();
    showCurrentPlanPrettifiedJson();
});