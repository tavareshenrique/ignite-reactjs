import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

import { IHeaderProps } from "./@interfaces";

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
