import styled from "styled-components";
import avatarImg1 from "../Images/staff1.jpg";
import avatarImg2 from "../Images/staff2.jpg";
import avatarImg3 from "../Images/staff3.jpg";
import avatarImg4 from "../Images/staff4.jpg";
import TextBanner from "./TextBanner";

const Container = styled.div`
  padding: 5%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 21.875rem;
  width: 17.5rem;
  margin: 1%;
  display: flex;
  flex-direction: column;
  /* align-content: flex-start; */
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 10px -2px #ddbfbf;
  box-shadow: 0px 0px 10px -2px #857676;
`;

const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`;

const Team = () => {
  return (
    <div>
      <Container>
        <TextBanner title={"Work union"} subtitle={"Our Team"} />
        <Wrapper>
          <Card>
            <CardImg src={avatarImg1} />
            <TextWrapper>
              <MemberName>name</MemberName>
              <TeamPosition>position</TeamPosition>
            </TextWrapper>
          </Card>
          <Card>
            <CardImg src={avatarImg2} />
            <TextWrapper>
              <MemberName>name</MemberName>
              <TeamPosition>position</TeamPosition>
            </TextWrapper>
          </Card>
          <Card>
            <CardImg src={avatarImg3} />
            <TextWrapper>
              <MemberName>name</MemberName>
              <TeamPosition>position</TeamPosition>
            </TextWrapper>
          </Card>
          <Card>
            <CardImg src={avatarImg4} />
            <TextWrapper>
              <MemberName>name</MemberName>
              <TeamPosition>position</TeamPosition>
            </TextWrapper>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Team;
