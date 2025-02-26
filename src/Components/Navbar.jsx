import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 20vh;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: 1.875rem;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Button = styled.div`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid white;
  color: ${(props) => props.theme.colors.bgDefault};
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgLight};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 2;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Left>
          <Logo>IT Support</Logo>
        </Left>
        <Center>
          <Menu>
            <MenuItem href="#">Home</MenuItem>
            <MenuItem href="#">Services</MenuItem>
            <MenuItem href="#">About</MenuItem>
            <MenuItem href="#">Contact</MenuItem>
            <MenuItem href="#">Blog</MenuItem>
          </Menu>
        </Center>
        <Right>
          <Button>Call us Now!</Button>
        </Right>
      </Container>
    </div>
  );
};

export default Navbar;
