describe('API Test - Echo Server', () => {

  it('GET /qa/test1 should return 200', () => {
    cy.request('GET', 'https://echo-serv.tbxnet.com/v1/qa/test1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(3000);
      });
  });

  it('POST /test should accept JSON', () => {
    cy.request({
      method: 'POST',
      url: 'https://echo-serv.tbxnet.com/v1/test',
      body: {
        contact1: 'David "Dave" Letterman',
        price: '30.00',
        details: 'Greatest Hits Album'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('json');
    });
  });

});