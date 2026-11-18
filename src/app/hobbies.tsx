import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

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

          <Text style={styles.army}>
            ARMY DE CORAZÓN
          </Text>
        </View>

        {/* INTRODUCCIÓN */}
        <View style={styles.introduccion}>
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

        {/* TARJETAS DE PASATIEMPOS */}
        <View style={styles.contenido}>
          {pasatiempos.map((item, index) => (
            <View style={styles.tarjeta} key={index}>
              <Image
                source={item.imagen}
                style={styles.imagen}
                resizeMode="cover"
              />

              <View style={styles.textos}>
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

  army: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 15,
    letterSpacing: 2,
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
    paddingHorizontal: 16,
    paddingTop: 12,
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

  nombre: {
    color: '#7027A0',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descripcion: {
    color: '#444444',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'left',
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
