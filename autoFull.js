/* NewAcis autologin
*
*
*	Developed By : BOSS,CHANG CPE30
*
*   This script can use for auto login @ newacis,stdmobile 
*
*
*/
if(window.name !== 'mainPopupWindow') {
    window.name = 'mainPopupWindow'
    window.location.replace("https://sinfo.kmutt.ac.th/NewAcis/login.jsf");   
}

if(window.location.href.includes("/NewAcis/login.jsf")){
	document.getElementById('j_username').value='xxxxxxxx';
	document.getElementById('j_password').value='xxxxxxxx';
	document.getElementById('logsubmit').click();	
}	
else if(window.location.href.includes("stdmobile")){
	document.getElementById('loginForm:j_username').value='xxxxxxxx';
	document.getElementById('loginForm:j_password').value='xxxxxxxx';
	document.getElementById('loginForm:signInButton').click();	
}
