
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function TarjetaHobby({
  titulo,
  descripcion,
  detalle,
  imagen,
}: {
  titulo: string;
  descripcion: string;
  detalle: string;
  imagen: any;
}) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      activeOpacity={0.8}
      onPress={() => Alert.alert(titulo, detalle)}
    >
      <Image
        source={imagen}
        style={styles.imagen}
        resizeMode="contain"
      />

      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginVertical: 10,
    minHeight: 135,
    elevation: 5,
  },
  imagen: {
    width: 110,
    height: 115,
    borderRadius: 12,
    backgroundColor: '#E9D5FF',
  },
  contenido: {
    flex: 1,
    paddingHorizontal: 12,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#7027A0',
    marginBottom: 7,
  },
  descripcion: {
    fontSize: 13,
    color: '#444444',
    lineHeight: 19,
  },
});
