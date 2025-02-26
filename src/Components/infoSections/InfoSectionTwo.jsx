import styled from "styled-components";
import sectionImg1 from "../../Images/laptopDark.jpg";

const Container = styled.div`
  height: ${({ Height }) => Height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${({ $sectionimg }) => $sectionimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: 10%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;
const Description = styled.p`
  color: white;
  width: 40%;
  font-weight: lighter;
  font-size: 25px;
`;

const InfoSectionTwo = () => {
  return (
    <div>
      <Container $sectionimg={sectionImg1}>
        <TextWrapper>
          <Title>Anywhere Workspace!</Title>
          <Description>
            Enable any employee to work anywhere, anytime with seamless employee
            experiences
          </Description>
          <Description>
            Leverage your infrastructure across any app, any cloud and any
            device for intrinsic security at every layer
          </Description>
        </TextWrapper>
      </Container>
    </div>
  );
};

export default InfoSectionTwo;
