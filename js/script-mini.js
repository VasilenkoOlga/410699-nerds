﻿var link=document.querySelector(".btn-contacts"),popup=document.querySelector(".modal-basket"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),user=popup.querySelector("[name=user-name]"),email=popup.querySelector("[name=email]"),storage=localStorage.getItem("user");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(user.value=storage,email.focus()):user.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){e.preventDefault(),user.value&&email.value?localStorage.setItem("user",user.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(popup.classList.contains("modal-show"),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});