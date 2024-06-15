import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
    it('matches the snapshot', () => {
        const wrapper = shallowMount(About);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
