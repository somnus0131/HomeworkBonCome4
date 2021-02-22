import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const SuGeButton = props => {
    return (
        <TouchableOpacity
            style={{
                borderColor: props.BdColor, borderWidth: 2,
                paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20,
                margin: 5, borderRadius: 60, backgroundColor: props.BgColor
            }}
            OnPress={props.ButtonOnPress}>
            <Text style={{ fontSize: 30, color: props.TextColor }}>{props.ButtonText}</Text>
        </TouchableOpacity>
    )
}
SuGeButton.prototype = {
    BdColor: PropTypes.string,
    BgColor: PropTypes.string,
    ButtonOnPress: PropTypes.func,
    TextColor: PropTypes.string,
}

SuGeButton.defaultProps = {
    BdColor: '#000000',
    BgColor: '#FCFCFC',
    TextColor: '#000000',
    ButtonText: 'SuGeButton!!',
}

export default SuGeButton;

