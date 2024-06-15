import { shallowMount } from '@vue/test-utils';
import Contact from '@/views/Contact.vue';

describe('Contact.vue', () => {
    it('renders contact page', () => {
        const wrapper = shallowMount(Contact);
        expect(wrapper.text()).toContain('Esta es la página Contact.');
    });
});
