import React from 'react';
import styled from 'styled-components';

const SubNav = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    width: 100%;
    background: #f9f9f9;
    `;

const SubNavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 10%;
    width: 5%;
    `;

const SubNavIcon = styled.div`
    .img{
        height: 15px;
        width: auto;
    }
`;
const SubNavName = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 12px;

`;




export const Mac = () => 
    <SubNav>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/macbookair__ej39du0gz4uq_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Macbook Air</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/macbook_pro_13__ep96x983izyq_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Macbook Pro 13"</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/macbook_pro_16__ni9nkbyq2dm6_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Macbook Pro 16"</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/imac__dkswmjfqeziq_large.svg'/>
            </SubNavIcon>
            <SubNavName>
             <p>iMac</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/imac_pro__eer4bfwlutme_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>iMac Pro</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
             <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/mac_pro__bn92faz71k6a_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Mac Pro</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/macmini__c6u0it831y0y_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Mac mini</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
                <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Compare</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
             <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg'/>
            </SubNavIcon>
            <SubNavName>
                <p>Pro Display XDR</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
             <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg'/>
            </SubNavIcon>
            <SubNavName>
            <p>Accessories</p>
            </SubNavName>
        </SubNavItems>
        <SubNavItems>
            <SubNavIcon>
             <img src='https://www.apple.com/v/mac/home/am/images/familybrowser/mac_osx__dntc9ef2limq_large.svg'/>
            </SubNavIcon>
            <SubNavName>
             <p>Catalina</p>
            </SubNavName>
        </SubNavItems>
    </SubNav>;

export default Mac;
