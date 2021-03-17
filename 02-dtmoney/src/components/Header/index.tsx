import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

import { IHeaderProps } from "./@interfaces";

export function Header({ onOpenNewTrnsactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTrnsactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
