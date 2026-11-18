
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const pasatiempos = [
  {
    titulo: 'BTS 💜',
    descripcion:
      'Mi grupo favorito. BTS representa para mí inspiración, alegría y motivación. Me encanta escuchar sus canciones, conocer sus historias y disfrutar de todo su contenido. ¡ARMY de corazón!',
    imagen: require('../../assets/hobbies/bts.jpg'),
  },
  {
    titulo: 'Escuchar música 🎧',
    descripcion:
      'La música es una parte muy especial de mi vida. Me permite relajarme, expresar mis emociones y disfrutar de cada momento. Me encanta descubrir canciones nuevas y escuchar a mis artistas favoritos.',
    imagen: require('../../assets/hobbies/musica.jpg'),
  },
  {
    titulo: 'Ver doramas 🌸',
    descripcion:
      'Disfruto ver doramas y conocer historias llenas de emociones, romance, amistad y aventuras. Me gusta descubrir nuevos personajes y aprender un poco más sobre la cultura coreana.',
    imagen: require('../../assets/hobbies/doramas.jpg'),
  },
  {
    titulo: 'Tecnología 💻',
    descripcion:
      'Me apasiona aprender sobre tecnología, programación y desarrollo de software. Disfruto descubrir nuevas herramientas, resolver problemas y crear proyectos que me permitan desarrollar mis habilidades.',
    imagen: require('../../assets/hobbies/tecnologia.jpg'),
  },
  {
    titulo: 'Dibujo y creatividad 🎨',
    descripcion:
      'Me gusta dibujar, imaginar y expresar mis ideas mediante el arte. Es una forma de explorar mi creatividad, experimentar con diferentes estilos y transformar mis pensamientos en algo especial.',
    imagen: require('../../assets/hobbies/dibujo.jpg'),
  },
];

export default function Hobbies() {
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
          <Text style={styles.emoji}>💜 ✨ 💜</Text>

          <Text style={styles.titulo}>
            Mis pasatiempos
          </Text>

          <Text style={styles.subtitulo}>
            Las cosas que alegran mis días y hacen especial mi mundo.
          </Text>

          <View style={styles.etiquetaArmy}>
            <Ionicons
              name="heart"
              size={16}
              color="#FFFFFF"
            />
            <Text style={styles.army}>
              ARMY DE CORAZÓN
            </Text>
          </View>
        </View>

        {/* INTRODUCCIÓN */}
        <View style={styles.introduccion}>
          <Ionicons
            name="sparkles-outline"
            size={30}
            color="#7027A0"
          />

          <Text style={styles.introTitulo}>
            Un poquito sobre mí ✨
          </Text>

          <Text style={styles.introTexto}>
            En mi tiempo libre disfruto realizar actividades
            que me permiten aprender, divertirme y expresar
            mi personalidad. Cada uno de mis pasatiempos
            representa algo especial en mi vida.
          </Text>
        </View>

        {/* RESUMEN */}
        <View style={styles.resumen}>
          <Text style={styles.resumenTitulo}>
            Mi mundo en cinco intereses
          </Text>

          <View style={styles.estadisticas}>
            <View style={styles.estadistica}>
              <Ionicons
                name="heart-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>05</Text>
              <Text style={styles.etiqueta}>
                Pasatiempos
              </Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Ionicons
                name="bulb-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>∞</Text>
              <Text style={styles.etiqueta}>
                Ideas nuevas
              </Text>
            </View>

            <View style={styles.separador} />

            <View style={styles.estadistica}>
              <Ionicons
                name="happy-outline"
                size={27}
                color="#E9D5FF"
              />
              <Text style={styles.numero}>100%</Text>
              <Text style={styles.etiqueta}>
                Personalidad
              </Text>
            </View>
          </View>
        </View>

        {/* TARJETAS DE PASATIEMPOS */}
        <View style={styles.contenido}>
          <View style={styles.tituloSeccion}>
            <Ionicons
              name="heart"
              size={23}
              color="#E9D5FF"
            />

            <Text style={styles.tituloTarjetas}>
              Las cosas que me gustan
            </Text>
          </View>

          {pasatiempos.map((item, index) => (
            <View style={styles.tarjeta} key={item.titulo}>
              <View style={styles.imagenContenedor}>
                <Image
                  source={item.imagen}
                  style={styles.imagen}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.textos}>
                <Text style={styles.numeroTarjeta}>
                  INTERÉS {String(index + 1).padStart(2, '0')}
                </Text>

                <Text style={styles.nombre}>
                  {item.titulo}
                </Text>

                <Text style={styles.descripcion}>
                  {item.descripcion}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* REFLEXIÓN */}
        <View style={styles.reflexion}>
          <Ionicons
            name="flower-outline"
            size={32}
            color="#E9D5FF"
          />

          <Text style={styles.reflexionTitulo}>
            Lo que mis pasatiempos significan para mí
          </Text>

          <Text style={styles.reflexionTexto}>
            Cada actividad me permite descubrir algo nuevo
            de mí misma. Algunas me inspiran, otras me ayudan
            a relajarme y otras despiertan mi creatividad.
            Todas forman parte de lo que soy y de lo que
            quiero seguir construyendo.
          </Text>
        </View>

        {/* FRASE FINAL */}
        <View style={styles.frase}>
          <Text style={styles.fraseTexto}>
            Nunca dejes de hacer aquello que te hace feliz,
            de aprender cosas nuevas y de perseguir tus sueños.
          </Text>

          <Text style={styles.bts}>
            BOR A HAE 💜
          </Text>

          <Text style={styles.corazon}>
            FOREVER ARMY ✨
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
    backgroundColor: 'rgba(65, 20, 110, 0.92)',
    padding: 25,
    paddingTop: 55,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 32,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#E9D5FF',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 20,
  },

  etiquetaArmy: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(168, 85, 247, 0.45)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 15,
    gap: 7,
  },

  army: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 12,
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
    paddingHorizontal: 16,
    paddingTop: 25,
  },

  tituloSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 9,
  },

  tituloTarjetas: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 18,
    padding: 10,
    marginVertical: 9,
    minHeight: 145,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.5)',
  },

  imagenContenedor: {
    borderRadius: 15,
    padding: 3,
    backgroundColor: '#E9D5FF',
  },

  imagen: {
    width: 110,
    height: 125,
    borderRadius: 13,
    backgroundColor: '#E9D5FF',
  },

  textos: {
    flex: 1,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  numeroTarjeta: {
    color: '#A855F7',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },

  nombre: {
    color: '#7027A0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descripcion: {
    color: '#444444',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'left',
  },

  reflexion: {
    backgroundColor: 'rgba(65, 20, 110, 0.88)',
    marginHorizontal: 18,
    marginTop: 15,
    padding: 22,
    borderRadius: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(216, 180, 254, 0.35)',
  },

  reflexionTitulo: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },

  reflexionTexto: {
    color: '#E9D5FF',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },

  frase: {
    backgroundColor: 'rgba(243,232,255,0.96)',
    marginHorizontal: 18,
    marginTop: 18,
    padding: 22,
    borderRadius: 20,
    alignItems: 'center',
  },

  fraseTexto: {
    color: '#6B21A8',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 22,
  },

  bts: {
    color: '#9333EA',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 12,
  },

  corazon: {
    color: '#7027A0',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 8,
  },
});
