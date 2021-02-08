window.onload = function (e) {

	var seps = document.getElementsByTagName("sep");

	for (var i = 0; i < seps.length; i++) {
	
		seps[i].innerHTML = '&zwnj;</sep>';
	
	}
	
	var spans = document.getElementsByTagName("span");
	
	for (var i = 0; i < spans.length; i++) {
	
		spans[i].insertAdjacentHTML("afterbegin", '&zwnj;');
	
		spans[i].innerHTML += '&zwnj;';
	
	}
	
	var navi = document.getElementsByTagName("nav");
	
	for (var i = 0; i < navi.length; i++) {
	
		navi[i].innerHTML = '&zwnj; <a href="index.html">Go back to start</a> | <a href="<script>window.location.href;</script>">Refresh</a> &zwnj;</nav>';
	
	}	

}