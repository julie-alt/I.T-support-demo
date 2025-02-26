import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardImg,
  CardTitle,
  Description,
} from "./styles/CardStyle";
import cardImg1 from "../Images/card1.jpg";
import cardImg2 from "../Images/card2.jpg";
import cardImg3 from "../Images/card3.png";
import TextBanner from "./TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <div>
      <TextBanner title={"Our Blogs"} subtitle={"Recent News"} />
      <Container>
        <Card>
          <CardContent $padding={"0.5%"}>
            <CardImg src={cardImg1} />
            <CardTitle>ttt</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button>Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent $padding={"0.5%"}>
            <CardImg src={cardImg2} />
            <CardTitle>ttt</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button>Read more...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent $padding={"0.5%"}>
            <CardImg src={cardImg3} />
            <CardTitle>ttt</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate
            </Description>
            <Button>Read more...</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Blogs;
