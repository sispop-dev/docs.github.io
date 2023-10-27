
/* Gives Class:Home an ID */
var favicon = document.getElementsByClassName("md-logo")[0];
favicon.id="Home";

/* Adds link to ID Home */
var faviconlink = document.getElementById('Home');
faviconlink.href = 'https://www.sispop.site';

/* Removes Sispop Docs Title text and replaces with Menu Bar*/
var headers = document.getElementsByClassName("md-header-nav__topic");
for (var i = headers.length - 1; i >= 0; i--) {
	if (headers[i].innerText === 'Sispop Docs') {
//		headers[i].innerHTML = '<a href="https://www.sispop.site">Home </a><a href="https://sispop-dev.github.io/sispop-docs/">Documentation </a><a href="https://sispop.site/#team-section">Team </a><a href="https://sispop.site/#papers">Papers </a> <a href="https://sispop.site/blog/"">Blog</a>';
        headers[i].innerHTML = '';
	}
}
