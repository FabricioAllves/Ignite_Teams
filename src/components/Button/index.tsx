import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStylePropps } from './styles'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylePropps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {

  return (
    <Container
      type={type}
      {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}