import React, { FC } from 'react';

import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {}

const Button: FC<Props> = ({ ...props }) => {
  return (
    <TouchableOpacity>
      <Text>asd</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Button);
