import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";

import { Container, Form } from "./styles";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da Pessoas"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A"/>
    </Container>
  )
}