import React, { useState } from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';


const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword ] = useState("")
  const [userData,setUserData] = useState()
  const toast = useToast()
  const navigate = useNavigate()


  axios.get('http://localhost:8080/sign-up-data')
  .then((res)=>{
    setUserData(res.data)
  })
  .catch((e)=>{
    console.log(e)
  })

  const handleSubmit=()=>{
    let login = false
    for(let i in userData){
      if(email===userData[i].email && password===userData[i].password){
        login=true
        let obj=userData[i].id
         console.log(obj)
         localStorage.setItem("token",JSON.stringify(obj))
        break
      }
   }
   if(login===true){
    toast({
        title: 'Logged in Successfull.',
        description: "Welcome",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
      navigate("/home")
   }
   else{
    toast({
        title: 'Login Failed.',
        description: "Please enter correct Details.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
   }
  }


  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link to={'/register'}><Text color={'blue.400'}>Signup</Text></Link>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} onClick={handleSubmit}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Login