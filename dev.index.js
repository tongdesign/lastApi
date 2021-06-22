// import https from 'https';
const axios = require('axios') ;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// axios.default.httpsAgent = new https.Agent({
//     rejectUnauthorized: true,
// });


axios.get('https://cvp1.moph.go.th/api/ImmunizationHistory?cid=1409900727635',
    {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyNDQwMTkzNywiZXhwIjoxNjI0NDEyNzM3LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxNC4yMDcuMjAyLjEzIiwic2NvcGUiOlt7ImNvZGUiOiJJTU1VTklaQVRJT05fVklFVzoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1VQREFURToxIn0seyJjb2RlIjoiTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1BFUlNPTl9VUExPQUQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9EQVNIQk9BUkQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUVVPVEE6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9SRVBPUlQ6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9BRUZJX1VQREFURToxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1NMT1RfTUFOQUdFUjoxIn1dLCJyb2xlIjpbIm1vcGgtYXBpIl0sInNjb3BlX2xpc3QiOiJbSU1NVU5JWkFUSU9OX1ZJRVc6MV1bSU1NVU5JWkFUSU9OX1VQREFURToxXVtNT1BIX0FDQ09VTlRfQ0VOVEVSX0FETUlOOjFdW0lNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjFdW0lNTVVOSVpBVElPTl9EQVNIQk9BUkQ6MV1bSU1NVU5JWkFUSU9OX1NMT1Q6MV1bSU1NVU5JWkFUSU9OX1FVT1RBOjFdW0lNTVVOSVpBVElPTl9SRVBPUlQ6MV1bSU1NVU5JWkFUSU9OX1JFUE9SVF9FWENFTDoxXVtJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MV1bSU1NVU5JWkFUSU9OX1NMT1RfTUFOQUdFUjoxXSIsImFjY2Vzc19jb2RlX2xldmVsMSI6IicxMzc3NyciLCJhY2Nlc3NfY29kZV9sZXZlbDIiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsMyI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw0IjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDUiOiInJyJ9fQ.HYAy7YktUoV2PHAOziwiE9cCLLkSMDeuBL90OlJXZZSUXUjPWiUPa--VIQTNCxJdQA_RqdHNjPq03WRzxV7ZvWKBJJ_OvkcyJgTlu-uumw1qN7cXpEoVYqB0PNTLYjhZ99XO7mHZqa_XLR1A6UvFwML2_BUYyl1a0_uNFdqlkh5iV0xncxEXLS2eptXll5T4MyFP2ix5hOs6HlqdiyVYFL0ReGYr7ipWx607P-aRndUBIxXQwcIYkSyn3m58mcPWtF2s-v3fMmnMhFegZYHT0CIx9aGgq125IY99lq9b45r96NOBrypPkJEynjJuARAkmYJiq0fES6wB1P4UaTtEI62iaZg8MtQt_CoICGXa4sDco9ekQ6CgTtt_Q4eE99vpuaZLxSm0InGQho-z1DvRvOFGGaiAq6r5ehgTCbCYd_vwcP7X3OWuXyyeXJaF1T2i9gWWvgk-hSjPHLBAGgCpXlKoYFCNF9-Pg55IY0xTlbyPHmFpFC9Zn-6AVS9DI2gX1QyK43popa8iICfGLiM1PoN45INy_MQXUXztxQwCAwTnoMSJdq9rmIRGaWot3yWhnJm_3RPLuvU_c7p5kCIRu9QnNI9eMVq5UQwYyNZPXqtS0McEIPm-SzT-36DL7x0NLX9mLA13e5C6hhirUPk7JXD1i8pC9R4EFvTP-TTYEkE`
        },
    })
    .then(resp => {
        console.log(resp.data.result.patient);
        console.log('ควยยยยยยยยยยยยยย')
    });

