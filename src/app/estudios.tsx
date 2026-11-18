import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
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
          <Text style={styles.corazon}>💜 ✨</Text>

          <Text style={styles.titulo}>
            Mi formación
          </Text>

          <Text style={styles.subtitulo}>
            Cada aprendizaje me acerca a mis sueños.
          </Text>

          <Text style={styles.fraseEncabezado}>
            El conocimiento es el camino hacia nuevas oportunidades.
          </Text>
        </View>

        {/* CONTENIDO */}
        <View style={styles.contenido}>
          <TarjetaEstudio
            titulo="Análisis y Desarrollo de Software"
            institucion="SENA"
            periodo="2026 - Actualmente"
            descripcion="Formación en programación, desarrollo de aplicaciones y creación de soluciones tecnológicas."
            enCurso={true}
          />

          <TarjetaEstudio
            titulo="Educación Media"
            institucion="Institución Educativa"
            periodo="Finalizado"
            descripcion="Formación académica de educación básica y media, fortaleciendo conocimientos y habilidades para mi futuro."
            enCurso={false}
          />

          <TarjetaEstudio
            titulo="Aprendizaje personal"
            institucion="Formación complementaria"
            periodo="En desarrollo"
            descripcion="Aprendizaje autónomo sobre tecnología, creatividad y nuevas herramientas digitales. Me gusta investigar y descubrir nuevas formas de aprender."
            enCurso={false}
          />
        </View>

        {/* FRASE FINAL */}
        <View style={styles.pie}>
          <Text style={styles.frase}>
            Dream, hope, forward. 💜
          </Text>

          <Text style={styles.fraseExtra}>
            Cada pequeño esfuerzo construye un gran futuro. ✨
          </Text>

          <Text style={styles.army}>
            BOR A HAE 💜
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

  corazon: {
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
    fontStyle: 'italic',
    fontSize: 16,
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
