// import React, {useEffect, useState} from 'react'
// import {useNavigate} from 'react-router-dom'
// import styled from 'styled-components'
// import {checked, unchecked} from '../../assets'
// import {useDispatch, useSelector} from 'react-redux'
// import {Wrap, Stack, Img, Button, Card} from '../UI'
// import {signUp} from '../../utils/utility'
// import {serverErrors} from '../../dataManager/apiConfig'
// import {__cleanUp} from '../../store/actions/signup'
// const UserAgree = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const formState = useSelector(state => state.signUp.form)
//   const sections = ['이용약관 3개에 모두 동의', '이용약관 (필수)', '데이터 정책 (필수)', '위치 기반 기능 (필수)']
//   const [checkState, setCheckState] = useState(new Array(4).fill(false))
//   const [checkCount, setCheckCount] = useState(0)

//   useEffect(() => {
//     if (formState.loginId === '') return navigate('/sign-up')
//     const interval = setTimeout(() => {
//       setCheckState(prev => {
//         prev[0] = checkCount === 3 ? true : false
//         return [...prev]
//       })
//     }, 40)
//     return () => clearTimeout(interval)
//   }, [checkCount, formState.loginId])

//   const onClickCheckBoxHandler = (index, wasChecked) => {
//     if (index === 0) {
//       setCheckState(prev => {
//         return prev.map(() => {
//           return wasChecked ? false : true
//         })
//       })
//       setCheckCount(wasChecked ? 0 : 3)
//       return
//     }
//     setCheckState(prev => {
//       prev[index] = !prev[index]
//       return [...prev]
//     })
//     setCheckCount(prev => {
//       return wasChecked ? prev - 1 : prev + 1
//     })
//   }

//   const onSubmitHandler = () => {
//     signUp(formState, formState.accessToken !== '')
//       .then(data => {
//         console.log(data)
//         if (serverErrors.includes(data.code)) throw new Error('서버 에러 : 관리자에게 문의해주세요 !')
//         data.code === 1000 ? dispatch(__cleanUp()) && navigate('/login') : alert(data.message)
//       })
//       .catch(err => console.log(err))
//   }
//   return (
//     <Fragment>
//       <Wrap>
//         <Stack mg='4rem 0 0'>
//           <h1>이용 약관에 동의</h1>
//           <span className='intro'>Tnovel은 회원님의 개인정보를 안전하게 보호합니다.</span>
//           <span className='intro'>새 계정을 만드려면 모든 약관에 동의하세요.</span>
//           <Stack mg='2rem 0 0' gap='1rem'>
//             {sections.map((val, index) => (
//               <MyCard
//                 bottomLine={index === 0 && '0.5px solid var(--color-subtle-gray)'}
//                 wd='36rem'
//                 key={index}
//                 direction='row'
//               >
//                 <Stack gap='0.5rem' align='flex-start' className='agreeContainer'>
//                   <span className='section'>{val}</span>
//                   {index === 0 ? null : <span className='section-detail'>더 알아보기</span>}
//                 </Stack>
//                 <div onClick={() => onClickCheckBoxHandler(index, checkState[index])}>
//                   {checkState[index] ? (
//                     <Img wd='2rem' hg='2rem' src={checked} />
//                   ) : (
//                     <Img wd='2rem' hg='2rem' src={unchecked} />
//                   )}
//                 </div>
//               </MyCard>
//             ))}
//           </Stack>
//           <Stack mg='4rem 0 2.5rem' gap='0.8rem'>
//             <Button
//               onClick={onSubmitHandler}
//               color={'var(--color-white)'}
//               background={checkCount === 3 ? 'var(--color-primary)' : 'var(--color-primary-invalid)'}
//               disabled={checkCount !== 3}
//             >
//               가입
//             </Button>
//             <Button
//               color='var(--color-primary)'
//               background='var(--color-white)'
//               onClick={() => navigate('/sign-up-birth')}
//             >
//               돌아가기
//             </Button>
//           </Stack>
//         </Stack>
//       </Wrap>
//       {/* <SignUpFooter /> */}
//     </Fragment>
//   )
// }

// export default UserAgree
// const Fragment = styled.div`
//   h1 {
//     font-size: 1.8rem;
//     color: var(--color-black);
//     margin-bottom: 2.5rem;
//   }
//   .intro {
//     font-size: 1.4rem;
//   }
//   .agreeContainer {
//     flex-grow: 1;
//   }
//   .section {
//     color: var(--color-black);
//   }
//   .section-detail {
//     color: var(--color-primary);
//   }
// `
// const MyCard = styled(Card)`
//   border: none;
//   border-bottom: ${({bottomLine}) => bottomLine || 'none'};
//   width: 36rem;
//   border-radius: 0;
// `
