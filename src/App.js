// import './App.css';
// import { Layout, Skeleton } from 'antd';
// import SpaceCard from './components/SpaceCard';
// import { useState, useEffect } from 'react';
// import axios from'axios';
// import { Modal } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
// import NameInput from './components/NameInput';
// import Header from './components/Header';

// function App() {
// const { info } = Modal;
// const { Footer, Content } = Layout;
// const [data, setData] = useState([]);//apod data
// const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
// const nasaApiKey = process.env.REACT_APP_NASA_API_KEY
// const [username, setUsername] = useState("")//username

// //axios config//
// axios.interceptors.request.use(
//   config => {
//     config.params = config.params ? config.params : {}
//     const configUrl = config.url
//     if (configUrl.includes(nasaEndpoint)) {
//       config.params["api_key"] = nasaApiKey
//     }

//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// //function to handle modal actions
// function showPromiseConfirm() {
//   //function to handle onchange event of the input field on modal
//   const handleChange = (e)=>{
//     setUsername(e.target.value)
//   }

//   //info modal//
//   info({
//     title: 'To personalize your experience, enter your name',
//     icon: <ExclamationCircleOutlined />,
//     content: <NameInput handleChange={handleChange}/>,
//     onOk() {
//       localStorage.setItem("username", username)
//     },
//     onCancel() {},
//   });
// }

// //check to see if a username already exists in local storage and if not, show modal
// useEffect(() => {
//   if(localStorage.getItem("username")!==""){
//     axios.get(`${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod?count=25`)
//     .then (
//       async response => {
//         await localStorage.setItem("data", JSON.stringify(response.data))
//         setData(JSON.parse(localStorage.getItem("data")));
//         setUsername(localStorage.getItem("username"))
//       }

//     )
//   } else{
//     showPromiseConfirm();
//     axios.get(`${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod?count=25`)
//     .then (
//       async response => {
//         await localStorage.setItem("data", JSON.stringify(response.data))
//         setData(JSON.parse(localStorage.getItem("data")));
//       }
//     )
//   }
  
// }, [])

//   return (
//     <Layout>
//       {/* <Header style={{color:"#fffffe", fontSize:"20px", position:"fixed", zIndex:"9", width:"100%"}}>
//         {username ? `Hello there, ${username}` : <Skeleton paragraph={{ rows: 0 }}/>}
//       </Header> */}
//       <Header/>
//       <Content>
        
//         <div className="card-flex">
//           {data.map(datum => {
//             return(
//               <SpaceCard 
//                 src={datum.url}
//                 title={datum.title}
//                 description={datum.explanation.substring(0,200) + "..."}
//               />
//             )
//           })}
//         </div>
        
        
//       </Content>
//       <Footer>Footer</Footer>
//     </Layout>
//   );
// }

// export default App;
import React from 'react';
import styled from 'styled-components';
import './App.css'

export default function App() {

  const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: rgba(112, 71, 235, 1);
    width: 100vw;
    height: 100vh;
    padding: 10%;
    color: #ffffff;
    @media (max-width: 500px) {
      padding: 5%;
    };
  `;

  const SearchBox = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    width: 56%;
    margin:auto;
    height: 58px;
    padding: 0px 0px 0px 20px;
    position:relative;
    @media (max-width: 1000px) {
      width: 70%;
      margin-left:20%; 
    };
    @media (max-width: 700px) {
      width: 80%;
    };
    @media (max-width: 500px) {
      width: 80%;
      margin-left:15%; 
    };
  `;

  const Input = styled.input`
    outline-style:none;
    border:none;
    width: 60%;
    height: 58px;
    margin-left:10px;
    background-color: transparent;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 500px) {
      font-size: 12px;
    line-height: 18px;
    };
  `;

  const Button = styled.button`
    background-color: #8862FC;
    color:#ffffff;
    border-radius: 20px;
    width: 20%;
    height: 58px;
    position: absolute;
    right:0;
    border:none;
    outline-style:none;
    cursor:pointer;
    @media (max-width: 350px) {
      font-size: 12px;
    };
  `;

  const IconButton = styled.button`
    background-color: #8862FC;
    color:#ffffff;
    border-radius: 20px;
    height: 58px;
    position: absolute;
    left: 15%;
    border:none;
    outline-style:none;
    padding:0px 20px 0px 20px;
    cursor:pointer;
    @media (max-width: 500px) {
      padding:0px 10px 0px 10px;
      left: 5%;
    };
    @media (max-width: 350px) {
      padding:0px 10px 0px 10px;
      left: 3%;
    };
  `;

  const WeatherBox = styled.div`
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #B9BCF2;
    border-radius: 20px;
    width: 30%;
    margin:auto;
    height: auto;
    padding:20px;
    margin-top: 30px;
    font-weight:500;
    letter-spacing: 0.05em;
    @media (max-width: 1180px) {
      width: 40%;
    };
    @media (max-width: 880px) {
      width: 60%;
    };
    @media (max-width: 750px) {
      width: 70%;
    };
    @media (max-width: 350px) {
      width: 80%;
    };

  `;

  const TextMd = styled.p`
    font-size: 24px;
    line-height: 31px;
    margin-top:10px;
    @media (max-width: 500px) {
      font-size: 22px;
      line-height: 29px;
    };
  `;

  const TextXSm = styled.p`
    font-size: 14px;
    line-height: 18px;
    @media (max-width: 500px) {
      font-size: 12px;
      line-height: 16px;
    };
  `;

  const TextLg = styled.p`
    font-size: 150px;
    line-height: 140px;
    position: relative;
    text-align: center;
    margin-bottom:30px;
    margin-top: 20px;
    @media (max-width: 500px) {
      font-size: 130px;
      line-height: 120px;
    };
  `;

  const TextSup = styled.span`
    font-size: 20px;
    line-height: 26px;
    position: absolute;
    @media (max-width: 500px) {
      font-size: 18px;
      line-height: 24px;
    };
  `;

  const TextLgSup = styled.span`
    font-size: 25px;
    line-height: 33px;
    position: absolute;
    right:8%;
    @media (max-width: 1180px) {
      right:10%;
    };
    @media (max-width: 980px) {
      right:5%;
    };
    @media (max-width: 880px) {
      right:8%;
    };
    @media (max-width: 750px) {
      right:15%;
    };
    @media (max-width: 650px) {
      right:7%;
    };
    @media (max-width: 500px) {
      right:10%;
      font-size: 23px;
      line-height: 31px;
    };
    @media (max-width: 400px) {
      right:5%;
    };
    @media (max-width: 350px) {
      right:0%;
    };
  `;

  const TextSm = styled.p`
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin-bottom:15px;
    @media (max-width: 500px) {
      font-size: 18px;
      line-height: 24px;
    };
  `;

  return (
    <Wrapper>
      <IconButton>
        <svg width="16" height="14" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.56 2.36L13.2 0L0 13.2L13.2 26.4L15.56 24.04L4.72 13.2L15.56 2.36Z" fill="white"/>
        </svg>
      </IconButton>
      <SearchBox>
        <svg width="20" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.14585 0 0 3.14585 0 7C0 10.8541 3.14585 14 7 14C8.748 14 10.345 13.348 11.5742 12.2812L12 12.707V14L18 20L20 18L14 12H12.707L12.2812 11.5742C13.348 10.345 14 8.748 14 7C14 3.14585 10.8541 0 7 0ZM7 2C9.77327 2 12 4.22673 12 7C12 9.77327 9.77327 12 7 12C4.22673 12 2 9.77327 2 7C2 4.22673 4.22673 2 7 2Z" fill="white"/>
        </svg>
        <Input type="text" placeholder="Check for the weather in a location"/>
        <Button>Search</Button>
      </SearchBox>

      <WeatherBox>
        <div className="date-box">
        <svg width="122" height="95" viewBox="0 0 122 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_6_7)">
          <path d="M38.0299 70.3111C38.7354 70.32 45.8844 81.482 45.8844 85.8201C45.8844 87.9032 45.0568 89.901 43.5839 91.374C42.1109 92.847 40.1131 93.6745 38.0299 93.6745C35.9468 93.6745 33.949 92.847 32.476 91.374C31.0031 89.901 30.1755 87.9032 30.1755 85.8201C30.1755 81.482 37.3251 70.3034 38.0299 70.3111Z" fill="#42A0F0"/>
          <path d="M32.0412 88.7562C32.826 88.9962 33.8234 88.0091 34.2691 86.5515C34.7147 85.0939 34.4397 83.7178 33.6549 83.4779C32.8701 83.2379 31.8726 84.225 31.427 85.6826C30.9814 87.1402 31.2563 88.5163 32.0412 88.7562Z" fill="white"/>
          <path d="M81.2299 70.3111C81.9353 70.32 89.0843 81.482 89.0843 85.8201C89.0843 87.9032 88.2568 89.901 86.7838 91.374C85.3108 92.847 83.313 93.6745 81.2299 93.6745C79.1468 93.6745 77.149 92.847 75.676 91.374C74.203 89.901 73.3755 87.9032 73.3755 85.8201C73.3755 81.482 80.5251 70.3034 81.2299 70.3111Z" fill="#42A0F0"/>
          <path d="M75.2411 88.7562C76.0259 88.9962 77.0234 88.0091 77.469 86.5515C77.9146 85.0939 77.6397 83.7178 76.8549 83.4779C76.0701 83.2379 75.0726 84.225 74.627 85.6826C74.1813 87.1402 74.4563 88.5163 75.2411 88.7562Z" fill="white"/>
          <path d="M57.9997 46.9634C58.7051 46.9723 65.8541 58.1343 65.8541 62.4724C65.8541 64.5555 65.0266 66.5533 63.5536 68.0263C62.0806 69.4993 60.0828 70.3268 57.9997 70.3268C55.9166 70.3268 53.9188 69.4993 52.4458 68.0263C50.9728 66.5533 50.1453 64.5555 50.1453 62.4724C50.1453 58.1343 57.2949 46.9557 57.9997 46.9634Z" fill="#42A0F0"/>
          <path d="M52.0109 65.4085C52.7957 65.6485 53.7932 64.6614 54.2388 63.2038C54.6844 61.7462 54.4095 60.3701 53.6246 60.1302C52.8398 59.8902 51.8424 60.8773 51.3967 62.3349C50.9511 63.7925 51.2261 65.1686 52.0109 65.4085Z" fill="white"/>
          </g>
          <g filter="url(#filter1_df_6_7)">
          <g filter="url(#filter2_d_6_7)">
          <path d="M73.3732 72.3566C72.7779 72.4044 72.1768 72.4285 71.5698 72.4289H29.2251C26.3104 72.4398 23.4222 71.8751 20.7262 70.7672C18.0302 69.6593 15.5795 68.03 13.5146 65.9729C11.4497 63.9157 9.81135 61.471 8.69341 58.7792C7.57547 56.0874 7 53.2013 7 50.2865C7 47.3718 7.57547 44.4857 8.69341 41.7939C9.81135 39.102 11.4497 36.6574 13.5146 34.6002C15.5795 32.543 18.0302 30.9138 20.7262 29.8059C23.4222 28.698 26.3104 28.1333 29.2251 28.1441H45.0134C50.132 16.8824 61.9209 9 75.6452 9C94.0664 9 109 23.1992 109 40.7145C109 58.2298 94.0664 72.4289 75.6452 72.4289C74.8816 72.4289 74.1243 72.4048 73.3732 72.3566Z" fill="url(#paint0_linear_6_7)"/>
          <path d="M75.6451 72.121C77.8884 72.121 80.1303 71.9062 82.3084 71.4824C84.4308 71.0694 86.5185 70.4532 88.5134 69.651C90.4718 68.8633 92.3608 67.8885 94.1276 66.7535C95.8775 65.6294 97.523 64.3386 99.0183 62.9168C100.513 61.4953 101.871 59.9311 103.052 58.2679C104.245 56.5891 105.27 54.7945 106.097 52.9339C106.94 51.0393 107.587 49.0567 108.021 47.0411C108.466 44.973 108.692 42.8444 108.692 40.7143C108.692 38.5843 108.466 36.4557 108.021 34.3876C107.587 32.3721 106.94 30.3895 106.097 28.4949C105.27 26.6344 104.245 24.8398 103.052 23.161C101.871 21.4978 100.513 19.9337 99.0183 18.5121C97.523 17.0903 95.8775 15.7995 94.1276 14.6754C92.3608 13.5404 90.4718 12.5656 88.5134 11.778C86.5185 10.9757 84.4308 10.3595 82.3084 9.94657C80.1303 9.52279 77.8884 9.30791 75.6451 9.30791C69.0648 9.30791 62.7099 11.1407 57.2672 14.6081C54.6437 16.2795 52.2862 18.2969 50.2602 20.6044C48.2213 22.9264 46.5503 25.506 45.2934 28.2714L45.2114 28.452H45.0131H29.225C26.2772 28.452 23.4178 29.0292 20.7261 30.1677C19.4324 30.7149 18.1846 31.3922 17.0173 32.1808C15.8611 32.9619 14.7738 33.859 13.7856 34.8472C12.7975 35.8353 11.9004 36.9226 11.1192 38.0788C10.3307 39.2461 9.65338 40.4939 9.10618 41.7876C7.96769 44.4793 7.39043 47.3387 7.39043 50.2865C7.39043 53.2343 7.96769 56.0937 9.10618 58.7854C9.65338 60.0791 10.3307 61.3269 11.1192 62.4942C11.9004 63.6504 12.7975 64.7377 13.7856 65.7258C14.7738 66.714 15.8611 67.6111 17.0173 68.3922C18.1846 69.1808 19.4324 69.8581 20.7261 70.4053C23.4178 71.5438 26.2772 72.121 29.225 72.121H71.5698C72.1619 72.121 72.7603 72.097 73.3485 72.0496L73.3707 72.0478L73.3929 72.0493C74.1379 72.0969 74.8956 72.121 75.6451 72.121ZM75.6451 72.4289C74.8816 72.4289 74.1239 72.4045 73.3733 72.3565C72.7788 72.4044 72.1766 72.4289 71.5698 72.4289H29.225C16.9961 72.4289 7.08252 62.5154 7.08252 50.2865C7.08252 38.0576 16.9961 28.1441 29.225 28.1441H45.0131C50.1319 16.881 61.9201 9 75.6451 9C94.0664 9 109 23.1992 109 40.7143C109 58.2298 94.0664 72.4289 75.6451 72.4289Z" fill="white" fill-opacity="0.5"/>
          </g>
          </g>
          <defs>
          <filter id="filter0_f_6_7" x="28.9439" y="45.7318" width="61.372" height="49.1744" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="0.615815" result="effect1_foregroundBlur_6_7"/>
          </filter>
          <filter id="filter1_df_6_7" x="0.841852" y="0.378592" width="120.474" height="81.9035" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3.07907" dy="0.615815"/>
          <feGaussianBlur stdDeviation="4.61861"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_7"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_7" result="shape"/>
          <feGaussianBlur stdDeviation="0.615815" result="effect2_foregroundBlur_6_7"/>
          </filter>
          <filter id="filter2_d_6_7" x="0.841852" y="0.378592" width="120.474" height="81.9035" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3.07907" dy="0.615815"/>
          <feGaussianBlur stdDeviation="4.61861"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_7"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_7" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_6_7" x1="48.31" y1="16.9921" x2="68.6448" y2="75.8676" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.596"/>
          <stop offset="1" stop-color="#F7F7F7" stop-opacity="0.204"/>
          </linearGradient>
          </defs>
        </svg>
          
        <div style={{marginLeft:"20px"}}>
          <TextMd>Today</TextMd>
          <TextXSm>Mon, 26 Apr</TextXSm>
        </div>
        </div>

        <div>
          <TextLg>28<TextSup>o</TextSup><TextLgSup>C</TextLgSup></TextLg>
        </div>

        <div>
          <TextSm>
          Lagos, Nigeria &nbsp; 
          <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
          </svg>&nbsp;
          2:00 p.m
          </TextSm>
        </div>
      </WeatherBox>

    </Wrapper>
  )
}
