import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closedEye,
  humanLogo,
  openEye,
  settingLogo,
} from "../../asset/login/index";
import { connectKakao } from "../signIn/funcs";
import { $signUp } from "../../dataManager/myQueries";
import { StCard } from "../ui/layout/Card";
import {
  chatLogo,
  lockLogo,
  postLogo,
  loginFont,
  check,
  xMark,
} from "../../asset/login/index";
import {
  __cleanUp,
  __showPwd,
  __submitForm,
  __typeLoginId,
  __typeUsername,
  __typeNickname,
  __typePassword,
} from "../../redux/modules/signUpSlice";
import FlexColumnCenter from "../ui/layout/FlexColumnCenter";
import { flexCenter } from "../ui/layout/className";
import FlexRowCenter from "../ui/layout/FlexRowCenter";
import PrimaryButton from "../elem/PrimaryButton";
import Img from "../elem/Img";

//하단 메세지
// const messages = {
//   idInvalid: `입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다.
//   사용자 이름을 확인하고 다시 시도하세요.`,
//   pwdInvalid: "잘못된 비밀번호입니다. 다시 확인하세요.",
// };
const SignUpForm = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginIdState = useSelector((state) => state.signUp.loginId);
  const usernameState = useSelector((state) => state.signUp.username);
  const nicknameState = useSelector((state) => state.signUp.nickname);
  const passwordState = useSelector((state) => state.signUp.password);

  const [formIsValid, setFormIsValid] = useState(false);
  const [inputReadOnlyState, setInputReadOnly] = useState({
    loginIdInput: false,
    usernameInput: true,
    nicknameInput: true,
    passwordInput: true,
  });

  //유효성 체크
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        loginIdState.isValid &&
          nicknameState.isValid &&
          usernameState.isValid &&
          passwordState.isValid
      );
      setInputReadOnly((prev) => {
        return {
          ...prev,
          usernameInput: !loginIdState.isValid,
          nicknameInput: !usernameState.isValid,
          passwordInput: !nicknameState.isValid,
        };
      });
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [
    loginIdState.isValid,
    usernameState.isValid,
    nicknameState.isValid,
    passwordState.isValid,
  ]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "loginId":
        dispatch(__typeLoginId(value));
        return;
      case "username":
        dispatch(__typeUsername(value));
        return;
      case "nickname":
        dispatch(__typeNickname(value));
        return;
      case "password":
        dispatch(__typePassword(value));
        return;

      default:
        return;
    }
  };

  //회원가입 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = {
      email: loginIdState.value,
      username: usernameState.value,
      nickname: nicknameState.value,
      password: passwordState.value,
    };
    console.log(form, "form");
    $signUp(form)
      .then((data) => {
        data.status === 200 ? navigate("/sign-in") : alert(data.message);
      })
      .catch((err) => console.log("err", err.response.data));
  };
  const onClickKakaoLogin = () => {
    connectKakao();
  };
  const messages = {
    emailInvalid: "이메일 형식이 맞지 않습니다.",
    usernameInvalid:
      "아이디 형식이 맞지 않습니다. 아이디는 4자리 이상, 10자리 이하의 소문자와 숫자 조합을 사용해주세요.",
    passwordInvalid:
      "비밀번호 형식이 맞지 안습니다. 8자리 이상, 15자리 이하의 영어 대,소문자, 숫자, 특수문자(!@#$%^&+=)를 사용해 주세요.",
    passwordNotMatching: "비밀번호가 일치하지 않습니다.",
  };
  return (
    <Fragment>
      <FlexColumnCenter justify={flexCenter} align={flexCenter}>
        <CardConatiner>
          <FlexColumnCenter>
            <Instagram src={loginFont} />
            <PrimaryButton
              className="kakaologin"
              type="button"
              onClick={onClickKakaoLogin}
            >
              <FlexRowCenter gap={"1.5rem"}>
                <Img type='kakao-chat'
                  src={chatLogo}
                />
                <span>카카오 로그인</span>
              </FlexRowCenter>
            </PrimaryButton>
            <span style={{margin:'2rem 0'}} className="third-text">or</span>
          </FlexColumnCenter>
          <form style={{ margin: "0 0 1rem" }} onSubmit={onSubmitHandler}>
            <FlexColumnCenter
              justify={flexCenter}
              align={flexCenter}
              gap="1rem"
            >
              <CardInput>
                <FlexRowCenter>
                  <Img type='login-left' src={postLogo} />
                  <StInput
                    value={loginIdState.value}
                    name="loginId"
                    onChange={onChangeHandler}
                    placeholder="이메일 주소"
                  ></StInput>
                  {loginIdState.value.length === 0 ? null : (
                    <img
                      alt=""
                      className="rightLogo"
                      src={loginIdState.isValid ? check : xMark}
                    />
                  )}
                </FlexRowCenter>
              </CardInput>
              <CardInput>
                <FlexRowCenter>
                  <Img type='login-left' src={humanLogo} />
                  <StInput
                    readOnly={inputReadOnlyState.usernameInput}
                    value={usernameState.value}
                    name="username"
                    onChange={onChangeHandler}
                    placeholder="성명"
                  ></StInput>
                  {usernameState.value.length === 0 ? null : (
                    <img
                      alt=""
                      className="rightLogo"
                      src={usernameState.isValid ? check : xMark}
                    />
                  )}
                </FlexRowCenter>
              </CardInput>
              <CardInput>
                <FlexRowCenter>
                  <Img type='login-left' src={settingLogo} />
                  <StInput
                    readOnly={inputReadOnlyState.nicknameInput}
                    value={nicknameState.value}
                    name="nickname"
                    onChange={onChangeHandler}
                    placeholder="닉네임"
                  ></StInput>
                  {nicknameState.value.length === 0 ? null : (
                    <img
                      alt=""
                      className="rightLogo"
                      src={nicknameState.isValid ? check : xMark}
                    />
                  )}
                </FlexRowCenter>
              </CardInput>
              <CardInput>
                <FlexRowCenter>
                  <Img type='login-left' src={lockLogo} />
                  <StInput
                    readOnly={inputReadOnlyState.passwordInput}
                    value={passwordState.value}
                    type={passwordState.isShown ? "text" : "password"}
                    name="password"
                    placeholder="비밀번호"
                    onChange={onChangeHandler}
                  ></StInput>
                  {passwordState.value.length === 0 ? null : (
                    <img
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(__showPwd())}
                      className="check-img-pwd"
                      src={passwordState.isShown ? closedEye : openEye}
                    />
                  )}
                  {passwordState.value.length === 0 ? null : (
                    <img
                      alt=""
                      className="rightLogo"
                      src={passwordState.isValid ? check : xMark}
                    />
                  )}
                </FlexRowCenter>
              </CardInput>

              <FlexColumnCenter mg="1.5rem 2.5rem" gap="1.2rem">
                <PrimaryButton
                  type="submit"
                  className="primary"
                  disabled={!formIsValid}
                >
                  {isLogin ? "로그인" : "가입"}
                </PrimaryButton>
              </FlexColumnCenter>
            </FlexColumnCenter>
          </form>
        </CardConatiner>
      </FlexColumnCenter>
    </Fragment>
  );
};

export default SignUpForm;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;


  .rightLogo {
    margin: 0 1rem 0 0.3rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .alert {
    margin: 0 1rem;
    font-size: 1.3rem;
    text-align: center;
    color: red;
    font-weight: 600;
  }
  .check-img-pwd {
    margin: 0 0.3rem 0 0.3rem;
    width: 2rem;
    height: 2rem;
  }
  .pwd-alert {
    margin-right: 1rem;
    color: var(--ig-third-text);
  }
  .primary {
    width: 100%;
  }
  .kakaologin {
    width: 100%;
    background-color: #fee500;
    color: var(--color-black);
    :active:enabled {
      background-color: var(--color-yellow);
      color: var(--color-black);
    }
    :hover:enabled {
      background-color: var(--color-yellow);
      color: var(--color-black);
    }
  }
`;

const CardConatiner = styled(StCard)`
  width: 36rem;
  padding: 0 4rem;
  border: 1px solid var(--ig-light-theme-separator);
`;
const CardInput = styled(StCard)`
  width: 100%;
  padding: 1rem 0;
  border: 1px solid var(--ig-light-theme-separator);
  background-color: var(--ig-light-theme-background);
`;
const StInput = styled.input.attrs({ maxLength: "20" })`
  font-size: 1.2rem;
  font-weight: 400;
  :focus {
    outline: none;
  }
  border: none;
  flex-grow: 1;
  margin-right: 0.2rem;
  background-color: transparent;
`;

const Instagram = styled.img`
  width: 18rem;
  margin: 5rem 0 2rem;
`;
