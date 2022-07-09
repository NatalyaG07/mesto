(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._formElement=n,this._buttonElement=n.querySelector(e.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(this._inputSelector))}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._disableButton()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_checkInputValidity",value:function(e){var t=e.target,n=document.querySelector("#".concat(t.id,"-error"));t.validity.valid?n.textContent=" ":n.textContent=t.validationMessage}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".popup_edit-profile"),o=document.querySelector(".popup__input_type_name"),i=document.querySelector(".popup__input_type_information"),a=document.querySelector(".profile__add-button"),u=document.querySelector(".popup_add-card"),c=document.querySelector(".profile__avatar"),s=document.querySelector(".popup_update_avatar"),l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes.length,this._myId=n,this._userId=t.owner._id,this._cardId=t._id,this._cardSelector=r,this._handleOpenImage=u,this._handleCardDelete=o,this._handleAddLike=i,this._handleRemoveLike=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__iteam").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".elements__img"),this._like=this._element.querySelector(".elements__like"),this._title=this._element.querySelector(".elements__title"),this._remove=this._element.querySelector(".elements__remove"),this._likesCounter=this._element.querySelector(".elements__like-counter"),this._img.src=this._link,this._img.alt=this._name,this._title.textContent=this._name,this._likesCounter.textContent=this._likes,this._handleRemoveElementActive(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._remove.addEventListener("click",(function(){e._handleCardDelete(e)})),this._like.addEventListener("click",(function(){e._like.classList.contains("elements__like_active")?e._handleRemoveLike(e):e._handleAddLike(e)})),this._img.addEventListener("click",(function(){e._handleOpenImage(e._link,e._name)}))}},{key:"counterLikes",value:function(e){this._likesCounter.textContent=e.length,this._handleToggleLike()}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleRemoveElementActive",value:function(){this._userId===this._myId&&this._remove.classList.add("elements__remove_active")}},{key:"_handleToggleLike",value:function(){this._like.classList.toggle("elements__like_active")}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e,t._container)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOnOverlayclick",value:function(e){e.target===e.currentTarget&&this.close(e.currentTarget)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose=this._popup.querySelector(".popup__close"),this._buttonClose.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){e._handleOnOverlayclick(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageName=t._popup.querySelector(".popup__img-name"),t._popupImage=t._popup.querySelector(".popup__img"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageName.textContent=t,b(w(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function R(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._buttonSave=n._popup.querySelector(".popup__save"),n._inputList=function(e){if(Array.isArray(e))return j(e)}(r=n._popup.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){C(T(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e){this._buttonSave.textContent=e?"Сохранить...":"Сохранить"}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=document.querySelector(n),this._userDescriptionSelector=document.querySelector(r),this._userAvatarSelector=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._userNameSelector.textContent,this._userInfo.description=this._userDescriptionSelector.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._userNameSelector.textContent=e.name,this._userDescriptionSelector.textContent=e.information,this._userAvatarSelector.src=e.avatar}},{key:"editAvatar",value:function(e){this._userAvatarSelector.src=e}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._testStatus(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.information})}).then((function(e){return t._testStatus(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._testStatus(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._testStatus(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return t._testStatus(e)}))}},{key:"_testStatus",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function H(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;V(M(a.prototype),"setEventListeners",this).call(this),this._submitButton=document.querySelector(".popup__save_with_confirmation"),this._submitButton.addEventListener("click",(function(){e._handleSubmitCallback()}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y),$=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"0cca389c-2bfe-4c54-84e5-257b0da00bfb","Content-Type":"application/json"}});$.getInitialCards().then((function(e){var t=e;te.renderItems(t)}));var F=null;$.getUserInfo().then((function(e){X.setUserInfo({name:e.name,information:e.about,avatar:e.avatar}),F=e._id}));var K=new t(l,r),Q=new t(l,u),W=new t(l,s),X=new B({userNameSelector:".profile__name",userDescriptionSelector:".profile__information",userAvatarSelector:".profile__avatar"}),Y=new q(".popup_edit-profile",(function(e){X.setUserInfo(e),Y.loading(!0),$.editProfile(e).finally((function(){Y.loading(!1),Y.close()}))})),Z=new q(".popup_add-card",(function(e){ne={name:e.title,link:e.link},Z.loading(!0),$.addCard(ne).then((function(e){te.addItem(ee(e))})).finally((function(){ce.loading(!1),Z.close()}))}));function ee(e){return new p(e,F,".template",ie,ae,ue,(function(){re.open(e.link,e.name)})).generateCard()}Z.setEventListeners(),Y.setEventListeners();var te=new d({renderer:function(e,t){var n=ee(e);t.prepend(n)}},".elements__team"),ne=null;K.enableValidation(),Q.enableValidation(),W.enableValidation();var re=new O(".popup_img-card");re.setEventListeners();var oe=new z(".popup_with_confirmation");function ie(e){oe.open(),oe.setSubmitAction((function(){$.removeCard(e._cardId).then((function(){e.removeCard(e),oe.close()}))}))}function ae(e){$.addLike(e._cardId).then((function(t){e.counterLikes(t.likes)}))}function ue(e){$.removeLike(e._cardId).then((function(t){e.counterLikes(t.likes)}))}oe.setEventListeners();var ce=new q(".popup_update_avatar",(function(e){ce.loading(!0),$.editAvatar(e).then((function(e){X.editAvatar(e.avatar)})).finally((function(){ce.loading(!1),ce.close()}))}));ce.setEventListeners(),n.addEventListener("click",(function(){var e=X.getUserInfo();o.value=e.name,i.value=e.description,Y.open()})),a.addEventListener("click",(function(){Z.open()})),c.addEventListener("click",(function(){ce.open()}))})();