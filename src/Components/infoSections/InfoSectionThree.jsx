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
import sectionThreeImg from "../../Images/section3.png";
const InfoSectionThree = () => {
  return (
    <div>
      <Container>
        <Wrapper direction={"row-reverse"}>
          <Right>
            <Image src={sectionThreeImg} />
          </Right>
          <Left>
            <Title>WHY TRUST US?</Title>
            <Header>
              Software Asset Management(SAM) / Software Lifecycle Management{" "}
            </Header>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </Description>
            <List>
              <ListItem>Guarantee Processing</ListItem>
              <ListItem>Returns Programme</ListItem>
              <ListItem>Certified data deletion</ListItem>
              <ListItem>Connection to shop systems</ListItem>
            </List>
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default InfoSectionThree;
