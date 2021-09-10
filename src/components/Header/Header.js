import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";


const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className="Main__Header">
        <ReactTypingEffect
          text={[
            "Bay Area NFT Digital Art",
            "Buy NFT to be used in real world Art book",
            "Support the scene!",
            'Click "Buy" to own UNIQUE NFT',
            "Stake NFT to earn profit on sales of Art book!",
          ]}
          className={classes.marquee}
          speed="40"
          eraseSpeed="10"
          eraseDelay="2000"
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span key={key} style={i % 2 === 0 ? {} : {}}>
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Header;
