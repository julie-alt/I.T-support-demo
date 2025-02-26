import sectionOneImg from "../../Images/section1.png";
import {
  Container,
  Description,
  Header,
  Image,
  Left,
  List,
  ListItem,
  Right,
  Title,
  Wrapper,
} from "../styles/SectionStyle";

const InfoSectionOne = () => {
  return (
    <div>
      <Container>
        <Wrapper direction={"row"}>
          <Right>
            <Image src={sectionOneImg} />
          </Right>
          <Left>
            <Title>Why Choose Us?</Title>
            <Header>IT Lifecycle Management All in One Place</Header>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </Description>
            <List>
              <ListItem>Transparent advice</ListItem>
              <ListItem>Volume bundling</ListItem>
              <ListItem>Global IT sourcing</ListItem>
              <ListItem>International deliveries</ListItem>
            </List>
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default InfoSectionOne;
