(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),c=n.n(r)()(i());c.push([e.id,'* {\n    font-family: \'Open Sans\', sans-serif;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr 5fr auto;\n    margin: 0;\n    min-height: 100vh;\n}\n\nheader {\n    text-indent: 50px;\n    font-size: 50px;\n}\n\nimg {\n    width: 50px;\n    height: 50px;\n}\n\nform {\n    margin-top: -30px;\n}\n\n#title,\n#description,\n#dueDate,\n#taskItem,\n#titleDetail,\n#descriptionDetail,\n#dueDateDetail,\n#taskItemDetail {\n    font-size: 24px;\n    border: none;\n    -webkit-appearance: none;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: 12px;\n    width: 250px;\n    outline: none;\n    border-radius: 0;\n    background: linear-gradient(90deg, #ccc, #ccc) left bottom/100% 2px no-repeat;\n    margin-top: 20px;\n}\n\n#low,\n#medium,\n#high {\n    border: 2px solid #000; \n    cursor: pointer;\n}\n\n#dueDate {\n    cursor: pointer;\n}\n\ninput[type="radio"].priority {\n    display: none;\n}\n\ninput[type="radio"].priority:checked + p {\n    color: white;\n    background-color: #000;\n    padding: 5px; \n}\n\n#priorityOption,\n#priorityOptionDetail {\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    padding: 0;\n    justify-content: space-around;\n}\n\nli {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    list-style-type: none;\n    margin-left: 105px;\n}\n\nlabel {\n    display: block;\n}\n\n.tasks {\n    margin-left: -5px;\n    appearance: none; \n    width: 30px;\n    height: 30px;\n    border: 2px solid #000;\n    border-radius: 50%;\n    background-color: white;\n}\n\n.tasks:checked {\n    background: radial-gradient(circle, black 0%, black 50%, white 50%, white 100%);\n    border: 2px solid black;\n}\n\n#description,\n#descriptionDetail {\n    width: 350px;\n}\n\ninput:focus::placeholder {\n    color: transparent;\n}\n\ninput::placeholder {\n    color: #aaa;\n    transition: color 0.3s ease;\n}\n\nbutton {\n    border-style: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n#saveButton,\n#clearButton,\n#deleteButton,\n#saveButtonDetail,\n#clearButtonDetail,\n#deleteButtonDetail {\n    background-color: #f0eef1;\n    border-radius: 50px 50px 50px 50px;\n    border-style: none;\n    width: 88px;\n    height: 44px;\n}\n\n#deleteButtonDetail {\n    background-color: #f0eef1;\n    color: red;\n    border-radius: 50px 50px 50px 50px;\n    border-style: none;\n    width: 88px;\n    height: 44px;\n}\n\n#closeButton,\n#closeButtonDetail {\n    display: flex;\n    background-color: #f0eef1;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    align-items: center;\n    justify-content: center;\n    margin-left: 550px;\n}\n\n#xButton {\n    width: 30px;\n    height: 30px;\n}\n\n#buttons,\n#buttonsDetail {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 10px;\n}\n\n#myProject,\n#myProjectDetail {\n    display: flex;\n    font-size: 40px;\n    align-items: center;\n    justify-content: center;\n}\n\n#itemsArea,\n#myProject,\n#myProjectDetail,\nfooter {\n    display: flex;\n    text-align: center;\n    align-self: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n#itemsArea {\n    gap: 15px;\n}\n\n#task {\n    display: flex;  \n}\n\ninput#taskItem,\ninput#taskItemDetail {\n    margin-bottom: 30px;\n}\n\nheader, \nfooter {\n    color: #333333;\n    background: #f5f5f5;\n    padding: 20px;\n}\n\ndialog {\n    width: 600px;\n    padding: 15px;\n    border-radius: 50px 50px 50px 50px;\n    border-style: none;\n}\n\n.box {\n    height: 50px;\n    flex-direction: row;\n}\n\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n#projectTitle,\n#projectTitleDetail {\n    font-size: 50px;\n    font-weight: bolder;\n}\n\n#circleImg {\n    width: 40px;\n    height: 40px;\n    margin-left: 93px;\n    margin-right: 20px;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #f0eef1;\n    width: 200px;\n    height: 200px;\n    border-radius: 50px; \n    margin: initial;\n}\n\n.detailButton {\n    background-color: white;\n    border-radius: 50px;\n    border-style: solid;\n}',""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],a=0;a<e.length;a++){var l=e[a],d=o.base?l[0]+o.base:l[0],s=r[d]||0,p="".concat(d," ").concat(s);r[d]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=i(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var a=n(r[c]);t[a].references--}for(var l=o(e,i),d=0;d<r.length;d++){var s=n(r[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!e;)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),c=n.n(r),a=n(565),l=n.n(a),d=n(216),s=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,n.p,n.p;const h=function(e,t,n,o,i){this.id=e,this.title=t,this.description=n,this.dueDate=o,this.priority=i,this.checkList=[],this.task=[]};let y=[],g=0,x=0,k=[];const v=document.getElementById("openDialogButton"),b=document.getElementById("createTaskButton"),E=document.getElementById("saveButton"),B=document.getElementById("closeButton"),D=document.getElementById("createTaskButtonDetail"),I=document.getElementById("saveButtonDetail"),w=document.getElementById("clearButtonDetail"),C=document.getElementById("deleteButtonDetail"),j=document.getElementById("closeButtonDetail");function T(){const e=document.getElementById("title").value;""!==e&&(document.getElementById("projectTitle").textContent=e,popup.showModal(),document.getElementById("title").value="")}function L(){const e=document.getElementById("taskItem").value;if(""!==e){const n=document.getElementById("tasksUl"),o=document.createElement("li"),i=document.createElement("input");i.type="checkbox",i.className="tasks",i.id=`checkbox${x}`;const r=document.createElement("label");r.textContent=e,r.htmlFor=`checkbox${x}`,x++,n.appendChild(o),o.appendChild(i),o.appendChild(r),t=e,k.push(t),document.getElementById("taskItem").value=""}var t}function S(){const e=document.getElementById("taskItemDetail").value;if(""!==e){const t=document.getElementById("tasksUlDetail"),n=document.createElement("li"),o=document.createElement("input");o.type="checkbox",o.className="tasks",o.id=`checkboxDetail${x}`;const i=document.createElement("label");i.textContent=e,i.htmlFor=`checkboxDetail${x}`,x++,t.appendChild(n),n.appendChild(o),n.appendChild(i);const r=document.getElementById("projectTitleDetail").textContent,c=y.find((e=>e.title===r));c&&c.task.push(e),document.getElementById("taskItemDetail").value=""}}v.addEventListener("click",T),document.addEventListener("keydown",(e=>{13!==e.keyCode&&"Enter"!==e.key||(e.preventDefault(),T())})),b.addEventListener("click",L),document.addEventListener("keydown",(e=>{13!==e.keyCode&&"Enter"!==e.key||(e.preventDefault(),L())})),E.addEventListener("click",(()=>{const e=document.getElementById("projectTitle").textContent,t=document.getElementById("description").value,n=document.getElementById("dueDate").value,o=document.getElementsByClassName("priority"),i=document.querySelectorAll("input[type=checkbox]");let r,c=[];for(const e of o)if(e.checked){r=e.value;break}const a=new h(g,e,t,n,r);for(let e=0;e<k.length;e++)a.task.push(k[e]);i.forEach((e=>{const t=e.id,n=e.nextElementSibling.textContent,o=e.checked;c.push({id:t,label:n,marked:o})})),a.checkList=c,console.log("differId: "+g),console.log("title: "+e),console.log("description: "+t),console.log("dueDate: "+n),console.log("priorityValue: "+r),console.log("myToDoItem.task: "+a.task),console.log("myToDoItem.checkList",a.checkList),y.push(a),document.getElementById("taskItem").value="",document.getElementById("description").value="",document.getElementById("dueDate").value="";for(const e of o)e.checked=!1;if(document.getElementById("tasksUl"))for(;document.getElementById("tasksUl").firstChild;)document.getElementById("tasksUl").removeChild(document.getElementById("tasksUl").firstChild);x=0,a.checklist=[],k=[];const l=document.getElementById("itemsArea"),d=document.createElement("li");d.className="project",d.id=`project${g}`;const s=document.createElement("p"),p=document.createElement("button");p.setAttribute("data-project-id",g),p.className="detailButton",p.textContent="Details",l.appendChild(d),d.appendChild(s),s.textContent=y[g].title,d.appendChild(p),g++,p.addEventListener("click",(()=>{const e=p.getAttribute("data-project-id");console.log("Detalhes do Projeto "+e);const t=y.find((t=>t.id===parseInt(e)));console.log("Lista de tasks:",y),console.log("Projeto Selecionado:",t),function(e){document.getElementById("popupDetail"),document.getElementById("projectTitleDetail").textContent=e.title,document.getElementById("descriptionDetail").value=e.description,document.getElementById("dueDateDetail").value=e.dueDate;const t=document.querySelectorAll("#priorityOptionDetail input[type=radio]");for(const n of t)n.value===e.priority?n.checked=!0:n.checked=!1;const n=document.getElementById("tasksUlDetail");n.innerHTML="",e.checkList.forEach(((e,t)=>{const o=document.createElement("li"),i=document.createElement("input");i.type="checkbox",i.className="tasks",i.id=`checkboxDetail${t}`;const r=document.createElement("label");r.textContent=e.label,r.htmlFor=`checkboxDetail${t}`,n.appendChild(o),o.appendChild(i),o.appendChild(r),i.checked=e.marked}))}(t),popupDetail.showModal()})),popup.close()})),B.addEventListener("click",(()=>{document.getElementById("description").value="",document.getElementById("dueDate").value="";const e=document.getElementsByName("read");for(const t of e)t.checked=!1;document.getElementById("taskItem").value="";const t=document.getElementById("tasksUl");for(;t.firstChild;)t.removeChild(t.firstChild);popup.close()})),document.getElementById("dueDate").min=(new Date).toISOString().split("T")[0],D.addEventListener("click",S),document.addEventListener("keydown",(e=>{13!==e.keyCode&&"Enter"!==e.key||(e.preventDefault(),S())})),w.addEventListener("click",(()=>{const e=document.getElementById("projectTitleDetail").textContent,t=y.find((t=>t.title===e));t&&document.querySelectorAll("#tasksUlDetail input[type=checkbox]:checked").forEach((e=>{e.id;const n=e.nextElementSibling.textContent,o=t.task.indexOf(n);-1!==o&&t.task.splice(o,1),e.parentElement.remove()}))})),C.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete this project?")){const t=document.getElementById("projectTitleDetail").textContent,n=y.findIndex((e=>e.title===t));if(console.log(n),-1!==n){y.splice(n,1,"deleted"),document.getElementById("itemsArea");var e=document.getElementById(`project${n}`);e.parentNode.removeChild(e),popupDetail.close()}}})),I.addEventListener("click",(()=>{const e=document.getElementById("projectTitleDetail").textContent,t=y.find((t=>t.title===e));if(t){t.description=document.getElementById("descriptionDetail").value,t.dueDate=document.getElementById("dueDateDetail").value;const e=document.querySelectorAll("#priorityOptionDetail input[type=radio]");for(const n of e)if(n.checked){t.priority=n.value;break}const n=document.querySelectorAll("#tasksUlDetail input[type=checkbox]");t.checkList=[],n.forEach(((e,n)=>{const o=e.nextElementSibling.textContent,i=e.checked;t.checkList.push({id:`checkboxDetail${n}`,label:o,marked:i})})),console.log("Projeto Atualizado:",t)}popupDetail.close()})),j.addEventListener("click",(()=>{popupDetail.close()}))})()})();