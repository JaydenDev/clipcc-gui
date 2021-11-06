/**
 * @fileoverview
 * 设置窗口中的编译器选项组件
 * @author SinanGentoo
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import {updateSetting, getSetting} from '../../reducers/settings';
import styles from './layout-setting.css';

const messages = defineMessages({
    label: {
        defaultMessage: 'Compiler',
        description: 'Label of Compiler',
        id: 'gui.settingsModal.compiler.label'
    },
    indev: {
        defaultMessage: 'This feature is still in the early stages of development, and it may disrupt the editor experience. Are you sure you want to open it anyway?',
        description: 'Label of in development',
        id: 'gui.settingsModal.indev.label'
    },
    enabled: {
        defaultMessage: 'Enabled',
        description: 'Label of Enabled',
        id: 'gui.settingsModal.compiler.enabled'
    },
    disabled: {
        defaultMessage: 'Disabled',
        description: 'Label of Disabled',
        id: 'gui.settingsModal.compiler.disabled'
    }
});

const CompilerSetting = props => (
    <Box
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        style={{display: 'flex'}}
    >
        <p className={classNames(
            styles.text
        )}>
            {props.intl.formatMessage(messages.label)}
        </p>
        <Box
            alignContent="center"
            alignItems="center"
            style={{display: 'flex'}}
        >
            <span
                className={classNames(
                    styles.switchLeft,
                    styles.switch,
                    props.compiler === 'on' ? styles.active : null
                )}
                onClick={() =>{
                    if(window.confirm(props.intl.formatMessage(messages.indev))) {
                        props.onEnable();
                        props.setCompiler(true);
                    }
                }}
            >
                <div>{props.intl.formatMessage(messages.enabled)}</div>
            </span>
            <span
                className={classNames(
                    styles.switchRight,
                    styles.switch,
                    props.compiler === 'off' ? styles.active : ''
                )}
                onClick={() => {
                    props.onDisable();
                    props.setCompiler(false);
                }}
            >
                <div>{props.intl.formatMessage(messages.disabled)}</div>
            </span>
        </Box>
    </Box>
);

CompilerSetting.propTypes = {
    intl: intlShape.isRequired,
    compiler: PropTypes.string.isRequired,
    onEnable: PropTypes.func.isRequired,
    onDisable: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    compiler: getSetting(state, 'compiler')
});

const mapDispatchToProps = dispatch => ({
    onEnable: () => dispatch(updateSetting('compiler', 'on')),
    onDisable: () => dispatch(updateSetting('compiler', 'off'))
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(CompilerSetting));
