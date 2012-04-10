var getProps = function() {

	var props = {
		n_platform: navigator.platform,
		s_pixelDepth: screen.pixelDepth,
		s_width: screen.width,
		s_height: screen.height,
		s_availWidth: screen.availWidth,
		s_availHeight: screen.availHeight,
		w_devicePixelRatio: window.devicePixelRatio,
		w_innerWidth: window.innerWidth,
		w_innerHeight: window.innerHeight,
		w_orientation: window.orientation,
		w_pageXOffset: window.pageXOffset,
		w_pageYOffset: window.pageYOffset,
		d_clientWidth: document.documentElement.clientWidth,
		d_clientHeight: document.documentElement.clientHeight,
		d_offsetWidth: document.documentElement.offsetWidth,
		d_offsetHeight: document.documentElement.offsetHeight,
		zoom: document.documentElement.clientWidth / window.innerWidth
	}

	var html = '<table>';

	for(var prop in props) {
		html += '<tr>' +
			'<td>'+prop+'</td>' +
			'<td>'+props[prop]+'</td>' +
			'</tr>';
	}

	document.getElementById('props').innerHTML = html + '</table>';

};
