
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
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
          <Ionicons
            name="rocket-outline"
            size={30}
            color="#7027A0"
          />

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

        {/* RESUMEN */}
        <View style={styles.resumen}>
          <Text style={styles.resumenTitulo}>
            Mi recorrido profesional
          </Text>

          <View style={styles.estadisticas}>
            <View style={styles.estadistica}>
              <Ionicons
                name="laptop-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>02</Text>
              <Text style={styles.etiqueta}>
                Tipos de proyectos
              </Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Ionicons
                name="school-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>01</Text>
              <Text style={styles.etiqueta}>
                Formación actual
              </Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Ionicons
                name="star-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>∞</Text>
              <Text style={styles.etiqueta}>
                Oportunidades
              </Text>
            </View>
          </View>
        </View>

        {/* EXPERIENCIAS */}
        <View style={styles.contenido}>
          <View style={styles.tituloSeccion}>
            <Ionicons
              name="briefcase-outline"
              size={23}
              color="#E9D5FF"
            />

            <Text style={styles.tituloTarjetas}>
              Mis experiencias
            </Text>
          </View>

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

        {/* HABILIDADES */}
        <View style={styles.habilidades}>
          <Text style={styles.habilidadesTitulo}>
            Habilidades en desarrollo 💻
          </Text>

          <View style={styles.habilidad}>
            <Ionicons
              name="code-slash-outline"
              size={21}
              color="#E9D5FF"
            />
            <Text style={styles.habilidadTexto}>
              Programación y desarrollo de software
            </Text>
          </View>

          <View style={styles.habilidad}>
            <Ionicons
              name="color-palette-outline"
              size={21}
              color="#E9D5FF"
            />
            <Text style={styles.habilidadTexto}>
              Diseño de interfaces y creatividad
            </Text>
          </View>

          <View style={styles.habilidad}>
            <Ionicons
              name="people-outline"
              size={21}
              color="#E9D5FF"
            />
            <Text style={styles.habilidadTexto}>
              Trabajo en equipo y comunicación
            </Text>
          </View>

          <View style={styles.habilidad}>
            <Ionicons
              name="bulb-outline"
              size={21}
              color="#E9D5FF"
            />
            <Text style={styles.habilidadTexto}>
              Aprendizaje continuo y solución de problemas
            </Text>
          </View>
        </View>

        {/* OBJETIVO */}
        <View style={styles.objetivo}>
          <Ionicons
            name="trophy-outline"
            size={32}
            color="#E9D5FF"
          />

          <Text style={styles.objetivoTitulo}>
            Mis metas profesionales
          </Text>

          <Text style={styles.objetivoTexto}>
            Quiero continuar aprendiendo, adquirir experiencia
            en el mundo laboral y participar en proyectos
            tecnológicos que me permitan demostrar mis
            capacidades, superar nuevos retos y crecer
            como profesional.
          </Text>
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
    padding: 20,
    borderRadius: 20,
  },

  introTitulo: {
    color: '#7027A0',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },

  introTexto: {
    color: '#444444',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify',
  },

  resumen: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 20,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.35)',
  },

  resumenTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  estadisticas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  estadistica: {
    flex: 1,
    alignItems: 'center',
  },

  numero: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 7,
  },

  etiqueta: {
    color: '#E9D5FF',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
  },

  separador: {
    width: 1,
    height: 65,
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

  habilidades: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 5,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.35)',
  },

  habilidadesTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },

  habilidad: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 12,
  },

  habilidadTexto: {
    color: '#E9D5FF',
    fontSize: 13,
    flex: 1,
    lineHeight: 19,
  },

  objetivo: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 20,
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
    marginTop: 20,
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
