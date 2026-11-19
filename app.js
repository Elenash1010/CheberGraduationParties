'use strict';
const C=window.CONTENT, $=s=>document.querySelector(s), valid=v=>typeof v==='string'&&v.trim()&&!/^\[.*\]$/.test(v.trim());
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function image(src,alt){return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`}
document.querySelectorAll('[data-phone]').forEach(a=>{a.href='tel:'+C.tel;a.textContent=C.phone});document.querySelectorAll('[data-address]').forEach(e=>e.textContent=C.address);
if(valid(C.logo))document.querySelectorAll('.brand').forEach(e=>e.innerHTML=`<img src="${esc(C.logo)}" alt="Курорт Чебер">`);
$('#vk').href=C.vk;
if(valid(C.hero.src))$('#hero-image').innerHTML=`<div class="photo-shape photo-shape-hero"><img src="${esc(C.hero.src)}" alt="${esc(C.hero.alt)}" fetchpriority="high"></div>`;
$('#program-list').innerHTML=C.programs.map(p=>`<article class="program-card"><div class="media">${valid(p.photo)?image(p.photo,p.title):'<svg class="program-photo-icon" viewBox="0 0 48 40" fill="none" aria-hidden="true"><rect x="2" y="2" width="44" height="36" rx="7" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="m4 31 11-12 9 9 7-8 13 13" stroke="currentColor" stroke-width="2"/></svg><span>Фото программы</span>'}</div><div class="card-body"><h3>${esc(p.title)}</h3>${valid(p.name)?`<p><strong>${esc(p.name)}</strong></p>`:''}<p>${valid(p.description)?esc(p.description):'Уточните у менеджера сценарий, меню и условия участия для вашей группы.'}</p>${p.includes.filter(valid).length?`<ul>${p.includes.filter(valid).map(v=>`<li>${esc(v)}</li>`).join('')}</ul>`:''}${valid(p.price)||valid(p.adult)?`
  <div class="program-pricing">
    <h4>Стоимость</h4>
    ${valid(p.price)?`<div>Ребёнок · <strong>${esc(p.price)}</strong></div>`:''}
    ${valid(p.adult)?`<div>Взрослый · <strong>${esc(p.adult)}</strong></div>`:''}
  </div>`:''}<button class="outline" type="button" data-program="${p.id}" aria-haspopup="dialog" aria-controls="program-dialog">Подробнее о выпускном</button></div></article>`).join('');
if(C.advantages.length)$('#advantages').innerHTML=`<div class="adv-grid">${C.advantages.map(a=>`<article><div class="media">${image(a.src,a.caption)}</div><p>${esc(a.caption)}</p></article>`).join('')}</div>`;
if(valid(C.diningPhoto))$('#dining-image').innerHTML=`<div class="photo-shape photo-shape-family">${image(C.diningPhoto,'Зал курорта «Чебер»')}</div>`;
$('#gallery').innerHTML=C.gallery.length?C.gallery.map((a,i)=>`<button class="media" data-photo="${i}" aria-label="Увеличить: ${esc(a.caption)}">${image(a.src,a.caption)}<span class="gallery-caption">${esc(a.caption)} <span aria-hidden="true">↗</span></span></button>`).join(''):'<div class="media">Площадка курорта</div><div class="media">Территория</div><div class="media">Зал для праздника</div>';
if(C.gallery.length)$('#photo-note').hidden=true;
let returnFocus=null;function openDialog(d, trigger=document.activeElement){returnFocus=trigger;d.showModal();d.querySelector('.close').focus()}document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))returnFocus?.focus({preventScroll:true})});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
function programDialog(id){const p=C.programs.find(p=>p.id===id);if(!p)return;const rows=[['Продолжительность',p.duration],['Доступное время',p.time],['Стоимость для ребёнка',p.price],['Условия для взрослых',p.adult],['Детское меню',p.menu],['Минимальное количество участников',p.minimum],['Дополнительные услуги',p.extras],['Важные условия',p.terms]].filter(([,v])=>valid(v));$('#dialog-content').innerHTML=`<h2 id="dialog-title">${esc(valid(p.name)?p.name:p.title)}</h2>${valid(p.tagline)?`<p><strong>${esc(p.tagline)}</strong></p>`:''}${valid(p.description)?`<p>${esc(p.description)}</p>`:''}${p.includes.filter(valid).length?`<h3>В программе</h3><ul class="program-details">${p.includes.filter(valid).map(v=>`<li><strong>${esc(v)}</strong>${(p.details?.[v] ?? []).map(text=>`<p>${esc(text)}</p>`).join('')}${v === 'Праздничный обед' ? '<a href="#menu" data-view-menu>Посмотреть меню</a>' : ''}</li>`).join('')}</ul>`:''}${rows.length?`<dl>${rows.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>`:''}<p class="muted">${rows.length?'Остальные условия уточните у менеджера.':'Подробности программы и меню готовятся к публикации. Уточните сценарий, продолжительность, стоимость, питание детей и взрослых, минимальный размер группы и дополнительные услуги у менеджера.'}</p><button class="button" id="choose-program">Оставить заявку на эту программу ↗</button>`;$('#choose-program').addEventListener('click',()=>{$('#program').value=id;const trigger=returnFocus;$('#program-dialog').close();openDiscussion(trigger)});openDialog($('#program-dialog'))}
document.addEventListener('click',e=>{const b=e.target.closest('[data-program]');if(b)programDialog(b.dataset.program);if(e.target.closest('[data-view-menu]'))e.target.closest('dialog').close();const a=e.target.closest('[data-photo]');if(a){const p=C.gallery[Number(a.dataset.photo)];$('#large-photo').src=p.src;$('#large-photo').alt=p.caption;$('#large-caption').textContent=p.caption;openDialog($('#photo-dialog'))}});
const ready=valid(C.endpoint)&&valid(C.privacy)&&valid(C.consent);
if(valid(C.privacy)&&valid(C.consent)){$('#consent-copy').innerHTML=`Даю <a href="${esc(C.consent)}" target="_blank" rel="noopener">согласие на обработку персональных данных</a> в соответствии с <a href="${esc(C.privacy)}" target="_blank" rel="noopener">политикой</a>`;$('.footer-bottom').hidden=false;$('#legal-links').innerHTML=`<a href="${esc(C.privacy)}">Политика обработки данных</a> · <a href="${esc(C.consent)}">Согласие</a>`}
if(!ready){$('#form-status').textContent='Онлайн-заявка пока недоступна. Пожалуйста, позвоните по указанному телефону.';$('#lead-form').querySelector('button[type=submit]').setAttribute('aria-disabled','true')}
let sending=false;$('#lead-form').addEventListener('submit',async e=>{e.preventDefault();if(sending)return;if(!ready){$('#form-status').textContent='Заявка не отправлена: онлайн-форма пока не подключена. Свяжитесь с курортом по телефону.';return}let bad=null;const setError=(id,message)=>{const el=$('#'+id),error=$('#'+id+'-error');el.setAttribute('aria-invalid',String(!!message));error.textContent=message;if(message&&!bad)bad=el};setError('name',$('#name').value.trim()?'':'Укажите, как к вам обращаться.');const digits=$('#phone').value.replace(/\D/g,'');setError('phone',digits.length>=10&&digits.length<=15?'':'Введите телефон: от 10 до 15 цифр.');setError('consent',$('#consent').checked?'':'Необходимо согласие на обработку данных.');if(bad){bad.focus();return}if(!$('#count').checkValidity()||!$('#date').checkValidity()){$('#lead-form').reportValidity();return}sending=true;const btn=$('.submit');btn.disabled=true;btn.textContent='Отправляем…';$('#form-status').textContent='';try{const response=await fetch(C.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...Object.fromEntries(new FormData(e.target)),consent:true,consentDocument:C.consent})});const result=await response.json();if(!response.ok||result.success!==true)throw Error('unconfirmed');$('#form-status').textContent='Заявка отправлена. Менеджер свяжется с вами. Дата будет забронирована после согласования условий.';e.target.reset()}catch{$('#form-status').textContent='Не удалось подтвердить отправку. Попробуйте ещё раз или позвоните нам.'}finally{sending=false;btn.disabled=false;btn.innerHTML='Забронировать <span>↗</span>'}});

const discussionDialog = $('#discussion-dialog');
const discussionForm = $('#lead-form');
const inlineFormContainer = discussionForm.parentNode;
const inlineFormNextNode = discussionForm.nextSibling;
function openDiscussion(trigger) {
  discussionDialog.append(discussionForm);
  openDialog(discussionDialog, trigger);
}

document.querySelectorAll('[data-open-discussion]').forEach(button => {
  button.addEventListener('click', () => {
    openDiscussion(button);
  });
});
discussionDialog.addEventListener('close', () => {
  inlineFormContainer.insertBefore(discussionForm, inlineFormNextNode);
});
