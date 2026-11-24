"use strict";
/* ===== EDIT HERE ===== */
// Image slots: paste a file path (self-hosted, e.g. "images/me.jpg") or a data: URL. Leave "" to show the placeholder.
var IMAGES={profile:"",p1:"images/crics.png",p2:"",p3:"",p4:"",p5:"",p6:"",p7:"",p8:"",p9:""};
// Contact backend: set to your server URL (see server.js), e.g. "https://api.yoursite.com/contact". Empty = opens visitor's email app.
var ENDPOINT="";
var TO="lingadassk.25@gmail.com";
/* ===================== */
var ICON='<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg>';
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
var gp=document.getElementById('projects');
P.forEach(function(p,i){var c=el('article','card rv');
if(p[1])c.appendChild(el('span','st'+(p[1]==='Live'?' lv':''),p[1]));
var ph=el('div','ph');ph.dataset.slot='p'+(i+1);ph.setAttribute('role','button');ph.tabIndex=0;ph.setAttribute('aria-label','Add image for '+p[0]);
var s=el('span');s.innerHTML=ICON;s.appendChild(document.createTextNode('Project image'));s.appendChild(document.createElement('br'));s.appendChild(el('small',null,'click to add · 1280×720'));ph.appendChild(s);
c.appendChild(ph);c.appendChild(el('h3',null,p[0]));c.appendChild(el('p',null,p[2]));
p[3].forEach(function(t){c.appendChild(el('span','tag',t))});
var detail=D[p[4]],demo=detail&&detail.u&&/^https:\/\//.test(detail.u);
if(demo){var live=el('a','tag vw','Live demo ↗');live.href=detail.u;live.target='_blank';live.rel='noopener noreferrer';c.appendChild(live)}
var vw=el('a','tag vw','View details →');vw.href='#'+p[4];c.appendChild(vw);c.addEventListener('click',function(e){if(!e.target.closest('.ph,a'))location.hash=p[4]});gp.appendChild(c)});
var S=['Python','JavaScript','Dart','Flutter','HTML','CSS','ESP32','IoT','UiPath','Arduino','GitHub','AI tools'],mq=document.getElementById('mq');
S.concat(S).forEach(function(t){mq.appendChild(el('span',null,t))});

// Mobile navigation and active-section indication
(function(){
var toggle=document.getElementById('menuToggle'),links=document.getElementById('navLinks');
if(!toggle||!links)return;
function setMenu(open){
toggle.setAttribute('aria-expanded',open?'true':'false');
toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
links.classList.toggle('open',open);
}
toggle.addEventListener('click',function(){setMenu(toggle.getAttribute('aria-expanded')!=='true')});
links.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){setMenu(false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
document.addEventListener('click',function(e){if(!e.target.closest('nav'))setMenu(false)});
var sections=[...document.querySelectorAll('section[id]')],navLinks=[...links.querySelectorAll('a')];
if('IntersectionObserver' in window){
var navObserver=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
navLinks.forEach(function(link){var active=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')});
}
});
},{rootMargin:'-25% 0px -65% 0px',threshold:0});
sections.forEach(function(section){navObserver.observe(section)});
}
})();
// image slots (safe: images only, size capped, shown via object URL)
document.querySelectorAll('.ph').forEach(function(ph){
var k=ph.dataset.slot,inp=document.createElement('input');inp.type='file';inp.accept='image/png,image/jpeg,image/webp';inp.hidden=true;ph.appendChild(inp);
function show(src){var im=ph.querySelector('img')||ph.insertBefore(new Image(),ph.firstChild);im.alt=ph.getAttribute('aria-label')||'';im.loading='lazy';im.decoding='async';im.src=src;ph.classList.add('has')}
if(IMAGES[k]&&/^(data:image\/|images\/|\.\/images\/)/.test(IMAGES[k]))show(IMAGES[k]);
ph.addEventListener('click',function(){inp.click()});
ph.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();inp.click()}});
inp.addEventListener('change',function(){var f=inp.files[0];if(f&&/^image\/(png|jpeg|webp)$/.test(f.type)&&f.size<5e6)show(URL.createObjectURL(f))})});
function lt(){var t=document.documentElement.dataset.theme;return t?t==='light':matchMedia('(prefers-color-scheme: light)').matches}
function C(){return lt()?['37,99,235','219,160,0','14,26,58','5,150,105']:['255,59,48','255,138,0','246,246,242','46,230,107']}
var reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
var coarsePointer=matchMedia('(pointer: coarse)').matches;
// loader
var pc=document.getElementById('pct'),n=0,ld=document.getElementById('load'),iv=setInterval(function(){n+=Math.ceil(Math.random()*9);if(n>=100){n=100;clearInterval(iv);setTimeout(function(){ld.classList.add('out');document.body.classList.add('go')},250)}pc.textContent=n+'%'},40);
// name letters
(function(){var h=document.getElementById('name'),t=h.textContent;h.textContent='';[...t].forEach(function(c,i){var s=document.createElement('span');s.textContent=c===' '?'\u00a0':c;s.setAttribute('aria-hidden','true');s.style.animationDelay=(1.5+i*.06)+'s';h.appendChild(s)})})();
// typing
(function(){var L=['Final-Year ECE Student | Python & Web Developer | Flutter App Developer | AI & IoT Enthusiast','Engineering Ideas into Reality | Software Developer | AI Explorer | Creative Technologist'],el=document.getElementById('typed'),a=0,b=0,d=false;
function tick(){var s=L[a];el.textContent=s.slice(0,b);if(!d&&b<s.length){b++;setTimeout(tick,32)}else if(!d){d=true;setTimeout(tick,2200)}else if(b>0){b--;setTimeout(tick,14)}else{d=false;a=(a+1)%L.length;setTimeout(tick,300)}}
setTimeout(tick,2200)})();
// tilt
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform='rotateY('+((x-.5)*12)+'deg) rotateX('+((.5-y)*12)+'deg)';c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%')});c.addEventListener('mouseleave',function(){c.style.transform=''})});
// reveal, scramble headings, counters
var G='!<>-_/[]{}=+*^?#';
function scramble(h){var t=h.dataset.t||(h.dataset.t=h.textContent),f=0;var id=setInterval(function(){h.textContent=[...t].map(function(c,i){return i<f/2?c:(c===' '?' ':G[Math.floor(Math.random()*G.length)])}).join('');if(++f>t.length*2){h.textContent=t;clearInterval(id)}},28)}
function count(b){var T=+b.dataset.n,s=performance.now();(function u(now){var p=Math.min((now-s)/1400,1);b.textContent=Math.round(T*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(u)})(s)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');if(t.tagName==='H2')scramble(t);t.querySelectorAll&&t.querySelectorAll('[data-n]').forEach(count);io.unobserve(t)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(x,i){x.style.transitionDelay=(i%3)*90+'ms';io.observe(x)});
// scroll
var bar=document.getElementById('bar'),fl=document.querySelectorAll('.float'),orb=document.getElementById('orb');
addEventListener('scroll',function(){var y=scrollY,m=document.documentElement.scrollHeight-innerHeight;bar.style.width=(y/m*100)+'%';fl.forEach(function(x){x.style.transform='translateY('+(y*x.dataset.s)+'px) rotate('+(y*.08)+'deg)'});orb.style.marginTop=(y*.12)+'px'},{passive:true});
// background particles
(function(){var c=document.getElementById('bg'),x=c.getContext('2d'),W,H,pts=[],col=[0,1,2,3],px=-999,py=-999;
function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);addEventListener('mousemove',function(e){px=e.clientX;py=e.clientY});
for(var i=0;i<(coarsePointer||reducedMotion?24:70);i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,c:col[i%4]});
(function d(){if(reducedMotion)return;x.clearRect(0,0,W,H);pts.forEach(function(p,i){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;var dx=p.x-px,dy=p.y-py,dd=Math.hypot(dx,dy);if(dd<120){p.x+=dx/dd*2;p.y+=dy/dd*2}
x.fillStyle='rgba('+C()[p.c]+',.8)';x.beginPath();x.arc(p.x,p.y,1.8,0,6.283);x.fill();
for(var j=i+1;j<pts.length;j++){var q=pts[j],l=Math.hypot(p.x-q.x,p.y-q.y);if(l<120){x.strokeStyle='rgba('+C()[p.c]+','+(.25*(1-l/120))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(d)})()})();
// 3D globe
(function(){var cv=orb,ctx=cv.getContext('2d'),N=360,P=[],E=[],ay=0,tx=0,ty=0,W,H,dpr=Math.min(devicePixelRatio||1,2);
for(var i=0;i<N;i++){var k=(i+.5)/N,p=Math.acos(1-2*k),t=Math.PI*(1+Math.sqrt(5))*i;P.push([Math.sin(p)*Math.cos(t),Math.cos(p),Math.sin(p)*Math.sin(t)])}
for(i=0;i<N;i++)for(var j=i+1;j<N;j++)if(Math.hypot(P[i][0]-P[j][0],P[i][1]-P[j][1],P[i][2]-P[j][2])<.3)E.push([i,j]);
function size(){var r=cv.getBoundingClientRect();W=cv.width=r.width*dpr;H=cv.height=r.height*dpr}size();addEventListener('resize',size);
addEventListener('mousemove',function(e){tx=(e.clientY/innerHeight-.5)*1.1;ty=(e.clientX/innerWidth-.5)*1.6});
var cols=[0,1,2,3];
(function draw(){if(reducedMotion)return;ay+=.004;var rx=.3+tx*.6,ry=ay+ty*.5,cx=Math.cos(ry),sx=Math.sin(ry),cy=Math.cos(rx),sy=Math.sin(rx),R=W*.36,q=[];ctx.clearRect(0,0,W,H);
for(var i=0;i<N;i++){var x=P[i][0],y=P[i][1],z=P[i][2],x1=x*cx+z*sx,z1=-x*sx+z*cx,y1=y*cy-z1*sy,z2=y*sy+z1*cy,s=1/(1.9-z2*.5);q.push([W/2+x1*R*s*1.5,H/2+y1*R*s*1.5,z2])}
ctx.lineWidth=dpr;
for(i=0;i<E.length;i++){var a=q[E[i][0]],b=q[E[i][1]],al=(a[2]+b[2])/2*.5+.5;ctx.strokeStyle='rgba('+C()[cols[E[i][0]%4]]+','+(.06+al*.4)+')';ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke()}
for(i=0;i<N;i++){var p=q[i],al=p[2]*.5+.5;ctx.fillStyle='rgba('+C()[cols[i%4]]+','+(.25+al*.75)+')';ctx.beginPath();ctx.arc(p[0],p[1],(1+al*2.2)*dpr,0,6.283);ctx.fill()}
requestAnimationFrame(draw)})()})();
// contact form: validation, honeypot, timing, rate limit
var cf=document.getElementById('cf'),msg=document.getElementById('msg'),t0=Date.now();
function say(t,c){msg.textContent=t;msg.className=c}
function clean(s,m){return String(s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'').replace(/[<>]/g,'').trim().slice(0,m)}
cf.addEventListener('submit',function(e){e.preventDefault();
if(document.getElementById('fw').value)return;
if(Date.now()-t0<3000)return say('Please take a moment, then send again.','err');
var name=clean(document.getElementById('fn').value,80),em=clean(document.getElementById('fe').value,120),m=clean(document.getElementById('fm').value,1500);
if(name.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)||m.length<10)return say('Enter your name, a valid email and a message of at least 10 characters.','err');
var submit=cf.querySelector('button[type="submit"]');
submit.disabled=true;submit.setAttribute('aria-busy','true');submit.textContent='Preparing message…';
var now=Date.now(),log=[];try{log=JSON.parse(localStorage.getItem('sends')||'[]').filter(function(x){return now-x<36e5})}catch(_){}
if(log.length>=3){submit.disabled=false;submit.removeAttribute('aria-busy');submit.textContent='Send message';return say('Too many messages. Please try again in an hour.','err')}
log.push(now);try{localStorage.setItem('sends',JSON.stringify(log))}catch(_){}
if(ENDPOINT&&/^https:\/\//.test(ENDPOINT)){say('Sending…','');
fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,email:em,message:m}),credentials:'omit',referrerPolicy:'no-referrer'})
.then(function(r){if(!r.ok)throw 0;say('Message sent. Thank you!','ok');cf.reset()}).catch(function(){say('Could not send. Email me directly at '+TO,'err')}).finally(function(){submit.disabled=false;submit.removeAttribute('aria-busy');submit.textContent='Send message'});
}else{location.href='mailto:'+TO+'?subject='+encodeURIComponent('Portfolio message from '+name)+'&body='+encodeURIComponent(m+'\n\nFrom: '+name+' <'+em+'>');say('Opening your email app to send the message…','ok');submit.disabled=false;submit.removeAttribute('aria-busy');submit.textContent='Send message'}});
/* ===== Project detail pages ===== */
var pg=document.getElementById('pg'),pgc=document.getElementById('pgc'),ids=Object.keys(D),T0=document.title;
function slot(k){var ph=el('div','ph'),inp=document.createElement('input');ph.dataset.slot=k;ph.setAttribute('role','button');ph.tabIndex=0;ph.setAttribute('aria-label','Add screenshot');var s=el('span');s.innerHTML=ICON;s.appendChild(document.createTextNode('Screenshot'));s.appendChild(document.createElement('br'));s.appendChild(el('small',null,'click to add · 1280×720'));ph.appendChild(s);inp.type='file';inp.accept='image/png,image/jpeg,image/webp';inp.hidden=true;ph.appendChild(inp);
function sh(src){var im=ph.querySelector('img')||ph.insertBefore(new Image(),ph.firstChild);im.alt='';im.src=src;ph.classList.add('has')}
var v=IMAGES[k];if(v&&/^(data:image\/|images\/)/.test(v))sh(v);
ph.addEventListener('click',function(){inp.click()});ph.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();inp.click()}});
inp.addEventListener('change',function(){var f=inp.files[0];if(f&&/^image\/(png|jpeg|webp)$/.test(f.type)&&f.size<5e6)sh(URL.createObjectURL(f))});return ph}
function render(id){var d=D[id];pgc.textContent='';
pgc.appendChild(el('span','st'+(/^Live/.test(d.s)?' lv':''),d.s));pgc.appendChild(el('h1','pgt',d.t));pgc.appendChild(el('p','pgo',d.o));
if(d.u&&/^https:\/\//.test(d.u)){var a=el('a','btn pri',d.l+' ↗');a.href=d.u;a.target='_blank';a.rel='noopener noreferrer';pgc.appendChild(a)}else pgc.appendChild(el('span','nl',d.n));
var sh=el('div','shots');for(var i=1;i<=3;i++)sh.appendChild(slot('s_'+id+'_'+i));pgc.appendChild(sh);
pgc.appendChild(el('h3',null,'Project objective'));pgc.appendChild(el('p','pgo',d.o));
pgc.appendChild(el('h3',null,'What it does'));var ul=el('ul','feat');d.f.forEach(function(x,i){var li=el('li',null,x);li.style.animationDelay=(.5+i*.08)+'s';ul.appendChild(li)});pgc.appendChild(ul);
pgc.appendChild(el('h3',null,'Tools used'));d.k.forEach(function(r){var row=el('div','row');row.appendChild(el('b',null,r[0]));r[1].split(', ').forEach(function(t){row.appendChild(el('span','tag',t))});pgc.appendChild(row)});
pgc.appendChild(el('h3',null,'My role'));pgc.appendChild(el('p','pgo',d.r));pgc.appendChild(el('h3',null,'Challenges and what I learned'));pgc.appendChild(el('p','pgo',d.g));
var nx=ids[(ids.indexOf(id)+1)%ids.length],n=el('a','btn nx','Next: '+D[nx].t.split(' – ')[0]+' →');n.href='#'+nx;pgc.appendChild(n);document.title=d.t.split(' – ')[0]+' – Lingadass K'}
var closing;
function route(){var h=location.hash.slice(1);clearTimeout(closing);
if(Object.prototype.hasOwnProperty.call(D,h)){render(h);pg.hidden=false;pg.scrollTop=0;document.body.style.overflow='hidden';requestAnimationFrame(function(){requestAnimationFrame(function(){pg.classList.add('open')})})}
else if(!pg.hidden){pg.classList.remove('open');document.body.style.overflow='';document.title=T0;closing=setTimeout(function(){pg.hidden=true},650)}}
addEventListener('hashchange',route);route();
addEventListener('keydown',function(e){if(e.key==='Escape'&&!pg.hidden)location.hash='work'});
(function(){var r=document.documentElement,b=document.getElementById('th'),s;try{s=localStorage.getItem('theme')}catch(_){}
if(s==='light'||s==='dark')r.dataset.theme=s;
b.addEventListener('click',function(){var n=lt()?'dark':'light';r.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(_){}})})();
