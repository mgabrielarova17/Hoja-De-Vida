import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
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

          <Text style={styles.titulo}>Mi formación</Text>

          <Text style={styles.subtitulo}>
            Cada aprendizaje me acerca a mis sueños.
          </Text>

          <Text style={styles.fraseEncabezado}>
            El conocimiento es el camino hacia nuevas oportunidades.
          </Text>
        </View>

        {/* RESUMEN */}
        <View style={styles.resumen}>
          <Ionicons
            name="school-outline"
            size={30}
            color="#E9D5FF"
          />

          <Text style={styles.resumenTitulo}>
            Mi camino de aprendizaje
          </Text>

          <Text style={styles.resumenTexto}>
            Cada etapa de mi formación representa una oportunidad
            para crecer, descubrir mis capacidades y prepararme
            para alcanzar mis metas.
          </Text>

          <View style={styles.estadisticas}>
            <View style={styles.estadistica}>
              <Text style={styles.numero}>03</Text>
              <Text style={styles.etiqueta}>Etapas</Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Text style={styles.numero}>01</Text>
              <Text style={styles.etiqueta}>En curso</Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Text style={styles.numero}>∞</Text>
              <Text style={styles.etiqueta}>Sueños</Text>
            </View>
          </View>
        </View>

        {/* CONTENIDO */}
        <View style={styles.contenido}>
          <View style={styles.tituloSeccion}>
            <Ionicons
              name="book-outline"
              size={23}
              color="#E9D5FF"
            />

            <Text style={styles.tituloTarjetas}>
              Mi recorrido académico
            </Text>
          </View>

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

        {/* OBJETIVO PERSONAL */}
        <View style={styles.objetivo}>
          <Ionicons
            name="rocket-outline"
            size={30}
            color="#E9D5FF"
          />

          <Text style={styles.objetivoTitulo}>
            Mi próximo gran objetivo
          </Text>

          <Text style={styles.objetivoTexto}>
            Seguir fortaleciendo mis conocimientos en tecnología,
            desarrollar proyectos creativos y convertirme en una
            profesional capaz de crear soluciones que aporten
            algo positivo al mundo.
          </Text>
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

  resumen: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 22,
    padding: 20,
    borderRadius: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.35)',
  },

  resumenTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  resumenTexto: {
    color: '#E9D5FF',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },

  estadisticas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 22,
  },

  estadistica: {
    alignItems: 'center',
    flex: 1,
  },

  numero: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  etiqueta: {
    color: '#E9D5FF',
    fontSize: 12,
    marginTop: 4,
  },

  separador: {
    width: 1,
    height: 35,
    backgroundColor: 'rgba(233, 213, 255, 0.4)',
  },

  contenido: {
    padding: 18,
    paddingTop: 25,
  },

  tituloSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    gap: 9,
  },

  tituloTarjetas: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  objetivo: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 5,
    marginBottom: 20,
    padding: 22,
    borderRadius: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.35)',
  },

  objetivoTitulo: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

  objetivoTexto: {
    color: '#E9D5FF',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
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
