import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from "./styles/CardStyle";
import TextBanner from "./TextBanner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title={"What we offer"} subtitle={"Our Services"} />
      <Container>
        <Card>
          <CardContent $padding={"5%"}>
            <CardTitle>Training Courses</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button href="#">Read more</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent $padding={"5%"}>
            <CardTitle>Service Desk</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button href="#">Read more</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent $padding={"5%"}>
            <CardTitle>Data Recovery</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button>Read more</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
