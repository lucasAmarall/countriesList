import React, { ChangeEvent } from "react";
import { IInput } from "@interfaces/IInput.interface";
import { Container, Icon, Loader, IconContainer } from "./styles";

const Input = ({onChange, iconName, isLoading, ...props}: IInput) => {
  const _onChange = (event: Event & ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <Container>
    <IconContainer>
      {isLoading ? <Loader /> : <Icon className={iconName} />}
    </IconContainer>
    <input {...props} onChange={_onChange}  />
  </Container>;
};

export default Input;
