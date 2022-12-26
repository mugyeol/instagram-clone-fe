// import React, {useEffect} from 'react'
// import {cake} from '../../assets'
// import {Button, Img, Stack, Wrap} from '../UI'
// import {useState} from 'react'
// import styled from 'styled-components'
// import {range} from '../../utils/utility'
// import {useNavigate} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux'
// import {__submitForm} from '../../store/actions/signup'

// const UserBirth = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const formState = useSelector(state => state.signUp.form)
//   console.log(formState, 'formState')

//   const [birthState, setBirth] = useState({month: '월', date: '일', year: '년도'})
//   const [isBirthValid, setBirthValid] = useState(false)

//   const yearsGroup = range(50, 1960)
//   const monthsGroup = range(12, 1)
//   const datesGroup = range(31, 1)

//   useEffect(() => {
//     if (formState.loginId === '') return navigate('/sign-up')
//     const identifier = setTimeout(() => {
//       setBirthValid(!isNaN(birthState.month) && !isNaN(birthState.date) && !isNaN(birthState.year))
//     }, 50)
//     return () => {
//       clearTimeout(identifier)
//     }
//   }, [birthState, formState.loginId])

//   const onChangeHandler = e => {
//     const {name, value} = e.target
//     setBirth({...birthState, [name]: value})
//   }

//   const onSubmitHandler = () => {
//     const makeZeroNum = num => {
//       if (num > 0 && num < 10) return '0' + num
//       return num
//     }
//     const birth = birthState.year + '.' + makeZeroNum(birthState.month) + '.' + makeZeroNum(birthState.date)
//     dispatch(__submitForm({birthDate: birth}))
//     navigate('/sign-up-agreement')
//   }
//   return (
//     <Fragment>
//       <Wrap>
//         <Stack mg='4rem 0 0'>
//           <Img wd='23.8rem' hg='17rem' src={cake}></Img>
//           <h1>생일추가</h1>
//           <span className='intro_1'>공개 프로필에 포함되지 않습니다.</span>
//           <span className='intro_2'>왜 생일정보를 입력해야 하나요?</span>
//           <Stack gap='1rem' mg='2rem 0 1rem' direction='row'>
//             <Selector name='month' onChange={onChangeHandler}>
//               <option>월</option>
//               {monthsGroup.map((month, index) => (
//                 <option style={{paddingRight: '1rem'}} key={index}>
//                   {month}
//                 </option>
//               ))}
//             </Selector>
//             <Selector name='date' onChange={onChangeHandler}>
//               <option>일</option>
//               {datesGroup.map((date, index) => (
//                 <option key={index}>{date}</option>
//               ))}
//             </Selector>
//             <Selector name='year' onChange={onChangeHandler}>
//               <option>년도</option>
//               {yearsGroup.map((year, index) => (
//                 <option key={index}>{year}</option>
//               ))}
//             </Selector>
//           </Stack>
//           <span>{isBirthValid ? '' : '태어난 날짜를 입력해야합니다'}</span>
//           <Stack mg='4rem 0 2.5rem' gap='0.8rem'>
//             <Button
//               onClick={onSubmitHandler}
//               color={'var(--color-white)'}
//               background={isBirthValid ? 'var(--color-primary)' : 'var(--color-primary-invalid)'}
//               disabled={!isBirthValid}
//             >
//               가입
//             </Button>
//             <Button color='var(--color-primary)' background='var(--color-white)' onClick={() => navigate('/sign-up')}>
//               돌아가기
//             </Button>
//           </Stack>
//         </Stack>
//       </Wrap>
//       {/* <SignUpFooter /> */}
//     </Fragment>
//   )
// }

// export default UserBirth
// const Fragment = styled.div`
//   h1 {
//     font-size: 1.8rem;
//     color: var(--color-black);
//   }
//   span {
//     font-size: 1.4rem;
//   }
//   .intro_2 {
//     color: var(--color-primary);
//   }
// `

// const Selector = styled.select`
//   border-radius: 0.8rem;
//   width: 8.5rem;
//   height: 4rem;
//   color: var(--color-gray);
//   border-color: var(--color-gray);
// `
