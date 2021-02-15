import styled from "styled-components";
import img from "./bc.jpg";
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-left: 115px;
  padding-bottom: 150px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-right: 33px;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const Img = styled.div`
  background-image: url(${img});
  // background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 100%;
`;

export const LoadingWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
`;
export const TwoCol = styled.div`
  display: flex;
  justify-content: center;
`;

export const DeleteButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  margin-left: 0px;
`;
export const ListForm = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
`;
