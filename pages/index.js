import Head from "next/head";
import { Navbar, Stories, Chart } from "../src/component/modules";
import { RankCard, CourseCard } from "../src/component/base";
import HorizontalScroll from "react-scroll-horizontal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container-fluid mt-5 pt-5 min-vh-100">
        <div className="row ">
          <div className="col-12 col-lg-8">
            <Stories />
            <div className="statistics mt-4 pb-3">
              <h3>Statistics</h3>
              <Chart />
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-4 mt-lg-0">
            <div className="leaderboard h-100">
              <h3>Peringkat</h3>
              <p>Hasil akhir perolehan nilai try out</p>
              <button className="download">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10V10.75C1 11.3467 1.23705 11.919 1.65901 12.341C2.08097 12.7629 2.65326 13 3.25 13H10.75C11.3467 13 11.919 12.7629 12.341 12.341C12.7629 11.919 13 11.3467 13 10.75V10M10 7L7 10M7 10L4 7M7 10V1"
                    stroke="#008FFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ms-1">Unduh.CSV</span>
              </button>
              <img src={require("../src/images/Group.svg")} alt="trophy" />
              <div className="ranking mt-3">
                <RankCard
                  no="1"
                  avatar="/ranking/Ellipse 73-1.png"
                  className="rank1"
                  name="Nevalen Aginda Prasetyo"
                />
                <RankCard
                  no="2"
                  avatar="/ranking/Ellipse 73-2.png"
                  className="rank2"
                  name="Tatiana Franci"
                />
                <RankCard
                  no="3"
                  avatar="/ranking/Ellipse 73-3.png"
                  className="rank3"
                  name="Haylie Press"
                />
                <RankCard
                  no="4"
                  avatar="/ranking/Ellipse 73-4.png"
                  className="rank4"
                  name="Jordy Siphosa"
                />
                <RankCard
                  no="5"
                  avatar="/ranking/Ellipse 73.png"
                  className="rank4"
                  name="Ruben Rayn"
                />
                <RankCard
                  no="6"
                  avatar="/ranking/Ellipse 73.png"
                  className="rank4"
                  name="Ruben Zayn"
                />
                <RankCard
                  no="7"
                  avatar="/ranking/Ellipse 73.png"
                  className="rank4"
                  name="Ruben Zayn"
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="course w-100 my-4">
              <h3>Course Preview</h3>
              <HorizontalScroll className="scroll" reverseScroll={true}>
                <CourseCard title="TOEFL" image="/course/Rectangle 356.svg" />
                <CourseCard
                  title="Desain Grafis"
                  image="/course/Rectangle 356-1.svg"
                />
                <CourseCard
                  title="Desain Grafis"
                  image="/course/Rectangle 356-2.svg"
                />
                <CourseCard title="Piano" image="/course/Rectangle 356-3.svg" />
                <CourseCard title="Vokal" image="/course/Rectangle 356-1.svg" />
                <CourseCard title="Piano" image="/course/Rectangle 356-2.svg" />
              </HorizontalScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
