import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import TabBar from './TabBar';

export class TabView extends React.Component {

    state = { active: 0 };

    @autobind
    onPressItem(id) {
        const active = this.props.tabs.findIndex(tab => tab.id === id);
        this.setState({ active });
    }

    render() {
        const { tabs } = this.props;
        const { active } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.body} children={tabs[active].content} />
                <TabBar active={active} tabs={tabs} onPressTabItem={this.onPressItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    body: {
        flex: 1
    }
});