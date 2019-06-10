var toggler = document.getElementById('toggler');
var menu = document.getElementById('menu');
    toggler.onclick = function (e) {
     e.preventDefault();
     toggler.classList.toggle('menu__toggler--close');
	 menu.classList.toggle('menu--vertical');
    } 