
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});


function fontsStyle(params) {

let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');

	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
		
			if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
				if (c_fontname != fontname) {
					fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
				}
				c_fontname = fontname;
			}
			}
		})
	}
}
		
function cb() {}
// ================================================================================

// const t = document.querySelector('body')

// t.addEventListener("mouseover", function(e){
// 	console.log(e.target)
// });




// ======Event Listener

// const ado = document.querySelector('.content__carts');
// // let ad;
// console.log('ado', ado);



// ado.addEventListener("mouseover", function(e) {

// 	let tu = e.target;
// 	console.log("tu :",tu.closest('img'));

// 	if(tu.closest('.content__cart')){
// 		console.log(e)

// 		let io = tu.nextElementSibling
// 		console.log(io)

// 		// console.log(df)
// 		io.classList.toggle('active');

// 	};

// });



// rm.addEventListener('mouseout', rmMouseOver, once=true);







// for(let ad of ado){
	// console.log(ad)

	// ad.addEventListener('mouseover', addMouseOver, once = true);
// }


// for(let rm of ado ){
// 	rm.addEventListener('mouseout', rmMouseOver, once=true);
	
// 	// console.log(rm)

// }




// function addMouseOver(event) {

// 		let fg = event.target.name

// 		console.log("in :",event.target)

// 		if(fg === 'cont_img'){
// 			let df = event.target.offsetParent.firstElementChild;
// 			df.classList.add('active');
// 		};

// }



// function rmMouseOver(event) {
// 		// let df = event.target.offsetParent.firstElementChild
// 		// console.log("rm :", df)

// 		let rn = event.target.classList
// 		// console.log("rn :", rn[1])
// 		// console.log("out :",event.target)

// 		if(rn[1] === "active"){
// 			// console.log("taget :", rn[1])

// 			// let dh = event.target.offsetParent.firstElementChild;
// 			let dh = event.target;
// 			dh.classList.remove('active');
// 		};

// }