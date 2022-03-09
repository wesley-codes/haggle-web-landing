import styled from "styled-components";

export const Footercontainer = styled.div`
  background: #000;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto 8%;
  & h3 {
    color: white;
    font-size: 3rem;
    width: 45%;
    @media (max-width: 1024px) {
      width: 100%;
      font-size: 2.5rem;

    }
  }

  p {
    color: white;
    font-size: 1.5rem;
    width: 60%;
    margin-top: 4%;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;

  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterMoneyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    justify-content: center;

  }
`;

export const FooterMoneyImage = styled.img`
  width: 50%;
`;
