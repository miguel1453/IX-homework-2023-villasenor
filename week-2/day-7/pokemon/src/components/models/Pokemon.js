export class Pokemon {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.image = () => {
            return this.fetchSprite();
        }
    }

    async fetchSprite() {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.name;
        const res = await fetch(url);
        const data = await res.json();
        const sprite = data.sprites.back_default;
        console.log(sprite);
        return sprite;

    }
}