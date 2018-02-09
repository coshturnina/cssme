var toc = {};
toc.d = document;

toc.setToc = function(){
	var h2s = Array.prototype.slice.call(toc.d.getElementsByTagName('h2'));
	var ul = toc.d.createElement('ul');
	ul.id = 'toc';

	var posttoc = toc.d.getElementsByClassName('post-toc')[0];
	posttoc.appendChild(ul);
	var li; 
	var text;

	for(var i = 0, l = h2s.length; i < l; i++){
		text = h2s[i].textContent;
		h2s[i].innerHTML = "<a id=h"+i+">" + text + "</a>";
		li = toc.d.createElement('li');
		li.innerHTML = "<a href=#h"+i+">" + text + "</a>";
		ul.appendChild(li);
	}

};