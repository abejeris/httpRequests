// this is old way of getting the response from an api using XMLHttpRequest

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', () => {
// 	const data = JSON.parse(firstReq.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('error');
// });
// firstReq.open('get', 'https://swapi.dev/api/planets/');
// firstReq.send();

// -----------------------------------------------------
//Fetch is new and better!

// const HTTP_REQUEST = fetch('https://swapi.dev/api/planets')
// 	.then((response) => {
// 		if (!response.ok) throw new Error('errorrrrrr', response.status);
// 		response.json().then((data) => {
// 			for (let planet of data.results) {
// 				console.log(
// 					`${planet.name} planet rotates in ${planet.rotation_period} hours`
// 				);
// 			}
// 		});
// 	})
// 	.catch((e) => {
// 		console.log(e, 'error');
// 	});

//------------------------------------------------------------
// chaining fetch

// fetch('https://swapi.dev/api/planets')
// 	.then((response) => {
// 		if (!response.ok) throw new Error('errorrrrrr', response.status);
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log('fetched all planets (first 10)');
// 		console.log(data);
// 		const filmURL = data.results[0].films[0];
// 		return fetch(filmURL);
// 	})
// 	.then((response) => {
// 		if (!response.ok) throw new Error('errorrrrrr', response.status);
// 		return response.json();
// 	})

// 	.then((data) => {
// 		console.log('fetched first film, based off of first planet');
// 		console.log(data.title);
// 	})

// 	.catch((e) => {
// 		console.log(e, 'error');
// 	});
