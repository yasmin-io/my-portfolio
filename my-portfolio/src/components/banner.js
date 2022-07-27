import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import HeaderImg from "../assets/images/temporary-header.png";

function Banner() {
  // This will indicate the index of the word being set on screen
  const [loopNum, setLoopNum] = useState(0);

  // Is the word being typed out or being deleted.
  const [isDeleting, setIsDeleting] = useState(false);

  // Words for the title rotation on the header
  const toRotate = ["Web Developer", "Web Deisgner", "Artist"];

  // What text is being displayed right now
  const [text, setText] = useState("");

  // How long it will take for each letter to be typed
  const [letter, setLetter] = useState(300 - Math.random() * 100);

  // The time for the transition between each word being typed
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letter);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    //
    let i = loopNum % toRotate.length;
    // The current index
    let fullText = toRotate[i];

    // -------------------------How does substring actually work here?
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // Set the state to the updated text
    setText(updateText);

    // Alternating speed for each letter being revealed
    if (isDeleting) {
      setLetter((prevLetter) => prevLetter / 2);
    }

    if (isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setLetter(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetter(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline-title"> Hello World! </span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap">web developer</span>
            </h1>
            <p>
              Write abit about me here. I am a multipotentialist. I love art
              plants gaming and a anything that mixes my love for IT and
              creativity.
            </p>
            <button onClick={() => console.log("Clicked Connect button")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              style={{ maxHeight: "200px" }}
              src={HeaderImg}
              alt="Skull Header"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
