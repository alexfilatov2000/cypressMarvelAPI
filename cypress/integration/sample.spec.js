const CryptoJS = require("crypto-js");

const date = new Date();
let ts = date.getTime();
const publicKey = '366d13c242e7d58e1b048b5a8a52bd03';
const privateKey = '1522dd1e5cad26374167cff4ff8c10240d9caa56';
const hash = CryptoJS.MD5(ts+privateKey+publicKey).toString();

context('Test Marvel API', () => {

    it('Check by total characters', () => {
        cy.request('GET', `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then(res => {
                expect(res.body.data).to.have.property('total', 1493)
                expect(res.body).to.have.property('code', 200)
            });
    })

    it('Check specific character', () => {
        const characterId = '1009148';
        const name = 'Absorbing Man';
        cy.request('GET', `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then(res => {
                expect(res.body.data.results[0]).to.have.property('name', name)
                expect(res.body).to.have.property('code', 200)
            });
    })

    it('Check specific character by total comics', () => {
        const characterId = '1009148';
        const total = 91;
        cy.request('GET', `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then(res => {
                expect(res.body.data).to.have.property('total', total)
                expect(res.body).to.have.property('code', 200)
            });
    })


    it('Check by total comics', () => {
        cy.request('GET', `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then(res => {
                expect(res.body.data).to.have.property('total', 48468)
                expect(res.body).to.have.property('code', 200)
            });
    })

    it('Check specific comics', () => {
        const comicsId = '82967';
        const title = 'Marvel Previews (2017)';
        cy.request('GET', `https://gateway.marvel.com:443/v1/public/comics/${comicsId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
            .then(res => {
                expect(res.body.data.results[0]).to.have.property('title', title)
                expect(res.body).to.have.property('code', 200)
            });
    })

})