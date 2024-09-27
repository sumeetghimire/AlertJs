/*!
 * AlertJS Library
 * Copyright (c) 2024 Sumeet Ghimire
 * Released under the MIT License
 * https://github.com/sumeetghimire/AlertJs
 */


!function(o,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():o.ModalLibrary=t()}("undefined"!=typeof window?window:this,function(){function o(o){let t=window.jQuery.extend({},{title:"Default Title",message:"Default Message",confirmText:"Ok",cancelText:"Cancel",position:"center",backgroundColor:"#ffffff",confirmButtonBackgroundColor:"#007bff",confirmButtonTextColor:"#ffffff",onConfirm:function(){}},o),e=`
            <div class="modal fade" id="customModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${t.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">${t.message}</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">${t.cancelText}</button>
                            <button type="button" class="btn btn-primary" id="confirmBtn" style="background-color: ${t.confirmButtonBackgroundColor}; color: ${t.confirmButtonTextColor};">
                                ${t.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(e),window.jQuery("#customModal").modal("show"),window.jQuery("#confirmBtn").on("click",function(){t.onConfirm(),window.jQuery("#customModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#customModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),n(t.position)}function t(o){let t=window.jQuery.extend({},{title:"Alert Title",message:"This is an alert message.",confirmText:"Okay",position:"center",onConfirm:function(){},backgroundColor:"#ffc107",buttonBackgroundColor:"#007bff",buttonTextColor:"#ffffff"},o),e=`
            <div class="modal fade" id="alertModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${t.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${t.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" id="alertConfirmBtn" 
                                    style="background-color: ${t.buttonBackgroundColor}; color: ${t.buttonTextColor};">
                                ${t.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(e),window.jQuery("#alertModal").modal("show"),window.jQuery("#alertConfirmBtn").on("click",function(){t.onConfirm(),window.jQuery("#alertModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#alertModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),n(t.position)}function e(o){let t=window.jQuery.extend({},{title:"Choose an Option",message:"Please select one of the following options:",yesText:"Yes",noText:"No",cancelText:"Cancel",position:"center",onYes:function(){},onNo:function(){},onCancel:function(){},backgroundColor:"#ffffff",yesButtonBackgroundColor:"#007bff",yesButtonTextColor:"#ffffff",noButtonBackgroundColor:"#6c757d",noButtonTextColor:"#ffffff",cancelButtonBackgroundColor:"#f8f9fa",cancelButtonTextColor:"#000000"},o),e=`
            <div class="modal fade" id="tripleChoiceModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${t.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${t.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" id="yesBtn" 
                                style="background-color: ${t.yesButtonBackgroundColor}; color: ${t.yesButtonTextColor};">
                                ${t.yesText}
                            </button>
                            <button type="button" class="btn" id="noBtn" 
                                style="background-color: ${t.noButtonBackgroundColor}; color: ${t.noButtonTextColor};">
                                ${t.noText}
                            </button>
                            <button type="button" class="btn" data-dismiss="modal" 
                                style="background-color: ${t.cancelButtonBackgroundColor}; color: ${t.cancelButtonTextColor};">
                                ${t.cancelText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(e),window.jQuery("#tripleChoiceModal").modal("show"),window.jQuery("#yesBtn").on("click",function(){t.onYes(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#noBtn").on("click",function(){t.onNo(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#tripleChoiceModal").on("hidden.bs.modal",function(){t.onCancel(),window.jQuery(this).remove()}),n(t.position)}function a(o){let t=window.jQuery.extend({},{title:"Success!",message:"Your work has been saved.",position:"top-end",duration:1500,fontSize:"1.5rem",backgroundColor:"#ffffff",textColor:"#000000",checkmarkColor:"green"},o),e=`
            <div class="modal fade" id="successNotificationModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title" style="color: ${t.textColor};">${t.title}</h5>
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
                                <span class="ml-2 message-text" style="font-size: ${t.fontSize}; color: ${t.textColor};">${t.message}</span>
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
                    stroke: ${t.checkmarkColor}; /* Dynamic checkmark color */
                    fill: none;
                    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
                }
    
                .checkmark {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: block;
                    stroke-width: 2;
                    stroke: ${t.checkmarkColor}; /* Dynamic checkmark color */
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
        `;window.jQuery("body").append(e),window.jQuery("#successNotificationModal").modal("show"),setTimeout(function(){window.jQuery("#successNotificationModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})},t.duration)}function l(o){let t=window.jQuery.extend({},{title:"Dynamic Form",inputs:[],onSubmit:function(o){},onCancel:function(){},submitText:"Submit",cancelText:"Cancel",backgroundColor:"#ffffff",buttonColor:"#007bff",cancelButtonColor:"#6c757d",position:"center"},o),e=o=>{let{type:t,label:e,placeholder:a,id:l,name:i,class:n,options:s}=o;switch(t){case"text":return`<div class="form-group">
                                <label for="${l}">${e}</label>
                                <input type="text" class="form-control ${n||""}" id="${l}" name="${i}" placeholder="${a}" required>
                            </div>`;case"select":return`<div class="form-group">
                                <label for="${l}">${e}</label>
                                <select class="form-control ${n||""}" id="${l}" name="${i}" required>
                                    ${s.map(o=>`<option value="${o.value}">${o.text}</option>`).join("")}
                                </select>
                            </div>`;case"checkbox":return`<div class="form-group form-check">
                                <input type="checkbox" class="form-check-input ${n||""}" id="${l}" name="${i}">
                                <label class="form-check-label" for="${l}">${e}</label>
                            </div>`;case"radio":return`<div class="form-group">
                                <label>${e}</label>
                                ${s.map(o=>`
                                    <div class="form-check">
                                        <input class="form-check-input ${n||""}" type="radio" name="${i}" value="${o.value}" id="${o.id}">
                                        <label class="form-check-label" for="${o.id}">${o.text}</label>
                                    </div>`).join("")}
                            </div>`;default:return""}},a=`
            <div class="modal fade" id="dynamicFormModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${t.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="dynamicForm">
                                ${t.inputs.map(e).join("")}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" style="background-color: ${t.buttonColor}; color: white;" id="submitBtn">${t.submitText}</button>
                            <button type="button" class="btn" style="background-color: ${t.cancelButtonColor}; color: white;" id="cancelBtn">${t.cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(a),window.jQuery("#dynamicFormModal").modal("show");let l=()=>{window.jQuery("#dynamicFormModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})};window.jQuery("#submitBtn").off("click").on("click",function(){let o={};window.jQuery("#dynamicForm").find("input, select").each(function(){"checkbox"===this.type?o[this.id]=this.checked:o[this.name||this.id]=this.value}),t.onSubmit(o),l()}),window.jQuery("#cancelBtn").off("click").on("click",function(){t.onCancel(),l()})}function i(o){let t=window.jQuery.extend({},{title:"Notification",message:"This is a custom message.",imageSrc:"",backgroundColor:"#ffffff",buttonColor:"#007bff",position:"center"},o),e=`
            <div class="modal fade" id="customImageModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${t.position}" role="document">
                    <div class="modal-content" style="background-color: ${t.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${t.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            ${t.imageSrc?`<img src="${t.imageSrc}" alt="Custom Image" class="img-fluid" />`:""}
                            <p>${t.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" style="background-color: ${t.buttonColor}; color: white;" id="okBtn">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(e),window.jQuery("#customImageModal").modal("show"),window.jQuery("#okBtn").on("click",function(){a()});let a=()=>{window.jQuery("#customImageModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}}function n(o){let t=window.jQuery(".modal-dialog");switch(t.removeClass("modal-dialog-centered modal-dialog-top modal-dialog-bottom modal-dialog-left modal-dialog-right"),o){case"top":t.addClass("modal-dialog-top");break;case"bottom":t.addClass("modal-dialog-bottom");break;case"left":t.addClass("modal-dialog-left");break;case"right":t.addClass("modal-dialog-right");break;default:t.addClass("modal-dialog-centered")}}return!function o(t){function e(o,t){let e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}function a(){if(!document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')){let o;(o=document.createElement("link")).rel="stylesheet",o.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",document.head.appendChild(o)}window.jQuery.fn.modal?t&&t():e("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",function(){console.log("Bootstrap loaded"),t&&t()})}window.jQuery?a():e("https://code.jquery.com/jquery-3.6.0.min.js",function(){console.log("jQuery loaded"),a()})}(function(){console.log("Libraries ready, ConfirmationDialog, AlertModal, and TripleChoiceModal available."),window.ConfirmationDialog=o,window.AlertModal=t,window.TripleChoiceModal=e,window.SuccessNotificationModal=a,window.DynamicFormModal=l,window.CustomImageModal=i}),{ConfirmationDialog:o,AlertModal:t,TripleChoiceModal:e,SuccessNotificationModal:a,DynamicFormModal:l,CustomImageModal:i}});