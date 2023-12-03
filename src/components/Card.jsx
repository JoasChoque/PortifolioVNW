import React from "react";
import { CardContainer, CardImage,CardTitle,ButtonContainer,Button } from "../styles/styleCard";

const CardProjetos = ({ title, imageUrl, githubLink, deployLink })=>{
    return (
        <CardContainer>
          <CardImage src={imageUrl} alt={title} />
          <CardTitle>{title}</CardTitle>
          <ButtonContainer>
            <Button href={githubLink} target="_blank">
              Ver no GitHub
            </Button>
            {deployLink && (
              <Button href={deployLink} target="_blank">
                Ver Deploy
              </Button>
            )}
          </ButtonContainer>
        </CardContainer>
      );
}

export default CardProjetos;