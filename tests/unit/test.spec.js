import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/navigation/Navigation.vue';
import BeerChoices from '@/components/BeerChoices.vue';

describe('Navigation.vue', () => {
    it('has data', () => {
        expect(typeof Navigation.data).toBe('function')
    });
});

describe('BeerChoices.vue', () => {
    it('has data', () => {
        expect(typeof BeerChoices.data).toBe('function')
    });
})