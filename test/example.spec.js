import { registerFn } from '../src/index.js';

describe('ponUp', () => {
    it('debería ser una función', () => {
        expect(typeof registerFn).toBe('function');
    });
});