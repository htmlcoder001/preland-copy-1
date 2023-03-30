var resultWrapper=document.querySelector('.spin-result-wrapper');var wheel=document.querySelector('.wheel-img');function spin(){if(wheel.classList.contains('rotated')){resultWrapper.style.display="block";}else{wheel.classList.add('super-rotation');setTimeout(function(){resultWrapper.style.display="block";},8000);setTimeout(function(){$('.spin-wrapper').slideUp();$('.order_block').slideDown();start_timer();},10000);wheel.classList.add('rotated');}}var closePopup=document.querySelector('.close-popup');$('.close-popup, .pop-up-button').click(function(e){e.preventDefault();$('.spin-result-wrapper').fadeOut();var top=$('#order0').offset().top;$('body,html').animate({scrollTop:top},800);});function outputDat(m,fullM){var d=new Date();var p=new Date(d.getTime()-m*86400000);var monthA=(fullM===false)?'01,02,03,04,05,06,07,08,09,10,11,12'.split(','):'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');var w=p.getDate();var ret=(fullM===false)?p.getDate()+'.'+monthA[p.getMonth()]+'.'+p.getFullYear():p.getDate()+' '+monthA[p.getMonth()]+' '+p.getFullYear();return ret;}var time=600;var intr;function start_timer(){intr=setInterval(tick,1000);}function tick(){time=time-1;var mins=Math.floor(time/60);var secs=time-mins*60;if(mins==0&&secs==0){clearInterval(intr);}secs=secs>=10?secs:"0"+secs;$("#min").html("0"+mins);$("#sec").html(secs);}document.addEventListener("DOMContentLoaded",function(){postDate();});function postDate(){var body=document.body,postLang=body.getAttribute('data-post-lang');var sa=body.getAttribute('data-post-format')||'dd.mm.yyyy',msInDay=86400000,counterLength=90,months,countryName='cs',isAbbreviated=body.getAttribute('data-post-abbreviated')?true:false,localDate=new Date();var days=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];switch(countryName){case'cs':months=['Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec'];break;case'it':days=['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];break;case'es':days=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];break;case'fr':days=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];break;case'pt':days=['Segund-feira','Terç-feira','Quart-feira','Quint-feira','Sext-feira','Sábado','Domingo'];break;case'de':days=['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];break;case'bg':days=['Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота','Неделя']
break;case'pl':days=['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];break;case'ro':days=['Luni','Marţi','Miercuri','Joi','Vineri','Sîmbătă','Duminică'];break;case'hu':days=['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap']
break;case'gr':case'cy':days=['Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο','Κυριακή']
break;case'ru':default:days=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];break;}switch(countryName){case'it':months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];break;case'es':months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];break;case'fr':months=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];break;case'pt':months=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];break;case'de':months=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];break;case'bg':months=['Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември'];break;case'pl':months=['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];break;case'ro':months=['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];break;case'hu':months=['Január','Február','Március','Április','Május','Június','Július','Augusztus','Szeptember','Október','November','December'];break;case'gr':case'cy':months=['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];break;case'ru':default:months=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];break;}if(isAbbreviated){for(var i=0;i<months.length;i++){months[i]=months[i].slice(0,3).toLowerCase();}}for(var counter=0;counter<counterLength;counter++){var dateClass="date-"+counter,nodeList=document.getElementsByClassName(dateClass),date=new Date(localDate.getTime()-counter*msInDay),timeCounter=0,timeArray=time(nodeList);timeArray=timeFormat(timeArray);for(var i=0;i<nodeList.length;i++){var data=nodeList[i].dataset;if(data.format){nodeList[i].innerHTML=format(date,data.format);}else{nodeList[i].innerHTML=format(date,sa);}if(/\btime\b/.test(nodeList[i].className)){nodeList[i].innerHTML+=" "+timeArray[timeCounter];timeCounter++;}}}for(var counter=0;counter<counterLength;counter++){var dateClass="date"+counter,nodeList=document.getElementsByClassName(dateClass),date=new Date(localDate.getTime()+counter*msInDay),timeCounter=0;for(var i=0;i<nodeList.length;i++){var data=nodeList[i].dataset;if(data.format){nodeList[i].innerHTML=format(date,data.format);}else{nodeList[i].innerHTML=format(date,sa);}}}function time(nodeList,reverse){var timeArray=[],timeStatement=false;for(var i=0;i<nodeList.length;i++){if(nodeList[i].className.match(/\btime\b/)){if(nodeList[i].className.match(/\bdate-0\b/)){timeStatement=true;}timeArray.push(timeRandom(timeStatement));}}if(reverse)timeArray.sort(function(a,b){return b-a;});else timeArray.sort(function(a,b){return a-b;});return timeArray;}function timeRandom(statement){if(statement){var date=new Date(),timeLimit=date.getHours()*60+date.getMinutes();return Math.round(0+Math.random()*timeLimit);}return Math.round(0+Math.random()*1440);}function timeFormat(timearray){var array=[];for(var i=0;i<timearray.length;i++){var htemp=Math.floor(timearray[i]/60),mtemp=timearray[i]%60,hours=htemp<10?"0"+htemp:htemp,minutes=mtemp<10?"0"+mtemp:mtemp;array.push(hours+":"+minutes);}return array;}function notLastIteration(index,array){return index!==array.length-1;}function format(date,format){var testFormat=['dd','day','mm','month','yyyy','year'];var innerDate=format;var dd=date.getDate(),mm=date.getMonth()+1,year=date.getFullYear(),month=months[mm-1],day=days[new Date(year,mm-1,dd).getDay()];dd=(dd<10)?("0"+dd):dd;mm=(mm<10)?('0'+mm):mm;var dateFormat={day:day,dd:dd,year:year,yyyy:year,mm:mm,month:month};for(var i=0;i<testFormat.length;i++){var string=testFormat[i];var regExp=new RegExp(string);innerDate=innerDate.replace(regExp,dateFormat[string]);}return innerDate;}}