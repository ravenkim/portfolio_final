import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Layout from '../../components/layout/Layout';

const Career = () => {
    const mainColor = "#8EA89B"
    const subColor = "#61746A"

    return (
        <>
            <BrowserView>
                <Layout 
                    mainColor={mainColor} 
                    subColor = {subColor}
                    children={
                        <h1>Career</h1>
                    
                    }>
                    
                </Layout>
            </BrowserView>
            <MobileView>
                <h1>아직 준비중 입니다. PC로 봐주세요!</h1>
            </MobileView>
        </>
    )
};

export default Career;