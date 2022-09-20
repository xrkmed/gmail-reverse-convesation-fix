// ==UserScript==
// @name         gmail-reverse-conversation-fix
// @namespace    https://github.com/xrkmed
// @version      0.1
// @description  Esta extensão em javascript corrige o problema de scroll ocasionado pela defasagem da compatibilidade da extensão "gmail-reverse-conversation" com as atualizações do gmail.
// @author       xrkmed
// @match        https://mail.google.com/mail/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// @license      GPLv3
// @require      https://cdn.jsdelivr.net/npm/arrive@2.4.1/minified/arrive.min.js
// ==/UserScript==

(function() {
    'use strict';

	var FT_TEST = true;
	var DEBUG = true;
	var m_scroll = null;

    let run = function(){
        if(FT_TEST && !m_scroll){
			if(DEBUG) console.log("[Debug] Procurando scroll.");
            var list = document.querySelectorAll('DIV');
			for(var x = 0; x < list.length; x++){
				if(list[x].scrollTop != 0){
					list[x].scrollTop = 0;
					m_scroll = list[x];
					FT_TEST = false;
					if(DEBUG) console.log("[Debug] Scroll encontrado.");
					break;
				}
			}
        }
		else
		{
			if(m_scroll){
				m_scroll.scrollTop = 0;
				if(DEBUG) console.log("[Debug] O sistema já possui um scroll, utilizando ele.");
			}
			else
			{
			if(DEBUG) console.log("[Debug] Procurando por scroll padrão de template pré-definido.");

			if(document.querySelector('.AO')){
				document.querySelector('.AO').children[0].scrollTop = 0;
			}
			if(document.querySelector('.S3')){
				document.querySelector('.S3').scrollTop = 0;
			}
			if(document.querySelector('.aeJ')){
				document.querySelector('.aeJ').scrollTop = 0;
			}

			}
        }
    }

	let m_scroll_find = function(){
		//alpha test
	}

    //document.onclick = eventRef;
    document.arrive('.HM', function(){ run(); } );

	function eventRef(evt) {
		var han;
			evt || (evt = window.event);

		if (evt) {
			var elem = evt.target ? han = evt.target : evt.srcElement && (han = evt.srcElement);

			if (evt.type=="click") {
				console.log("[Event Register] Clicked on " + elem.textContent + ".");
			}
		}
	}

})();
