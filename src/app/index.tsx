
import React, { useRef, useEffect } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Animated,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MiBoton from '../components/MiBoton';

// TARJETA CON ANIMACIÓN AL TOCAR
function TarjetaAnimada({ children, style }: any) {
  const escala = useRef(new Animated.Value(1)).current;

  const animar = (valor: number) => {
    Animated.spring(escala, {
      toValue: valor,
      friction: 5,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale: escala }],
        },
      ]}
    >
      <Pressable
        onPressIn={() => animar(0.98)}
        onPressOut={() => animar(1)}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}

// FRASE FINAL CON ANIMACIÓN CONTINUA
function FraseAnimada({ children, style }: any) {
  const pulso = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animacion = Animated.loop(
      Animated.sequence([
        Animated.timing(pulso, {
          toValue: 1.035,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulso, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    );

    animacion.start();

    return () => animacion.stop();
  }, [pulso]);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale: pulso }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

// ESTRELLAS Y CORAZONES FLOTANTES
const particulas = [
  { emoji: '✨', left: '8%', top: 45 },
  { emoji: '💜', left: '82%', top: 95 },
  { emoji: '⭐', left: '15%', top: 220 },
  { emoji: '💗', left: '88%', top: 280 },
  { emoji: '✨', left: '72%', top: 175 },
  { emoji: '💜', left: '5%', top: 340 },
];

function EstrellasFlotantes() {
  const valores = useRef(
    particulas.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animaciones = valores.map((valor, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 300),
          Animated.timing(valor, {
            toValue: 1,
            duration: 2500 + index * 200,
            useNativeDriver: true,
          }),
          Animated.timing(valor, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animaciones.forEach(animacion => animacion.start());

    return () => {
      animaciones.forEach(animacion => animacion.stop());
    };
  }, [valores]);

  return (
    <View
      pointerEvents="none"
      style={styles.efectosFlotantes}
    >
      {particulas.map((particula, index) => (
        <Animated.Text
          key={index}
          style={[
            styles.particula,
            {
              left: particula.left,
              top: particula.top,
              opacity: valores[index].interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 1, 1, 0],
              }),
              transform: [
                {
                  translateY: valores[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -65],
                  }),
                },
              ],
            },
          ]}
        >
          {particula.emoji}
        </Animated.Text>
      ))}
    </View>
  );
}

export default function Inicio() {
  return (
    <ScrollView
      style={styles.contenedor}
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require('../../assets/bts/fondo-galaxia.jpg')}
        style={styles.fondoContenido}
        imageStyle={styles.imagenFondo}
        resizeMode="cover"
      >

        {/* ENCABEZADO BTS */}
        <ImageBackground
          source={require('../../assets/bts/bts-portada.jpg')}
          style={styles.encabezado}
          imageStyle={styles.imagenEncabezado}
          resizeMode="cover"
        >
          <View style={styles.capaOscura}>

            <Text style={styles.estrellas}>
              ✨ ⭐ 💜 ⭐ ✨
            </Text>

            <View style={styles.marcoFoto}>
              <Image
                source={require('../../assets/perfil.png')}
                style={styles.foto}
                resizeMode="cover"
              />
            </View>

            <Text style={styles.nombre}>
              Mariana Gabriela
            </Text>

            <Text style={styles.apellido}>
              Contreras Romero
            </Text>

            <Text style={styles.profesion}>
              Aprendiz de Análisis y Desarrollo de Software
            </Text>

            <View style={styles.etiqueta}>
              <Text style={styles.etiquetaTexto}>
                ✨ Construyendo mis sueños ✨
              </Text>
            </View>

            <Text style={styles.army}>
              💜 ARMY DE CORAZÓN 💜
            </Text>

          </View>

          {/* PARTÍCULAS FLOTANTES */}
          <EstrellasFlotantes />

        </ImageBackground>

        <View style={styles.contenido}>

          {/* SOBRE MÍ */}
          <View style={styles.seccion}>
            <Text style={styles.tituloSeccion}>
              💜 Sobre mí
            </Text>

            <TarjetaAnimada style={styles.tarjetaTexto}>
              <View style={styles.detalleSuperior}>
                <Ionicons name="heart" size={19} color="#9333EA" />

                <Text style={styles.etiquetaTarjeta}>
                  Un poquito sobre mi personalidad
                </Text>
              </View>

              <Text style={styles.descripcion}>
                Soy una persona creativa, responsable y
                apasionada por la tecnología. Me caracterizo
                por trabajar bien en equipo, escuchar a las
                personas y mantener una actitud positiva
                frente a nuevos retos.

                {'\n\n'}

                Me apasionan la música, el dibujo y el
                aprendizaje de nuevas herramientas
                tecnológicas. Soy ARMY de corazón y encuentro
                en BTS una fuente de inspiración.

                {'\n\n'}

                Me gusta aprender cosas nuevas, desarrollar
                mis habilidades y trabajar constantemente
                para cumplir mis metas personales y
                profesionales.
              </Text>
            </TarjetaAnimada>
          </View>

          {/* FORMACIÓN */}
          <View style={styles.seccion}>
            <Text style={styles.tituloSeccion}>
              🎓 Mi formación
            </Text>

            <TarjetaAnimada style={styles.tarjeta}>
              <View style={styles.iconoTarjeta}>
                <Ionicons
                  name="school"
                  size={30}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.info}>
                <Text style={styles.subtitulo}>
                  Análisis y Desarrollo de Software
                </Text>

                <Text style={styles.detalle}>
                  SENA - Formación en curso
                </Text>

                <Text style={styles.detalleExtra}>
                  Aprendiendo programación, desarrollo de
                  aplicaciones y soluciones tecnológicas.
                </Text>
              </View>
            </TarjetaAnimada>
          </View>

          {/* MIS FORTALEZAS */}
          <View style={styles.seccion}>
            <Text style={styles.tituloSeccion}>
              🌟 Mis fortalezas
            </Text>

            <Text style={styles.introFortalezas}>
              Cualidades que me ayudan a crecer personal y
              profesionalmente cada día.
            </Text>

            <View style={styles.contenedorFortalezas}>

              <View style={styles.tarjetaFortaleza}>
                <View style={styles.iconoFortaleza}>
                  <Ionicons
                    name="bulb"
                    size={27}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nombreFortaleza}>
                  Creatividad
                </Text>

                <Text style={styles.detalleFortaleza}>
                  Me gusta aportar ideas y encontrar soluciones.
                </Text>
              </View>

              <View style={styles.tarjetaFortaleza}>
                <View style={styles.iconoFortaleza}>
                  <Ionicons
                    name="people"
                    size={27}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nombreFortaleza}>
                  Trabajo en equipo
                </Text>

                <Text style={styles.detalleFortaleza}>
                  Disfruto colaborar y aprender de los demás.
                </Text>
              </View>

              <View style={styles.tarjetaFortaleza}>
                <View style={styles.iconoFortaleza}>
                  <Ionicons
                    name="code-slash"
                    size={27}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nombreFortaleza}>
                  Tecnología
                </Text>

                <Text style={styles.detalleFortaleza}>
                  Me interesa aprender nuevas herramientas.
                </Text>
              </View>

              <View style={styles.tarjetaFortaleza}>
                <View style={styles.iconoFortaleza}>
                  <Ionicons
                    name="trophy"
                    size={27}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nombreFortaleza}>
                  Compromiso
                </Text>

                <Text style={styles.detalleFortaleza}>
                  Trabajo con dedicación para cumplir mis metas.
                </Text>
              </View>

            </View>
          </View>

          {/* CONTACTO */}
          <View style={styles.seccion}>
            <Text style={styles.tituloSeccion}>
              📱 Contáctame
            </Text>

            <MiBoton
              titulo="Enviar correo"
              icono="mail"
              tipo="correo"
              destino="mgabrielarova17@gmail.com"
            />

            <MiBoton
              titulo="Llamar"
              icono="call"
              tipo="telefono"
              destino="3151478777"
            />

            <MiBoton
              titulo="Mi GitHub"
              icono="logo-github"
              tipo="web"
              destino="https://github.com/mgabrielarova17"
            />
          </View>

          {/* FRASE FINAL ANIMADA */}
          <FraseAnimada style={styles.frase}>
            <Text style={styles.decoracion}>
              ✨ 💜 ✨
            </Text>

            <Text style={styles.fraseTexto}>
              "Cree en ti y nunca dejes de soñar."
            </Text>

            <Text style={styles.bts}>
              BOR A HAE
            </Text>

            <Text style={styles.armyFinal}>
              BTS ARMY FOREVER 💜
            </Text>
          </FraseAnimada>

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  contenedor: {
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

  // ENCABEZADO BTS
  encabezado: {
    width: '100%',
    minHeight: 440,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  imagenEncabezado: {
    width: '100%',
    height: '100%',
  },

  capaOscura: {
    flex: 1,
    minHeight: 440,
    backgroundColor: 'rgba(39, 10, 65, 0.76)',
    paddingTop: 45,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  estrellas: {
    fontSize: 23,
    marginBottom: 20,
  },

  marcoFoto: {
    width: 174,
    height: 174,
    borderRadius: 90,
    backgroundColor: '#C084FC',
    borderWidth: 5,
    borderColor: '#E9D5FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  foto: {
    width: 154,
    height: 154,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  apellido: {
    fontSize: 21,
    fontWeight: '600',
    color: '#E9D5FF',
    marginTop: 4,
    textAlign: 'center',
  },

  profesion: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
  },

  etiqueta: {
    backgroundColor: '#9333EA',
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 25,
    marginTop: 18,
  },

  etiquetaTexto: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  army: {
    color: '#F3E8FF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 17,
  },

  // EFECTOS FLOTANTES
  efectosFlotantes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 440,
    zIndex: 5,
  },

  particula: {
    position: 'absolute',
    fontSize: 23,
  },

  // CONTENIDO
  contenido: {
    padding: 20,
  },

  seccion: {
    marginBottom: 27,
  },

  tituloSeccion: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },

  // TARJETA SOBRE MÍ
  tarjetaTexto: {
    backgroundColor: 'rgba(255,255,255,0.97)',
    padding: 18,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#C084FC',
    borderLeftWidth: 5,
    borderLeftColor: '#9333EA',
    elevation: 7,
    shadowColor: '#9333EA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
  },

  detalleSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    gap: 8,
  },

  etiquetaTarjeta: {
    color: '#7E22CE',
    fontSize: 13,
    fontWeight: 'bold',
  },

  descripcion: {
    fontSize: 15,
    color: '#51445C',
    lineHeight: 24,
    textAlign: 'justify',
  },

  // TARJETA FORMACIÓN
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.97)',
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#C084FC',
    borderLeftWidth: 5,
    borderLeftColor: '#9333EA',
    gap: 14,
    elevation: 7,
    shadowColor: '#9333EA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
  },

  iconoTarjeta: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#9333EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    flex: 1,
  },

  subtitulo: {
    color: '#581C87',
    fontWeight: 'bold',
    fontSize: 14,
  },

  detalle: {
    color: '#9333EA',
    fontSize: 13,
    marginTop: 6,
    fontWeight: '600',
  },

  detalleExtra: {
    color: '#51445C',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },

  // MIS FORTALEZAS
  introFortalezas: {
    color: '#E9D5FF',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
  },

  contenedorFortalezas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },

  tarjetaFortaleza: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.97)',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#C084FC',
    elevation: 5,
    shadowColor: '#9333EA',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  iconoFortaleza: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#9333EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  nombreFortaleza: {
    color: '#581C87',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  detalleFortaleza: {
    color: '#51445C',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },

  // FRASE FINAL
  frase: {
    backgroundColor: 'rgba(243,232,255,0.97)',
    padding: 25,
    borderRadius: 22,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1.5,
    borderColor: '#C084FC',
    elevation: 7,
    shadowColor: '#9333EA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
  },

  decoracion: {
    fontSize: 22,
    marginBottom: 12,
  },

  fraseTexto: {
    color: '#6B21A8',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '600',
  },

  bts: {
    color: '#9333EA',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 24,
    letterSpacing: 3,
  },

  armyFinal: {
    color: '#6B21A8',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 12,
    letterSpacing: 2,
  },

});
