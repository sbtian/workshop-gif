class Gif{
	constructor(name, url, mark){
		this.name = name;
		this.url = url;
		this.mark = mark;
    }    
	
}

let gifs = [
    new Gif('gato', 'https://media3.giphy.com/media/13CoXDiaCcCoyk/200.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=200.gif', false),
    new Gif('minion', 'https://media0.giphy.com/media/11vhCpFcD3um7m/200.gif?cid=ecf05e47qxsksco7t4mpztp9zj20ay85kwxz0du3gluf0r9r&rid=200.gif', false),
    new Gif('gato_gafas', 'https://media3.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=200.gif', false),
    new Gif('enserio', 'https://media1.giphy.com/media/Ro5fB5rRvkICI/200w.gif?cid=ecf05e47ijoogwu9ucdzv1dly3l4jf1dq591zhwgdlcz33ux&rid=200w.gif', false),
    new Gif('pereza', 'https://media0.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=giphy.gif', false),
    new Gif('dev', 'https://media0.giphy.com/media/kwEmwFUWO5Ety/200.gif?cid=ecf05e47ijoogwu9ucdzv1dly3l4jf1dq591zhwgdlcz33ux&rid=200.gif', false),
]



const search = () => {
    document.getElementById('gifs_resultado').innerHTML = '';

    const value = document.getElementById('input_search').value;
    let resultado = document.getElementById('gifs_resultado');

    for (let i = 0; i < gifs.length; i++) {
        const name = gifs[i].name;

        if(name.indexOf(value) === 0 && value != ''){
            resultado.insertAdjacentHTML('beforeend',
            `<div class="gif">
                <a onclick="mark(${i})" style="cursor:pointer" title="Agregar a favorito"><img src="${gifs[i].url}"></a>
            </div>`);
        }        
    }
}

const mark = (i) => {
    gifs[i].mark = true
    showMarks();    
}

const showMarks = () => {
    document.getElementById('gifs_favoritos').innerHTML = ''
    let favoritos = document.getElementById('gifs_favoritos');
    for (let i = 0; i < gifs.length; i++) {
        const mark = gifs[i].mark;
        if(mark){
            favoritos.insertAdjacentHTML('beforeend',
            `<div class="gif">
                <img src="${gifs[i].url}">
            </div>`);
        }        
    }
}

showMarks();

