import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./detailPage.css";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  //이미지 정보 있는데 깨질 때 처리할 거

 /* useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);*/

  useEffect(() => {
     
      async function fetchData() {
        try{
          const request = await axios.get(`/movie/${movieId}`);
          setMovie(request.data);
      
    }catch(error){
        console.error("영화 데이터를 불러오는데 실패했습니다.", error);
        alert("영화 데이터를 불러오는데 실패했습니다.");
        navigate(-1); 
        //영화 데이터 없음 알람 확인 후 바로 직적 페이지 (검색 페이지)로 이동
    }
  }
    fetchData();

    return () => {
      console.log("컴포넌트 언마운트");
    };
  }, [movieId]);

  if (!movie) return <div>...loading</div>;
 
 //이거 이미지 안뜰때도 크기 고정하려고..
  return (
    <section>
        {movie.backdrop_path && !imageError ? (
        <img
          className="detail__bg-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="poster"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="detail__bg-placeholder" />
      )} 
      
      <div className="detail__overlay">
        <h1 className="detail__title">{movie.title}</h1>
        <p className="detail__release">{movie.release_date}</p>
        <p className="detail__vote">⭐ {movie.vote_average}</p>
        <p className="detail__overview">{movie.overview}</p>
      </div>
    </section>
  );
}
