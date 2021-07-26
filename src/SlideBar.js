import styled from "styled-components";

function SlideBar() {
  return (
    <Wrapper>
      <Categories>
        <Category>
          <CategoryHeader>
            <a href="https://www.wanted.co.kr/wdlist/530?country=kr&job_sort=job.latest_order&years=0&locations=all">
              영업
            </a>
          </CategoryHeader>
          <Content>
            <a href="#">기업영업</a>
          </Content>
          <Content>
            <a href="#">외부영업</a>
          </Content>
          <Content>
            <a href="#">영업 관리자</a>
          </Content>
          <Content>
            <a href="#">기술 영업</a>
          </Content>
          <Content>
            <a href="#">주요고객사 담당자</a>
          </Content>
          <Content>
            <a href="#">솔루션 컨설턴트</a>
          </Content>
          <Content>
            <a href="#">해외영업</a>
          </Content>
          <Content>
            <a href="#">더보기</a>
          </Content>
        </Category>
        <Category>
          <CategoryHeader>
            <a href="https://www.wanted.co.kr/wdlist/524?country=kr&job_sort=job.latest_order&years=0&locations=all">
              미디어
            </a>
          </CategoryHeader>
          <Content>
            <a href="#">콘텐츠 크리에이터</a>
          </Content>
          <Content>
            <a href="#">PD</a>
          </Content>
          <Content>
            <a href="#">영상 편집가</a>
          </Content>
          <Content>
            <a href="#">에디터</a>
          </Content>
          <Content>
            <a href="#">비디오 제작</a>
          </Content>
          <Content>
            <a href="#">작가</a>
          </Content>
          <Content>
            <a href="#">출판 기획자</a>
          </Content>
          <Content>
            <a href="#">더보기</a>
          </Content>
        </Category>
        <Category>
          <CategoryHeader>
            <a href="https://www.wanted.co.kr/wdlist/517?country=kr&job_sort=job.latest_order&years=0&locations=all">
              인사
            </a>
          </CategoryHeader>

          <Content>
            <a href="#">인사담당</a>
          </Content>
          <Content>
            <a href="#">리크루터</a>
          </Content>
          <Content>
            <a href="#">조직문화</a>
          </Content>
          <Content>
            <a href="#">평가·보상</a>
          </Content>
          <Content>
            <a href="#">헤드헌터</a>
          </Content>
          <Content>
            <a href="#">HRBP</a>
          </Content>
          <Content>
            <a href="#">HRD</a>
          </Content>
          <Content>
            <a href="#">더보기</a>
          </Content>
        </Category>
        <Category>
          <CategoryHeader>
            <a href="https://www.wanted.co.kr/wdlist/959?country=kr&job_sort=job.latest_order&years=0&locations=all">
              게임 제작
            </a>
          </CategoryHeader>
          <Content>
            <a href="#">게임 기획자</a>
          </Content>
          <Content>
            <a href="#">게임 그래픽 디자이너</a>
          </Content>
          <Content>
            <a href="#">모바일 게임 개발자</a>
          </Content>
          <Content>
            <a href="#">게임 클라이언트 개발자</a>
          </Content>
          <Content>
            <a href="#">게임 아티스트</a>
          </Content>
          <Content>
            <a href="#">게임 서버 개발자</a>
          </Content>
          <Content>
            <a href="#">유니티 개발자</a>
          </Content>
          <Content>
            <a href="#">더보기</a>
          </Content>
        </Category>
        <Category>
          <CategoryHeader>
            <a href="https://www.wanted.co.kr/wdlist/508?country=kr&job_sort=job.latest_order&years=0&locations=all">
              금융
            </a>
          </CategoryHeader>
          <Content>
            <a href="#">회계담당</a>
          </Content>
          <Content>
            <a href="#">재무 담당자</a>
          </Content>
          <Content>
            <a href="#">IR</a>
          </Content>
          <Content>
            <a href="#">투자·증권</a>
          </Content>
          <Content>
            <a href="#">재무 분석가</a>
          </Content>
          <Content>
            <a href="#">애널리스트</a>
          </Content>
          <Content>
            <a href="#">내부통제 담당자</a>
          </Content>
          <Content>
            <a href="#">더보기</a>
          </Content>
        </Category>
      </Categories>
      <BigCategories>
        <CategoryHeader>
          <a href="#">엔지니어링·설계</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">물류·무역</a>
        </CategoryHeader>

        <CategoryHeader>
          <a href="#">제조·생산</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">의료·제약·바이오</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">교육</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">법률·법집행기관</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">식·음료</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">건설·시설</a>
        </CategoryHeader>
        <CategoryHeader>
          <a href="#">공공·복지</a>
        </CategoryHeader>
      </BigCategories>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  /*background-color: white;*/
  width: 100vw;
  z-index: 1;

  animation-duration: 1s;
  animation-name: slidein;

  @keyframes slidein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const Categories = styled("div")`
  display: flex;
  text-align: left;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Category = styled("div")`
  text-align: left;
  width: 15vw;
  flex-grow: 1;
  flex-shrink: 1;
`;

const CategoryHeader = styled("h3")`
  margin: 1rem 0.5rem;
`;

const BigCategories = styled("div")`
  text-align: left;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Content = styled("div")`
  margin: 0.5rem;
`;

export default SlideBar;
