import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Container from "./Container";
import SlideBar from "./SlideBar";

function Header({ isHover, setIsHover, handleMouseOn, handleMouseOff }) {
  return (
    <div>
      <Container>
        <Logo>
          <h2>
            <a href="https://www.wanted.co.kr/">wanted</a>
          </h2>
        </Logo>

        <NavItems>
          <ResponsivHome>
            <a
              class="slider"
              style={styledSlider}
              href="https://www.wanted.co.kr/"
            >
              홈
            </a>
          </ResponsivHome>
          <NavItem>
            <a
              class="slider"
              style={styledSlider}
              href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all"
              onMouseEnter={() => handleMouseOn(isHover)}
            >
              탐색
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://www.wanted.co.kr/events"
              onMouseEnter={() => handleMouseOff(isHover)}
            >
              커리어 성장
            </a>
          </NavItem>
          <ResponsivNavItem>
            <a
              href="https://www.wanted.co.kr/salary"
              onMouseEnter={() => handleMouseOff(isHover)}
            >
              직군별 연봉
            </a>
          </ResponsivNavItem>
          <ResponsivNavItem>
            <a
              href="https://www.wanted.co.kr/cv"
              onMouseEnter={() => handleMouseOff(isHover)}
            >
              이력서
            </a>
          </ResponsivNavItem>
          <ResponsivNavItem>
            <a
              href="https://www.wanted.co.kr/matchup/intro?from_gnb=true"
              onMouseEnter={() => handleMouseOff(isHover)}
            >
              매치업
            </a>
          </ResponsivNavItem>
          <ResponsivNavItem>
            <a
              rel="noreferrer"
              href="https://www.wanted.co.kr/gigs/experts"
              target="_blank"
              onMouseEnter={() => handleMouseOff(isHover)}
            >
              프리랜서
            </a>
          </ResponsivNavItem>
        </NavItems>
        <InfoItems>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faSearch} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faBell} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faUser} />
            </Icon>
            <Bar>
              <FontAwesomeIcon icon={faBars} />
            </Bar>
          </Icons>
          <ResponsivIcons>
            <Icon>|</Icon>
            <ServiceBTN>
              <a href="https://www.wanted.co.kr/dashboard/companyregister">
                기업 서비스
              </a>
            </ServiceBTN>
          </ResponsivIcons>
        </InfoItems>
      </Container>
      {isHover && <SlideBar onMouseLeave={() => handleMouseOff(isHover)} />}
    </div>
  );
}

const Logo = styled("div")`
  margin: 0.5rem;
  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const NavItems = styled("div")`
  display: flex;
  font-weight: 800;
`;

const NavItem = styled("div")`
  margin: 0.5rem;
`;

const ResponsivNavItem = styled("div")`
  margin: 0.5rem;
  font-weight: 800;
  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const InfoItems = styled("div")`
  display: flex;
  align-items: baseline;
`;

const Icons = styled("div")`
  display: flex;
  align-items: baseline;
`;

const Icon = styled("div")`
  margin: 1rem;
`;

const ResponsivIcons = styled("div")`
  margin: 1rem;
  display: flex;
  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const Bar = styled("div")`
  margin: 1rem;
  @media screen and (min-width: 825px) {
    display: none;
  }
`;

const ResponsivHome = styled("div")`
  margin: 0.5rem 1rem;
  font-weight: 800;
  @media screen and (min-width: 825px) {
    display: none;
  }
`;

const ServiceBTN = styled("button")`
  border: lightgray solid 1px;
  border-radius: 30px;
  margin: 0.5rem;
  padding: 7px 10px;
  background-color: white;
`;

const styledSlider = {};

export default Header;
