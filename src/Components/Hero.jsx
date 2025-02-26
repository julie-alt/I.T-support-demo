import styled from "styled-components";
import heroImg from "../Images/hero.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  padding-top: 5%;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 60%;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.textDark};
  width: 70%;
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 500px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: 5px;
  padding: 15px 20px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.primary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid blue;
    background-position: left bottom;
  }
`;

const Hero = () => {
  return (
    <>
      <Container>
        <Left>
          <Title>
            IT-Management - IT Support and IT-Services for everyone!
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            commodo ligula eget dolor.
          </Description>
          <ButtonContainer>
            <Button>About Us</Button>
            <Button>Contact Us</Button>
          </ButtonContainer>
        </Left>
        <Right>
          <Image src={heroImg} />
        </Right>
      </Container>
    </>
  );
};

export default Hero;
