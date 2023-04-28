function helloworld(){
	setTimeout((resolve,reject)=>{
		reslove("Hello, world!")
	},1000)
}
const ouputElemnt=document.getElementById('output')
helloworld().then((message)=>{
	ouputElemnt.innerText=message;
}).catch((error) => {
  console.error(error);
});