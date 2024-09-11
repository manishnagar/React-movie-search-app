import React from 'react'
import styled from 'styled-components';
import './MovieComponent.scss';

const MovieContainer = styled.div`
display:flex;
flex-direction:column;
padding:10px 7px;
margin: 10px 0px;
width:270px;
box-shadow:0 3px 10px 0 #aaa;
cursor:pointer;
border-radius:8px;
`;

const MovieName = styled.span`
font-size:14px;
line-height:20px;
font-weight:600;
color:#000;
margin:5px 0px 5px 5px;
white-space:nowrap;
overflow:hidden;
text-overflow: ellipsis;
`;

const InfoColumn = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

const MovieInfo = styled.div`
font-size:14px;
font-weight:500;
color:#000;
text-transform:capitalize;
margin-left:5px;
`
const MovieComponent = (props) => {
 const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <div>
      <MovieContainer onClick={() => props.onMovieSelect(imdbID)}>
        <div className='poster'>
        {Poster !== "N/A" ? (
            <img src={Poster} alt="poster" />
          ) : (
            <div className="no-poster-text">Poster image is not available</div>
          )}
          
          </div>
        <MovieName>{Title}</MovieName>
        <InfoColumn>
          <MovieInfo>Year : {Year}</MovieInfo>
          <MovieInfo>Type : {Type}</MovieInfo>
        </InfoColumn>
      </MovieContainer>
    </div>
  )
}

export default MovieComponent;