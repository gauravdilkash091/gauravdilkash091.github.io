console.log('see its working');
function user_validation(){
	var x=document.getElementsByClassName('user-content.html');
	var bool=false;
	for(var i=0;i<x.length;i++){
		if(x[i].value==''){
			alert('please fill all the details!!!');
			break;
		}
		else{bool=true;}
	}
	if(bool){
		var temp=x[0].value;
		window.location='index.html';
		var img=document.createElement('img');
			img.setAttribute('src',temp);
			img.setAttribute('alt', 'file not found');
			img.className='userimg';
			var add=document.getElementById('user_provided_content');
			add.appendChild(img);
	}
}