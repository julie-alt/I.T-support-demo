import sectionImg2 from "../../Images/bg2.jpg";
import styled from "styled-components";

const Container = styled.div`
  height: 18.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${({ $sectionimg }) => $sectionimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: 10%;
`;

const Card = styled.div`
  width: 15.625rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Number = styled.div`
  font-weight: bold;
  font-size: 3.125rem;
  color: ${(props) => props.theme.colors.text};
`;
const Subtitle = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
`;

const InfoSectionFour = () => {
  return (
    <div>
      <Container $sectionimg={sectionImg2}>
        <Card>
          <CardContent>
            <Number>1M+</Number>
            <Subtitle>Subscribers</Subtitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Number>1000+</Number>
            <Subtitle>Complete Projects</Subtitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Number>80K+</Number>
            <Subtitle>5 Star Rating</Subtitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Number>9000+</Number>
            <Subtitle>Likes</Subtitle>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoSectionFour;
