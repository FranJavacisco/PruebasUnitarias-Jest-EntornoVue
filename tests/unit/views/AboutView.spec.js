import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
    it('matches the snapshot', () => {
        const wrapper = shallowMount(HomeView);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
