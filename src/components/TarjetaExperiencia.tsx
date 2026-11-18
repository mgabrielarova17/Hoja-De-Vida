
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.icono}>
        <Text style={styles.iconoTexto}>💜</Text>
      </View>

      <Text style={styles.cargo}>{cargo}</Text>

      <Text style={styles.empresa}>{empresa}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <View style={styles.divisor} />

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E9D5FF',
    elevation: 3,
  },
  icono: {
    backgroundColor: '#F3E8FF',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconoTexto: {
    fontSize: 21,
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#581C87',
  },
  empresa: {
    fontSize: 15,
    color: '#9333EA',
    marginTop: 6,
    fontWeight: '600',
  },
  periodo: {
    fontSize: 13,
    color: '#A78BFA',
    marginTop: 5,
  },
  divisor: {
    height: 1,
    backgroundColor: '#E9D5FF',
    marginVertical: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#4B4453',
    lineHeight: 21,
  },
});
