import Header from "@components/Header/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import YearCalendar from "../../components/Calendar/YearCalendar";

export default function Repo() {
  const router = useRouter();
  const slug = router.query.slug || [];
  const [year, setYear] = useState(0);
  function redirectTo404() {
    router.push("/404");
  }

  useEffect(() => {
    console.log(slug);
  });

  function handleYear() {
    setYear(Math.floor(1000 + Math.random() * 9000));
  }

  return (
    <>
      <GradientHeader>
        <Header></Header>
        <RepoBar onClick={handleYear}>
          {slug[1]}/{slug[2]}
        </RepoBar>
        <Years>
          <b>2015</b>
          <b>2016</b>
          <b>2017</b>
          <b>2018</b>
        </Years>
      </GradientHeader>
      <YearCalendar withRelativeTop year={year}></YearCalendar>
    </>
  );
}



const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;

  background: linear-gradient(180deg, #00101B 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #4C15EB 5.62%, #245AAA 74.42%, #0DD1DD 127.92%);
`;

const RepoBar = styled.div`
  padding-top: 40px;
  font-size: 50px;
  font-weight: bold;
`;

const Years = styled.div`
  padding-top: 30px;
  b {
    padding-right: 20px;
  }
`;
