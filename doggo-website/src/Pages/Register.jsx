import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"

import axios from 'axios'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const toast = useToast()
  const navigate = useNavigate()
 
  const handleSubmit=()=>{
      if(name && email && phone && password){
        const obj={
          name:name,
          email:email,
          phone:phone,
          password:password
        }
        axios.post('http://localhost:8080/sign-up-data',obj)
        .then(()=>{
          toast({
            title: 'Signup in Successfull.',
            description: "Welcome",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position:"top"
          })
          console.log('data submitted succefully')
          navigate('/')
        })
        .catch((e)=>{
          console.log(e,"error")
        })
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
    <Stack spacing={8} mx={'auto'} minW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Sign up
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool features ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="Name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="number" value={phone} onChange={(e)=>{
              setPhone(e.target.value)
            }}/>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }}/>
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleSubmit}
              >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <span><Link to={'/'} ><Text color={'blue.400'}>Login</Text></Link></span>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Register