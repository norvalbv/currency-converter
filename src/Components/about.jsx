import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
    <h3 className="text-center my-10 underline">Why Us?</h3>
      <Container>
        <Row>
          <Col className="hover:scale-110 ease-linear duration-300 h-40 flex justify-center pt-16 border-white rounded-2xl bg-white/50 text-2xl">
            Live Conversions
          </Col>
          <Col className="hover:scale-110 ease-linear duration-300 flex justify-center pt-16 border-white rounded-2xl bg-white/50 text-2xl">
            Historical Data
          </Col>
          <Col className="hover:scale-110 ease-linear duration-300 flex justify-center pt-16 border-white rounded-2xl bg-white/50 text-2xl">
            Convert Any Currency
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
