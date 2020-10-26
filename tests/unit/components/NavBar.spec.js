import Vuex from 'vuex'
import NavBar from '@/components/NavBar'
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/NavBar', () => {
  let store
  let actions
  let state
  let wrapper

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
    
    wrapper = shallowMount(NavBar, {
      store,
      localVue,
      propsData: {
        items: []
      },
    })
    
  })

  it('should show NavBar total items in cart icon', () => {
    expect(wrapper.find('.cart__total')
    .text().trim()).toEqual('5')

  })

  it('change cart state (open/close) when click in the icon', () => {

  })
})