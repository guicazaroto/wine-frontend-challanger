import Vuex from 'vuex'
import NavBar from '@/components/NavBar'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/NavBar', () => {
  let store
  let actions
  let state

  beforeEach(() => {
    actions = {
      updateCart: jest.fn()
    }

    state = {
      totalItens: 5
    }
    store = new Vuex.Store({
      modules: {
        cart: {
          namespaced: true,
          actions,
          state
        }
      }
    })  
  })

  it('should open cart when click in button', () => {
    const wrapper = shallowMount(NavBar, {
      store,
      localVue,
      propsData: {
        items: []
      },
    })

    expect(wrapper.find('.cart__total')
    .text().trim()).not.toEqual('5')

  })
})