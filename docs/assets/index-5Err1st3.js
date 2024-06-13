(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function d(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=d(o);fetch(o.href,n)}})();const D=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="filtro" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`;var r=[];for(var y=0;y<256;++y)r.push((y+256).toString(16).slice(1));function v(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}var T,w=new Uint8Array(16);function O(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(w)}var S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const E={randomUUID:S};function C(e,t,d){if(E.randomUUID&&!t&&!e)return E.randomUUID();e=e||{};var l=e.random||(e.rng||O)();return l[6]=l[6]&15|64,l[8]=l[8]&63|128,v(l)}class N{constructor(t){this.id=C(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={ALL:"all",COMPLETED:"completed",PENDING:"pending"},i={todos:[],filter:c.ALL},I=()=>{b(),console.log("InitStore 🥑")},b=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.ALL}=JSON.parse(localStorage.getItem("state"));i.todos=e,i.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(i))},P=(e=c.ALL)=>{switch(e){case c.ALL:return[...i.todos];case c.COMPLETED:return i.todos.filter(t=>t.done);case c.PENDING:return i.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},A=e=>{if(!e)throw new Error("Description is required");i.todos.push(new N(e)),g()},U=e=>{i.todos=i.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},_=e=>{i.todos=i.todos.filter(t=>t.id!==e),g()},M=()=>{i.todos=i.todos.filter(e=>!e.done),g()},k=(e=c.ALL)=>{if(!Object.values(c).includes(e))throw new Error("The selected filter is invalid");i.filter=e,g()},x=()=>i.filter,a={initStore:I,loadStore:b,addToDo:A,toggleToDo:U,deleteToDo:_,deleteCompleted:M,setFilter:k,getCurrentFilter:x,getToDos:P},q=e=>{if(!e)throw new Error("A TODO object is required");const{id:t,done:d,description:l}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${d?"checked":""}>
            <label>${l}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,n=document.createElement("li");return n.setAttribute("data-id",t),n.innerHTML=o,e.done&&n.classList.add("completed"),n};let L;const R=e=>{if(L||(L=document.querySelector(e)),!L)throw new Error(`Element ${e} not found`);L.innerHTML=a.getToDos(c.PENDING).length};let m;const F=(e,t=[])=>{if(m||(m=document.querySelector(e)),!m)throw new Error(`Element ${e} not found`);m.innerHTML="",t.forEach(d=>{m.append(q(d))})},h={TODO_LIST:".todo-list",NEW_TODO_INPUT:"#new-todo-input",CLEAR_COMPLETED_BUTTON:".clear-completed",TOTO_FILTER:".filtro",PENDING_COUNT_LABEL:"#pending-count"},H=e=>{const t=()=>{const s=a.getToDos(a.getCurrentFilter());F(h.TODO_LIST,s),d()},d=()=>{R(h.PENDING_COUNT_LABEL)};(()=>{const s=document.createElement("div");s.innerHTML=D,document.querySelector(e).append(s),t()})();const l=document.querySelector(h.NEW_TODO_INPUT),o=document.querySelector(h.TODO_LIST),n=document.querySelector(h.CLEAR_COMPLETED_BUTTON),u=document.querySelectorAll(h.TOTO_FILTER);l.addEventListener("keyup",s=>{s.keyCode!==13||s.target.value.trim().length===0||(a.addToDo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]");a.toggleToDo(p.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const p=s.target.className==="destroy",f=s.target.closest("[data-id]");!f||!p||(a.deleteToDo(f.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",p=>{switch(u.forEach(f=>f.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":a.setFilter(c.ALL);break;case"Pendientes":a.setFilter(c.PENDING);break;case"Completados":a.setFilter(c.COMPLETED);break}t()})})};a.initStore();H("#app");
