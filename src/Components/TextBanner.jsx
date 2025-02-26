import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
`;
const Subtitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 2px;
  color: ${(props) => props.theme.colors.primary};
`;

const TextBanner = ({ title, subtitle }) => {
  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </div>
  );
};
TextBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TextBanner;
