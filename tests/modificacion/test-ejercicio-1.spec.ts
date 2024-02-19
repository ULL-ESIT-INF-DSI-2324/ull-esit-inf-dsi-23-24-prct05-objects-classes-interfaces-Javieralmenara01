import 'mocha'
import { expect } from 'chai';
import { getAllergens } from '../../src/modificacion/ejercicio-1'

describe('getAllergens', () => {
  it("Entrada válidas", () => {
    expect(getAllergens(144)).to.be.deep.equal([ 'Tomate', 'Gato' ]);
    expect(getAllergens(128)).to.be.deep.equal([ 'Gato' ]);
    expect(getAllergens(7)).to.be.deep.equal([ 'Huevo', 'Cacahuete', 'Marisco' ]);
  })
  it("Entrada inválidas", () => {
    expect(getAllergens(-1)).to.be.undefined;
    expect(getAllergens(275)).to.be.undefined;
  })
});