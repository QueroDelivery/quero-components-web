import "../../styles/default.scss";

import React, { ButtonHTMLAttributes } from "react";

import { Button, TextFirst, TextEnd } from "./styles";
import Loader from "../Loader/Loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst: string;
    textEnd?: string;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secundary?: boolean;
    backPurple?: boolean;
    chield?: React.FunctionComponent;
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
    ...rest
}) => {
    return (
        <Button {...rest} secundary={secundary} backPurple={backPurple}>
            {loading ? (
                <Loader size='tiny'/>
            ) : chield ? (
                chield
            ) : (
                <div>
                    <TextFirst
                        firstStrong={firstStrong}
                        strong={strong}
                        notStrong={notStrong}
                    >
                        {textFirst}
                    </TextFirst>
                    <TextEnd
                        firstStrong={firstStrong}
                        strong={strong}
                        notStrong={notStrong}
                    >
                        {textEnd}
                    </TextEnd>
                </div>
            )}
        </Button>
    );
};

export default ButtonMain;
