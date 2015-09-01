var result = [];

function messageHandler (e) {
	if (e.data > 0) {
		generateFib(e.data);
	}
}

function generateFib(n) {
	result.length = 0;
	for (var i = 0; i <= n-1; i++) {
	  	result.push(fibonacci(i));
	}
	postMessage(result);
}

function fibonacci(n) {
	if (n < 2){
		return 1;
	}else{
		return fibonacci(n-2) + fibonacci(n-1);
	}
}

addEventListener("message", messageHandler, true);