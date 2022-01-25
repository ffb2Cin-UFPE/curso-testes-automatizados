const AdressMatcher = require('./Atividade1ClassConsumer');
    let adressMatcher = '';
    let indexOfStName = '';
    let indexOfZipCode = '';
    let subStrBetweenMatches = '';

describe("Tests to work with address elements", () => {
    const ST = 'N bruce Las Vegas NV 89101 USA';
    
    beforeEach(() => {
        adressMatcher = new AdressMatcher(ST);
    });
        
    it('Should assert the return index of given substrings', () => {
        indexOfStName = adressMatcher.findStreetName('N');
        expect(indexOfStName).not.toBe('N')
        expect(indexOfStName).toBe(0)

       indexOfStName = adressMatcher.findStreetName('Las');
        expect(indexOfStName).not.toBe('Las')
        expect(indexOfStName).toBe(8);

        indexOfStName = adressMatcher.findStreetName('Vegas');
        expect(indexOfStName).not.toBe('Vegas')
        expect(indexOfStName).toBe(12);

        indexOfStName = adressMatcher.findStreetName('NV');
        expect(indexOfStName).not.toBe('NV')
        expect(indexOfStName).toBe(18);

        indexOfStName = adressMatcher.findStreetName('89101');
        expect(indexOfStName).not.toBe('89101')
        expect(indexOfStName).toBe(21); 
    }); 

    it('Should assert the substring return betweem matches', () => {
        subStrBetweenMatches = adressMatcher.findStateInitialsBetweenMatches('bruce','Vegas');
        expect(subStrBetweenMatches).toBe(" Las ");

    });

    it('Should assert the bulevard of given adres', () => {
        subStrBetweenMatches = adressMatcher.findStateInitialsBetweenMatches('N bruce Las Vegas' , '89101 USA');
        expect(subStrBetweenMatches).toBe(" NV ");
    });

    it('Should assert the Index of ZipCode of given adress', () => {
        indexOfZipCode = adressMatcher.findStreetZipCode('89101');
        expect(indexOfZipCode).toBe(21);
    });

    it('Should return return a string made of the first 2 and the last 2 chars of the original string', () => {
    bothString = adressMatcher.findBothEnds();
    expect(bothString).toBe('N SA');

   });

    it('Should return a string where all occurences of its first char have been changed to * except do not change the first char itself', () => {
        adressMatcher = new AdressMatcher(ST);
        fixStart = adressMatcher.hideStreetName('Vegas');
        expect(fixStart).toBe('N bruce Las ***** NV 89101 USA');
   });
   
});  