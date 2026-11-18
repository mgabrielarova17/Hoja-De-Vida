
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  descripcion,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View
      style={[
        styles.tarjeta,
        enCurso && styles.tarjetaActual,
      ]}
    >
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>{titulo}</Text>

        {enCurso && (
          <View style={styles.insignia}>
            <Text style={styles.textoInsignia}>
              En Curso
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.institucion}>
        {institucion}
      </Text>

      <Text style={styles.periodo}>
        {periodo}
      </Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 18,
    marginVertical: 9,
    borderWidth: 1,
    borderColor: '#E9D5FF',
    elevation: 3,
  },
  tarjetaActual: {
    backgroundColor: '#F3E8FF',
    borderColor: '#A855F7',
    borderWidth: 2,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#581C87',
    flexShrink: 1,
  },
  insignia: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  textoInsignia: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  institucion: {
    fontSize: 15,
    color: '#7E22CE',
    marginTop: 10,
    fontWeight: '600',
  },
  periodo: {
    fontSize: 13,
    color: '#9333EA',
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#4B4453',
    marginTop: 10,
    lineHeight: 21,
  },
});
