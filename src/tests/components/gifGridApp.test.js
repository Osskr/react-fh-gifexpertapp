import React from 'react'
import {shallow} from 'enzyme'
import GifGrid from '../../components/gifGrid'

describe('Tests para el componente GifGridApp',()=>{

    test('debe mostrar GifGridApp correctamente', () => {

        const wrapper = shallow(<GifGrid/>)
        expect(wrapper).toMatchSnapshot()

    })

})