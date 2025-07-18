const body = document.querySelector('body');

const images = [
	{
		name: 'Girl with a Pearl Earring',
		artist: 'Johannes Vermeer',
		year: '1665',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1920px-1665_Girl_with_a_Pearl_Earring.jpg',
	},
	{
		name: 'Mona Lisa',
		artist: 'Leonardo da Vinci',
		year: '1503–1506',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
	},
	{
		name: 'The Garden of Earthly Delights',
		artist: 'Hieronymus Bosch',
		year: '1490-1510',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/2880px-The_Garden_of_earthly_delights.jpg',
	},
	{
		name: 'The Kiss',
		artist: '	Gustav Klimt',
		year: '1907–1908',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/1920px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
	},
	{
		name: 'Still Life with Irises',
		artist: 'Vincent van Gogh',
		year: '1890',
		src: 'https://uploads6.wikiart.org/images/vincent-van-gogh/still-life-with-irises-1890.jpg!Large.jpg',
	},
];

const imgCard = document.createElement('div');
imgCard.className = 'image-card';
const imgElement = document.createElement('img');
const imgInfo = document.createElement('div');

if (images.length === 0) {
	console.error('The images array is empty.');
} else {
	imgInfo.textContent = `${images[0].name} - ${images[0].artist} (${images[0].year})`;
	imgElement.setAttribute('src', images[0].src);
	imgElement.setAttribute('alt', images[0].name);
	imgCard.append(imgElement, imgInfo);
	body.append(imgCard);
}

let index = 0;

const chageImage = () => {
	if (images.length === 0) {
		console.error('The images array is empty.');
	} else {
		if (index === images.length - 1) {
			index = 0;
		} else {
			index++;
		}
		imgElement.setAttribute('src', images[index].src);
		imgElement.setAttribute('alt', images[index].name);
		imgInfo.textContent = `${images[index].name} - ${images[index].artist} (${images[index].year})`;
	}
};

setInterval(chageImage, 3000);
