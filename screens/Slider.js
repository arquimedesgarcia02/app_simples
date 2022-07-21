import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text } from 'react-native';

// Importação do arquivo de estilos:
import styles from '../styles/Style';

// Array dos slides da tela Slider:
const slides = [
    {
        key: 1,
        title: "App Simples.",
        text: "",
    },
    {
        key: 2, 
        title: "App Simples.",
        text: "A ideia desse App é permitir ao usuario criar, editar e deletar anotações de texto pessoais.",
    },
    {
        key: 3,
        title: "App Simples.",
        text: "Bem, agora vamos utilizar o app, clique no botão abaixo para iniciar.",
    },
]


export default Slider = () => {
    const [showHome, setShowHome] = useState(false);

    
    function renderSlides({ item }) {
        if (item.key == 1) {
            return (
                <View style={styles.container}>
                    <Text style={{fontSize: 36, textAlign: 'left', marginLeft: -10}}> Bem vindo ao </Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            )
        }
        
        
    }

    return(
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor: '#1C7DB7',
            }}
            renderNextButton={ () => <Text>PROXIMO</Text>}
            renderDoneButton={ () => <Text>INICIAR</Text>}
            onDone={ () => alert('Entrando no App')} // Implementar aqui a navegação para a HomeScreen
        />
    );
}
