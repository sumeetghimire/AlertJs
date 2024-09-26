(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.ModalLibrary = factory();
    }
})(typeof window !== "undefined" ? window : this, function() {
    function injectCDNs(callback) {
        function loadScript(src, onload) {
            let script = document.createElement('script');
            script.src = src;
            script.onload = onload;
            document.head.appendChild(script);
        }

        function loadCSS(href) {
            let link = document.createElement('link');
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
        }

        if (!window.jQuery) {
            loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function() {
                console.log('jQuery loaded');
                loadBootstrap();
            });
        } else {
            loadBootstrap();
        }

        function loadBootstrap() {
            if (!document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')) {
                loadCSS("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
            }

            if (!window.jQuery.fn.modal) {
                loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js", function() {
                    console.log('Bootstrap loaded');
                    if (callback) callback();
                });
            } else {
                if (callback) callback();
            }
        }
    }

    function ConfirmationDialog(options) {
        const defaults = {
            title: 'Default Title',
            message: 'Default Message',
            confirmText: 'Ok',
            cancelText: 'Cancel',
            position: 'center',
            onConfirm: function() {}
        };

        const settings = window.jQuery.extend({}, defaults, options);

        const modalHtml = `
            <div class="modal fade" id="customModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${settings.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${settings.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">${settings.message}</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">${settings.cancelText}</button>
                            <button type="button" class="btn btn-primary" id="confirmBtn">${settings.confirmText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        window.jQuery('body').append(modalHtml);
        window.jQuery('#customModal').modal('show');

        window.jQuery('#confirmBtn').on('click', function() {
            settings.onConfirm();
            window.jQuery('#customModal').modal('hide').on('hidden.bs.modal', function() {
                window.jQuery(this).remove();
            });
        });

        window.jQuery('#customModal').on('hidden.bs.modal', function() {
            window.jQuery(this).remove();
        });

        positionModal(settings.position);
    }

    function AlertModal(options) {
        const defaults = {
            title: 'Alert Title',
            message: 'This is an alert message.',
            confirmText: 'Okay',
            position: 'center', 
            onConfirm: function() {},
            backgroundColor: 'bg-warning',
            buttonColor: 'btn-primary' 
        };

        const settings = window.jQuery.extend({}, defaults, options);

        const modalHtml = `
            <div class="modal fade" id="alertModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${settings.position}" role="document">
                    <div class="modal-content ${settings.backgroundColor}">
                        <div class="modal-header">
                            <h5 class="modal-title">${settings.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${settings.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn ${settings.buttonColor}" id="alertConfirmBtn">${settings.confirmText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        window.jQuery('body').append(modalHtml);
        window.jQuery('#alertModal').modal('show');

        window.jQuery('#alertConfirmBtn').on('click', function() {
            settings.onConfirm();
            window.jQuery('#alertModal').modal('hide').on('hidden.bs.modal', function() {
                window.jQuery(this).remove();
            });
        });

        window.jQuery('#alertModal').on('hidden.bs.modal', function() {
            window.jQuery(this).remove();
        });

        positionModal(settings.position);
    }

    
    function TripleChoiceModal(options) {
        const defaults = {
            title: 'Choose an Option',
            message: 'Please select one of the following options:',
            yesText: 'Yes',
            noText: 'No',
            cancelText: 'Cancel',
            position: 'center',
            onYes: function() {},
            onNo: function() {},
            onCancel: function() {},
            yesButtonColor: 'btn-primary', // Default Yes button color
            noButtonColor: 'btn-secondary', // Default No button color
            cancelButtonColor: 'btn-light'   // Default Cancel button color
        };
    
        const settings = window.jQuery.extend({}, defaults, options);
    
        const modalHtml = `
            <div class="modal fade" id="tripleChoiceModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${settings.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${settings.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${settings.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn ${settings.yesButtonColor}" id="yesBtn">${settings.yesText}</button>
                            <button type="button" class="btn ${settings.noButtonColor}" id="noBtn">${settings.noText}</button>
                            <button type="button" class="btn ${settings.cancelButtonColor}" data-dismiss="modal">${settings.cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        window.jQuery('body').append(modalHtml);
        window.jQuery('#tripleChoiceModal').modal('show');
    
        window.jQuery('#yesBtn').on('click', function() {
            settings.onYes();
            window.jQuery('#tripleChoiceModal').modal('hide').on('hidden.bs.modal', function() {
                window.jQuery(this).remove();
            });
        });
    
        window.jQuery('#noBtn').on('click', function() {
            settings.onNo();
            window.jQuery('#tripleChoiceModal').modal('hide').on('hidden.bs.modal', function() {
                window.jQuery(this).remove();
            });
        });
    
        window.jQuery('#tripleChoiceModal').on('hidden.bs.modal', function() {
            settings.onCancel(); // Call onCancel when modal is closed
            window.jQuery(this).remove();
        });
    
        positionModal(settings.position);
    }


    function SuccessNotificationModal(options) {
        const defaults = {
            title: 'Success!',
            message: 'Your work has been saved.',
            position: 'top-end', // Can be top-left, top-right, bottom-left, bottom-right, center
            duration: 1500, // Duration in milliseconds
            fontSize: '1.5rem' // Default font size
        };
    
        const settings = window.jQuery.extend({}, defaults, options);
    
        const modalHtml = `
            <div class="modal fade" id="successNotificationModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${settings.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${settings.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            <div class="alert alert-success d-flex align-items-center justify-content-center">
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle class="checkmark__circle" cx="26" cy="26" r="25" />
                                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                                <span class="ml-2 message-text" style="font-size: ${settings.fontSize};">${settings.message}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                .checkmark__circle {
                    stroke-dasharray: 166;
                    stroke-dashoffset: 166;
                    stroke-width: 2;
                    stroke-miterlimit: 10;
                    stroke: green;
                    fill: none;
                    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
                }
    
                .checkmark {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: block;
                    stroke-width: 2;
                    stroke: green;
                    stroke-miterlimit: 10;
                    margin: 10% auto;
                    box-shadow: inset 0px 0px 0px #7ac142;
                    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
                }
    
                .checkmark__check {
                    transform-origin: 50% 50%;
                    stroke-dasharray: 48;
                    stroke-dashoffset: 48;
                    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
                }
    
                @keyframes stroke {
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
    
                @keyframes scale {
                    0%, 100% {
                        transform: none;
                    }
                    50% {
                        transform: scale3d(1.1, 1.1, 1);
                    }
                }
    
                @keyframes fill {
                    100% {
                        box-shadow: inset 0px 0px 0px 30px #fff;
                    }
                }
            </style>
        `;
    
        window.jQuery('body').append(modalHtml);
        window.jQuery('#successNotificationModal').modal('show');
    
        // Automatically hide the modal after the specified duration
        setTimeout(function() {
            window.jQuery('#successNotificationModal').modal('hide').on('hidden.bs.modal', function() {
                window.jQuery(this).remove();
            });
        }, settings.duration);
    }
    
    

    function positionModal(position) {
        const modalDialog = window.jQuery('.modal-dialog');

        modalDialog.removeClass('modal-dialog-centered modal-dialog-top modal-dialog-bottom modal-dialog-left modal-dialog-right');

        switch (position) {
            case 'top':
                modalDialog.addClass('modal-dialog-top');
                break;
            case 'bottom':
                modalDialog.addClass('modal-dialog-bottom');
                break;
            case 'left':
                modalDialog.addClass('modal-dialog-left');
                break;
            case 'right':
                modalDialog.addClass('modal-dialog-right');
                break;
            case 'center':
            default:
                modalDialog.addClass('modal-dialog-centered');
                break;
        }
    }

    injectCDNs(function() {
        console.log('Libraries ready, ConfirmationDialog, AlertModal, and TripleChoiceModal available.');
        window.ConfirmationDialog = ConfirmationDialog; 
        window.AlertModal = AlertModal; 
        window.TripleChoiceModal = TripleChoiceModal;
        window.SuccessNotificationModal = SuccessNotificationModal;

    });

    return { ConfirmationDialog, AlertModal, TripleChoiceModal,SuccessNotificationModal }; 
});
