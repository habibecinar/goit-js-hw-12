import{S as m,i,a as p}from"./assets/vendor-CsQrAiRy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();window.global=window;global.SimpleLightbox=m;const y="49383609-3f4a245e58475bbde73d484d3";let c=1;const u=40;let a;const d=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const o=document.getElementById("search").value.trim();if(o===""){i.show({title:"Error",message:"Lütfen bir kelime girin!",backgroundColor:"#FF6347",color:"white"});return}document.getElementById("gallery-list").innerHTML="",g(o)}),d.style.display="none",document.getElementById("LoadMore").addEventListener("click",()=>{c++;const r=document.getElementById("search").value.trim();g(r)})});async function g(r){try{console.log(`API'ye istek yapılıyor: ${r}`),d.style.display="block";const s=(await p.get(`https://pixabay.com/api/?key=${y}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${u}&page=${c}`)).data;if(console.log("Gelen Veri:",s),s.hits.length===0){i.show({title:"Sorry!",message:"No images found. Please try again!",backgroundColor:"#FF6347",color:"white"});return}const n=document.getElementById("gallery-list");n.innerHTML+=s.hits.map(t=>`
        <div class="image-card" >
          <a href="${t.largeImageURL}" target="_blank" data-lightbox="gallery">
            <img src="${t.webformatURL}" alt="${t.tags}" >
          </a>
          
          <div class="image-info">
            <div class="info-item">
                <p><strong>Likes: </strong>${t.likes}</p>
              </div>
            <div class="info-item">
              <p><strong>Views:</strong> ${t.views}</p>
            </div>
             <div class="info-item">
              <p><strong>Comments:</strong> ${t.comments}</p>
            </div>
              <div class="info-item">
              <p><strong>Downloads:</strong> ${t.downloads}</p>
            </div>
            </div>
        </div>
          
        `).join("");const e=document.getElementById("LoadMore");e.style.display="none",s.totalHits>40&&(e.style.display="block"),c*u>=s.totalHits&&(e.style.display="none",i.show({title:"We're Sorry!",message:"but you've reached the end of search results",backgroundColor:"#FF6347",color:"white"})),a?a.refresh():a=new m("#gallery-list a",{captions:!0,captionSelector:"img",captionType:"attr",overlayOpacity:.9,fadeSpeed:250})}catch(o){console.error("Hata:",o),i.show({title:"Error",message:"Bir hata oluştu. Lütfen tekrar deneyin.",backgroundColor:"#FF6347",color:"white"})}finally{d.style.display="none"}}
//# sourceMappingURL=index.js.map
