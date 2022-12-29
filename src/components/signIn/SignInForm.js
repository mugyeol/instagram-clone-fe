import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closedEye, openEye } from "../../asset/login/index";
import { connectKakao } from "./funcs";
import { $login } from "../../dataManager/myQueries";
import { StCard } from "../layout/Card";
import {
  chatLogo,
  lockLogo,
  postLogo,
  loginFont,
} from "../../asset/login/index";
import {
  __typePassword,
  __typeUsername,
  __showPwd,
  __cleanUp,
} from "../../redux/modules/signInSlice.js";
import FlexColumnCenter from "../layout/FlexColumnCenter";
import { flexCenter } from "../layout/className";
import FlexRowCenter from "../layout/FlexRowCenter";
import PrimaryButton from "../elem/PrimaryButton";
import Img from "../elem/Img";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameState = useSelector((state) => state.signIn.username);
  const passwordState = useSelector((state) => state.signIn.password);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameState.isValid && passwordState.isValid);
    }, 100);
    return () => {
      clearTimeout(identifier);
      console.log("return");
    };
  }, [usernameState.isValid, passwordState.isValid]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        dispatch(__typeUsername(value));
        return;
      case "pwd":
        dispatch(__typePassword(value));
        return;
      default:
        return;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    $login({
      email: usernameState.value,
      password: passwordState.value,
    })
      .then((data) => {
        console.log("data login", data);
        if (data.status === 200) {
            dispatch(__cleanUp());
            navigate("/");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  const onClickKakaoLogin = () => {
    connectKakao();
  };

  return (
    <Fragment>
      <FlexColumnCenter justify={flexCenter} align={flexCenter}>
        <CardConatiner>
          <FlexRowCenter>
            <Instagram src={loginFont} />
          </FlexRowCenter>
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
                    value={usernameState.value}
                    name="id"
                    onChange={onChangeHandler}
                    placeholder="전화번호 또는 이메일 주소"
                  ></StInput>
                </FlexRowCenter>
              </CardInput>
              <CardInput style={{ cursor: "pointer" }}>
                <FlexRowCenter>
                  <Img type='login-left' src={lockLogo} />
                  <StPwdInput
                    value={passwordState.value}
                    type={passwordState.isShown ? "text" : "password"}
                    name="pwd"
                    placeholder="비밀번호"
                    onChange={onChangeHandler}
                  ></StPwdInput>
                  {passwordState.value.length === 0 ? null : (
                    <img
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(__showPwd())}
                      className="check-img-pwd"
                      src={passwordState.isShown ? closedEye : openEye}
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
                  로그인
                </PrimaryButton>
                <span style={{color:`var(--ig-third-text)`}}>or</span>
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
              </FlexColumnCenter>
            </FlexColumnCenter>
          </form>
        </CardConatiner>
      </FlexColumnCenter>
    </Fragment>
  );
};

export default SignInForm;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;


  .rightLogo {
    margin: 0 1rem 0 0.3rem;
    width: 2rem;
    height: 2rem;
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
  padding: 1.1rem 0;
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
const StPwdInput = styled(StInput).attrs({ maxLength: "20" })`
  width: 5rem;
  flex-grow: 1;
`;

const Instagram = styled.img`
  width: 18rem;
  margin: 5rem 0;
`;
