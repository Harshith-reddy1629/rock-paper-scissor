import styled from 'styled-components'

export const ScorecardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #fff;
  width: 70%;
  border-radius: 15px;
  //   height: 100px;
  margin: auto;
  margin-top: 30px;
  font-weight: bold;
`
export const UlContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
`
export const ScoreBar = styled.div`
  background-color: #fff;
  border-radius: 12px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  width: 15%;
`
export const PopupImg = styled.img`
  height: 450px;
`

// export const StyledBtn = styled.button`
//   background-color: #fff;
//   border: 0;
//   padding: 8px 16px;
//   border-radius: 6px;
//   outline: none;
//   color: #223a5f;
//   font-weight: bold;
// `
export const StyledBtn = styled.button`
  background-color: #fff;
  border: 2px solid #fff;
  padding: 8px 16px;
  border-radius: 6px;
  outline: none;
  color: #223a5f;
  font-weight: bold;
  :hover {
    background-color: transparent;
    color: #fff;
  }
`
export const RulesBtnCon = styled.div`
  position: absolute;
  right: 10px;
`
export const PlayContainer = styled.div`
  height: 60vh;
`
export const Itemimage = styled.img`
  height: 200px;
`

export const ImageButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`
export const ImagesUL = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const ScorePara = styled.p`
  font-family: 'Roboto';
`
