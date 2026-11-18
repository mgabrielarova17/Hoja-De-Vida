import React, { useRef, useState } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Alert,
  Platform,
  View,
  Modal,
  Animated,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

interface MiBotonProps {
  titulo: string;
  icono: keyof typeof Ionicons.glyphMap;
  tipo: 'correo' | 'telefono' | 'web';
  destino: string;
}

export default function MiBoton({
  titulo,
  icono,
  tipo,
  destino,
}: MiBotonProps) {

  const [modalVisible, setModalVisible] = useState(false);
  const escala = useRef(new Animated.Value(1)).current;

  const animar = (valor: number) => {
    Animated.spring(escala, {
      toValue: valor,
      friction: 5,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  const abrirEnlace = async () => {
    if (tipo === 'telefono') {
      setModalVisible(true);
      return;
    }

    let url = '';

    if (tipo === 'correo') {
      if (Platform.OS === 'web') {
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(destino)}`;
      } else {
        url = `mailto:${destino}`;
      }
    }

    if (tipo === 'web') {
      url = destino;
    }

    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert(
        'No se pudo abrir',
        'No encontramos una aplicación disponible.'
      );
    }
  };

  const copiarNumero = async () => {
    try {
      await Clipboard.setStringAsync(destino);

      if (Platform.OS === 'web') {
        window.alert('¡Número copiado correctamente! 💜');
      } else {
        Alert.alert(
          '¡Copiado!',
          'El número se copió correctamente. 💜'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo copiar el número.');
    }
  };

  return (
    <>
      {/* BOTÓN ANIMADO */}
      <Animated.View
        style={{
          transform: [{ scale: escala }],
        }}
      >
        <TouchableOpacity
          style={styles.boton}
          activeOpacity={0.9}
          onPress={abrirEnlace}
          onPressIn={() => animar(0.95)}
          onPressOut={() => animar(1)}
        >
          <Ionicons
            name={icono}
            size={23}
            color="#FFFFFF"
          />

          <Text style={styles.texto}>
            {titulo}
          </Text>

          <Ionicons
            name="arrow-forward-circle"
            size={20}
            color="#E9D5FF"
          />
        </TouchableOpacity>
      </Animated.View>

      {/* VENTANA DE CONTACTO */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.ventana}>

            <TouchableOpacity
              style={styles.cerrar}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons
                name="close-circle"
                size={30}
                color="#C084FC"
              />
            </TouchableOpacity>

            <View style={styles.decoracion}>
              <Text style={styles.estrellas}>
                ✨ ⭐ 💜 ⭐ ✨
              </Text>
            </View>

            <View style={styles.iconoTelefono}>
              <Ionicons
                name="call"
                size={35}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.tituloModal}>
              ¡Contáctame! 💜
            </Text>

            <Text style={styles.subtituloModal}>
              Puedes comunicarte conmigo al:
            </Text>

            <View style={styles.numeroContenedor}>
              <Ionicons
                name="phone-portrait"
                size={23}
                color="#9333EA"
              />

              <Text style={styles.numero}>
                {destino.replace(
                  /(\d{3})(\d{3})(\d+)/,
                  '$1 $2 $3'
                )}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.botonCopiar}
              activeOpacity={0.8}
              onPress={copiarNumero}
            >
              <Ionicons
                name="copy-outline"
                size={21}
                color="#FFFFFF"
              />

              <Text style={styles.textoCopiar}>
                Copiar número
              </Text>
            </TouchableOpacity>

            <Text style={styles.mensajeFinal}>
              ✨ ¡Será un gusto atenderte! ✨
            </Text>

            <Text style={styles.army}>
              BTS ARMY FOREVER 💜
            </Text>

          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  boton: {
    backgroundColor: '#8B5CF6',
    padding: 16,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 7,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#C084FC',
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },

  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(15, 5, 30, 0.82)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  ventana: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#24103D',
    borderRadius: 28,
    padding: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A855F7',
    elevation: 15,
  },

  cerrar: {
    alignSelf: 'flex-end',
    marginBottom: 5,
  },

  decoracion: {
    marginBottom: 15,
  },

  estrellas: {
    fontSize: 20,
  },

  iconoTelefono: {
    width: 78,
    height: 78,
    borderRadius: 40,
    backgroundColor: '#9333EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    elevation: 7,
  },

  tituloModal: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtituloModal: {
    color: '#D8B4FE',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 18,
  },

  numeroContenedor: {
    backgroundColor: '#F3E8FF',
    width: '100%',
    padding: 17,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 18,
  },

  numero: {
    color: '#581C87',
    fontSize: 23,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  botonCopiar: {
    backgroundColor: '#9333EA',
    width: '100%',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    elevation: 4,
  },

  textoCopiar: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  mensajeFinal: {
    color: '#E9D5FF',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 22,
  },

  army: {
    color: '#C084FC',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 12,
  },

});
