import React, { useState } from "react";
import { IDropdown } from "@interfaces/IDropdown.interface";
import { 
  Container,
  Header,
  OptionsContainer,
  HeaderOption,
  Option,
  Icon,
  ScreenLocker
} from "./styles";

function Dropdown<T = string>({options, onChange}: IDropdown<T>){
  const [open, setOpen] = useState(false);
  const onClick = (uid: T) => {
    options.map(option => option.active = option.uid === uid);
    onChange(options);
    setOpen(false);
  };
  const [placeHolder, ..._options] = options;
  const close = () => setOpen(false);
  return <>
    <Container>
      <Header>
        <HeaderOption>
          {options.find(option => option.active)?.label || placeHolder?.label}
        </HeaderOption>
      </Header>
      {
        open && <OptionsContainer>
          {_options.map(({uid, label}) => (
            <Option key={`${uid}`} onClick={() => onClick(uid)}>{label}</Option>)
          )}
        </OptionsContainer>
      }
      <input type="checkbox" onChange={() => setOpen(!open)} checked={open} />
      <Icon className={`icon-chevron ${open ? "turn-down" : null}`} />
    </Container>
    { open && <ScreenLocker onClick={close}/> }
  </>;
}

export default Dropdown;
