function show_error_message(data) {
    if (typeof data == 'string' || data instanceof String) {
        showErrorToast(data);
    } else {
        var first = true;
        $.each(data, function (k, v) {
            showErrorToast(v[0]);
            first = false;
            if (first === false) {
                return false
            }
        })
    }
}
function showSuccessToast(text) {
    $().toastmessage('showSuccessToast', text);
}
function showStickySuccessToast() {
    $().toastmessage('showToast', {
        text     : 'Success Dialog which is sticky',
        sticky   : true,
        position : 'top-right',
        type     : 'success',
        closeText: '',
        close    : function () {
            console.log("toast is closed ...");
        }
    });

}
function showNoticeToast() {
    $().toastmessage('showNoticeToast', "Notice  Dialog which is fading away ...");
}
function showStickyNoticeToast() {
    $().toastmessage('showToast', {
         text     : 'Notice Dialog which is sticky',
         sticky   : true,
         position : 'top-right',
         type     : 'notice',
         closeText: '',
         close    : function () {console.log("toast is closed ...");}
    });
}
function showWarningToast() {
    $().toastmessage('showWarningToast', "Warning Dialog which is fading away ...");
}
function showStickyWarningToast() {
    $().toastmessage('showToast', {
        text     : 'Warning Dialog which is sticky',
        sticky   : true,
        position : 'top-right',
        type     : 'warning',
        closeText: '',
        close    : function () {
            console.log("toast is closed ...");
        }
    });
}
function showErrorToast(text) {
    $().toastmessage('showErrorToast', text);
}
function showStickyErrorToast() {
    $().toastmessage('showToast', {
        text     : 'Error Dialog which is sticky',
        sticky   : true,
        position : 'top-right',
        type     : 'error',
        closeText: '',
        close    : function () {
            console.log("toast is closed ...");
        }
    });
}