import '../../styles/default.css';

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
    amount?: string;
    backPurple?: boolean;
    height?: number;
    width?: number;
    icon?: IconDefinition;
    colorIcon?: string;
    noBorder?: boolean;
    colorText?: string;
    chield?: React.ReactNode;
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
    chield,
    notification,
    amount,
    height,
    width,
    icon,
    colorIcon,
    noBorder,
    colorText,
    ...rest
}) => {
    if (notification) {
        return (
            <Notification {...rest}>
                {loading ? (
                    <Loader size="tiny" />
                ) : chield ? (
                    chield
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
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
            >
                {loading ? (
                    <Loader size="tiny" />
                ) : chield ? (
                    chield
                ) : (
                    <div>
                        <TextFirst
                            firstStrong={firstStrong}
                            strong={strong}
                            notStrong={notStrong}
                            colorText={colorText}
                        >
                            {`${textFirst} `}
                        </TextFirst>
                        <TextEnd
                            firstStrong={firstStrong}
                            strong={strong}
                            notStrong={notStrong}
                            colorText={colorText}
                        >
                            {textEnd}
                        </TextEnd>
                        {icon && (
                            <>
                                <FontAwesomeIcon
                                    icon={icon}
                                    color={
                                        colorIcon ? colorIcon : colors.brand10
                                    }
                                    size={'lg'}
                                />
                            </>
                        )}
                    </div>
                )}
            </Button>
        );
    }
};

export default ButtonMain;
