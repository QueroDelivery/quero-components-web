import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, IconDefinition } from '@fortawesome/pro-solid-svg-icons';

import {
    Button,
    TextFirst,
    TextEnd,
    Icon,
    Amount,
    Notification,
} from './styles';
import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textEnd?: string;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secundary?: boolean;
    notification?: boolean;
    amount?: number;
    backPurple?: boolean;
    height?: number;
    width?: number;
    icon?: IconDefinition;
    colorIcon?: string;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    tertiary?: boolean;
    size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
    rectangular?: boolean;
}

const ButtonMain: React.FC<ButtonProps> = ({
    textFirst,
    textEnd,
    firstStrong,
    notStrong,
    strong,
    loading,
    secundary,
    backPurple,
    children,
    notification,
    amount,
    height,
    width,
    icon,
    colorIcon,
    noBorder,
    colorText,
    colorBackground,
    tertiary,
    size,
    rectangular,
    ...rest
}) => {
    if (notification) {
        return (
            <Notification {...rest}>
                {loading ? (
                    <Loader size="tiny" />
                ) : children ? (
                    children
                ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: '50%',
                                    padding: 10,
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon>
                                        <FontAwesomeIcon
                                            icon={faBell}
                                            size="lg"
                                            color={colors.brand30}
                                        />
                                    </Icon>
                                    <span>notificações</span>
                                </div>
                                <Amount>{amount}</Amount>
                            </div>
                        )}
            </Notification>
        );
    } else {
        return (
            <Button
                {...rest}
                secundary={secundary}
                backPurple={backPurple}
                height={height}
                width={width}
                icon={icon}
                noBorder={noBorder}
                colorText={colorText}
                colorBackground={colorBackground}
                tertiary={tertiary}
                size={size}
                rectangular={rectangular}
            >
                {loading ? (
                    <Loader size="tiny" />
                ) : children ? (
                    children
                ) : (
                            <div>
                                <TextFirst
                                    firstStrong={firstStrong}
                                    strong={strong}
                                    notStrong={notStrong}
                                    colorText={colorText}
                                    tertiary={tertiary}
                                    size={size}
                                >
                                    {`${textFirst} `}
                                </TextFirst>
                                <TextEnd
                                    firstStrong={firstStrong}
                                    strong={strong}
                                    notStrong={notStrong}
                                    colorText={colorText}
                                    tertiary={tertiary}
                                    size={size}
                                >
                                    {textEnd}
                                </TextEnd>
                                {icon && (
                                    <React.Fragment>
                                        <FontAwesomeIcon
                                            icon={icon}
                                            color={
                                                colorIcon ? colorIcon : colors.brand10
                                            }
                                            size={'lg'}
                                            style={{marginLeft: 10}}
                                        />
                                    </React.Fragment>
                                )}
                            </div>
                        )}
            </Button>
        );
    }
};

export default ButtonMain;
