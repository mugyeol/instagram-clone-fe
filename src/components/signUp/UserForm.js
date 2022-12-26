import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {supportDeviceSize} from '../layout/styled'
import {chatLogo, check, humanLogo, lockLogo, logo, postLogo, settingLogo, xMark} from '../../assets'
import {useNavigate} from 'react-router-dom'
import {forIsDuplicated} from '../../utils/utility'
import {Wrap, Button, Card, Stack, Img} from '../UI'
import {useDispatch, useSelector} from 'react-redux'
import {__inputName, __inputPhone, __inputPwd, __inputUserId, __showPwd, __submitForm} from '../../store/actions/signup'
import {serverErrors} from '../../dataManager/apiConfig'

//하단 메세지
const messages = {
  phoneInvalid: '휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요.',
  idInvalid: '사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
  idDuplicate: '사용할 수 없는 사용자 이름입니다. 다름이름을 사용하세요',
}
const UserForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const phoneState = useSelector(state => state.signUp.phone)
  const nameState = useSelector(state => state.signUp.name)
  const userIdState = useSelector(state => state.signUp.userId)
  const pwdState = useSelector(state => state.signUp.pwd)

  const [formIsValid, setFormIsValid] = useState(false)
  const [isDuplicated, setIsDuplicated] = useState(false)

  //아이디 중복 체크
  useEffect(() => {
    forIsDuplicated(userIdState.value)
      .then(data => {
        setIsDuplicated(data.code === 2230)
        if (serverErrors.includes(data.code)) throw new Error('서버 에러 : 관리자에게 문의해주세요 !')
      })
      .catch(err => alert(err))
  }, [userIdState.value])

  //form 유효성 체크
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(phoneState.isValid && nameState.isValid && userIdState.isValid && pwdState.isValid)
    }, 100)
    return () => {
      clearTimeout(identifier)
    }
  }, [phoneState.isValid, nameState.isValid, userIdState.isValid, pwdState.isValid, userIdState.value])

  const onChangeHandler = e => {
    const {name, value} = e.target
    switch (name) {
      case 'phone':
        dispatch(__inputPhone(value))
        return
      case 'name':
        dispatch(__inputName(value))
        return
      case 'id':
        dispatch(__inputUserId(value))
        return
      case 'pwd':
        dispatch(__inputPwd(value))
        return
      default:
        return
    }
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch(
      __submitForm({
        phoneNumber: phoneState.value.replaceAll('-', ''),
        realName: nameState.value,
        loginId: userIdState.value,
        password: pwdState.value,
      }),
    )
    navigate('/sign-up-birth')
  }
  //jsx
  return (
    <Fragment>
      <Stack direction='column'>
        <Wrap>
          <Img wd='23rem' hg='8.5rem' src={logo} />
          <p className='intro'>친구들과 함께 여행 이야기를 공유하고 보세요.</p>
          <Button mg='1.5rem 0 0' className='kakaoLogin'>
            <Img wd='1.8rem' hg='1.8rem' src={chatLogo} />
            <span>카카오 로그인</span>
          </Button>
          <span style={{margin: '1.5rem 0'}}>or</span>
          <form onSubmit={onSubmitHandler}>
            <Stack gap='1rem'>
              <Card>
                <Img className='leftLogo' src={postLogo} />
                <StInput
                  value={phoneState.value}
                  name='phone'
                  onChange={onChangeHandler}
                  placeholder='전화번호, 사용자 이름 또는 이메일'
                ></StInput>
                {phoneState.value.length === 0 ? null : (
                  <Img className='rightLogo' src={phoneState.isValid ? check : xMark} />
                )}
              </Card>
              <Card>
                <Img className='leftLogo' src={humanLogo} />
                <StInput value={nameState.value} onChange={onChangeHandler} name='name' placeholder='성명'></StInput>
                {nameState.value.length === 0 ? null : (
                  <Img className='rightLogo' src={nameState.isValid ? check : xMark} />
                )}
              </Card>
              <Card>
                <Img className='leftLogo' src={settingLogo} />
                <StInput
                  value={userIdState.value}
                  onChange={onChangeHandler}
                  name='id'
                  placeholder='사용자 이름'
                ></StInput>
                {userIdState.value.length === 0 ? null : (
                  <Img className='rightLogo' src={userIdState.isValid && !isDuplicated ? check : xMark} />
                )}
              </Card>
              <Card style={{cursor: 'pointer'}}>
                <Img className='leftLogo' src={lockLogo} />
                <StPwdInput
                  value={pwdState.value}
                  type={pwdState.isShown ? 'text' : 'password'}
                  name='pwd'
                  placeholder='비밀번호'
                  onChange={onChangeHandler}
                ></StPwdInput>
                {pwdState.value.length === 0 ? null : (
                  <Stack direction='row' onClick={() => dispatch(__showPwd())}>
                    <Img className='check-img-pwd' src={check} />
                    <span className='pwd-alert'>{pwdState.isShown ? '숨기기' : '비밀번호 표시'}</span>
                  </Stack>
                )}
              </Card>
              <Button
                type='submit'
                disabled={!formIsValid}
                mg='1.2rem 0'
                color={`var(--color-white)`}
                background={formIsValid ? `var(--color-primary)` : `var(--color-primary-invalid)`}
              >
                가입
              </Button>
              <Card hg='auto' borderColor='none'>
                <span className='alert'>
                  {!phoneState.isValid && phoneState.value !== ''
                    ? messages.phoneInvalid
                    : isDuplicated && userIdState.value !== ''
                    ? messages.idDuplicate
                    : !userIdState.isValid && userIdState.value !== ''
                    ? messages.idInvalid
                    : ''}
                </span>
              </Card>
            </Stack>
          </form>
        </Wrap>
        {/* <SignUpFooter /> */}
      </Stack>
    </Fragment>
  )
}

export default UserForm

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;

  .intro {
    color: var(--color-light-gray);
  }
  .leftLogo {
    margin: 0 1rem 0 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .rightLogo {
    margin: 0 1rem 0 0.3rem;
    width: 2rem;
    height: 2rem;
  }
  .login {
    font-weight: 600;
    & > span {
      color: var(--color-primary);
    }
    margin: 1rem 0;
  }
  .alert {
    margin: 0 1rem;
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
    color: var(--color-black);
  }
`
const StInput = styled.input.attrs({maxLength: '20'})`
  font-weight: 500;
  :focus {
    outline: none;
  }
  border: none;
  flex-grow: 1;
  margin-right: 0.2rem;
`
const StPwdInput = styled(StInput).attrs({maxLength: '20'})`
  width: 5rem;
  flex-grow: 1;
`
