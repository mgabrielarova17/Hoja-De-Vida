import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView
      style={styles.fondo}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require('../../assets/bts/fondo-galaxia.jpg')}
        style={styles.fondoContenido}
        imageStyle={styles.imagenFondo}
        resizeMode="cover"
      >
        {/* ENCABEZADO */}
        <View style={styles.encabezado}>
          <Text style={styles.emoji}>💜 ✨</Text>

          <Text style={styles.titulo}>
            Mi experiencia
          </Text>

          <Text style={styles.subtitulo}>
            Cada proyecto es una oportunidad para crecer.
          </Text>

          <Text style={styles.fraseEncabezado}>
            Aprender, crear y avanzar hacia mis metas.
          </Text>
        </View>

        {/* INTRODUCCIÓN */}
        <View style={styles.introduccion}>
          <Text style={styles.introTitulo}>
            Mi camino de aprendizaje 🌟
          </Text>

          <Text style={styles.introTexto}>
            A través de mis estudios y proyectos he tenido
            la oportunidad de desarrollar habilidades,
            descubrir nuevas herramientas y fortalecer mis
            conocimientos en el mundo de la tecnología.
            Cada experiencia representa un paso importante
            para mi crecimiento personal y profesional.
          </Text>
        </View>

        {/* TARJETAS DE EXPERIENCIA */}
        <View style={styles.contenido}>
          <TarjetaExperiencia
            cargo="Desarrolladora en formación"
            empresa="Proyecto académico SENA"
            periodo="2026 - Actualmente"
            descripcion="Participación en actividades de desarrollo de software, creación de aplicaciones y aprendizaje de herramientas tecnológicas. Fortalecimiento de conocimientos en programación, trabajo en equipo y solución de problemas."
          />

          <TarjetaExperiencia
            cargo="Desarrollo de proyectos personales"
            empresa="Proyectos independientes"
            periodo="2026 - Actualmente"
            descripcion="Práctica de programación, diseño de interfaces y creación de soluciones digitales para fortalecer mis habilidades. Estos proyectos me permiten experimentar, aprender y poner en práctica mis conocimientos."
          />

          <TarjetaExperiencia
            cargo="Experiencia laboral"
            empresa="Disponible para nuevas oportunidades"
            periodo="En formación"
            descripcion="Interesada en adquirir experiencia profesional, aprender de nuevos entornos laborales y aportar mis conocimientos. Mi objetivo es continuar creciendo y asumir nuevos retos."
          />
        </View>

        {/* FRASE FINAL */}
        <View style={styles.pie}>
          <Text style={styles.frase}>
            Believe in yourself. Borahae 💜
          </Text>

          <Text style={styles.fraseExtra}>
            Cada logro comienza con la decisión de intentarlo.
          </Text>

          <Text style={styles.army}>
            NEVER GIVE UP ✨
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#24103D',
  },

  scroll: {
    flexGrow: 1,
  },

  fondoContenido: {
    flexGrow: 1,
    width: '100%',
    paddingBottom: 25,
  },

  imagenFondo: {
    width: '100%',
    height: '100%',
  },

  encabezado: {
    backgroundColor: 'rgba(65, 20, 110, 0.90)',
    padding: 30,
    paddingTop: 55,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 40,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitulo: {
    color: '#E9D5FF',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },

  fraseEncabezado: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },

  introduccion: {
    backgroundColor: 'rgba(255,255,255,0.94)',
    marginHorizontal: 18,
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
  },

  introTitulo: {
    color: '#7027A0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  introTexto: {
    color: '#444444',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify',
  },

  contenido: {
    padding: 18,
  },

  pie: {
    backgroundColor: 'rgba(65, 20, 110, 0.85)',
    marginHorizontal: 18,
    marginTop: 5,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  frase: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  fraseExtra: {
    color: '#E9D5FF',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 10,
  },

  army: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 12,
    letterSpacing: 2,
  },
});
