import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: white;
  background-color: black;
  width: 100%;
  margin-top: 5%;
  height: 40%;
`;
const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

const Description = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  margin-top: 3%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const MenuBox = styled.div`
  margin-top: 3%;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  flex-direction: column;
  cursor: pointer;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: gray;
  color: white;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <div>
      <Container>
        <Description>
          <Title>About Us</Title>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate
        </Description>
        <MenuBox>
          <Title>Our Services</Title>
          <Menu>
            <MenuItem href="#">Training Courses</MenuItem>
            <MenuItem href="#">Service Desk</MenuItem>
            <MenuItem href="#">Proactive Services</MenuItem>
            <MenuItem href="#">User Suport</MenuItem>
            <MenuItem href="#">24/7 Services</MenuItem>
          </Menu>
        </MenuBox>
        <MenuBox>
          <Title>Our Policies</Title>
          <Menu>
            <MenuItem href="#">Privacy Policy</MenuItem>
            <MenuItem href="#">Data Policy</MenuItem>
          </Menu>
        </MenuBox>
      </Container>

      <CopyRight>&copy; 2025 IT Support - All Rights Reserved. </CopyRight>
    </div>
  );
};

export default Footer;
