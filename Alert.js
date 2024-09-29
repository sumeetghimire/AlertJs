/*!
 * AlertJS Library
 * Copyright (c) 2024 Sumeet Ghimire
 * Released under the MIT License
 * https://github.com/sumeetghimire/AlertJs
 */

!function(o,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():o.ModalLibrary=e()}("undefined"!=typeof window?window:this,function(){function o(o){let e=window.jQuery.extend({},{title:"Default Title",message:"Default Message",confirmText:"Ok",cancelText:"Cancel",position:"center",backgroundColor:"#ffffff",confirmButtonBackgroundColor:"#007bff",confirmButtonTextColor:"#ffffff",onConfirm:function(){}},o),t=`
            <div class="modal fade" id="customModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">${e.message}</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">${e.cancelText}</button>
                            <button type="button" class="btn btn-primary" id="confirmBtn" style="background-color: ${e.confirmButtonBackgroundColor}; color: ${e.confirmButtonTextColor};">
                                ${e.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#customModal").modal("show"),window.jQuery("#confirmBtn").on("click",function(){e.onConfirm(),window.jQuery("#customModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#customModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),n(e.position)}function e(o){let e=window.jQuery.extend({},{title:"Alert Title",message:"This is an alert message.",confirmText:"Okay",position:"center",onConfirm:function(){},backgroundColor:"#ffc107",buttonBackgroundColor:"#007bff",buttonTextColor:"#ffffff"},o),t=`
            <div class="modal fade" id="alertModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
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
                            <button type="button" class="btn" id="alertConfirmBtn" 
                                    style="background-color: ${e.buttonBackgroundColor}; color: ${e.buttonTextColor};">
                                ${e.confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#alertModal").modal("show"),window.jQuery("#alertConfirmBtn").on("click",function(){e.onConfirm(),window.jQuery("#alertModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#alertModal").on("hidden.bs.modal",function(){window.jQuery(this).remove()}),n(e.position)}function t(o){let e=window.jQuery.extend({},{title:"Choose an Option",message:"Please select one of the following options:",yesText:"Yes",noText:"No",cancelText:"Cancel",position:"center",onYes:function(){},onNo:function(){},onCancel:function(){},backgroundColor:"#ffffff",yesButtonBackgroundColor:"#007bff",yesButtonTextColor:"#ffffff",noButtonBackgroundColor:"#6c757d",noButtonTextColor:"#ffffff",cancelButtonBackgroundColor:"#f8f9fa",cancelButtonTextColor:"#000000"},o),t=`
            <div class="modal fade" id="tripleChoiceModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
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
                            <button type="button" class="btn" id="yesBtn" 
                                style="background-color: ${e.yesButtonBackgroundColor}; color: ${e.yesButtonTextColor};">
                                ${e.yesText}
                            </button>
                            <button type="button" class="btn" id="noBtn" 
                                style="background-color: ${e.noButtonBackgroundColor}; color: ${e.noButtonTextColor};">
                                ${e.noText}
                            </button>
                            <button type="button" class="btn" data-dismiss="modal" 
                                style="background-color: ${e.cancelButtonBackgroundColor}; color: ${e.cancelButtonTextColor};">
                                ${e.cancelText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#tripleChoiceModal").modal("show"),window.jQuery("#yesBtn").on("click",function(){e.onYes(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#noBtn").on("click",function(){e.onNo(),window.jQuery("#tripleChoiceModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}),window.jQuery("#tripleChoiceModal").on("hidden.bs.modal",function(){e.onCancel(),window.jQuery(this).remove()}),n(e.position)}function a(o){let e=window.jQuery.extend({},{title:"Success!",message:"Your work has been saved.",position:"top-end",duration:1500,fontSize:"1.5rem",backgroundColor:"#ffffff",textColor:"#000000",checkmarkColor:"green"},o),t=`
            <div class="modal fade" id="successNotificationModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title" style="color: ${e.textColor};">${e.title}</h5>
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
                                <span class="ml-2 message-text" style="font-size: ${e.fontSize}; color: ${e.textColor};">${e.message}</span>
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
                    stroke: ${e.checkmarkColor}; /* Dynamic checkmark color */
                    fill: none;
                    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
                }
    
                .checkmark {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: block;
                    stroke-width: 2;
                    stroke: ${e.checkmarkColor}; /* Dynamic checkmark color */
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
        `;window.jQuery("body").append(t),window.jQuery("#successNotificationModal").modal("show"),setTimeout(function(){window.jQuery("#successNotificationModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})},e.duration)}function l(o){let e=window.jQuery.extend({},{title:"Dynamic Form",inputs:[],onSubmit:function(o){},onCancel:function(){},submitText:"Submit",cancelText:"Cancel",backgroundColor:"#ffffff",buttonColor:"#007bff",cancelButtonColor:"#6c757d",position:"center"},o),t=o=>{let{type:e,label:t,placeholder:a,id:l,name:s,class:n,options:i,value:d}=o;switch(e){case"text":case"password":case"email":case"number":case"date":case"file":return`<div class="form-group">
                                <label for="${l}">${t}</label>
                                <input type="${e}" class="form-control ${n||""}" id="${l}" name="${s}" 
                                    placeholder="${a||""}" value="${d||""}" required>
                            </div>`;case"textarea":return`<div class="form-group">
                                <label for="${l}">${t}</label>
                                <textarea class="form-control ${n||""}" id="${l}" name="${s}" 
                                    placeholder="${a||""}" required>${d||""}</textarea>
                            </div>`;case"select":return`<div class="form-group">
                                <label for="${l}">${t}</label>
                                <select class="form-control ${n||""}" id="${l}" name="${s}" required>
                                    ${i.map(o=>`<option value="${o.value}" ${o.value===d?"selected":""}>${o.text}</option>`).join("")}
                                </select>
                            </div>`;case"checkbox":return`<div class="form-group form-check">
                                <input type="checkbox" class="form-check-input ${n||""}" id="${l}" name="${s}" ${d?"checked":""}>
                                <label class="form-check-label" for="${l}">${t}</label>
                            </div>`;case"radio":return`<div class="form-group">
                                <label>${t}</label>
                                ${i.map(o=>`
                                    <div class="form-check">
                                        <input class="form-check-input ${n||""}" type="radio" name="${s}" value="${o.value}" id="${o.id}" ${o.value===d?"checked":""}>
                                        <label class="form-check-label" for="${o.id}">${o.text}</label>
                                    </div>`).join("")}
                            </div>`;case"range":return`<div class="form-group">
                                <label for="${l}">${t}</label>
                                <input type="range" class="form-control-range ${n||""}" id="${l}" name="${s}" value="${d||""}" required>
                            </div>`;default:return""}},a=`
            <div class="modal fade" id="dynamicFormModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="dynamicForm">
                                ${e.inputs.map(t).join("")}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" style="background-color: ${e.buttonColor}; color: white;" id="submitBtn">${e.submitText}</button>
                            <button type="button" class="btn" style="background-color: ${e.cancelButtonColor}; color: white;" id="cancelBtn">${e.cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(a),window.jQuery("#dynamicFormModal").modal("show");let l=()=>{window.jQuery("#dynamicFormModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})};window.jQuery("#submitBtn").off("click").on("click",function(){let o={};window.jQuery("#dynamicForm").find("input, select, textarea").each(function(){"checkbox"===this.type?o[this.id]=this.checked:o[this.name||this.id]=this.value}),e.onSubmit(o),l()}),window.jQuery("#cancelBtn").off("click").on("click",function(){e.onCancel(),l()})}function s(o){let e=window.jQuery.extend({},{title:"Notification",message:"This is a custom message.",imageSrc:"",backgroundColor:"#ffffff",buttonColor:"#007bff",position:"center"},o),t=`
            <div class="modal fade" id="customImageModal" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog modal-dialog-${e.position}" role="document">
                    <div class="modal-content" style="background-color: ${e.backgroundColor};">
                        <div class="modal-header">
                            <h5 class="modal-title">${e.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            ${e.imageSrc?`<img src="${e.imageSrc}" alt="Custom Image" class="img-fluid" />`:""}
                            <p>${e.message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn" style="background-color: ${e.buttonColor}; color: white;" id="okBtn">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;window.jQuery("body").append(t),window.jQuery("#customImageModal").modal("show"),window.jQuery("#okBtn").on("click",function(){a()});let a=()=>{window.jQuery("#customImageModal").modal("hide").on("hidden.bs.modal",function(){window.jQuery(this).remove()})}}function n(o){let e=window.jQuery(".modal-dialog");switch(e.removeClass("modal-dialog-centered modal-dialog-top modal-dialog-bottom modal-dialog-left modal-dialog-right"),o){case"top":e.addClass("modal-dialog-top");break;case"bottom":e.addClass("modal-dialog-bottom");break;case"left":e.addClass("modal-dialog-left");break;case"right":e.addClass("modal-dialog-right");break;default:e.addClass("modal-dialog-centered")}}return!function o(e){function t(o,e){let t=document.createElement("script");t.src=o,t.onload=e,document.head.appendChild(t)}function a(){if(!document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')){let o;(o=document.createElement("link")).rel="stylesheet",o.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",document.head.appendChild(o)}window.jQuery.fn.modal?e&&e():t("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js",function(){e&&e()})}window.jQuery?a():t("https://code.jquery.com/jquery-3.6.0.min.js",function(){a()})}(function(){window.ConfirmationDialog=o,window.AlertModal=e,window.TripleChoiceModal=t,window.SuccessNotificationModal=a,window.DynamicFormModal=l,window.CustomImageModal=s}),{ConfirmationDialog:o,AlertModal:e,TripleChoiceModal:t,SuccessNotificationModal:a,DynamicFormModal:l,CustomImageModal:s}});