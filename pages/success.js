import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { BsBagCheckFill } from "react-icons/bs";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { runFireworks } from '../lib/utility';
import styled from 'styled-components';


const SuccessWrapper = styled.div`
    background-color: white;
    min-height: 60vh;

    @media screen and (max-width:800px){
        min-height: 69vh;
    }
`
const SuccessContainer = styled.div`
    width: 1000px;
    margin: auto;
    margin-top: 160px;
    background-color: #dcdcdc;
    padding: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width:800px){
        width: 370px;
        margin-top: 100px;
        padding: 20px;
        height: 350px;
    }

    h2{
        text-transform: capitalize;
        margin-top: 15px 0px;
        font-weight: 900;
        font-size: 40px;
        color:#324d67;

        @media screen and (max-width:800px){
            font-size: 17px;
        }
    }
    .icon{
        color: green;
        font-size: 40px;
    }
`
const EmailMsg = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-align: center;

`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin: 10px;
    margin-top: 30px;

    .email{
        margin-left: 5px;
        color: #f02d34;
    }

`
const Button = styled.button`
    width: 100%;
    max-width: 400px;
    padding: 10px 12px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    margin-top: 40px;
    text-transform: uppercase;
    background-color: #f02d34;
    color: #fff;
    cursor: pointer;
    transform: scale(1, 1);
    transition: transform 0.5s ease;
    
    &:hover{
        transform: scale(1.1,1.1);
    }
`
const success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();
    const [order,setOrder] = useState(null);
    
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[]);
    return (
        <SuccessWrapper>
            <SuccessContainer>
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>구매가 완료되었습니다!</h2>
                <EmailMsg>메일에서 영수증을 확인하십시오</EmailMsg>
                <Description>
                    궁금한 내용이 있으면 메일을 전송해주세요
                    <a className="email" href="sexy-ehdsud@nate.com">
                    sexy-ehdsud@nate.com
                    </a>
                </Description>
                <Link href="/">
                    <Button type="button" width="300px">
                        계속 쇼핑하기
                    </Button>
                </Link>
            </SuccessContainer>
        </SuccessWrapper>
    );
};

export default success;