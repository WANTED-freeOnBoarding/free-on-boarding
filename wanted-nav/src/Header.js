import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Container from "./Container";
import SlideBar from "./SlideBar";

function Header(isHover, setIsHover, HandleMouseOver) {
  return (
    <div>
      <Container>
        <Logo>
          <div class="logo__btn">
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              wanted
            </a>
          </div>
        </Logo>
        <NavItems>
          <NavItem>
            <a
              class="slider"
              style={styledSlider}
              href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all"
            >
              탐색
            </a>
          </NavItem>
          <NavItem>
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              커리어 성장
            </a>
          </NavItem>
          <NavItem>
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              직군별 연봉
            </a>
          </NavItem>
          <NavItem>
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              이력서
            </a>
          </NavItem>
          <NavItem>
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              매치업
            </a>
          </NavItem>
          <NavItem>
            <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=0&locations=all">
              프리랜서
            </a>
          </NavItem>
        </NavItems>
        <div class="info-items">
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
            <Icon>|</Icon>
            <div class="service">
              <ServiceBTN>기업 서비스</ServiceBTN>
            </div>
          </Icons>
        </div>
      </Container>
      {isHover && (
        <SlideBar
          isHover={isHover}
          setIsHover={setIsHover}
          onMouseLeave={() => HandleMouseOver()}
        />
      )}
    </div>
  );
}

const Logo = styled("div")`
  margin: 0.5rem;
`;

const NavItems = styled("div")`
  display: flex;
`;

const NavItem = styled("div")`
  margin: 0.5rem;
`;

const Icons = styled("div")`
  display: flex;
  align-items: baseline;
`;

const Icon = styled("div")`
  margin: 1rem;
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
