function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export default {
    mutations: {
        updateBreeds(state: any, breeds: any) {
            state.breeds = breeds;
        }
    },
    actions: {
        async fetchAllBreeds(ctx: any) {
            const breeds = await fetch("https://dog.ceo/api/breeds/list/all").then(resp => resp.json());

            ctx.commit('updateBreeds', breeds.message);
        }
    },
    getters: {
        allBreeds(state: any) {
            return state.breeds;
        },
        randomBreed(state: any) {
            let spreaded = Object.entries(state.breeds).filter((el: any) => !!el[1]['0']);
            return spreaded[getRandomInt(spreaded.length)];
        }
    },
    state: {
        breeds: []
    }
}