function getFirstSelector(selector){
 return document.querySelector(selector);
};

function nestedTarget(){
	return document.querySelector('#nested .target');
};

function deepestChild(){
	return document.querySelector('#grand-node div div div div');

};




function increaseRankBy(n){
	let rank = document.querySelectorAll('ul.ranked-list')
	for (let el of rank) {
		el.innerHTML = parseInt(el.innerHTML) + n
	}
   };
