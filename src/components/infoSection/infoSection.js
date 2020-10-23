import React from "react";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper
} from "./infoSection.elements";

import { Container, Button } from "..//..//globalStyles";
import {Link} from 'react-router-dom';

const InfoSection = ({
  primary,  
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  desccription,
  headline,
  lightText,
  topLine,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {desccription}
                </Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
              </InfoColumn>
                  
              <InfoColumn>
              <ImgWrapper start={start}>
                      <img src= {img} alt={alt}/>
                  </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;


