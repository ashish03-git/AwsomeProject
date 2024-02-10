import { View, Text } from 'react-native'
import React,{FunctionComponent, ReactElement} from 'react'
import Component_Defination from './Component_Defination'

const Component:FunctionComponent = ():ReactElement => {
  return (
    <View>
      <Component_Defination name='ashish' email='ashish@gmail.com' age={22}/>
    </View>
  )
}

export default Component