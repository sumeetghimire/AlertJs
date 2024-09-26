!function(o,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():o.ModalLibrary=e()}("undefined"!=typeof window?window:this,function(){function o(o){let e=window.jQuery.extend({},{title:"Default Title",message:"Default Message",confirmText:"Ok",cancelText:"Cancel",position:"center",onConfirm:function(){}},o),t=`
            <div class="modal fade" id="customModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">${e.message}</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">${e.cancelText}</button>
                            <button type="button" class="btn btn-primary" id="confirmBtn">${e.confirmText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#customModal").modal("show"),window.jQuery("#confirmBtn").on("click",function(){e.onConfirm(),window.jQuery("#customModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#customModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),s(e.position)}function e(o){let e=window.jQuery.extend({},{title:"Alert Title",message:"This is an alert message.",confirmText:"Okay",position:"center",onConfirm:function(){},backgroundColor:"bg-warning",buttonColor:"btn-primary"},o),t=`
            <div class="modal fade" id="alertModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content ${e.backgroundColor}">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${e.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn ${e.buttonColor}" id="alertConfirmBtn">${e.confirmText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#alertModal").modal("show"),window.jQuery("#alertConfirmBtn").on("click",function(){e.onConfirm(),window.jQuery("#alertModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#alertModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),s(e.position)}function t(o){let e=window.jQuery.extend({},{title:"Choose an Option",message:"Please select one of the following options:",yesText:"Yes",noText:"No",cancelText:"Cancel",position:"center",onYes:function(){},onNo:function(){},onCancel:function(){},yesButtonColor:"btn-primary",noButtonColor:"btn-secondary",cancelButtonColor:"btn-light"},o),t=`
            <div class="modal fade" id="tripleChoiceModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${e.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn ${e.yesButtonColor}" id="yesBtn">${e.yesText}</button>
                            <button type="button" class="btn ${e.noButtonColor}" id="noBtn">${e.noText}</button>
                            <button type="button" class="btn ${e.cancelButtonColor}" data-dismiss="modal">${e.cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#tripleChoiceModal").modal("show"),window.jQuery("#yesBtn").on("click",function(){e.onYes(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#noBtn").on("click",function(){e.onNo(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#tripleChoiceModal").on("hidden.bs.modal",function(){e.onCancel(),window.jQuery(this).remove()}),s(e.position)}function a(o){let e=window.jQuery.extend({},{title:"Success!",message:"Your work has been saved.",position:"top-end",duration:1500,fontSize:"1.5rem"},o),t=`
            <div class="modal fade" id="successNotificationModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
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
                                <span class="ml-2 message-text" style="font-size: ${e.fontSize};">${e.message}</span>
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
        `;window.jQuery("body").append(t),window.jQuery("#successNotificationModal").modal("show"),setTimeout(function(){window.jQuery("#successNotificationModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})},e.duration)}function s(o){let e=window.jQuery(".modal-dialog");switch(e.removeClass("modal-dialog-centered modal-dialog-top modal-dialog-bottom modal-dialog-left modal-dialog-right"),o){case"top":e.addClass("modal-dialog-top");break;case"bottom":e.addClass("modal-dialog-bottom");break;case"left":e.addClass("modal-dialog-left");break;case"right":e.addClass("modal-dialog-right");break;default:e.addClass("modal-dialog-centered")}}return!function o(e){function t(o,e){let t=document.createElement("script");t.src=o,t.onload=e,document.head.appendChild(t)}function a(){if(!document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')){let o;(o=document.createElement("link")).rel="stylesheet",o.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",document.head.appendChild(o)}window.jQuery.fn.modal?e&&e():t("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",function(){console.log("Bootstrap loaded"),e&&e()})}window.jQuery?a():t("https://code.jquery.com/jquery-3.6.0.min.js",function(){console.log("jQuery loaded"),a()})}(function(){console.log("Libraries ready, ConfirmationDialog, AlertModal, and TripleChoiceModal available."),window.ConfirmationDialog=o,window.AlertModal=e,window.TripleChoiceModal=t,window.SuccessNotificationModal=a}),{ConfirmationDialog:o,AlertModal:e,TripleChoiceModal:t,SuccessNotificationModal:a}});