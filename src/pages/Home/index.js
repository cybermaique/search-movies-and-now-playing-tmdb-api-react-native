import { Button, Text, View } from 'react-native'
import React from 'react'

export default function Home ({ navigation }) {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre')}
            />
        </View>
    )
}