sfHover = function() {
	var sfEls =
	document.getElementById('menu').getElementsByTagName('Li');
	for (var i=0; i<sfEls.lenght; i++){
		sfEls[i].onmouseover=function() {
			this.className+=" sfHover";

		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfHover\\b"), "");
		}
	}

}
if (window.attachEvent) window.attachEvent("onload", sfHover);