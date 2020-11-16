import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  indicatorWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 12,
    width: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 6,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWrapper: {
    paddingRight: 16,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e5e9',
  },
});

class PickerModalItem extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    isLast: PropTypes.bool,
    itemStyles: PropTypes.any
  };

  static defaultProps = {
    isLast: false,
  };

  render() {
    const {
      onSelect, selected, label, isLast, itemStyles
    } = this.props;
    return (
      <React.Fragment>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onSelect}
        >
          <View style={[style.itemWrapper, { backgroundColor: itemStyles.background }]}>
            <View style={style.indicatorWrapper}>
              <View style={[style.indicator, { backgroundColor: selected ? itemStyles.indicator.color : null, borderColor: itemStyles.indicator.borderColor }]} />
            </View>
            <View style={style.labelWrapper}>
              <Text style={[style.label, {color: itemStyles.label.color } ]}>
                {label}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {!isLast ? (
          <View style={style.separator} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default PickerModalItem;
