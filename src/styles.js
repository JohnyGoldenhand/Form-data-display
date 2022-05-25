import styled from 'styled-components';

export const BodyWraper = styled.div`
background: linear-gradient(0deg, rgba(192,86,217,1) 0% , rgba(218,164,231,1) 100%);
min-height: 100vh;
width: 100vw;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
padding-bottom: 40px;
`
export const StyledButton = styled.button `
width: 200px;
height: 50px;
margin-top: 200px;
`

export const StyledForm = styled.div `
display: flex;
flex-direction: column;
`

export const StyledInput = styled.input `
width: 400px;
height: auto;
margin: 20px;
padding: 10px;
border-radius: 2.5rem;
`

export const StyledButtonForm = styled.button `
width: 60px;
margin: 20px;
`
export const StyledTableWraper = styled.div `
height: auto;
width: 500px;
display: flex;
flex-direction: column;
border: 3px solid white;
border-radius: 2.5rem;
justify-content: center;
color: white;
`

export const StyledListItem = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    border-bottom: 1px white solid;
    max-width: 90%;
`
