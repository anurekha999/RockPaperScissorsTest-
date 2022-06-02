import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

export const GameImage = styled.img`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const ResultButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
  height: 28px;
  width: 100px;
  padding: 10px;
  color: #223a5f;
  font-size: 10px;
`
