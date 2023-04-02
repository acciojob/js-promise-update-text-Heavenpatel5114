
function sayHello(){
	return new promise((resolve) => {
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});
}

const output =document.getElementbyId("output");
sayHello().then((result)=>{
	output.textContent=result;
});
