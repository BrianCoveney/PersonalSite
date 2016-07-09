var s, z, f;

s = document.getElementsByClassName('content');
s[0].innerHTML = " < SECTION > ";

z = document.getElementsByClassName('content2');
for(var i = 0; i < z.length; i++){
	z[i].innerHTML = " < TESTING > ";
}

f = document.getElementById('mFooter').
	getElementsByClassName('footer_cont')[0];
f.innerHTML = "Posted by: Brian Coveney";
