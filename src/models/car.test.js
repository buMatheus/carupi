const Car = require('./Car');
const car = {
    marca: '',
    modelo: '',
    versao: '',
    ano: '',
    quilometragem: '',
    tipoCambio: '',
    precoVenda: '',

}
car.marca = 'teste';
car.modelo = 'testando';
car.versao = 'de teste';
car.ano = '2021';
car.quilometragem = 0;
car.tipoCambio = 'Semi Automatico';
car.precoVenda = 3500;


describe('CRUD car', ()=>{
    it('should return the right values',()=>{
        expect(Car.create(car)).toBe(200);
    })
})